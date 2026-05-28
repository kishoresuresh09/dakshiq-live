"use client";

export default function Home() {

const handleComingSoon = () => {
alert("Coming Soon 🚀");
};

const dealerForm = () => {
window.open(
"https://forms.gle/aEUuVSpnkjuHH2sP6",
"_blank"
);
};

return (

<main className="min-h-screen bg-[#050816] text-white overflow-x-hidden">

{/* NAVBAR */}

<nav className="border-b border-[#10182b] backdrop-blur-lg sticky top-0 z-50 bg-[#050816]/90">

<div className="max-w-7xl mx-auto px-6 lg:px-10 py-5 flex items-center justify-between">

<h1 className="text-3xl font-bold tracking-tight">

DakshIQ

</h1>

<div className="hidden lg:flex items-center gap-10 text-gray-300 text-lg">

<button onClick={handleComingSoon} className="hover:text-white transition">

Home

</button>

<button onClick={handleComingSoon} className="hover:text-white transition">

Solutions

</button>

<button onClick={handleComingSoon} className="hover:text-white transition">

For Candidates

</button>

<button onClick={handleComingSoon} className="hover:text-white transition">

For Dealerships

</button>

<button onClick={handleComingSoon} className="hover:text-white transition">

Contact

</button>

</div>

<button

onClick={dealerForm}

className="bg-blue-600 hover:bg-blue-700 transition px-6 py-3 rounded-2xl font-semibold text-lg shadow-lg shadow-blue-600/20"

>

Request Pilot

</button>

</div>

</nav>

{/* HERO */}

<section className="max-w-7xl mx-auto px-6 lg:px-10 pt-6 pb-10">

<div className="grid lg:grid-cols-2 gap-12 items-start">

<div className="pt-2">

<div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 text-blue-400 px-5 py-3 rounded-full text-sm mb-6">

<span>⚡</span>

<span>

AI Workforce Intelligence Platform

</span>

</div>

<h1 className="text-5xl lg:text-6xl font-bold leading-[1.02] tracking-tight max-w-4xl">

Assess, benchmark,

and improve{" "}

<span className="text-blue-500">

workforce

</span>

{" "}capability using AI-driven workforce intelligence.

</h1>

<p className="text-gray-400 text-lg lg:text-xl mt-6 leading-relaxed max-w-2xl">

DakshIQ helps organizations evaluate skills,

identify gaps, and build future-ready workforce

for the automotive industry.

</p>

<div className="flex flex-wrap gap-5 mt-8">

<button

onClick={dealerForm}

className="bg-blue-600 hover:bg-blue-700 transition px-8 py-4 rounded-2xl font-semibold text-lg shadow-xl shadow-blue-600/20"

>

Request a Pilot

</button>

<button

onClick={handleComingSoon}

className="border border-gray-700 hover:border-white hover:bg-white hover:text-black transition px-8 py-4 rounded-2xl font-semibold text-lg"

>

Explore Solutions

</button>

</div>

</div>

<div className="w-full flex justify-center lg:justify-end lg:-mt-4">

<div className="bg-[#0d1326] border border-[#1a2338] rounded-[32px] p-8 lg:p-10 shadow-2xl w-full max-w-xl">

<h2 className="text-3xl lg:text-4xl font-bold mb-8">

Skill Verified Candidates

</h2>

<div className="space-y-5">

<div className="bg-[#111827] rounded-2xl p-5">

🚗 Diagnostic Reasoning

</div>

<div className="bg-[#111827] rounded-2xl p-5">

⚡ EV Readiness

</div>

<div className="bg-[#111827] rounded-2xl p-5">

🧠 Learning Agility

</div>

<div className="bg-[#111827] rounded-2xl p-5">

🛠 Workshop Process Discipline

</div>

</div>

</div>

</div>

</div>

</section>

{/* CTA */}

<section className="max-w-7xl mx-auto px-6 lg:px-10 py-20">

<div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-[36px] p-10 lg:p-16 text-center shadow-2xl">

<h2 className="text-4xl lg:text-6xl font-bold">

Building the Workforce Intelligence Layer

for Automotive Aftersales

</h2>

<p className="text-blue-100 text-lg lg:text-xl mt-8">

DakshIQ helps the automotive ecosystem prepare for AI,

EVs and future-ready service operations.

</p>

<button

onClick={dealerForm}

className="mt-10 bg-white text-black hover:bg-gray-200 transition px-8 py-4 rounded-2xl font-semibold text-lg"

>

Join Pilot Program

</button>

</div>

</section>

<footer className="border-t border-[#10182b] mt-10">

<div className="max-w-7xl mx-auto px-6 lg:px-10 py-10 flex justify-between">

<div>

<h2 className="text-2xl font-bold">

DakshIQ

</h2>

<p className="text-gray-500 mt-2">

AI Workforce Intelligence Platform

</p>

</div>

<div className="text-gray-400">

hello@dakshiq.com

</div>

</div>

</footer>

</main>

);

}