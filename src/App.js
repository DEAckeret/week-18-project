import NavbarBs from "./components/navbarBs";
import Blog from "./components/blog";
import Header from "./components/header";
import Newsletter from "./components/newsletter";
import { Link } from "react-router-dom"; 
import SideNav from "./components/SideNav";


function App() {
  return (
    <>
    <Header />
    <Blog />
    <SideNav />
    </>
  );
}

export default App;
