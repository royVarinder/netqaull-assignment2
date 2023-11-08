import logo from './logo.svg';
import './App.css';
import { LandingPage } from './LandingPage';
import { Image } from './Image';
import { Route, Routes, useNavigate } from "react-router-dom";

function App() {

  return (
    <>
      <Routes>
        {/* This component will show the all images */}
        <Route exact path='/' element={<LandingPage />} />
        {/* This component will show single image by id  */}
        <Route exact path="/:imageId" element={<Image />} />
      </Routes>
    </>

  );
}

export default App;
