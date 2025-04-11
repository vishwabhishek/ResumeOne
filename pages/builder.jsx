import React, { useState, createContext, useContext } from "react";
import Language from "../components/form/Language";
import Meta from "../components/meta/Meta";
import FormCP from "../components/form/FormCP";
import LoadUnload from "../components/form/LoadUnload";
import Preview from "../components/preview/Preview";
import DefaultResumeData from "../components/utility/DefaultResumeData";
import SocialMedia from "../components/form/SocialMedia";
import WorkExperience from "../components/form/WorkExperience";
import Skill from "../components/form/Skill";
import PersonalInformation from "../components/form/PersonalInformation";
import Summary from "../components/form/Summary";
import Projects from "../components/form/Projects";
import Education from "../components/form/Education";
import dynamic from "next/dynamic";
import Certification from "../components/form/certification";
import { SparklesCore } from "../components/ui/sparkles";

const ResumeContext = createContext(DefaultResumeData);

// server side rendering false
const Print = dynamic(() => import("../components/utility/WinPrint"), {
  ssr: false,
});

export default function Builder(props) {
  // resume data
  const [resumeData, setResumeData] = useState(DefaultResumeData);

  // form hide/show
  const [formClose, setFormClose] = useState(false);

  // profile picture
  const handleProfilePicture = (e) => {
    const file = e.target.files[0];

    if (file instanceof Blob) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setResumeData({ ...resumeData, profilePicture: event.target.result });
      };
      reader.readAsDataURL(file);
    } else {
      console.error("Invalid file type");
    }
  };

  const handleChange = (e) => {
    setResumeData({ ...resumeData, [e.target.name]: e.target.value });
    console.log(resumeData);
  };

  return (
    <>
      <ResumeContext.Provider
        value={{
          resumeData,
          setResumeData,
          handleProfilePicture,
          handleChange,
        }}
      >
        <Meta
          title="ResumeOne"
          description="ResumeOne for humanity."
          keywords="resume maker, cv maker, resume builder, cv builder, resume templates, cv templates, resume design, cv design, resume format, cv format, resume examples, cv examples, resume tips, cv tips, resume writing, cv writing, resume help, cv help, resume service, cv service, resume creator, cv creator, resume generator, cv generator, resume editor, cv editor, resume template, cv template, resume format, cv format, resume builder online, cv builder online, resume maker online, cv maker online, resume creator online, cv creator online, resume generator online, cv generator online, resume editor online, cv editor online"
        />
        <div className="f-col gap-4 md:flex-row justify-evenly max-w-full md:mx-auto md:h-screen">
          {!formClose && (
            <div className="relative w-full h-full md:overflow-y-scroll exclude-print bg-black">
              <div className="w-full absolute inset-0 z-0">
                <SparklesCore
                  id="tsparticlesfullpage"
                  background="transparent"
                  minSize={0.6}
                  maxSize={1.4}
                  particleDensity={100}
                  className="w-full h-full"
                  particleColor="#FFFFFF"
                />
              </div>
              <form className="relative z-10 p-4 bg-black/30">
                <LoadUnload/>
                <PersonalInformation />
                <SocialMedia />
                <Summary />
                <Education />
                <WorkExperience />
                <Projects />
                {resumeData.skills.map((skill, index) => (
                  <Skill
                    title={skill.title}
                    key={index}
                  />
                ))}
                <Language />
                <Certification />
              </form>
            </div>
          )}
          <Preview className="w-full h-full" />
        </div>
        <FormCP formClose={formClose} setFormClose={setFormClose} />
        <Print />
      </ResumeContext.Provider>
    </>
  );
}
export { ResumeContext };
