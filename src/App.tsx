import { useEffect, useState } from "react";
import QRCode from "qrcode";
import "./App.css";

function App() {
  const [date, setDate] = useState<Date>(new Date());

  useEffect(() => {
    setInterval(() => {
      setDate(new Date());
      const time = new Date().toLocaleTimeString().toLowerCase();
      const canvas = document.getElementById("canvas");
      QRCode.toCanvas(canvas, time, function (error) {
        if (error) console.error(error);
        console.log("success!");
      });
    }, 1000);
  }, []);

  return (
    <>
      <div className="marquee">
        <p>scan to view the time</p>
      </div>
      <main className="grid place-content-center h-screen w-screen bg-purple-950 gap-4">
        <h1 className="text-white bold">the crappy</h1>
        <div className="flex flex-col gap-2 items-center">
          <canvas id="canvas" className="mix-blend-lighten"></canvas>
          <span className="hidden">{date.toLocaleTimeString().toLowerCase()}</span>
        </div>
        <h1 className="text-white bold w-full text-right">chronometer</h1>
      </main>
    </>
  );
}

export default App;
