import React from "react";
import FirstFotoHello from "./FirstFotoHello";
import SecondAbout from "./SecondAbout";
import ThirdEducation from "./ThirdEducation";
import FourthStack from "./FourthStack";
import FifthLinks from "./FifthLinks";
import SixStayInTouch from "./SixStayInTouch";
import WorkExperience from "./WorkExperience";

export default function Home() {
  return (
    <div>
      <FirstFotoHello />
      <SecondAbout />
      <ThirdEducation />
      <WorkExperience />
      <FourthStack />
      <FifthLinks />
      <SixStayInTouch />
    </div>
  );
}
