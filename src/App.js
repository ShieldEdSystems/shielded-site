// ShieldEd - Full App.js File with Phishing Simulation (React + Tailwind)

import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
return (



ShieldEd

Home
Simulations
Phishing Sim
Dashboard
Admin
Login



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

Defend Your School from Cyber Threats

Interactive simulations, real-world scenarios, and CPD-accredited training for UK education staff.


Try a Simulation
View Your Dashboard







);
}

function FeatureCard({ title, description }) {
return (

{title}
{description}

);
}

function PhishingSim() {
const flags = [
{ id: 1, text: "headtecher@school-ac.uk", tip: "Spelling error in sender email address." },
{ id: 2, text: "This message was not sent from within your organisation.", tip: "External sender warning banner." },
{ id: 3, text: "Click here to download the updated Safeguarding Policy.", tip: "Unusual link requesting download of a document." },
{ id: 4, text: "Failure to respond within 24 hours may result in HR action.", tip: "Threatening urgent consequence." },
{ id: 5, text: "Regards, The Safeguarding Officr", tip: "Spelling error in signature." },
];

const [foundFlags, setFoundFlags] = useState([]);

const toggleFlag = (id) => {
if (!foundFlags.includes(id)) {
setFoundFlags([...foundFlags, id]);
}
};

return (

Phishing Email Simulation
<div className="mb-4 p-3 bg-yellow-100 border-l-4 border-yellow-500 text-yellow-800 rounded cursor-pointer" onClick={() => toggleFlag(2)}>
This message was not sent from within your organisation.


From: <span className="text-black cursor-pointer hover:bg-yellow-100" onClick={() => toggleFlag(1)}>headtecher@school-ac.uk
Subject: Mandatory Safeguarding Policy Update

Dear Staff,

Please <span className="text-blue-600 underline cursor-pointer hover:bg-yellow-100" onClick={() => toggleFlag(3)}>click here to download the updated Safeguarding Policy. This document includes critical changes in line with Ofsted guidelines.


<span className="cursor-pointer hover:bg-yellow-100" onClick={() => toggleFlag(4)}>Failure to respond within 24 hours may result in HR action.


Regards,
<span className="cursor-pointer hover:bg-yellow-100" onClick={() => toggleFlag(5)}>The Safeguarding Officr




You’ve found {foundFlags.length} of 5 red flags.

{foundFlags.length === 5 && (

✅ Excellent! You correctly identified all suspicious elements in the email.

)}

);
}

function Login() {
return (

Login



Login


);
}

function Register() {
return (

Register




Register


);
}

function Simulations() {
return (

Simulations






);
}

function SimulationCard({ title, description, to }) {
return (

{title}
{description}
{to && Launch}

);
}

function Dashboard() {
return (

Staff Dashboard
Track your training progress and download CPD certificates.

Phishing Simulation – Completed ✅
GDPR Scenario – In Progress
Incident Drill – Not Started


);
}

function AdminPanel() {
return (

Admin Panel
Monitor staff completion and download reports.

Staff Completion Rate: 63%
Certificates Issued: 21
Export Reports (Coming soon)


);
}

export default App;