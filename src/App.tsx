import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import VideoComp from "./components/VideoComp"
import Pop from "./components/Pop"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/room/:roomID" element={<VideoComp />}></Route>
        <Route path="/pop" element={<Pop />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App