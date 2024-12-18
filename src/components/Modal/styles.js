import styled from "styled-components"

export const Background = styled.div`
    height: 100vh;
    width: 100vw;
    z-index: 999;
    background-color: rgba(0,0,0,0.6);
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const Container = styled.div`
   background: #000;
   width: 70%;
   display: flex;
   justify-content: center;
   align-items: center;
   position: fixed;
   padding: 50px;
   max-width: 1200px;

   iframe{
    border: none;
   }
  
`
export const CloseIcon = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 24px;
  color: #fff;
  cursor: pointer;
  transition: transform 0.2s ease, color 0.2s ease;

  &:hover {
    transform: scale(1.2);
    color: #ff0000;
  }
`;
