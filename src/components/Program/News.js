import React from 'react'
import styled from 'styled-components'
import {connect} from 'react-redux'
import {loadAllNews} from '../../ac'
import {Card, CardBody, Button, CardTitle, CardText, CardImg} from 'reactstrap'

class News extends React.Component {
    componentDidMount(){
        this.props.loadAllNews && !this.props.loaded && this.props.loadAllNews()
    }
    render(){
        if(this.props.loading) return <h2>Loading</h2>

        return <ul>{this.getNews()}</ul>
    }

    getNews = () => {
        return this.props.news.map((item, index) => (
            <Card key={index}>
                <CardBody>
                    <CardTitle>{item.title}</CardTitle>
                    <CardText>{item.description}</CardText>
                    <CardText>
                        <small>{`Опубликовано ${item.publishedAt}`}</small>
                    </CardText>
                {item.urlToImage?  <CardImg bottom width="50px" src={item.urlToImage} /> : null }
                </CardBody>
               
            </Card>
        ))
    }
}

export default connect((state)=>({
    loading:state.news.loading,
    loaded:state.news.loaded,
    news:state.news.news
}), {loadAllNews})(News)