from flask import Flask, render_template, jsonify
from flask_socketio import SocketIO, emit
from mpdwrapper import MPDWrapper, CurrentSong, Status, Playlist
import json

app = Flask(__name__, static_folder='./dist/static', template_folder='./dist')
socketio = SocketIO(app, async_mode='threading', cors_allowed_origins="*")

# Constants
HOST = 'localhost'
PORT = 6600
NAMESPACE = '/api'

# Connect to MPD client
mpd = MPDWrapper(HOST, PORT)

# Start background threads for real time information form MPD
currentsong = CurrentSong(HOST, PORT, socketio, NAMESPACE)
status = Status(HOST, PORT, socketio, NAMESPACE)
playlist = Playlist(HOST, PORT, socketio, NAMESPACE)
if not currentsong.task:
    t1 = socketio.start_background_task(currentsong.currentsong)
if not status.task:
    t2 = socketio.start_background_task(status.status)
if not playlist.task:
    t3 = socketio.start_background_task(playlist.playlist)


@socketio.on('connect', namespace=NAMESPACE)
def on_connect():
    print('Client connected')

    # Load current track data
    with open('./api/playing.json', 'r') as f:
        playing = json.load(f)
    socketio.emit('song', playing, namespace='/api')

    # Load playlists data
    with open('./api/playlist.json', 'r') as f:
        playlist = json.load(f)
    socketio.emit('playlists', mpd.get_playlists(), namespace='/api')
    socketio.emit('playlist', playlist, namespace='/api')

@socketio.on('disconnect', namespace='/api')
def on_disconnect():
    print('Client disconnected')

@socketio.on('mpdtoggle', namespace=NAMESPACE)
def on_toggle():
    mpd.toggle()

@socketio.on('mpdnext', namespace=NAMESPACE)
def on_next():
    mpd.next()

@socketio.on('mpdprevious', namespace=NAMESPACE)
def on_previous():
    mpd.previous()

@socketio.on('mpdloadplaylist', namespace=NAMESPACE)
def on_playlist_change(data):
    mpd.load(data)

@app.route('/api/library/')
def library():
    with open('./api/library.json', 'r') as f:
        library = json.load(f)
    return jsonify(library)

@app.route('/api/playing/')
def playing():
    with open('./api/playing.json', 'r') as f:
        playing = json.load(f)
    return jsonify(playing)

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def catch_all(path):
    return render_template('index.html')

if __name__ == '__main__':
    socketio.run(app, debug=True)
