import {useState} from 'react'

const Bulb = () => {
  const [light, setLight] = useState("OFF");
  const lightButtonFunc = () => {
    if (light === "OFF") {
      setLight("ON");
    } else {
      setLight("OFF");
    }
  }

  let styleColor = 'gray';
  let isOnString = 'OFF';

  if (light === 'ON') {
    styleColor = 'orange';
    isOnString = 'ON';
  }

  return (
      <div>
        <h1 style={{backgroundColor: styleColor}}>{isOnString}</h1>
        <button onClick={lightButtonFunc}>{light === 'ON' ? '끄기' : '켜기'}</button>
      </div>
  );
};

export default Bulb;