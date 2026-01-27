import React from "react";

export default function () {
  const devices = ["Iphone", "mac", "samsung", "windows"];
  const devicesList = devices.map((device) => {
    return <li>{device}</li>;
  });
  return (
    <div>
      <h1></h1>
    </div>
  );
}
