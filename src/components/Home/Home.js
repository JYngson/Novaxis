import React from "react";
import { Navbar, Hero, Courses, Contact, Footer } from "../../components";

export default function Home() {
  return (
    <div>
      {/* <Navbar /> */}
      <Hero />
      <Courses />
      <Contact />
      <Footer />
    </div>
  );
}
