import Footer from "../components/footer/Footer"
import Navbar from "../components/navbar/Navbar"
import { Outlet } from "react-router-dom";
import "./layout.css";

const MainLayout = () => {
  return (
    <div className="main-layout">
      <Navbar />
      <main className="main-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default MainLayout