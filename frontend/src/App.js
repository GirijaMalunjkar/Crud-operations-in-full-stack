import Navbar from "./Component/navbar";
import { Route, Routes } from "react-router-dom";
import RegistrationForm from "./Component/registration"
import LoginForm from "./Component/login"

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<RegistrationForm />} />
          <Route path="/login" element={<LoginForm />} />
        </Routes>
      </div>
    </>
  )
}

export default App