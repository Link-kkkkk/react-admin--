import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  // Switch
} from 'react-router-dom'
import App from './../pages/App'; 

const routes = [
  {
    path: '/',
    getComponent(nextState, cb) {
      require.ensure([], (require) => {
        cb(null, require('./../pages/App').default);
      }, 'App');
    }
  },
]

// const MainRouter = () => (
//   <Router>
//     {/* <Route exact path="/" component={App} /> */}
//     <Route path="/" component={App} />
//   </Router>
// )

export default routes