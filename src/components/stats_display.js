import React   from 'react';

const StatsDisplay = ({title, stats, count}) => {
  if (stats != null) {
    return (
      <div>
        <p>{title}</p>
        <p>{stats[count].toString().replace(/(\d)(?=(\d{3})+$)/g, '$1 ')}</p>
      </div>
    )
  }
  else {
    return null;
  }
}

export default StatsDisplay;
