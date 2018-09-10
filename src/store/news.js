import {
    LOAD_ALL_NEWS_REQUEST,
    LOAD_ALL_NEWS_SUCCESS,
    LOAD_ALL_NEWS_ERROR
} from '../constants'

import { List, Record } from 'immutable'

export const NewsRecord = Record({
    news: List([]),
    loading: false,
    loaded: false,
    error: null
})

export default (state = new NewsRecord(), action) => {
    const {type, payload} = action

    switch (type) {

        case LOAD_ALL_NEWS_REQUEST:
            return state.set('loaded', true)
        case LOAD_ALL_NEWS_SUCCESS:
            return state.update('news', news => news.concat(List(payload.news)))
                    .set('loading', false)
                    .set('loaded', true)
        case LOAD_ALL_NEWS_ERROR:
            return state.set('error', payload.error.message)
                        .set('loaded', false)

        default:
            return state
    }
}