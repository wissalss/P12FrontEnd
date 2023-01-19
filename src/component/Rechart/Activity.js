import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import PropTypes from 'prop-types'

/**
 * Description : 
 * @param {boolean}  [Props.active='true']
 * @param {array}   [Props.payload=[]]
 * @returns an active tooltip or null
 */

const CustomTooltip=({active, payload})=>{
  if (active) {
      return (
          <div className="customTooltip">
              <p className="tooltipData">{`${payload[0].value} `}g</p>
              <p className="tooltipData">{`${payload[1].value} `}Kcal</p>
          </div>
      );
  }
  return null;
}

/**
 * Display daily kilogram and calorie result of a user
 * @component
 * @param {array} userActivity - array datas sessions/activity 
 * @returns component Rechart
 */


const Activity = ({userActivity}) => {
  return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart 
               data={userActivity}
               margin={{
                 top: 80,
                 right: 50,
                 left: 45,
                 bottom: 20,
               }}
               barSize={7}
               barGap={8} 
               >

            <CartesianGrid strokeDasharray="1"  vertical={false}/>

            <XAxis className='activityXAxis'dataKey="day" tickLine={false}  stroke=" #DEDEDE" tick={{fill:"#9B9EAC", fontWeight:500, fontSize:14}} padding={{ left: -47, right: -48 }} tickMargin={16} />
            {/*concerne les dates*/}

            <YAxis tickLine={false} orientation="right" axisLine={false} tick={{fill:"#9B9EAC", fontWeight:500, fontSize:14}} tickMargin={45} minTickGap={27}/>
            {/*concerne les valeurs y*/}

            <Tooltip   content={<CustomTooltip /> }  
            wrapperStyle={{
                color: "#FFF",
                background: "red",
                border: "none",
                outline: "none",
                width: "70px",
                height: "85px",
                textAlign: "center",
                lineHeight: "2.5",
            }}
            />

            <Legend className='activityLegend' verticalAlign='top' align='right' iconType={"circle"} iconSize={8} width={277} height={25} wrapperStyle={{ top: 35, right: 20 }}  
            formatter={(value) => {
            return <span style={{ color: "#74798C", fontSize:14, fontWeight:500}}>{value}</span>;}}/>
            {/*concerne les légendes*/}

            <Bar dataKey="kilogram" name="Poids (kg)"fill="#282D30" radius={[3, 3, 0, 0]} />
            {/*concerne les barres des kilos*/}

            <Bar dataKey="calories" name="Calories brulées (kCal)" fill="#E60000" radius={[3, 3, 0, 0]}/>
            {/*concerne les barres des calories*/}

            <text className='graphTitle' x="4%" y="15%" width={147} height={48}   fill="#20253A" style={{ fontWeight:500}} > Activité quotidienne </text>
            {/*concerne le titre*/}
        </BarChart>
      </ResponsiveContainer>
  )
}

export default Activity;


Activity.propTypes = {
    userActivity: PropTypes.array
}