import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import ProjectDetails from "./pages/ProjectDetails";
import NotFound from "./pages/NotFound";


function App(){
  return(
    <>
      <Navbar /> 

      <Routes>
        <Route path="/" element = {<Home/>}/>
        <Route path="/about" element = {<About/>}/>
        <Route path="/projects" element = {<Projects/>}/>
        <Route path="/contact" element = {<Contact/>}/>
         <Route path="projects/:id" element = {<ProjectDetails/>}/>
        <Route path="*" element = {<NotFound/>}/>
       
      </Routes>
    </>
  );
}
 export default App;
