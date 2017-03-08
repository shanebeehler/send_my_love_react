import React      from 'react';
import ReactSwipe from 'react-swipe';

const Welcome = (props) => {

  return (
    <div className="welcome">
      <div className="copy-background">
        <ReactSwipe className="carousel" swipeOptions={{continuous: false}}>
          <div>
            Share your name and location. Receive the name and location of last person who sent love.
          </div>
          <div>
            And eventually the name and location of the person after you.
          </div>
          <div>PANE 3</div>
        </ReactSwipe>
      </div>
    </div>
  );
}

export default Welcome;
