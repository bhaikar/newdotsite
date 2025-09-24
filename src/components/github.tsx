import React from 'react';
import styled from 'styled-components';

const Tooltip = () => {
  return (
    <StyledWrapper>
      <div className="tooltip-container">
        <div className="tooltip">
          <div className="profile">
            <div className="user">
              <div className="img">GH</div>
              <div className="details">
                <div className="name">User</div>
                <div className="username">@username</div>
              </div>
            </div>
            <div className="about">500+ Repositories</div>
          </div>
        </div>
        <div className="text">
          <a href="https://github.com/Devops-Malnad" className="icon">
            <div className="layer">
              <span />
              <span />
              <span />
              <span />
              <span className="fab fa-github">
                <svg preserveAspectRatio="xMidYMid" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height={28} width={28}>
                  <path fill="#ffffff" d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </span>
            </div>
            <div className="text">GitHub</div>
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
    box-shadow:
      inset 5px 5px 5px rgba(0, 0, 0, 0.2),
      inset -5px -5px 15px rgba(255, 255, 255, 0.1),
      5px 5px 15px rgba(0, 0, 0, 0.3),
      -5px -5px 15px rgba(255, 255, 255, 0.1);
  }

  .profile {
    background: #0d1117;
    border-radius: 10px 15px;
    padding: 10px;
    border: 1px solid #21262d;
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
    border: 3px solid #f0f6fc;
    border-radius: 50%;
    transition: transform 0.3s, border 0.3s ease, box-shadow 0.3s ease;
    box-shadow: 0 0 15px rgba(240, 246, 252, 0.3), 0 0 20px rgba(240, 246, 252, 0.2);
    background: #0d1117;
  }
  
  .icon:hover .layer {
    transform: rotate(-35deg) skew(20deg);
    box-shadow: 0 0 25px rgba(240, 246, 252, 0.6), 0 0 35px rgba(240, 246, 252, 0.4);
    border-color: #58a6ff;
  }
  
  .layer span {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    border: 1px solid #21262d;
    border-radius: 50%;
    transition: all 0.3s;
  }

  .layer span,
  .text {
    color: #f0f6fc;
    border-color: #21262d;
  }

  .icon:hover .layer span {
    box-shadow: -1px 1px 3px rgba(88, 166, 255, 0.3);
    border-color: #58a6ff;
  }
  
  .icon .text {
    position: absolute;
    left: 50%;
    bottom: -5px;
    opacity: 0;
    font-weight: 500;
    transform: translateX(-50%);
    transition:
      bottom 0.3s ease,
      opacity 0.3s ease;
    color: #f0f6fc;
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
    background: #0d1117;
    border-radius: 50%;
  }
  
  .user {
    display: flex;
    gap: 10px;
  }
  
  .img {
    width: 50px;
    height: 50px;
    font-size: 18px;
    font-weight: 700;
    border: 1px solid #21262d;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #f0f6fc;
    color: #0d1117;
  }
  
  .name {
    font-size: 17px;
    font-weight: 700;
    color: #f0f6fc;
  }
  
  .username {
    color: #7d8590;
    font-size: 14px;
  }
  
  .details {
    display: flex;
    flex-direction: column;
    gap: 0;
    color: #f0f6fc;
  }
  
  .about {
    color: #7d8590;
    padding-top: 5px;
    font-size: 14px;
  }
`;

export default Tooltip;