// ShieldEd - Full Working App.js (React + Tailwind, Vercel-ready) – Fixed Blank Page Bug

import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
        <header className="bg-white shadow p-4 flex justify-between items-center sticky top-0 z-10">
          <h1 className="text-2xl font-bold text-blue-600">ShieldEd</h1>
          <nav className="space-x-6 text-sm font-medium">
            <Link to="/">Home</Link>
            <Link to="/simulations">Simulations</Link>
            <Link to="/simulations/phishing">Phishing Sim</Link>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/admin">Admin</Link>
            <Link to="/login">Login</Link>
          </nav>
        </header>

        <main className="p-6 md:p-12">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/simulations" element={<Simulations />} />
            <Route path="/simulations/phishing" element={<PhishingSim />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/admin" element={<AdminPanel />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <section className="max-w-5xl mx-auto py-16 px-4 text-center">
      <h2 className="text-5xl font-extrabold text-blue-600 mb-4">Defend Your School from Cyber Threats</h2>
      <p className="text-xl text-gray-700 mb-8">
        Interactive simulations, real-world scenarios, and CPD-accredited training for UK education staff.
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
        <Link to="/simulations" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl shadow-md transition">Try a Simulation</Link>
        <Link to="/dashboard" className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-3 rounded-xl transition">View Your Dashboard</Link>
      </div>
    </section>
  );
}

function PhishingSim() {
  const [foundFlags, setFoundFlags] = useState([]);
  const [wrongAttempts, setWrongAttempts] = useState(0);

  const handleClick = (id, isFlag) => {
    if (isFlag) {
      if (!foundFlags.includes(id)) {
        setFoundFlags([...foundFlags, id]);
      }
    } else {
      setWrongAttempts(prev => prev + 1);
    }
  };

  const flagStyle = (id) =>
    foundFlags.includes(id)
      ? "bg-green-100 text-green-800 border-green-400"
      : "hover:bg-gray-100";

  return (
    <section className="max-w-3xl mx-auto py-12">
      <h2 className="text-3xl font-bold text-blue-600 mb-6">Phishing Simulation</h2>

      <div className="bg-white shadow rounded border text-sm">
        <div className="px-4 py-3 border-b flex items-center">
          <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
          <div>
            <div className="font-semibold text-gray-800">Head Teacher <span className="text-gray-500">&lt;headtecher@school-ac.uk&gt;</span></div>
            <div className="text-xs text-gray-500">Fri, 13 Jun, 09:00 • To: me</div>
          </div>
        </div>

        <div onClick={() => handleClick(2, true)} className={`px-4 py-2 border-b text-yellow-800 bg-yellow-100 border-l-4 border-yellow-500 cursor-pointer ${flagStyle(2)}`}>
          ⚠️ This email came from outside your organisation
        </div>

        <div className="px-4 py-3 border-b text-lg font-semibold text-gray-800">
          Mandatory Safeguarding Policy Update
        </div>

        <div className="p-4 space-y-4 text-gray-800">
          <p onClick={() => handleClick(null, false)}>Dear Staff,</p>
          <p>
            Please <span onClick={() => handleClick(3, true)} className={`text-blue-600 underline cursor-default ${flagStyle(3)}`}>click here to download the updated Safeguarding Policy</span> which is required by Ofsted.
          </p>
          <p>
            <span onClick={() => handleClick(4, true)} className={`cursor-default ${flagStyle(4)}`}>Failure to respond within 24 hours may result in HR action.</span>
          </p>
          <p className="mt-4">
            Regards,<br />
            <span onClick={() => handleClick(5, true)} className={`cursor-default ${flagStyle(5)}`}>The Safeguarding Officr</span>
          </p>
          <p onClick={() => handleClick(null, false)}>For more information, contact safeguarding@school.ac.uk</p>
        </div>

        <div className="px-4 py-2 border-t text-gray-500 text-xs cursor-pointer" onClick={() => handleClick(1, true)}>
          From: headtecher@school-ac.uk
        </div>
      </div>

      <div className="mt-6 text-lg">
        You’ve found <span className="font-bold">{foundFlags.length}</span> of 5 red flags. Mistakes: <span className="text-red-600 font-bold">{wrongAttempts}</span>
      </div>

      {foundFlags.length === 5 && (
        <div className="mt-4 p-4 bg-green-100 text-green-800 rounded">
          ✅ Excellent! You correctly identified all suspicious elements in the email.
        </div>
      )}
    </section>
  );
}

function Register() {
  return (
    <section className="max-w-md mx-auto py-12">
      <h2 className="text-xl font-semibold mb-4">Register</h2>
      <form className="space-y-4">
        <input type="text" placeholder="Name" className="w-full p-2 border rounded" />
        <input type="email" placeholder="Email" className="w-full p-2 border rounded" />
        <input type="password" placeholder="Password" className="w-full p-2 border rounded" />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Register</button>
      </form>
    </section>
  );
}

function Simulations() {
  return (
    <section className="max-w-3xl mx-auto py-12">
      <h2 className="text-2xl font-semibold mb-6">Simulations</h2>
      <div className="space-y-6">
        <SimulationCard title="Phishing Email Simulation" description="Click-through exercise: find 5 red flags." to="/simulations/phishing" />
      </div>
    </section>
  );
}

function SimulationCard({ title, description, to }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h3 className="font-bold text-blue-600">{title}</h3>
      <p className="text-sm text-gray-700 mb-2">{description}</p>
      {to && <Link to={to} className="mt-2 inline-block bg-blue-500 text-white px-3 py-1 rounded">Launch</Link>}
    </div>
  );
}

function Dashboard() {
  return (
    <section className="max-w-2xl mx-auto py-12">
      <h2 className="text-xl font-semibold mb-4">Staff Dashboard</h2>
      <p className="mb-4">Track your training progress and download CPD certificates.</p>
      <ul className="list-disc list-inside text-gray-700">
        <li>Phishing Simulation – Completed ✅</li>
        <li>GDPR Scenario – In Progress</li>
        <li>Incident Drill – Not Started</li>
      </ul>
    </section>
  );
}

function AdminPanel() {
  return (
    <section className="max-w-2xl mx-auto py-12">
      <h2 className="text-xl font-semibold mb-4">Admin Panel</h2>
      <p className="mb-4">Monitor staff completion and download reports.</p>
      <ul className="list-disc list-inside text-gray-700">
        <li>Staff Completion Rate: 63%</li>
        <li>Certificates Issued: 21</li>
        <li>Export Reports (Coming soon)</li>
      </ul>
    </section>
  );
}

function Login() {
  return (
    <section className="max-w-md mx-auto py-12">
      <h2 className="text-xl font-semibold mb-4">Login</h2>
      <form className="space-y-4">
        <input type="email" placeholder="Email" className="w-full p-2 border rounded" />
        <input type="password" placeholder="Password" className="w-full p-2 border rounded" />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Login</button>
      </form>
    </section>
  );
}

export default App;
