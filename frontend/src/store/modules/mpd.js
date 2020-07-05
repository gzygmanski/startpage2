const state = {
  song: {
    artist: 'none',
    title: 'none'
  },
  mpdStatus: {},
  playlists: null,
  playlist: null,
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
  SOCKET_CONNECT: () => {
    console.log('Client connected')
  },
  SOCKET_DISCONNECT: () => {
    console.log('Client disconnected')
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
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}