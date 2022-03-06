import request from '../../request'

export function topRated(params) {
    return request({
        url: `${process.env.VUE_APP_BASE_API}/movie/top_rated`,
        method: "GET",
        params: params
    })
}
export function upcoming(params) {
    return request({
        url: `${process.env.VUE_APP_BASE_API}/movie/upcoming`,
        method: "GET",
        params: params
    })
}

export function popular(params) {
    return request({
        url: `${process.env.VUE_APP_BASE_API}/movie/popular`,
        method: "GET",
        params: params
    })
}
export function nowPlaying(params) {
    return request({
        url: `${process.env.VUE_APP_BASE_API}/movie/now_playing`,
        method: "GET",
        params: params
    })
}


export function trending(params) {
    return request({
        url: `${process.env.VUE_APP_BASE_API}/trending/movie/week`,
        method: "GET",
        params: params
    })
}
export function getDetail(params) {
    return request({
        url: `${process.env.VUE_APP_BASE_API}/movie/${params.id}`,
        method: "GET",
        params: params
    })
}

