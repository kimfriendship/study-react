import React, { useState, useRef } from 'react';
import Slider from 'rc-slider';
import './index.css';

const Range = Slider.createSliderWithTooltip(Slider.Range);

const Handle = () => {
  return (
    <button>
      <path d="M32 96v64h448V96H32zm0 128v64h448v-64H32zm0 128v64h448v-64H32z"></path>
    </button>
  );
};

function App() {
  const valueRef = useRef();
  const [state, setState] = useState({ value: [12000, 1000000] });
  const [input, setInput] = useState({
    min: 12000,
    max: 1000000,
  });
  const onChange = (e) => {
    setState(state);
    setInput({ min: e[0], max: e[1] });
  };
  const onSetInput = (e) => {
    if (e.target.id === 'min') {
      setInput({ ...input, min: e.target.value });
      setState({ value: [e.target.value, state.value[1]] });
    } else {
      setInput({ ...input, max: e.target.value });
      setState({ value: [state.value[0], e.target.value] });
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
        allowCross={false}
        defaultValue={[12000, 1000000]}
        onChange={onChange}
        tipFormatter={(value) => ''}
        tipProps={{ visible: false }}
        style={{
          width: '500px',
          margin: '5rem',
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
