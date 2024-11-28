import styled, { keyframes } from "styled-components";

const scale = keyframes`
    from {
        transform: scale(0);
    }
    to {
        transform: scale(1);
    }
`

export const Background = styled.div`
    background-image: url(${(props) => props.img});
    height: 100vh;
    background-position: center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
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
`

export const Container = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 100%;
    max-width: 1500px;
    width: 90%;
    margin: 0 auto;
    padding: 20px;

    @media (max-width: 1024px) {
        width: 95%;
        gap: 20px;
    }

    @media (max-width: 768px) {
        flex-direction: column-reverse;
        justify-content: center;
        padding: 40px 20px;
    }

    @media (max-width: 480px) {
        width: 100%;
        padding: 20px 15px;
        justify-content: flex-end;
    }
`

export const Info = styled.div`
    z-index: 2;
    width: 50%;
    padding: 20px;

    h1 {
        font-size: clamp(2rem, 5vw, 4rem);
        font-weight: 700;
        color: #ffffff;
        margin-bottom: 20px;
        line-height: 1.2;
    }

    p {
        font-size: clamp(1rem, 2vw, 1.2rem);
        font-weight: 500;
        color: #ffffff;
        margin: 20px 0;
        line-height: 1.5;
        max-width: 600px;
    }

    @media (max-width: 1024px) {
        padding: 15px;
    }

    @media (max-width: 768px) {
        width: 100%;
        text-align: center;
        
        p {
            margin: 20px auto;
            text-align: justify;
        }
    }

    @media (max-width: 480px) {
        padding: 10px;
        
        h1 {
            margin-bottom: 15px;
        }
    }
`

export const Poster = styled.div`
    z-index: 2;
    max-width: 400px;
    width: 40%;

    img {
        width: 100%;
        height: auto;
        border-radius: 20px;
        box-shadow: rgb(100 100 111 / 20%) 0px 7px 29px 0px;
        animation: ${scale} 0.5s linear;

   
    }

    @media (max-width: 1024px) {
        width: 45%;
    }

    @media (max-width: 768px) {
        width: 60%;
        max-width: 350px;
        margin-bottom: 30px;
    }

    @media (max-width: 480px) {
        width: 70%;
        max-width: 300px;
        margin-bottom: 20px;
    }
`

export const ContainerButtons = styled.div`
    display: flex;
    gap: 20px;
    margin-top: 30px;

    @media (max-width: 768px) {
        justify-content: center;
        gap: 15px;
    }

    @media (max-width: 480px) {
        flex-direction: column;
        gap: 10px;
        
        button {
            width: 100%;
            margin: 0 auto;
        }
    }
`