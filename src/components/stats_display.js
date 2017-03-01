import React from 'react';

const StatsDisplay = ({title, stats, count}) => {
  if (stats != null) {
    return (
      <div>
        <p>{title}</p>
        <p>{stats[count]}</p>
      </div>
    )
  }
  else {
    return null;
  }
}

export default StatsDisplay;
