import React, { useEffect, useState } from "react";

import axios from "axios";

import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Resume from "./Components/Resume";
import Contact from "./Components/Contact";
import Testimonials from "./Components/Testimonials";
import Portfolio from "./Components/Portfolio";

function App() {
  const [resumeData, setResumeData] = useState(null);

  async function getResumeData() {
    // setResumeData(data?.[0]);
    const api_url = `https://x8ki-letl-twmt.n7.xano.io/api:5Qh37sEM/profileinfo`;
    await axios.get(api_url).then((res) => {
      res.status === 200 && setResumeData(res?.data?.[0]);
    });
  }

  useEffect(() => {
    getResumeData();
  }, []);

  return (
    <div className="App">
      {resumeData && (
        <>
          <Header
            about={resumeData?.about}
            address={resumeData?.address}
            social={resumeData.social}
          />
          <About
            about={resumeData?.about}
            address={resumeData?.address}
            resumeDownload={resumeData?.resume?.resumeDownload}
          />
          <Resume resume={resumeData?.resume} />
        </>
      )}
      <Portfolio projects={resumeData?.resume?.projects} />
      <Testimonials testimonials={resumeData?.testimonials} />
      <Contact
        address={resumeData?.address}
        about={resumeData?.about}
        contactMeMessage={resumeData?.contactMeMessage}
      />
      <Footer social={resumeData?.social} about={resumeData?.about} />
    </div>
  );
}

export default App;
