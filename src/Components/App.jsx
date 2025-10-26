import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Hero from "./Home/Hero";
import Features from "./Home/Features";
import About from "./Home/Us";
import Programs from "./Home/Programs";
import Projects from "./Home/Projects";
import Team from "./Home/Team";
import Community from "./Home/Community";
import Contact from "./Home/Contact";
import Join from "./Join";
// import RequestMentor from "./RequestMentor";
// import BecomeMentor from "./BecomeMentor";
import Footer from "./Home/Footer";
import Login from "./Login";
import Register from "./Register";
import JoinCohort from "../pages/CohortList";
import Cohorts from "./Home/Cohorts";

function Home() {
  return (
    <>
      <section id="hero"><Hero /></section>
      <section id="features"><Features /></section>
      <section id="about"><About /></section>
      <section id="programs"><Programs /></section>
      <section id="projects"><Projects /></section>
      <section id="community"><Community /></section>
      <section id="team"><Team /></section>
      <section id="contact"><Contact /></section>
      <Footer />
    </>
  );
}

function App() {
  return (
    <>
 
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/projects" element={<Projects />} />
        {/* <Route path="/mentorship" element={<Mentorship />} /> */}
        <Route path="/team" element={<Team />} />
        <Route path="/community" element={<Community />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/join" element={<Join />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cohorts" element={<Cohorts />} />
        <Route path="/cohorts/:id" element={<JoinCohort />} />
        {/* <Route path="/request-mentor" element={<RequestMentor />} /> */}
        {/* <Route path="/become-mentor" element={<BecomeMentor />} /> */}
      </Routes>
    </>
  );
}

export default App;
