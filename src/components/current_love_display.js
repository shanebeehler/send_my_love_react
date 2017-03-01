import React from 'react';

const CurrentLoveDisplay = ({profile}) => {
  if(profile !== null) {
    var current_love = profile.current_love

    if(current_love[2] != null) {
      return (
        <div className="profile">
          <div>
            <p className="fancy">inhale love from</p>
            <p>{current_love[0].name}</p>
            <p className="fancy">in</p>
            <p>{current_love[0].city}, {current_love[0].country}</p>
          </div>

          {/* <div>
            {Math.round(current_love[0].distance_from_last_city)}
          </div> */}

          <div>
            <p className="fancy">exhale love to</p>
            <p>{current_love[0].name}</p>
            <p className="fancy">in</p>
            <p>{current_love[0].city}, {current_love[0].country}</p>
          </div>
        </div>
      )
    }
    else {
      return (
        <div className="profile">
          <div>
            <p className="fancy">inhale love from</p>
            <p>{current_love[0].name}</p>
            <p className="fancy">in</p>
            <p>{current_love[0].city}, {current_love[0].country}</p>
          </div>

          <div>
            <p className="fancy">exhale love to</p>
            <p>the rest of the world</p>
          </div>
        </div>
      )
    }
  }
  else {
    return null;
  }

}

export default CurrentLoveDisplay;
