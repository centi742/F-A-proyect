import { BrowserRouter,Route,Routes } from "react-router-dom";
import List from "./pages/list";
import About from "./pages/about";
import Home from "./pages/home";
import Layout from "./components/Layout"
import Footers from "./components/footer";
import "./css/body.css";
function App() {
  return (
    <>
    <BrowserRouter>
        <Layout/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/list" element={<List/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
      <Footers/>
    </BrowserRouter>
     
    </>
  );
}

export default App;
