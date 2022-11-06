import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Detail from "./pages/Detail";
import MyPage from "./pages/MyPage";

const App = () => (
    <>
        <Router>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/detail" element={<Detail />} />
                <Route exact path="/mypage" element={<MyPage />} />
            </Routes>
        </Router>
    </>
);

export default App;
