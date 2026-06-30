import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";
import ConfigurationPage from "./pages/ConfigurationPage";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardPage />}/>
        <Route path="configuration" element={<ConfigurationPage />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
