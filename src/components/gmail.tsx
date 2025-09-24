import React from 'react';
import styled from 'styled-components';

const Tooltip = () => {
  return (
    <StyledWrapper>
      <div className="tooltip-container">
        <div className="tooltip">
          <div className="profile">
            <div className="user">
              <div className="img">Gmail</div>
              <div className="details">
                <div className="name">User</div>
                <div className="username">user@gmail.com</div>
              </div>
            </div>
            <div className="about">500+ Emails</div>
          </div>
        </div>
        <div className="text">
          <a className="icon" href="#">
            <div className="layer">
              <span />
              <span />
              <span />
              <span />
              <span className="gmailSVG">
                <svg viewBox="0 0 40 40" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg">
                  <linearGradient gradientUnits="userSpaceOnUse" y2="2" y1="38" x2="20" x1="20" id="gmailGradient">
                    <stop stopColor="#1a1a1a" offset={0} />
                    <stop stopColor="#1a1a1a" offset={1} />
                  </linearGradient>
                  <rect width="40" height="40" rx="8" fill="url(#gmailGradient)" />
                  <path d="M30 10H10c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h20c1.1 0 2-.9 2-2V12c0-1.1-.9-2-2-2zm0 4l-10 6.25L10 14v-2l10 6.25L30 12v2z" fill="#dc2626" />
                </svg>
              </span>
            </div>
            <div className="text">Gmail</div>
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
    border: 1px solid #dc2626;
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
  
  .icon .layer {
    width: 55px;
    height: 55px;
    border: 3px solid #dc2626;
    border-radius: 50%;
    transition: transform 0.3s, border 0.3s ease, box-shadow 0.3s ease;
    box-shadow: 0 0 15px rgba(220, 38, 38, 0.4), 0 0 20px rgba(220, 38, 38, 0.3);
    background: #1a1a1a;
  }

  .icon:hover .layer {
    transform: rotate(-35deg) skew(20deg);
    box-shadow: 0 0 25px rgba(220, 38, 38, 0.6), 0 0 35px rgba(220, 38, 38, 0.4);
    border-color: #b91c1c;
  }

  .layer span {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    border: 1px solid #dc2626;
    border-radius: 50%;
    transition: all 0.3s;
  }

  .layer span,
  .text {
    color: #dc2626;
    border-color: #dc2626;
  }

  .icon:hover .layer span {
    box-shadow: -1px 1px 3px rgba(220, 38, 38, 0.3);
  }

  .icon .text {
    position: absolute;
    left: 50%;
    bottom: -5px;
    opacity: 0;
    font-weight: 500;
    transform: translateX(-50%);
    transition: bottom 0.3s ease, opacity 0.3s ease;
    color: #dc2626;
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

  .gmailSVG {
    font-size: 25px;
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
    font-size: 12px;
    font-weight: 800;
    border: 2px solid #dc2626;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #ffffff;
    color: #1a1a1a;
    letter-spacing: 0.5px;
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
    color: #fca5a5;
    padding-top: 5px;
    font-size: 14px;
  }
`;

export default Tooltip;