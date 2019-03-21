import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom';
import Landing from './containers/landing/landing';
import App from './App';

class Routes extends Component {
  render() {
    
    return (
      <div>
        <BrowserRouter>
          <div>
            <Switch>
              <Route exact path="/" component={Landing} />
              <Route exact path="/smarties" component={App} />
              <Redirect to="/" />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}


const mapStateToProps = state => {
  return {
    pdp: state.pdp
  };
};


export default connect(
  mapStateToProps,
  null
)(Routes);