import styled from "styled-components"

export const Title = styled.h4`

    color: #ffffff;
    font-size: 28px;
    font-size: 700;
`

export const Container = styled.div`
    display: flex;
    margin-top: 30px;
    gap: 10px;
    overflow-x: hidden;
    width: 100%;

    div {
        display: flex;
        flex-direction: column;
    }

    p {
        color: #ffffff;
        @media (max-width: 768px) {
              font-size: 0.6rem;
              
            } 
    }

    img {
        height: 200px;
        @media (max-width: 768px) {
              height: 90px;
              
            } 
    }
`





