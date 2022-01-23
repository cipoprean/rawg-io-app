//Base URL
const base_url = "https://api.rawg.io/api/";
const api_key = "31de6157d92d4f59a18ca5705757f9e9";

//Getting the date
const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};
//Getting the date
const getCurrentDay = () => {
  const day = new Date().getDate();
  if (day < 10) {
    return `0${day}`;
  } else {
    return day;
  }
};
 
//Current day/month/year
const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

//construct api url/s
const popular_games = `games?key=${api_key}&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;
const upcoming_games = `games?key=${api_key}&dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;
const newGames = `games?key=${api_key}&dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;

//gameDetalis
export const gameDetailsUrl = (game_id) => `${base_url}games/${game_id}?key=${api_key}`;
export const gameScreenshotsUrl = (game_id) => `${base_url}games/${game_id}/screenshots?key=${api_key}`;

//export api urls
export const popularGamesUrl = () => `${base_url}${popular_games}`;
export const upcomingGamesUrl = () => `${base_url}${upcoming_games}`;
export const newGamesUrl = () => `${base_url}${newGames}`;
//searched game
export const searchGameURL = (game_name) => `${base_url}games?key=${api_key}&search=${game_name}&page_size=9`;