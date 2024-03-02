import { useState } from "react"

function App() {
  const [color, setColor] = useState("#000")

  return (
    <>
     <div className="w-full h-screen" style={{backgroundColor: color}}>

      <div className="fixed flex flex-wrap justify-center top-8 inset-x-0 px-9">hi
      
      <div className="fixed flex flex-wrap gap-4 justify-center px-8 py-2 bg-slate-400 rounded-3xl shadow-lg">
      <button onClick={()=>setColor("red")} className="outline-none rounded-full px-4 py-1" style={{backgroundColor: "red"}}>Red</button>
      <button onClick={()=>setColor("Green")} className="outline-none rounded-full px-4 py-1" style={{backgroundColor: "Green"}}>Green</button>
      <button onClick={()=>setColor("Blue")} className="outline-none rounded-full px-4 py-1" style={{backgroundColor: "Blue"}}>Blue</button>
      <button onClick={()=>setColor("Pink")} className="outline-none rounded-full px-4 py-1" style={{backgroundColor: "Pink"}}>Pink</button>
      <button onClick={()=>setColor("Orange")} className="outline-none rounded-full px-4 py-1" style={{backgroundColor: "Orange"}}>Orange</button>
      <button onClick={()=>setColor("Purple")} className="outline-none rounded-full px-4 py-1" style={{backgroundColor: "purple"}}>purple</button>
      
      
      
      </div>
      </div>
     </div>

    </>
  )
}

export default App
