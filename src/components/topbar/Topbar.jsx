import "./topbar.scss";
import PersonIcon from '@mui/icons-material/Person';
import MailIcon from '@mui/icons-material/Mail';

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
        <div className="wrapper">
          <div className="left">
            <div className="itemContainer">
              <a href="https://www.linkedin.com/in/namrata-srivastava-4550111b9/">
                <img src="data:image/png;base64,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"/>
              </a>
            </div>
            <div className="itemContainer">
              <a href="https://github.com/nam-web">
                <img src="data:image/png;base64,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"/>
              </a>
            </div>
            <div className="itemContainer">
              <a href="https://leetcode.com/namsri1998/">
                <img src="data:image/png;base64,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"/>
              </a>
            </div>
           <div className="itemContainer">
              <PersonIcon className="icon"/>
              <span>+91 8429270742</span>
            </div>
            <div className="itemContainer">
              <MailIcon className="icon"/>
              <span>namsri1998@gmail.com</span>
            </div>
          </div>
          <div className="right">
            <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
              <span className="line1"></span>
              <span className="line2"></span>
              <span className="line3"></span>
            </div>
          </div>
        </div>
    </div>
  )
}
