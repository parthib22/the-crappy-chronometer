import { useEffect, useState } from 'react'
import QRCode from 'qrcode';
import './App.css'

function App() {
  const [date, setDate] = useState<Date>(new Date());

  useEffect(() => {
    setInterval(() => {
      setDate(new Date());
      const time = new Date().toLocaleTimeString().toLowerCase();
      const canvas = document.getElementById('canvas');
      QRCode.toCanvas(canvas, time, function (error) {
        if (error) console.error(error)
        console.log('success!');
      })

    }, 1000);
  }, []);

  return (
    <main className='grid place-content-center h-screen w-screen bg-blue-700'>
      <div className='flex flex-col gap-2 items-center'>
        <canvas id="canvas" className='mix-blend-lighten'></canvas>
        {/* {date.toLocaleTimeString().toLowerCase()} */}
      </div>
    </main>
  )
}

export default App
