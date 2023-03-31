import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Hero from "./components/HeroSection";
import AvailableCourses from "./components/AvailableCourses";
import CertificatesAchieved from "./components/CerficatesAchieved";
import ScoreSum from "./components/Score";
import HTML from "./components/Courses/HTML";
import CSS from "./components/Courses/CSS";
import Ajax from "./components/Courses/Ajax";
import Bootstrap from "./components/Courses/Bootstrap";
import JavascriptCourse from "./components/Courses/JavaScriptCourse";
import Nodejs from "./components/Courses/Nodejs";
import ReactCourse from "./components/Courses/ReactCourse";
import ResponsiveWebDesign from "./components/Courses/ResponsiveWebDesign";
import RestfulAPI from "./components/Courses/RestfulAPI";

import PremiumCourses from "./components/PremiumCourses";
const App = () => (
  <>
    <Header />

    <Hero />
    <Routes>
      <Route path="/lms-available" Component={AvailableCourses} />
      <Route path="/lms-premium" Component={PremiumCourses} />
      <Route path="/lms-certificates" Component={CertificatesAchieved} />
      <Route path="/lms-score" Component={ScoreSum} />
      <Route path="/learn-HTML" Component={HTML} />
      <Route path="/learn-CSS" Component={CSS} />
      <Route path="/learn-Ajax" Component={Ajax} />
      <Route path="/learn-Bootstrap" Component={Bootstrap} />
      <Route path="/learn-Javascript" Component={JavascriptCourse} />
      <Route path="/learn-Node.js" Component={Nodejs} />
      <Route path="/learn-React" Component={ReactCourse} />
      <Route path="/learn-RESTful-API" Component={RestfulAPI} />
      <Route
        path="/learn-Responsive-Web-Design"
        Component={ResponsiveWebDesign}
      />
    </Routes>
  </>
);

export default App;
