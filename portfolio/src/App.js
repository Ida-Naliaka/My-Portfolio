import { Navigate, Route, Routes } from "react-router-dom";
import "./App.scss";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Dashboard from "./components/Dashboard";
import Portfolio from "./components/Portfolio";
import Layout from "./components/Layout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/idawafula" />}/>
          <Route path="/idawafula" element={<Layout />}>
            <Route index element={<Home />} />
          <Route exact path="about" element={<About />} />
          <Route exact path="contact" element={<Contact />} />
          <Route exact path="portfolio" element={<Portfolio />} />
          <Route exact path="dashboard" element={<Dashboard />} />
        </Route>
         <Route path="*" element={
              <div>
                <h2>404 Page not found</h2>
              </div>
            }
          />
      </Routes>
    </>
  );
}

export default App;
