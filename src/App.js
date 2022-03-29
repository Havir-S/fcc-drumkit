import React from 'react';

import './App.scss';

function App() {
  return (
    <div className="App">
      <div className='wrapper' id='drum-machine'>
        <div className='buttons' id='display'>
          <div className='button drum-pad'>
            <div>1</div>
            <audio controls autoPlay hidden>

            </audio>
          </div>
          <div className='button drum-pad'><div>1</div></div>
          <div className='button drum-pad'><div>1</div></div>
          <div className='button drum-pad'><div>1</div></div>
          <div className='button drum-pad'><div>1</div></div>
          <div className='button drum-pad'><div>1</div></div>
          <div className='button drum-pad'><div>1</div></div>
          <div className='button drum-pad'><div>1</div></div>
          <div className='button drum-pad'><div>1</div></div>
        </div>

        <div className='options'>
          <div className='powerBox'>
            <p>Power</p>
            <div className='powerSwitch'>
            <label className='switch'>
              <input type='checkbox' />
              <span className='slider'></span>
            </label>
            </div>
          </div>
          <div className='textBox'>
            <div className='textContent'>
            Volume
            </div>
          </div>

          <div className='volumeBox'>
            <div className='volumeSlider'>
            <input type='range'min='0'max='100'  className='slider' id='slider'/>
            </div>
          </div>

          <div className='bankBox'>
            <p>Bank</p>
            <div className='bankSwitch'>
            <label className='switch'>
              <input type='checkbox' />
              <span className='slider'></span>
            </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
