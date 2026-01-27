import { useState } from "react";

export default function () {
  const [deviceNameInputValue, setdeviceNameInputValue] = useState("");
  const [devices, setDevices] = useState([
    "iphone",
    "mac",
    "samsung",
    "windows",
  ]);
  const devicesList = devices.map((device, index) => {
    return <li key={index}>{device}</li>;
  });

  function handleAddClick() {
    /*
    const newDevices = [...devices];
    newDevices.push(deviceNameInputValue);
    setDevices(newDevices);
*/
    setDevices([...devices, deviceNameInputValue]);
  }
  //console.log(devicesList);
  return (
    <div>
      <h3>{devicesList}</h3>
      <div>
        <input
          value={deviceNameInputValue}
          onChange={(event) => {
            setdeviceNameInputValue(event.target.value);
          }}
        />
        <button onClick={handleAddClick}> add</button>
      </div>
    </div>
  );
}
