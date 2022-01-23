import axios from "axios";
import { popularGamesUrl, newGamesUrl, upcomingGamesUrl, searchGameURL } from "../api";

export const loadGames = () => async (dispatch) => {
    const popularGamesData = await axios.get(popularGamesUrl());
    const upcomingGamesData = await axios.get(upcomingGamesUrl());
    const newestGameData = await axios.get(newGamesUrl());
    dispatch({
        type:"FETCH_GAMES",
        payload: {
            popular: popularGamesData.data.results,
            upcoming: upcomingGamesData.data.results,
            newest: newestGameData.data.results
        }
    })
}

export const fetchSearch = (game_name) => async(dispatch) => {
    const searchGames = await axios.get(searchGameURL(game_name));

    dispatch({
        type: "FETCH_SEARCHED",
        payload: {
            searched: searchGames.data.results
        }
    })
}