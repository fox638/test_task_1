import {
    LOAD_ALL_NEWS_ERROR,
    LOAD_ALL_NEWS_REQUEST,
    LOAD_ALL_NEWS_SUCCESS,
    USER_SIGN_IN,
    USER_LOGOUT
} from '../constants'

import {toast} from 'react-toastify'
import {push} from 'connected-react-router'

const url = 'https://newsapi.org/v2/top-headlines?' +
          'country=ru&' +
          'apiKey=0354c12528c84f48a046eac17253dd4f';
const req = new Request(url);


export function loadAllNews(){
    return (dispatch) => {
        dispatch({
            type: LOAD_ALL_NEWS_REQUEST
        })
        fetch(req)
        .then(function(response) {
            return response.json()
            
        })
        .then(function(rezult){
            dispatch({
                type: LOAD_ALL_NEWS_SUCCESS,
                payload:{
                    news: rezult.articles
                }
            })
        })
    }
}

export function SignIn (login, password) {
    return dispatch => {
        if(login === 'Admin' && password === '12345'){
            toast.success('Логин и пароль верный')
            localStorage.setItem('auth', true)
            dispatch({
                type:USER_SIGN_IN
            })
            dispatch(push('/profile'))
        }
    }
}

export function Logout () {
    return dispatch => {
        localStorage.removeItem('auth')
        dispatch({
            type: USER_LOGOUT
        })
    }
}