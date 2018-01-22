import React from 'react'
import Toolbar from './components/Toolbar'
import MessageList from './components/MessageList'
import Compose from './components/Compose'
import { connect } from 'react-redux'
import { Router, Route, IndexRoute } from 'react-router'
import { createHashHistory } from 'history';

const history = createHashHistory();

const PrimaryLayout = props => (
  <div className="primary-layout">
    <Toolbar />
    <main>
      {props.children}
    </main>
    <MessageList />
  </div>
)
const App = () => (
  <Router history={ history }>
    <PrimaryLayout>
      <Route path="/compose" component={Compose} />
    </PrimaryLayout>
  </Router>
)

const mapStateToProps = state => ({
  items: state.items.all,
  products: state.products,
})

const mapDispatchToProps = () => ({})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
