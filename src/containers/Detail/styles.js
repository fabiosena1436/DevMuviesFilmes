import styled, { keyframes } from "styled-components"

const scale = keyframes`
  from { transform: scale(0); }
  to { transform: scale(1); }
`

export const Background = styled.div`
  background-image: url(${(props) => props.image});
  height: 50vh;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 150px;
    background-image: linear-gradient(to top, #0f0f0f, rgba(0, 0, 0, 0));
  }

  @media (max-width: 768px) {
    height: 40vh;
  }
`

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 100%;
  max-width: 1500px;
  margin-top: -150px;
  padding: 0 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    margin-top: -100px;
  }
`

export const Cover = styled.div`
  padding: 20px;
  display: flex;
  align-items: flex-start;
  height: 100%;
  z-index: 99;

  img {
    width: 450px;
    border-radius: 30px;
    box-shadow: rgb(100 100 111 / 20%) 0px 7px 29px 0px;
    animation: ${scale} 0.5s linear;
  }

  @media (max-width: 768px) {
    padding: 10px;
    img {
      width: 100%;
      max-width: 300px;
    }
  }
`

export const Info = styled.div`
  padding: 20px;
  width: 50%;
  z-index: 99;
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  h2 {
    font-size: 50px;
    font-weight: 400;
    color: #ffffff;
  }

  p {
    font-weight: 700;
    color: #ffffff;
    margin-top: 20px;
    margin-bottom: 30px;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 10px;

    h2 {
      font-size: 30px;
      text-align: center;
    }

    p {
      font-size: 14px;
      text-align: justify;
    }
  }
`

export const ContainerMovies = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  width: 100%;

  div {
    display: flex;
    flex-direction: column;
    max-width: 1000px;
    width: 100%;
    height: 100%;
    margin: 20px 0;
  }

  h4 {
    color: #ffffff;
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 10px;
  }

  @media (max-width: 768px) {
    padding: 10px;

    div {
      margin: 10px 0;
    }

    h4 {
      font-size: 16px;
    }

    iframe {
      height: 250px !important;
    }
  }
`