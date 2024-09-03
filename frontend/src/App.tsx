import { BrowserRouter, Routes, Route } from "react-router-dom"
import { HomePage } from "./pages/homePage"
import { InfoPage } from "./pages/InfoPage"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<HomePage />} />
        <Route path="/devInfo" element={<InfoPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
