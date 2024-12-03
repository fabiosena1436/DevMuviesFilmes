import api from "./api"

export async function getMovies() {
    const {
        data: { results }
    } = await api.get('/movie/popular')

    return results[1]

}

export async function getTopMovies() {
    const {
        data: { results }
    } = await api.get('/movie/top_rated')

    return results

}

export async function getTopSeries() {
    const { data: { results }
    } = await api.get('/tv/top_rated')
    return results

}

export async function getPopularSeries() {
    const { data: { results }
    } = await api.get('/tv/popular')

    return results

}

export async function getAiringTodaySeries() {
    const { data: { results }
    } = await api.get('/tv/on_the_air')

    return results

}
export async function getsetNowPlayingr() {
    const {
        data: { results }
    } = await api.get('/movie/now_playing')
    return results

}

export async function getPersonPopular() {
    const {
        data: { results }
    } = await api.get('/person/popular')

    return results

}


//  Busca um filme plo ID
export async function getMovieVideos(movieId) {
    const {
        data: { results }
    } = await api.get(`/movie/${movieId}/videos`)

    return results

}


export async function getMovieCreditis(movieId) {
    const { data: { cast } } = await api.get(`/movie/${movieId}/credits`)

    return cast

}

export async function getMovieSimilar(movieId) {
    const {
        data: { results }
    } = await api.get(`/movie/${movieId}/similar`)

    return results

}

export async function getMovieById(movieId) {
    const { data } = await api.get(`/movie/${movieId}`)

    return data

}


//  Busca um serie plo ID

export async function getTvSeriesById(seriesId) {
  const { data } = await api.get(`/tv/${seriesId}`)
  return data
}

export async function getTvSeriesVideos(seriesId) {
  const {
      data: { results }
  } = await api.get(`/tv/${seriesId}/videos`)
  return results
}

export async function getTvSeriesCredits(seriesId) {
  const { data: { cast } } = await api.get(`/tv/${seriesId}/credits`)
  return cast
}

export async function getTvSeriesSimilar(seriesId) {
  const {
      data: { results }
  } = await api.get(`/tv/${seriesId}/similar`)
  return results
}