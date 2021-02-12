import {createStore, combineReducers} from 'redux'

import produtos from './reducer/produtos'

const store = createStore(combineReducers({
    produtos
}))

export default store