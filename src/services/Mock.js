import {UserMainData, UserActivity, UserAverageSessions, UserPerformance } from "../data/data"
import {mainData, activityData, averageSessionsData, performanceData} from "./ModelisationData"

/**
 * retrieve the mocked data and create a new class
 * @param {number} id 
 * @returns new class data
 */

function getUserMainData(id) {
    console.log(UserMainData)
    const data = UserMainData.find(value => value.id.toString() === id);
    const userMain = new mainData(data);
    return userMain;
}

function getUserActivity(id) {
    const data = UserActivity.find (value => value.userId.toString() === id);   
    const userActivity = new activityData(data);
    return userActivity;
}

function getUserAverageSessions(id) {
    const data = UserAverageSessions.find (value => value.userId.toString() === id);
    const userSessions = new averageSessionsData(data);
    return userSessions;
    ;
}
function getUserPerformance(id) {
    const data = UserPerformance.find (value => value.userId.toString() === id);
    const userPerformance = new performanceData(data);
    return userPerformance;
}

/**
 * Retrieve data 
 * @param {number} id 
 * @returns promise
 */

const getData = async (id) => {
    const data = getUserMainData(id)
    data.activity = getUserActivity(id)
    data.sessions = getUserAverageSessions(id)
    data.performance = getUserPerformance(id)
    return data
}

export default getData