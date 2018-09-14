import React, { Component } from 'react';
import styled, {ThemeProvider} from 'styled-components'
import Nav from './components/Partials/Nav'
import {Route, Switch} from 'react-router-dom'
import News from './components/Program/News'
import SignInForm from './components/User/SignInForm'
import {themeMain} from './theme/global'
import {connect} from 'react-redux'
import {SignIn} from './ac'
import ProtectedRouter from './common/ProtectedRouter'

//Toast
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const PageWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`
const MainWrapper = styled.div`
  flex:1 0 auto;
`
const Profile = () => <h2>Личный кабинет</h2>

class App extends Component {
  render() {
    return (
      <div>
        <ThemeProvider theme={themeMain}> 
         <PageWrapper> 
          <Nav/>
          <MainWrapper> 
             <Switch> 
            <Route path="/news" component={News}/>
            <Route path="/auth/signin" render={()=> <SignInForm onSubmit={this.handleSignIn}/>}/>
            <ProtectedRouter path="/profile" component={Profile} />
             </Switch> 
           </MainWrapper> 
         <ToastContainer hideProgressBar={true} autoClose={2500}/> 
         </PageWrapper> 
       </ThemeProvider> 

      </div>
      
      
      
    );
  }

  handleSignIn = ({username, password}) => this.props.SignIn(username, password)
}

export default connect(null, {SignIn}, null, {pure: false} )(App);
