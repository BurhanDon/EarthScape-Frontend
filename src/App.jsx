import Home from "./Components/Home.jsx";
import Navbar from "./Components/Navbar.jsx";
import About from "./Components/About.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Weather from "./Components/Weather.jsx";
import Footer from "./Components/Footer.jsx";
import Login from "./Components/Login.jsx";
import SignUp from "./Components/SignUp.jsx";
import axios from "axios";
import { Toaster } from "react-hot-toast";
import ProtectedRoute from "./Components/protectedRoute.jsx";
import ModelMl from "./Components/ModelMl.jsx";
import DecisionTree from "./Components/DecisionTree.jsx";
import LinearRegression from "./Components/LinearRegression.jsx";
import RandomForest from "./Components/RandomForest.jsx";
import DataInsight from "./Components/DataInsight.jsx";
import Dashboard1 from "./Components/Dashboard1.jsx";
import Dashboard2 from "./Components/Dashboard2.jsx";

axios.defaults.baseURL = "http://localhost:8000";
axios.defaults.withCredentials = true;

function App() {
  return (
    <Router>
      <Toaster position="bottom-right" toastOptions={{ duration: 2000 }} />
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/decisiontree" element={<DecisionTree />} />
          <Route path="/linearregression" element={<LinearRegression />} />
          <Route path="/randomforest" element={<RandomForest />} />
          <Route path="/datainsight" element={<DataInsight />} />
          <Route path="/dashboard1" element={<Dashboard1 />} />
          <Route path="/dashboard2" element={<Dashboard2 />} />
          <Route
            path="/mlmodel"
            element={
              <ProtectedRoute>
                <ModelMl />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
      <Footer />
    </Router>

    //  <Weather/>
    // <Login/>
    // <SignUp/>
    // <Dashboard1/>
  );
}

export default App;
