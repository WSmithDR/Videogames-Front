import axios from "axios"
import { CREATE_VIDEOGAME, GET_DEFAULT_VIDEOGAMES, GET_GENRES, GET_PLATFORMS, RENDER_VIDEOGAMES, SEARCH_VIDEOGAME_BY_NAME, SET_CURRENT_PAGE, SET_ITEMS_PER_PAGE } from "./types"

const endpoint = `http://localhost:3001`
const vdgEndpoint = `${endpoint}/videogames`

export const getVideogamesByDefault = () => {
    return async (dispatch) => {
        try {
            const {data} = await axios(vdgEndpoint)
            return dispatch(
                {
                    type: GET_DEFAULT_VIDEOGAMES,
                    payload: data
                }
            )
        } catch (error) {
            return error.message
        }
    }
} 

export const createVideogame = (videogame) => {
    return async (dispatch) => {
        try {
            const {data} = await axios.post(vdgEndpoint, videogame)
            dispatch(
                {
                    type: CREATE_VIDEOGAME,
                    payload: data
                }
            )
        } catch (error) {
            
            return error.message
        }
    }
}


export const setCurrentPage = page => {
    return {
        type: SET_CURRENT_PAGE,
        payload: page
    }
}


export const setItemsPerPage = itemsPerPage => {
    return {
        type: SET_ITEMS_PER_PAGE,
        payload: itemsPerPage
    }
}


export const renderVideogames = (filter, order) => {
    return {
        type: RENDER_VIDEOGAMES,
        payload: {filter, order}
    }
}


export const searchVideogameByName = name => {
   try {
        return async dispatch => {
            const {data} = await axios(`${vdgEndpoint}?name=${name}`)
            dispatch({
                type: SEARCH_VIDEOGAME_BY_NAME,
                payload: data
            })
        }
   } catch (error) {
        return error.message
   }
}

export const getGenres = () => {
    try {
         return async dispatch => {
             const {data} = await axios(`${endpoint}/genres`)
             const names = data.map((item) => item.name)
             dispatch({
                 type: GET_GENRES,
                 payload: names
             })
         }
    } catch (error) {
         return error.message
    }
}

export const getPlatforms = () => {
    try {
         return async dispatch => {
             const {data} = await axios(`${endpoint}/platforms`)
             const names = data.map((item) => item.name)
             dispatch({
                 type: GET_PLATFORMS,
                 payload: names
             })
         }
    } catch (error) {
         return error.message
    }
}