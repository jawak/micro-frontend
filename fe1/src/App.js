import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";

export default function App() {
  return (
      <div className="App">
        <h1>Welcome to React</h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
        </Routes>
      </div>
  );
}

function Home() {
    return (
        <>
            <main>
                <h2>Welcome to the homepage!</h2>
                <p>Home APP 1</p>
            </main>
            <nav>
                <Link to="/about">About APP 1</Link>
                <br/>
                <a href="/setting">Setting APP 2</a>
            </nav>
        </>
    );
}

function About() {
    return (
        <>
            <main>
                <h2>Who are we?</h2>
                <p>
                    About APP 1
                </p>
            </main>
            <nav>
                <Link to="/">Home</Link>
            </nav>
        </>
    );
}