// ShieldEd - Site with Phishing Simulation Engine (React + Tailwind)

import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
        <header className="bg-white shadow p-4 flex justify-between items-center sticky top-0 z-10">
          <h1 className="text-2xl font-bold text-blue-600">ShieldEd</h1>
          <nav className="space-x-6 text-sm font-medium">
            <Link to="/" className="hover:text-blue-600">Home</Link>
            <Link to="/simulations" className="hover:text-blue-600">Simulations</Link>
            <Link to="/simulations/phishing" className="hover:text-blue-600">Phishing Sim</Link>
            <Link to="/dashboard" className="hover:text-blue-600">Dashboard</Link>
            <Link to="/admin" className="hover:text-blue-600">Admin</Link>
            <Link to="/login" className="hover:text-blue-600">Login</Link>
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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
        <FeatureCard title="Real Phishing Simulations" description="Test your instincts with emails that look just like the real thing — no prior warning." />
        <FeatureCard title="GDPR Training That Sticks" description="Interactive data handling decisions replace boring slide decks." />
        <FeatureCard title="Earn CPD Credits" description="Teachers receive certified credit automatically upon completion." />
      </div>
    </section>
  );
}

function FeatureCard({ title, description }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
      <h3 className="font-semibold text-lg text-blue-600 mb-2">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
}

function PhishingSim() {
  const flags = [
    { id: 1, text: "suspicious@adminmail.com", found: false },
    { id: 2, text: "Click here to reset your password immediately", found: false },
    { id: 3, text: "Urgent action required", found: false },
    { id: 4, text: "Spelling mistake in school name", found: false },
    { id: 5, text: "Unusual attachment: ResetForm.exe", found: false },
  ];
  const [foundFlags, setFoundFlags] = useState([]);

  const toggleFlag = (id) => {
    if (!foundFlags.includes(id)) {
      setFoundFlags([...foundFlags, id]);
    }
  };

  return (
    <section className="max-w-3xl mx-auto py-12">
      <h2 className="text-3xl font-bold text-blue-600 mb-6">Phishing Simulation</h2>
      <p className="mb-4 text-gray-700">Click on anything you think is suspicious in this fake staff email.</p>

      <div className="bg-white border border-red-300 p-6 rounded-xl shadow space-y-4 text-left">
        {flags.map((item) => (
          <div
            key={item.id}
            className={`p-3 rounded cursor-pointer ${foundFlags.includes(item.id) ? "bg-green-100 border-l-4 border-green-500" : "hover:bg-yellow-100"}`}
            onClick={() => toggleFlag(item.id)}
          >
            {item.text}
          </div>
        ))}
      </div>

      <div className="mt-6 text-lg">
        You’ve found <span className="font-bold">{foundFlags.length}</span> of 5 red flags.
      </div>

      {foundFlags.length === 5 && (
        <div className="mt-4 p-4 bg-green-100 text-green-800 rounded">
          ✅ Well done! You identified all phishing indicators correctly.
        </div>
      )}
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
        <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">Login</button>
      </form>
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
        <SimulationCard title="GDPR Data Scenario" description="Make the right choice on a fake data request." />
        <SimulationCard title="Incident Response Drill" description="Simulated breach response: act fast and smart." />
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

export default App;
