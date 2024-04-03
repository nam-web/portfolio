import { useEffect, useRef } from "react"
import "./intro.scss"
import { init } from 'ityped'

export default function Intro() {
  const textRef = useRef();

  useEffect(()=>{
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ["Programmer", "Web Developer", "Software Developer"],
    });
  },[]);
 
  return (
    <div className="intro" id="intro">
        <div className="left">
          <div className="imgContainer">
            <img src="assets/namrata.jpg" alt="" />
          </div>
        </div>
        <div className="right">
          <div className="wrapper">
            <h2>Hi There, I'm</h2>
            <h1>Namrata Srivastava</h1>
            <h3>MERN Developer <span ref={textRef}></span></h3>
          </div>
          <a href="#project">
          <img src="assets/down.png" alt=""/>
          </a>
        </div>
    </div>
  )
}
