import {mainData, activityData, averageSessionsData, performanceData} from "./ModelisationData"
const url = "http://localhost:3000";

/**
 * retrieve data 
 * @param {number} id 
 * @returns promise
 */

export const getUserMainData = async (id) => {
  return fetch(`${url}/user/${id}`)
};

/**
 * retrieve data 
 * @param {number} id 
 * @returns promise
 */

export const getUserActivity = async (id) => {
  return fetch(`${url}/user/${id}/activity`)
};

/**
 * retrieve data 
 * @param {number} id 
 * @returns promise
 */

export const getUserAverageSessions = async (id) => {
  return fetch(`${url}/user/${id}/average-sessions`)
};

/**
 * retrieve performance data 
 * @param {number} id 
 * @returns promise
 */

export const getUserPerformance = async (id) => {
  return fetch(`${url}/user/${id}/performance`)
   
};

const getData = async (id) => {
  const result = await (await getUserMainData(id)).json()
  const data = new mainData(result.data)
  
  const activity =  await (await getUserActivity(id)).json()
  data.activity = new activityData (activity.data)
  
  const session = await (await getUserAverageSessions(id)).json()
  data.sessions = new averageSessionsData (session.data)

  const performance = await (await getUserPerformance(id)).json()
  data.performance = new performanceData (performance.data)
  return data
}

export default getData

