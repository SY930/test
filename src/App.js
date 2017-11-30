import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { renderRoutes, routesMap } from 'routes'
import { ConnectedRouter} from 'react-router-redux'

class App extends Component {
  static propTypes = {
    store: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
  }
  render() {
    const { store, history } = this.props
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <div>
            {renderRoutes(routesMap)}
          </div>
        </ConnectedRouter>
      </Provider>
    )
  }
}

export default App;
