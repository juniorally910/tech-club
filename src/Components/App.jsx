import { Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Navbar from "./User/Navbar";
import Hero from "./User/Home/Hero";
import Features from "./User/Home/Features";
import About from './User/Us';
import Programs from "./User/Home/Programs";
import Projects from "./User/Home/Projects";
import Mentorship from "./User/Home/Mentorship";
import Community from "./User/Home/Community";
import Contact from "./User/Contact";
import Join from "./User/Join";
import RequestMentor from "./User/RequestMentor";
import BecomeMentor from "./User/BecomeMentor";
import Footer from "./User/Home/Footer";
import Login from "./User/Login";
import Register from "./User/Register";

// Dashboard
import Dashboard from "./Dashboard/Dashboard";
import DashboardHome from "./Dashboard/DashboardHome";
import AdminPrograms from "./Dashboard/Programs";
import AdminProjects from "./Dashboard/Projects";
import Cohorts from "./Dashboard/Cohorts";
import MentorshipPage from "./Dashboard/MentorshipPage";
import SettingsPage from "./Dashboard/SettingsPage"

function Home() {

 
  return (
    
    <>
      <section id="hero"><Hero /></section>
      <section id="features"><Features /></section>
      <section id="about"><About /></section>
      <section id="programs"><Programs /></section>
      <section id="projects"><Projects /></section>
      <section id="community"><Community /></section>
      <section id="mentorship"><Mentorship /></section>
      <section id="contact"><Contact /></section>
      <Footer />
    </>
  );
}

function App() {
   const location = useLocation();
  const hideNavbar = location.pathname.startsWith("/dashboard");
  return (
    <>
      {!hideNavbar && <Navbar />}
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/mentorship" element={<Mentorship />} />
        <Route path="/community" element={<Community />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/join" element={<Join />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/request-mentor" element={<RequestMentor />} />
        <Route path="/become-mentor" element={<BecomeMentor />} />

        {/* Dashboard layout with nested routes */}
        <Route path="/dashboard/*" element={<Dashboard />}>
          <Route index element={<DashboardHome />} /> {/* default dashboard */}
          <Route path="programs" element={<AdminPrograms />} />
          <Route path="projects" element={<AdminProjects />} />
          <Route path="cohorts" element={<Cohorts />} />
          <Route path="mentorship" element={<MentorshipPage />} />
          <Route path="settings" element={<SettingsPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
