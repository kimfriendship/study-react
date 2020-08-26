import React, { useState } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const Range = Slider.createSliderWithTooltip(Slider.Range);

const Handle = () => {
  return (
    <button>
      <path d="M32 96v64h448V96H32zm0 128v64h448v-64H32zm0 128v64h448v-64H32z"></path>
    </button>
  );
};

function App() {
  const [state, setState] = useState({ value: [12000, 1000000] });
  const [input, setInput] = useState({
    min: 12000,
    max: 1000000,
  });
  const onChange = (e) => {
    setState(state);
    console.log(state);
    setInput({ min: state.value[0], max: state.value[1] });
  };
  const onSetInput = (e) => {
    if (e.target.id === 'min') {
      setInput({ ...input, min: e.target.value });
      setState([e.target.value, state.value[1]]);
    } else {
      setInput({ ...input, max: e.target.value });
      setState([state.value[0], e.target.value]);
    }
  };
  return (
    <div>
      <label htmlFor="min">MIN</label>
      <input
        type="text"
        id="min"
        value={input.min}
        onChange={(e) => onSetInput(e)}
      />
      <label htmlFor="max">MAX</label>
      <input
        type="text"
        id="max"
        value={input.max}
        onChange={(e) => onSetInput(e)}
      />
      <Range
        min={12000}
        max={1000000}
        // value={state.value}
        allowCross={false}
        defaultValue={[12000, 1000000]}
        onChange={onChange}
        tipFormatter={(value) => <span className="tooltip">{value}€</span>}
        // tipFormatter={(value) => ''}
        style={{
          width: '500px',
          margin: '5rem',
          // height: '2px',
          // position: 'relative',
          // overflow: 'hidden',
          // background: 'red',
        }}
        handle={<Handle />}
        // handleStyle={{
        //   width: '20px',
        //   height: '20px',
        //   background: 'green',
        //   position: 'absolute',
        //   top: '-9px',
        //   borderRadius: '50%',
        //   path: 'M32 96v64h448V96H32zm0 128v64h448v-64H32zm0 128v64h448v-64H32z',
        // }}
      />
    </div>
  );
}

export default App;
