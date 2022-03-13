import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import registerServiceWorker from './registerServiceWorker'
import CreateRouter from './router'

ReactDOM.render(<CreateRouter />, document.getElementById('root'))
registerServiceWorker()
