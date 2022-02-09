import logo from './logo.svg';
import './App.css';
import './SecondaryNav.css';
import { Routes, Route, Link, NavLink, isActive, useLocation } from "react-router-dom";
import React, { useState, useEffect } from 'react';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './routes/About';
import Crew from './routes/Crew';
import Calendar from './routes/Calendar';
import Footer from './components/Footer';

import { TransitionGroup, CSSTransition } from 'react-transition-group';

function App() {
  let buttonFormat = "text-white text-lg px-4 w-24 transition ease-in-out duration-75 hover:bg-gray-600 m-auto text-center p-6 m-0" ;
  const location = useLocation();

  return (
    <div className="border-red-800 border-2">
      <Navbar>
        <Link className = {buttonFormat} to = "/">About</Link>
        <Link className = {buttonFormat} to = "/crew">Crew</Link>
        <Link className = {buttonFormat} to = "/calendar">Calendar</Link>
      </Navbar>

      <Hero/>

      <main className = "min-h-screen bg-neutral-900 flex flex-col">
        <div className = "flex space-x-16 align-middle justify-center mt-8 p-6 mb-6 border-b-4 border-double m-auto">
            <NavLink to = "/" className = {({isActive}) => (isActive ? "text-2xl secondary-nav-active": "text-2xl secondary-nav")}>About</NavLink>
            <NavLink to = "/crew" className = {({isActive}) => (isActive ? "text-2xl secondary-nav-active": "text-2xl secondary-nav")}>Crew</NavLink>
            <NavLink to = "/calendar" className = {({isActive}) => (isActive ? "text-2xl secondary-nav-active": "text-2xl secondary-nav")}>Calendar</NavLink>
        </div>

        <div id = "router">
          <TransitionGroup>
            <CSSTransition
              key = {location.pathname}
              classNames = "fade"
              timeout={200}
            >
              
              <Routes location = {location}>
                <Route path = "/" element = {<About/>} exact />
                <Route path = "/crew" element = {<Crew/>}/>
                <Route path = "/calendar" element = {<Calendar/>}/>
              </Routes>

            </CSSTransition>
          </TransitionGroup>
        </div>


      </main>

      <footer>
      
        <Footer/>
      </footer>
    </div>
  );
}

export default App;
