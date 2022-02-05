import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Navbar from './components/Navbar';
import Hero from './components/Hero';

import About from './routes/About'
import Crew from './routes/Crew'
import Calendar from './routes/Calendar'

function App() {
  let buttonFormat = "text-white text-lg px-4 w-24 transition ease-in-out duration-75 hover:bg-gray-600 m-auto text-center p-6 m-0" ;

  return (
    <div className="border-red-800 border-2">
      <Navbar>
        <Link className = {buttonFormat} to = "/about">About</Link>
        <Link className = {buttonFormat} to = "/crew">Crew</Link>
        <Link className = {buttonFormat} to = "/calendar">Calendar</Link>
      </Navbar>

      <Hero/>

      <main className = "min-h-screen bg-neutral-900 flex flex-col">
        <Routes>
          <Route path = "/about" element = {<About/>} />
          <Route path = "/crew" element = {<Crew/>}/>
          <Route path = "/calendar" element = {<Calendar/>}/>
        </Routes>
      </main>
    </div>
  );
}

export default App;
