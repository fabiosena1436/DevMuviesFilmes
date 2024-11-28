// styles.js
import styled from "styled-components"

export const Container = styled.div`
    min-height: 100px;
    z-index: 999;
    position: fixed;
    top: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 50px;
    background-color: ${props => props.changeBackground ? '#000' : 'transparent'};
    transition: background-color 1s ease-in-out;
    width: 100%;

    img {
        width: 25%;
        max-width: 150px;
    }

    @media (max-width: 768px) {
        padding: 15px 20px;
        img {
        width: 50%;
    }
    }
`

export const Menu = styled.ul`
    display: flex;
    list-style: none;
    gap: 50px;

    @media (max-width: 768px) {
        display: none;
    }
`

export const MobileIcon = styled.div`
    display: none;
    color: white;
    font-size: 1.8rem;
    cursor: pointer;
    z-index: 100;

    @media (max-width: 768px) {
        display: block;
    }
`

export const MobileMenu = styled.ul`
    display: none;

    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 30px;
        background-color: #000;
        position: fixed;
        top: 0;
        right: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
        width: 100%;
        height: 100vh;
        transition: right 0.3s ease-in-out;
        list-style: none;
       
    }
`

export const Li = styled.li`
    font-weight: 600;
    cursor: pointer;
    font-size: 2rem;
    position: relative;

    a {
        text-decoration: none;
        color: #ffffff;
    }

    &::after {
        content: '';
        height: 3px;
        width: ${(props) => (props.isActive ? '100%' : '0')};
        background-color: #189b20;
        position: absolute;
        bottom: -10px;
        left: 50%;
        transform: translate(-50%);
        transition: width 0.5s ease-in-out;
    }

    &:hover::after {
        width: 100%;
    }

    @media (max-width: 768px) {
        font-size: 1.5rem;
    }
`