import {
    LOAD_ALL_NEWS_ERROR,
    LOAD_ALL_NEWS_REQUEST,
    LOAD_ALL_NEWS_SUCCESS
} from '../constants'

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