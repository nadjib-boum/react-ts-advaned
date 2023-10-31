import { ColorBox, ColorOptions } from "./components";
import { useGameplay } from "./hooks";



function App() {

  const { correctColor, colorOptions } = useGameplay();

  return (
   <div className="container" style={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
    <div className='game-board' style={{ border: "1px solid #AAA", width: "400px" }}>
      <ColorBox color={correctColor} />
      <ColorOptions colors={colorOptions} />
    </div>
   </div>
  )
}

export default App
