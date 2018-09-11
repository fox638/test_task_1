import {combineReducers} from 'redux'
import {reducer as form} from 'redux-form'
import news from './news'
import auth from './auth'

export default combineReducers({
    news,
    form,
    auth
})