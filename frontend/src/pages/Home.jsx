import React from "react";
import ReactDOM from "react-dom";
import { Carousel } from "react-responsive-carousel";
import Beginning from "../components/Beginning";
import BeginMiddle from "../components/BeginMiddle";
import Middle from "../components/Middle";
import "./Home.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

export default function Home() {
  return (
    <div className="home">
      <Carousel>
        <div className="begin">
          <Beginning />
        </div>
        <div className="BeginMiddle">
          <BeginMiddle />
        </div>
        <div className="Middle">
          <Middle />
        </div>
      </Carousel>
    </div>
  );
}
