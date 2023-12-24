import styled from 'styled-components';
import backgroundImg from "./../../../Assets/wallpapers/1.jpg";

export const StLandingContainer = styled.div`
  width: 100%;
  height: 100vh;
  background: url(${backgroundImg}) center/cover no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  animation: backgroundAnimation 20s linear infinite;
  
  @keyframes backgroundAnimation {
    0% {
      background-position: 0% 50%;
    }
    100% {
      background-position: 100% 50%;
    }
  }
`;

