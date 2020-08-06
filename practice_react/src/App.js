import React from 'react';
import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css';
// import Users from './Users';

const App = () => {
  return (
    <div>
      <input
        type="text"
        onKeyUp={(e) => {
          if (e.keyCode !== 13) return;

          console.log('blabla');
        }}
      />
    </div>
  );
};

export default App;
