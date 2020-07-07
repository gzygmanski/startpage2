from mpd import MPDClient
from flask_socketio import SocketIO, emit
import json


class MPDWrapper():
    def __init__(self, host, port, timeout=10):
        self.host = host
        self.port = port
        self.timeout = timeout
        self._client = MPDClient()
        self._connect()
        self._set_library()

    def __str__(self):
        return self._client.mpd_version

    def __bool__(self):
        return True

    def _connect(self):
        self._client.timeout = self.timeout
        self._client.connect(self.host, self.port)

    def _set_library(self):
        with open('api/library.json', 'r') as f:
            self.library = json.load(f)

    def disconnect(self):
        try:
            self._client.close()
            self._client.disconnect()
        except ConnectionError:
            pass

    def update_library(self):
        self._client.update()
        with open('api/library.json', 'w') as f:
            json.dump(self._client.listall(), f, indent=2)
            self._set_library()

    def get_playlists(self):
        return self._client.listplaylists()

class CurrentSong(MPDWrapper):
    def __init__(self, host, port, socket, namespace, timeout=10):
        MPDWrapper.__init__(self, host, port, timeout)
        self.socket = socket
        self.namespace = namespace
        self.task = False

    def currentsong(self):
        self.task = True
        while True:
            data = self._client.currentsong()
            with open('api/playing.json', 'w') as f:
                json.dump(data, f, indent=2)
            self.socket.emit('song', data, namespace=self.namespace)
            self._client.idle('player', 'sticker')

class Status(MPDWrapper):
    def __init__(self, host, port, socket, namespace, timeout=10):
        MPDWrapper.__init__(self, host, port, timeout)
        self.socket = socket
        self.namespace = namespace
        self.task = False

    def status(self):
        self.task = True
        while True:
            data = self._client.status()
            if data['state'] != 'stop':
                time = data['time'].split(':')
                data['progress'] = (int(time[0]) * 100) / int(time[1])
            else:
                data['progress'] = 0
            self.socket.emit('status', data, namespace=self.namespace)
            self.socket.sleep(.25)

class Playlist(MPDWrapper):
    def __init__(self, host, port, socket, namespace, timeout=10):
        MPDWrapper.__init__(self, host, port, timeout)
        self.socket = socket
        self.namespace = namespace
        self.task = False

    def playlist(self):
        self.task = True
        while True:
            data = self._client.playlistinfo()
            with open('api/playlist.json', 'w') as f:
                json.dump(data, f, indent=2)
            self.socket.emit('playlist', data, namespace=self.namespace)
            self._client.idle('playlist')
