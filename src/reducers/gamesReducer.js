const initalState = {
    popular: [],
    newGames: [],
    upcoming: [],
    searched: [],
}

const gamesReducer = (state = initalState,action) => {

    switch(action.type) {

        case "FETCH_GAMES":
            return {...state, 
                popular: action.payload.popular,
                upcoming: action.payload.upcoming,
                newGames: action.payload.newest,
            };
        case "FETCH_SEARCHED":
            return {...state,
                searched: action.payload.searched,
            }
        case "CLEAR_SEARCHED":
            return {
                ...state,
                searched: []
            }    
        default:
            return state;
    }

}

export default gamesReducer