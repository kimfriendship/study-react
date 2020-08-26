import React, { useState } from 'react';
import Slider from 'rc-slider';

const Range = Slider.createSliderWithTooltip(Slider.Range);

const Handle = () => {
  return (
    <button>
      <path d="M32 96v64h448V96H32zm0 128v64h448v-64H32zm0 128v64h448v-64H32z"></path>
    </button>
  );
};

function App() {
  const [value, setValue] = useState([12000, 1000000]);
  const onChange = () => setValue(value);
  return (
    <Range
      min={12000}
      max={1000000}
      allowCross={false}
      defaultValue={[12000, 1000000]}
      onChange={onChange}
      style={{
        width: '500px',
        height: '2px',
        background: 'red',
        margin: '5rem',
        position: 'relative',
      }}
      handle={<Handle />}
      handleStyle={{
        width: '20px',
        height: '20px',
        background: 'green',
        position: 'absolute',
        top: '-9px',
        borderRadius: '50%',
        // path: 'M32 96v64h448V96H32zm0 128v64h448v-64H32zm0 128v64h448v-64H32z',
      }}
    ></Range>
  );
}

export default App;
