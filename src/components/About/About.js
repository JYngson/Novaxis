import React, { useEffect } from "react";
import "./About.scss";
import Aos from "aos";
import "aos/dist/aos.css";

export default function About() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  });
  return (
    <div className="About">
      <div className="About__headerBox" data-aos="fade-right">
        <h1 className="About__header">Lead by industry veterans</h1>
      </div>
      <div className="About__agnes">
        <div className="About__agnesImageBox">
          <h2>Image</h2>
        </div>
        <div className="About__agnesBioBox">
          <p>
            Agnes received her Doctor of Dental Medicine degree from Manila,
            Philippines where she practiced Dentistry before immigrating to
            Canada in 2003. After joining CDI College as a dental assisting
            instructor, Agnes assumed the position of BC Dental Assisting
            Program Head in 2008. She wrote the CDI Orthodontic Module
            curriculum, which was approved and recognized by the College in 2007
            Agnes served as a board member of the National Dental Assisting
            Examining Board (NDAEB) and is currently a clinical evaluator for
            the NDAEB. Agnes is an Accreditation Surveyor and the Dental
            Assisting Educator Representative of the Commission on Dental
            Accreditation of Canada. Agnes has delivered several dental
            continuing courses, including infection control, dental record
            keeping and CPR.She is a certified Canadian Red Cross First Aid/CPR
            instructor and Personality Dimensions facilitator. Agnes completed
            her Provincial Instructor Diploma and Certificate in Online Learning
            at Vancouver Community College. She is currently completing a
            Masters degree in Educational Technology and learning design at
            Simon Fraser University.
          </p>
        </div>
      </div>
      <div className="About__norbert">
        <div>
          <h2 className="About__norbertImageBox">Image</h2>
        </div>
        <div>
          <p className="About__norbertBioBox">
            Norbert started his 15 year career in Hospitality at the Holiday Inn
            in Calgary as Banquet bus boy. While with Holiday Inn, He got all
            his training through the Management succession program enabling him
            to work in all departments. With this experience, he landed his
            first General Manager's with the Pagebrook part of The Leading
            Hotels of the Word Hotel chain downtown Vancouver where he also got
            his cross training at the sister hotel in Tapei. His career also
            brought him to retail as Western Canada Regional Manager for a
            clothing chain from Montreal. His career path took another turn and
            brought him to the start his 14 years in Adult Education as
            Instructor then to Director and finally as Regional Director for
            several colleges in Vancouver until the creation of his company.
            Norbert attributes his success to his ability to build a team and
            development of the staff.
          </p>
        </div>
      </div>
    </div>
  );
}
