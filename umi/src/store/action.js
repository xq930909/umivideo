
const defaultstate={
    url: ''
}

export default (state = defaultstate, action) =>{
    let newstate = {...state}

    switch(action.type){
        case 'add':
            newstate.url = action.value
        return newstate
        default:
        return newstate
    }
}