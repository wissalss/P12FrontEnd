import React from 'react'
import './Dashboard.css'
import { useParams, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import Activity from "../../component/Rechart/Activity"
import Sessions from "../../component/Rechart/Sessions"
import Performance from "../../component/Rechart/Performance"
import Score from "../../component/Rechart/Score"
import Calories from "../../assets/calories.png"
import Proteines from "../../assets/proteines.png"
import Glucides from "../../assets/glucides.png"
import Lipides from "../../assets/lipides.png"

// import getData from "../../services/Mock"
import getData from "../../services/Api"

/**
 * 
 * Dashboard page with User data 
 * @returns Dashboard include components ( Rechart )
 */

function Dashboard() {
    const {id} = useParams()
    const navigate = useNavigate()
    const [userMain, setUserMain] = useState()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getData(id)
            .then(data => {
                if (typeof data !== "undefined") {
                    setUserMain(data)

                }else{
                    navigate("/Error")
                }
                setLoading(false)
            })

            .catch(error => console.log("erreur données id", error))
    },
    [id])

  return (
    
    <div className='Dashboard'>
        { loading  ?
            <p>En cours de chargement </p>
        : (
            <div>
            <div className='Welcome'>
                <h1>Bonjour <span className='Welcome-name'>{userMain.firstName}</span></h1>
                <p>Félicitation! Vous avez explosé vos objectifs hier 👏</p>
            </div>

            <div className='Grafiques'>
                <section className='left-section'>
                    <div className='Activity'>
                        <Activity userActivity={userMain.activity.sessions}/>
                    </div>
                    <div className='Recap'>
                        <div className='Sessions'>
                            <Sessions userSessions={userMain.sessions.sessions}/>
                        </div>
                        <div className='Performance'>
                            <Performance userPerformance={userMain.performance.data}/>
                        </div>
                        <div className='Score'>
                            <Score userMain={userMain.todayScore*100}/>
                        </div>

                    </div>

                </section>
                <section className='right-section'>
                    <div className='calories'>
                        <img src={Calories} alt=''/>
                        <div className='info'>
                            <h3>{userMain.calorie}kCal</h3>
                            <p>Calories</p>
                        </div>
                    </div>

                    <div className='proteines'>
                        <img src={Proteines} alt=''/>
                        <div className='info'>
                            <h3>{userMain.proteine}g</h3>
                            <p>Proteines</p>
                        </div>
                    </div>

                    <div className='glucides'>
                        <img src={Glucides} alt=''/>
                        <div className='info'>
                            <h3>{userMain.glucide}g</h3>
                            <p>Glucides</p>
                        </div>
                    </div>

                    <div className='lipides'>
                        <img src={Lipides} alt=''/>
                        <div className='info'>
                            <h3>{userMain.lipide}g</h3>
                            <p>Lipides</p>
                        </div>
                    </div>

                </section>
            </div>
        </div>
      )} 
    </div>
  )
}


export default Dashboard
