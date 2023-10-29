import { useState } from 'react'
import { ComponentProps } from "react";

const Button = ({ children, ...props }: ComponentProps<"button">) => {
    return <button {...props}>{ children }</button>
} 

function App() {
  const [count, setCount] = useState(0)

  return (
   <main>
    <Button onClick={() => alert()}>ss</Button>
   </main>
  )
}

export default App
