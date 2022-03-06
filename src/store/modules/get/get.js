/* eslint-disable prettier/prettier */
import { topRated, trending, popular, nowPlaying, upcoming, getDetail } from "../../api/get/get"

const state = {
    data: []
}

const mutations = {
    SET_DATA: (state, data) => {
        state.data = data
    },
}

const actions = {
    topRated({ commit, state }, payload) {
        return new Promise((resolve, reject) => {
            topRated(payload)
                .then(response => {
                    if (!response) {
                        reject("Gagal mengambil data")
                    } else {
                        resolve(response)
                    }
                })
                .catch(error => {
                    console.log("read(): error: " + error)
                    resolve(error)
                })
        })
    },
    getDetail({ commit, state }, payload) {
        return new Promise((resolve, reject) => {
            getDetail(payload)
                .then(response => {
                    if (!response) {
                        reject("Gagal mengambil data")
                    } else {
                        resolve(response)
                    }
                })
                .catch(error => {
                    console.log("read(): error: " + error)
                    resolve(error)
                })
        })
    },
    upcoming({ commit, state }, payload) {
        return new Promise((resolve, reject) => {
            upcoming(payload)
                .then(response => {
                    if (!response) {
                        reject("Gagal mengambil data")
                    } else {
                        resolve(response)
                    }
                })
                .catch(error => {
                    console.log("read(): error: " + error)
                    resolve(error)
                })
        })
    },
    nowPlaying({ commit, state }, payload) {
        return new Promise((resolve, reject) => {
            nowPlaying(payload)
                .then(response => {
                    if (!response) {
                        reject("Gagal mengambil data")
                    } else {
                        resolve(response)
                    }
                })
                .catch(error => {
                    console.log("read(): error: " + error)
                    resolve(error)
                })
        })
    },
    popular({ commit, state }, payload) {
        return new Promise((resolve, reject) => {
            popular(payload)
                .then(response => {
                    if (!response) {
                        reject("Gagal mengambil data")
                    } else {
                        resolve(response)
                    }
                })
                .catch(error => {
                    console.log("read(): error: " + error)
                    resolve(error)
                })
        })
    },
    trending({ commit, state }, payload) {
        return new Promise((resolve, reject) => {
            trending(payload)
                .then(response => {
                    if (!response) {
                        reject("Gagal mengambil data")
                    } else {
                        resolve(response)
                    }
                })
                .catch(error => {
                    console.log("read(): error: " + error)
                    resolve(error)
                })
        })
    },
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}
