import React from 'react';

const CurrentLoveDisplay = ({profile}) => {
  if (profile !== null) {
    var current_love = profile.current_love

    if (current_love[2] != null) {
      return (
        <div className="profile">
          <div className="card">
            {/* <p className="fancy">inhale love from</p> */}
            <p>{current_love[0].name}</p>
            <p className="fancy in">in</p>
            <p>{current_love[0].city}, {current_love[0].country}</p>
          </div>

          <div>
            <p><i className="fa fa-heart fancy" aria-hidden="true"></i></p>
            <p><i className="fa fa-heart fancy" aria-hidden="true"></i></p>
            <div className="distance">
              {Math.round(current_love[1].distance_from_last_city)}<span> KM</span>
            </div>
            <p><i className="fa fa-heart fancy" aria-hidden="true"></i></p>
            <p><i className="fa fa-heart fancy" aria-hidden="true"></i></p>
          </div>

          <div>to YOU in {current_love[1].city}</div>

          <div>
            <p><i className="fa fa-heart fancy" aria-hidden="true"></i></p>
            <p><i className="fa fa-heart fancy" aria-hidden="true"></i></p>
            <div className="distance">
              {Math.round(current_love[2].distance_from_last_city)}<span> KM</span>
            </div>
            <p><i className="fa fa-heart fancy" aria-hidden="true"></i></p>
            <p><i className="fa fa-heart fancy" aria-hidden="true"></i></p>
          </div>
            <div className="card">
              {/* <p className="fancy">inhale love from</p> */}
              <p>{current_love[2].name}</p>
              <p className="fancy in">in</p>
              <p>{current_love[2].city}, {current_love[2].country}</p>
            </div>
        </div>
      )
    }
    else {
      return (
        <div className="profile">
          <div className="card">
            {/* <p className="fancy">inhale love from</p> */}
            <p>{current_love[0].name}</p>
            <p className="fancy in">in</p>
            <p>{current_love[0].city}, {current_love[0].country}</p>
          </div>

          <div>
            <p><i className="fa fa-heart fancy" aria-hidden="true"></i></p>
            <p><i className="fa fa-heart fancy" aria-hidden="true"></i></p>
            <div className="distance">
              {Math.round(current_love[1].distance_from_last_city)}<span> KM</span>
            </div>
            <p><i className="fa fa-heart fancy" aria-hidden="true"></i></p>
            <p><i className="fa fa-heart fancy" aria-hidden="true"></i></p>
          </div>

          <div>to YOU in {current_love[1].city}</div>
        </div>
      )
    }
  }
  else {
    return null;
  }

}

export default CurrentLoveDisplay;
