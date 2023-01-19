import React from 'react';
import { RadialBarChart, RadialBar,  PolarAngleAxis, ResponsiveContainer } from 'recharts';
import PropTypes from 'prop-types'

/**
 * Display of a user's score as a percentage
 * @component
 * @param {number} userMain/todayScore - datas scores
 * @returns component  Rechart
 */

const Score = ({userMain}) => {

    return (
        <ResponsiveContainer  >

          <RadialBarChart cx="50%" cy="50%" style={{backgroundColor: "#fbfbfb", borderRadius: "5px"}} width="100%" height="100%" innerRadius={85}  barSize={10} data={userMain} startAngle={80} endAngle={450} >

            <PolarAngleAxis type='number' domain={[0, 100]} angleAxisId={1} tick={false}/>

            <RadialBar  background dataKey="uv" angleAxisId={1} fill="#ff0101" cornerRadius="10" data={[userMain[0]]} />
            

            <text className='scoreSize' fontWeight="700" fontSize={26} fill='#282D30' x="50%" y="45%" textAnchor='middle'>{`${userMain}%`}</text>

            <text className='graphTitle' fontWeight="500"  fill='#74798C' x="50%" y="55%" textAnchor='middle'>de votre</text>

            <text className='graphTitle' fontWeight="500"  fill='#74798C' x="50%" y="65%" textAnchor='middle'>objectif</text>

            <text className='graphTitle' x="8%" y="15%" width={147} height={48}  dominantBaseline="middle"  fill="#20253A" style={{ fontWeight:500}} >
            Score </text>

          </RadialBarChart>
        </ResponsiveContainer>
    );
};

export default Score;

Score.propTypes = {
  userMain: PropTypes.number
}