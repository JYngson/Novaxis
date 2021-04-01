import React from "react";
import "./Courses.scss";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import CardDeck from "react-bootstrap/CardDeck";
import RedCross from "../../assets/images/RedCross.jpeg";
import Aid from "../../assets/images/FirstAid.jpeg";
import Myers from "../../assets/images/Myers.jpeg";
import Course from "../../assets/images/Course.jpeg";
import Dentistry from "../../assets/images/Dentistry.jpeg";
import Business from "../../assets/images/Business.jpeg";

export default function Courses() {
  return (
    <div className="Courses">
      <CardDeck className="p-3">
        <Card className="mx-3">
          <Card.Img variant="top" className="h-50 p-2" src={RedCross} />
          <Card.Body>
            <Card.Title>CPR/1ST AID - WEFA</Card.Title>
            <Card.Text>Content goes here</Card.Text>
            <Button>More</Button>
          </Card.Body>
        </Card>

        <Card className="mx-3">
          <Card.Img variant="top" className="h-50 p-2" src={Myers} />
          <Card.Body>
            <Card.Title>Myers Briggs Type Indicator</Card.Title>
            <Card.Text>Content goes here</Card.Text>
            <Button>More</Button>
          </Card.Body>
        </Card>
        <Card className="mx-3">
          <Card.Img variant="top" className="h-50 p-2" src={Course} />
          <Card.Body>
            <Card.Title>Online Course Development</Card.Title>
            <Card.Text>Content goes here</Card.Text>
            <Button>More</Button>
          </Card.Body>
        </Card>
      </CardDeck>

      <CardDeck className="p-3">
        <Card className="mx-3">
          <Card.Img variant="top" className="h-50 p-2" src={Dentistry} />
          <Card.Body>
            <Card.Title>Continuing Education Dentistry</Card.Title>
            <Card.Text>Content goes here</Card.Text>
            <Button>More</Button>
          </Card.Body>
        </Card>
        <Card className="mx-3">
          <Card.Img variant="top" className="h-50 p-2" src={Business} />
          <Card.Body>
            <Card.Title>Business Seminars</Card.Title>
            <Card.Text>Content goes here</Card.Text>
            <Button>More</Button>
          </Card.Body>
        </Card>
        <Card className="mx-3">
          <Card.Img variant="top" className="h-50 p-2" src={Aid} />
          <Card.Body>
            <Card.Title>Medical Emergency kit and First aid kits</Card.Title>
            <Card.Text>Content goes here</Card.Text>
            <Button>More</Button>
          </Card.Body>
        </Card>
      </CardDeck>
    </div>
  );
}
