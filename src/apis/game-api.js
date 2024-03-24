import axios from "axios"

const getUpcomingGames = async (league, date)=>{
    const res = await axios.get(`https://www.espn.com/${league}/schedule/_/date/${date}?_xhr=pageContent&refetchShell=false&offset=-10%3A00&date=${date}`)
    const data = await res.data.events;
    return data
}

export {getUpcomingGames};