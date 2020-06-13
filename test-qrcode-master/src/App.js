import React from 'react';
import QRCode from 'qrcode.react'

function App() {
  return (
    <div className="App">

      {/*<QRCode value="27" fgColor="black" includeMargin={true} renderAs="svg" level="H"  size={250} bgColor="white"></QRCode>*/}


      {/*<QRCode value="8" fgColor="black" includeMargin={true} renderAs="svg" level="H"  size={250} bgColor="white"></QRCode>*/}
      {/*<QRCode value="9" fgColor="black" includeMargin={true} renderAs="svg" level="H"  size={250} bgColor="white"></QRCode>*/}
      <QRCode value="11" fgColor="black" includeMargin={true} renderAs="svg" level="H"  size={250} bgColor="white"></QRCode>
      <QRCode value="12" fgColor="black" includeMargin={true} renderAs="svg" level="H"  size={250} bgColor="white"></QRCode>
      <QRCode value="15" fgColor="black" includeMargin={true} renderAs="svg" level="H"  size={250} bgColor="white"></QRCode>
    </div>
  );
}

export default App;
