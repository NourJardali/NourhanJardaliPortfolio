import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import '../assets/styles/Main.scss';
import nourhanImage from '../assets/images/profile.png';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={nourhanImage} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            {/* <a href="https://github.com/yujisatojr" target="_blank" rel="noreferrer"><GitHubIcon/></a> */}
            {/* <a href="https://instagram.com/yourusername" target="_blank" rel="noreferrer"><InstagramIcon /></a> */}
            <a href="https://www.linkedin.com/in/nourhan-jardali/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Nourhan Jardali</h1>
          <p>Senior Software Engineer | Technical Lead</p>

          <div className="mobile_social_icons">
            {/* <a href="https://github.com/yujisatojr" target="_blank" rel="noreferrer"><GitHubIcon/></a> */}
            {/* <a href="https://instagram.com/yourusername" target="_blank" rel="noreferrer"><InstagramIcon /></a> */}
            <a href="https://www.linkedin.com/in/nourhan-jardali/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;