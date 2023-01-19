import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer} from 'recharts';
import PropTypes from 'prop-types'

/**
 * Name the different performance categories
 * @param {object} kind 
 * @returns string ou null
 */


function namePerf(kind){
    switch(kind){
        case 1 : return "Cardio";
        case 2 : return "Energy";
        case 3 : return "Endurance";
        case 4 : return "Strength";
        case 5 : return "Speed";
        case 6 : return "Intensity";
        default : return null;
    }
}

/**
 * Display performance of a user
 * @component
 * @param {array} userPerformance - array datas performance
 * @returns component Rechart
 */

const Performance = ({userPerformance}) => {
    return (
            <ResponsiveContainer   >
                
                <RadarChart margin={{ top: 30, right: 30, bottom: 30, left: 70 }} style={{backgroundColor: "#282D30",borderRadius: "5px"}}  data={userPerformance} >

                    <PolarGrid radialLines={false} />

                    <PolarAngleAxis dataKey="kind" tickFormatter={namePerf} tickLine={false} axisLine={false} dy={5} stroke="#FFF" tick={{fill:"#FFFFFF",fontSize:12}}  />

                    <PolarRadiusAxis tick={false} tickCount={6} axisLine={false} />

                    <Radar  dataKey="value"  fill="#FF0101" fillOpacity={0.6} />

                </RadarChart>
            </ResponsiveContainer>
    );
};

export default Performance;

Performance.propTypes = {
    userPerformance: PropTypes.array
}