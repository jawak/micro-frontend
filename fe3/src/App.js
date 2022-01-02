import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";

export default function App() {
  return (
      <div className="App">
        <h1>Ini APP 3</h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="profile" element={<Profile />} />
        </Routes>
      </div>
  );
}

function Home() {
    return (
        <>
            <main>
                <h2>Page root</h2>
            </main>
            <nav>
                <Link to="/profile">profile</Link>
                <br/>
                <a href="/">Ke App 1</a>
            </nav>
        </>
    );
}

function Profile() {
    return (
        <>
            <main>
                <h2>Masih Di app 3</h2>
                <p>
                    Page Profile APP 3
                </p>
            </main>
            <nav>
                <Link to="/">Root App 3</Link>
                <br/>
                <a href="/">Ke App 1</a>
            </nav>
        </>
    );
}