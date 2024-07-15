import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Home from './components/Home.jsx';
// import UploadStory from './components/UploadStory';
// import DisplayStories from './components/DisplayStories.jsx';
// import Page404 from './pages/Page404';
import Instagram from './components/instagram.jsx';
// import SizeFit from './components/SizeFit.jsx';
// import Navbar from './components/Navbar.jsx';
import Size from './components/size.jsx';

function App() {
  return (
   
    <BrowserRouter>
     {/* <Navbar/> */}
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/" element={<Size />} />
        {/* <Route path="/stories" element={<DisplayStories />} />
        <Route path="/sizefit" element={<SizeFit />} /> */}

        {/* <Route path="*" element={<Page404 />} /> */}
      </Routes>
    </BrowserRouter>

  );
}

export default App;