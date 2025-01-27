import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import VideoComp  from "./components/VideoComp"


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/video" element={<VideoComp />}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App