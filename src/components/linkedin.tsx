import React from 'react';
import styled from 'styled-components';

const Tooltip = () => {
  return (
    <StyledWrapper>
      <div className="tooltip-container">
        <div className="tooltip">
          <div className="profile">
            <div className="user">
              <div className="img">LI</div>
              <div className="details">
                <div className="name">User</div>
                <div className="username">@username</div>
              </div>
            </div>
            <div className="about">500+ Connections</div>
          </div>
        </div>
        <div className="text">
          <a className="icon" href="https://www.linkedin.com/company/devops-team-mce/posts/?feedView=all">
            <div className="layer">
              <span />
              <span />
              <span />
              <span />
              <span className="fab fa-linkedin">
                <svg viewBox="0 0 448 512" height="28" width="28">
                  <path fill="#ffffff" d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
                </svg>
              </span>
            </div>
            <div className="text">LinkedIn</div>
          </a>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .tooltip-container {
    position: relative;
    cursor: pointer;
    transition: all 0.2s;
    font-size: 17px;
    border-radius: 10px;
  }

  .tooltip {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    padding: 10px;
    opacity: 0;
    pointer-events: none;
    transition: all 0.3s;
    border-radius: 15px;
    box-shadow: inset 5px 5px 5px rgba(0, 0, 0, 0.2),
      inset -5px -5px 15px rgba(255, 255, 255, 0.1),
      5px 5px 15px rgba(0, 0, 0, 0.3), -5px -5px 15px rgba(255, 255, 255, 0.1);
  }

  .profile {
    background: #1a1a1a;
    border-radius: 10px 15px;
    padding: 10px;
    border: 1px solid #2563eb;
  }

  .tooltip-container:hover .tooltip {
    top: -150px;
    opacity: 1;
    visibility: visible;
    pointer-events: auto;
  }

  .icon {
    text-decoration: none;
    color: #fff;
    display: block;
    position: relative;
  }
  
  .layer {
    width: 55px;
    height: 55px;
    border: 3px solid #2563eb;
    border-radius: 50%;
    transition: transform 0.3s, border 0.3s ease, box-shadow 0.3s ease;
    box-shadow: 0 0 15px rgba(37, 99, 235, 0.5), 0 0 20px rgba(37, 99, 235, 0.3);
    background: #1a1a1a;
  }
  
  .icon:hover .layer {
    transform: rotate(-35deg) skew(20deg);
    box-shadow: 0 0 25px rgba(37, 99, 235, 0.8), 0 0 35px rgba(37, 99, 235, 0.5);
    border-color: #1d4ed8;
  }
  
  .layer span {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    border: 1px solid #2563eb;
    border-radius: 50%;
    transition: all 0.3s;
  }

  .layer span,
  .text {
    color: #2563eb;
    border-color: #2563eb;
  }

  .icon:hover .layer span {
    box-shadow: -1px 1px 3px rgba(37, 99, 235, 0.4);
  }
  
  .icon .text {
    position: absolute;
    left: 50%;
    bottom: -5px;
    opacity: 0;
    font-weight: 500;
    transform: translateX(-50%);
    transition: bottom 0.3s ease, opacity 0.3s ease;
    color: #2563eb;
  }
  
  .icon:hover .text {
    bottom: -35px;
    opacity: 1;
  }

  .icon:hover .layer span:nth-child(1) {
    opacity: 0.2;
  }
  .icon:hover .layer span:nth-child(2) {
    opacity: 0.4;
    transform: translate(5px, -5px);
  }
  .icon:hover .layer span:nth-child(3) {
    opacity: 0.6;
    transform: translate(10px, -10px);
  }
  .icon:hover .layer span:nth-child(4) {
    opacity: 0.8;
    transform: translate(15px, -15px);
  }
  .icon:hover .layer span:nth-child(5) {
    opacity: 1;
    transform: translate(20px, -20px);
  }

  .layer span.fab {
    font-size: 30px;
    line-height: 55px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #1a1a1a;
    border-radius: 50%;
  }
  
  .user {
    display: flex;
    gap: 10px;
  }
  
  .img {
    width: 50px;
    height: 50px;
    font-size: 16px;
    font-weight: 800;
    border: 2px solid #2563eb;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #ffffff;
    color: #1a1a1a;
    letter-spacing: 1px;
  }
  
  .name {
    font-size: 17px;
    font-weight: 700;
    color: #ffffff;
  }
  
  .username {
    color: #a3a3a3;
    font-size: 14px;
  }
  
  .details {
    display: flex;
    flex-direction: column;
    gap: 0;
    color: #fff;
  }
  
  .about {
    color: #7dd3fc;
    padding-top: 5px;
    font-size: 14px;
  }
`;

export default Tooltip;