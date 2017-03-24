import React   from 'react';
import CountUp from 'react-countup';

const StatsDisplay = ({title, stats, count}) => {
  if (stats != null) {
    return (
      <div>
        <p>{title}</p>
        <p>  <CountUp start={0} end={stats[count]} duration={3} /></p>
      </div>
    )
  }
  else {
    return null;
  }
}

export default StatsDisplay;
