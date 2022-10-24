import { createStore, applyMiddleware } from 'redux'
import todoApp from '../reducers'
import {
    logger,
    crashReporter
} from './middleware'

const store = createStore(
    todoApp,
    applyMiddleware(logger, crashReporter)
)

export default store