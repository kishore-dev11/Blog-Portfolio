import Home from "./components/Home";
import Blogs from "./components/Blogs";
import Navbar from "./components/common/Navbar";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import About from "./components/About";

function App() {
  return (
    <BrowserRouter>
      <div className=" bg-white  rounded-md">
        <Navbar />

        <Routes>
          {/* Default Route */}
          <Route path="/" element={<Home />} />

          {/* Pages */}
          <Route path="/home" element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/about" element={<About />} />

          {/* 404 Page */}
          <Route path="*" element={<h1>404 - Page Not Found</h1>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;