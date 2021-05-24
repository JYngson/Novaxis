import React from "react";
import { Hero, Courses, Contact, Footer, About } from "../../components";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Courses />
      <Contact />
      <Footer />
    </div>
  );
}
