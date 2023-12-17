import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import UserGuide from './pages/UserGuide';
import NoPage from './pages/NoPage';

function App() {
	return (
		<div className="App">
			<Header id="appHeader" />
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="user-guide" element={<UserGuide />} />
					<Route path="*" element={<NoPage />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
