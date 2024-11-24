import { useState } from "react"
import Button from "../components/Button"

const App = () => {
    const [show, setShow] = useState(true)
    const onChange = () => {
        setShow(!show)
    }
  return (
    <div>
        <Button onClick={onChange} type = "Primary">{show ? "1" : "2"}</Button>
        
        {
            show ? "Vagif teacher is the best!":" ItInnovations is the best!"
        }
    </div>
  )
}

export default App