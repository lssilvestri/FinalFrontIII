import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Outlet } from "react-router-dom";
import { useDentStates } from "../Context/Context";
import "./Layout.css";

const Layout = () => {
  const { state } = useDentStates();

  return (
    <div className={`layout ${state.theme === "dark" ? "dark-theme" : "light-theme"}`}>
      <header>
        <Navbar />
      </header>
      <main className="content">
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
