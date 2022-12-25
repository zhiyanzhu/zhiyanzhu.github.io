import React from "react";
import { stackList1 } from "../../data/ProjectData";
import { stackList2 } from "../../data/ProjectData";
import {
  Image,
  Technologies,
  Tech,
  TechImg1,
  TechImg2,
  TechName,
  ContactWrapper,
  SchoolImg
} from "./AboutElements";
function About() {
  return (
    <>
      <svg
        height="100%"
        width="100%"
        id="svg"
        viewBox="0 0 1440 400"
        xmlns="http://www.w3.org/2000/svg"
        class="transition duration-300 ease-in-out delay-150"
      >
        <path
          d="M 0,400 C 0,400 0,200 0,200 C 114.35714285714289,156.53571428571428 228.71428571428578,113.07142857142858 351,131 C 473.2857142857142,148.92857142857142 603.4999999999998,228.25 713,248 C 822.5000000000002,267.75 911.2857142857144,227.92857142857142 1029,210 C 1146.7142857142856,192.07142857142858 1293.3571428571427,196.03571428571428 1440,200 C 1440,200 1440,400 1440,400 Z"
          stroke="none"
          stroke-width="0"
          fill="#151418ff"
          class="transition-all duration-300 ease-in-out delay-150"
          transform="rotate(-180 720 200)"
        ></path>
      </svg>
      <div className="ContactWrapper" id="about">
        <div className="Container">
          <div className="SectionTitle">About Me</div>
          <div className="BigCard">            
            <Image
              src="https://raw.githubusercontent.com/zhiyanzhu/zhiyanzhu.github.io/main/src/logos/transp.png"
              alt="man-svgrepo"
            />
            
            <div className="Education">
              <div className="SubTitle">Education</div>
                <div>
                  <a href="http://ucsd.edu">
                    <SchoolImg
                      src="https://raw.githubusercontent.com/zhiyanzhu/zhiyanzhu.github.io/main/src/logos/ucsd-logo.jpeg"
                      alt="ucsd"
                    />
                  </a>
                  Master of Science (09/22 - expect 03/24)
                </div>
                <br></br>
                <li>Computer Engineering</li>
                <br></br>
              
                <div>
                  <a href="http://scut.edu.cn">
                    <SchoolImg
                      src="https://raw.githubusercontent.com/zhiyanzhu/zhiyanzhu.github.io/main/src/logos/scut-logo.png"
                      alt="scut"
                    />
                  </a>
                  Bachelor of Engineering (09/18 - 06/22)
                </div>
                <br></br>
                <li>Logistics Engineering (Major)</li>
                <li>Computer Science (Minor)</li>
            </div>
            <br></br>
            
            <div className="SubTitle">Skills</div>
            <div className="AboutBio">
              Hello! My name is <strong>Zhiyan Zhu</strong> Lorem Ipsum is simply
              dummy text of the printing and typesetting industry. Lorem Ipsum has
              been the industry's standard dummy text ever since the 1500s, when
              an unknown printer took a galley of type and scrambled it to make a
              type specimen book. It has survived not only five centuries, but.
            </div>
            <div className="AboutBio tagline2">
              I have become confident using the following technologies.
            </div>
            
            <Technologies>
              {stackList1.map((stack, index) => (
                <Tech key={index} className="tech">
                  <TechImg1 src={stack.img} alt={stack.name} />
                  <TechName>{stack.name}</TechName>
                </Tech>
              ))}
              {stackList2.map((stack, index) => (
                <Tech key={index} className="tech">
                  <TechImg2 src={stack.img} alt={stack.name} />
                  <TechName>{stack.name}</TechName>
                </Tech>
              ))}
            </Technologies>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
