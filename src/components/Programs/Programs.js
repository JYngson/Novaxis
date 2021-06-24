import React from "react";
import "./Programs.scss";

export default function Programs() {
  return (
    <div className="Programs">
      <h1 className="Programs__header">Courses/Seminars </h1>

      <div className="Programs__Section">
        <h2 className="Programs__Section--header">CPR/First Aid</h2>
        <p className="Programs__Section--description">
          All courses offered as full in class or a blended course where half is
          done at home and half in class and can be done at your business.
        </p>
        <div className="Programs__Section--list">
          <div className="Programs__Section--left">
            <h3>CPR/standard first aid</h3>
            <p>
              16 hours/2 day course or offered as an 8 hour online course and a
              8 hour in class hands on skills
            </p>
            <h3>Red Cross WEFA (Workplace Emergency First Aid)</h3>
            <p>
              Equivalent to Worksafe BC OFA Level 1 Required for businesses with
              5 employees or more and 1 certified person per shift
            </p>
          </div>
          <div className="Programs__Section--right">
            <h3>CPR Level C/A</h3>
            <p>
              An 8 hour/1 day course or offered as a 4 hour online course and an
              3 hour in class hands on skills.
            </p>
            <h3>CPR/Emergency First Aid</h3>
            <p>
              An 8 hour/1 day in class course or offered as a blended course as
              3 hours online course and a 3 hours in class hands on skills.
            </p>
          </div>
        </div>
      </div>

      <div className="Programs__Section">
        <h2 className="Programs__Section--header">
          Myers Briggs Type Indictor and Personal Diamension
        </h2>
        <p className="Programs__Section--description">
          The purpose of the Myers-Briggs Type Indicator® (MBTI®) personality
          inventory is to make the theory of psychological types described by C.
          G. Jung understandable and useful in people's lives. The essence of
          the theory is that much seemingly random variation in the behavior is
          actually quite orderly and consistent, being due to basic differences
          in the ways individuals prefer to use their perception and judgment
        </p>
      </div>

      <div className="Programs__Section">
        <h2 className="Programs__Section--header">
          Continuing Education for the Dental Field
        </h2>
        <div className="Programs__Section--list">
          <div className="Programs__Section--left">
            <h3>CPR/standard first aid</h3>
          </div>
          <div className="Programs__Section--right">
            <h3>CPR Level C/A</h3>
          </div>
        </div>
      </div>

      <div className="Programs__Section">
        <h2 className="Programs__Section--header">
          Online Curriculum Development
        </h2>
      </div>

      <div className="Programs__Section">
        <h2 className="Programs__Section--header">Seminars</h2>
        <div className="Programs__Section--list">
          <div className="Programs__Section--left">
            <h3>Leadership Training</h3>
            <h3>Conflict Management</h3>
            <h3>Customer Service</h3>
          </div>
          <div className="Programs__Section--right">
            <h3>Human Resources</h3>
            <h3>Cultural Sensitivity</h3>
            <h3>Effective Communication</h3>
          </div>
        </div>
      </div>

      <div className="Programs__Section">
        <h2 className="Programs__Section--header">
          Medical Emergency and First Aid Kits
        </h2>
        <div className="Programs__Section--list">
          <div className="Programs__Section--left">
            <h3>Medical Emergency Kit</h3>
            <p>
              These kits are designed to help the general dental practice deal
              with potentially life-threatening medical emergencies that you may
              encounter in your clinic. Novaturient Axis Emergency Kits options:
              Basic or the Deluxe model
            </p>
          </div>
          <div className="Programs__Section--right">
            <h3>First Aid Kit</h3>
            <p>
              A fully-equipped occupational first aid kit to ensure you're set
              for safety at work and are WorkSafeBC-compliant . Need help
              getting set with the right first aid kit? With a few quick
              questions, our team will take away the guesswork by recommending
              the best first aid kit for your needs{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
