import React, { Component } from 'react'
import {Route, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'

class ProtectedRouter extends Component {
  render() {
    const {component, ...rest} = this.props
    return <Route {...rest} render={this.renderProtection} />
  }

  renderProtection = (routeProps) => {
    const {component: ProtectedComponent, authorized} = this.props

    return authorized ? <ProtectedComponent {...routeProps}/> : <Redirect to="/auth/signin"/>
  }
}

export default connect(state=>({
  authorized: !!state.auth.auth
}), null, null, {pure: false})(ProtectedRouter)