// React
import React from 'react'
import { render } from 'react-dom'

// Redux
import { Provider } from 'react-redux'

// Material UI dependencies
import injectTapEventPlugin from 'react-tap-event-plugin'

// Store configuration
import configureStore from './store/configureStore'

// Components
import App from './components/App'

const store = configureStore({});

// This function is required by material-ui
injectTapEventPlugin()

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)