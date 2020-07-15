const state = {
  song: {
    artist: 'none',
    title: 'none'
  },
  mpdStatus: {},
  playlists: null,
  playlist: null,
  playlistName: '',
  isConnected: false
}

const getters = {
  currentSong: (state) => state.song,
  mpdStatus: (state) => state.mpdStatus,
  playlists: (state) => state.playlists,
  playlist: (state) => state.playlist,
  connection: (state) => state.isConnected
}

const actions = {
  next () {
    this._vm.$socket.client.emit('mpdnext')
  },
  previous () {
    this._vm.$socket.client.emit('mpdprevious')
  },
  toggle () {
    this._vm.$socket.client.emit('mpdtoggle')
  },
  loadPlaylist ({commit}, playlistName) {
    commit('getPlaylistName', playlistName)
    this._vm.$socket.client.emit('mpdloadplaylist', state.playlistName)
  }
}

const mutations = {
  SOCKET_CONNECT: (state) => {
    state.isConnected = true
  },
  SOCKET_DISCONNECT: (state) => {
    state.isConnected = false
  },
  SOCKET_SONG: (state, data) => {
    state.song = data
  },
  SOCKET_STATUS: (state, data) => {
    state.mpdStatus = data
  },
  SOCKET_PLAYLISTS: (state, data) => {
    state.playlists = data
  },
  SOCKET_PLAYLIST: (state, data) => {
    state.playlist = data
  },
  getPlaylistName: (state, name) => (state.playlistName = name)
}

export default {
  state,
  getters,
  actions,
  mutations
}
