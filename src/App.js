import React, { Component } from 'react';
import styled from 'styled-components'
import Nav from './components/Partials/Nav'
import {Route} from 'react-router-dom'
import News from './components/Program/News'

const PageWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`
const MainWrapper = styled.div`
  flex:1 0 auto;
`

class App extends Component {
  render() {
    return (
      <PageWrapper>
        <Nav/>
        <MainWrapper>
          <Route path="/news" component={News}/>

        </MainWrapper>
        
      </PageWrapper>
      
    );
  }
}

export default App;
