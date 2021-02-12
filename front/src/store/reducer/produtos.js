const INITIAL_STATE = {
    dados: []
}

function produtos(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'EXIBIR':
            return {dados: action.payload}
        default:
            return state
    }
}

export default produtos