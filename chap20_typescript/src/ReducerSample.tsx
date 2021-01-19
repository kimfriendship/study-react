import React from 'react';
import { useState, useDispatch } from './practice/ContextSample';

function ReducerSample() {
  const state = useState();
  const dispatch = useDispatch();

  const setCount = () => dispatch({ type: 'SET_COUNT', count: 5 });
  const setText = () => dispatch({ type: 'SET_TEXT', text: 'bye' });
  const setColor = () => dispatch({ type: 'SET_COLOR', color: 'pink' });
  const toggleGood = () => dispatch({ type: 'TOGGLE_GOOD' });

  return (
    <>
      <div>
        <p>
          <code>count: </code> {state.count}
        </p>
        <p>
          <code>text: </code> {state.text}
        </p>
        <p>
          <code>color: </code> {state.color}
        </p>
        <p>
          <code>isGood: </code> {state.isGood ? 'GOOD' : 'BAD'}
        </p>
      </div>
      <button onClick={setCount}>SET COUNT</button>
      <button onClick={setText}>SET TEXT</button>
      <button onClick={setColor}>SET COLOR</button>
      <button onClick={toggleGood}>TOGGLE GOOD</button>
    </>
  );
}

export default ReducerSample;
