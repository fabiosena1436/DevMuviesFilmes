// Header.jsx
import { Container, Li, Menu, MobileMenu, MobileIcon } from "./styles"
import { Link, useLocation } from "react-router-dom"
import Logo from "../../assets/logo.png"
import { useState } from "react"
import { FaBars, FaTimes } from 'react-icons/fa'

function Header() {
    const [changeBackground, setchangeBackground] = useState(false)
    const [isOpen, setIsOpen] = useState(false)
    const { pathname } = useLocation()

    window.onscroll = () => {
        if (!changeBackground && window.pageYOffset > 150) {
            setchangeBackground(true)
        }

        if(changeBackground && window.pageYOffset <= 150){
            setchangeBackground(false)
        }
    }

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    return (
        <Container changeBackground={changeBackground}>
            <img src={Logo} alt="Logo" />
            
            {/* Menu Desktop */}
            <Menu>
                <Li isActive={pathname === "/"}>
                    <Link to="/">Home</Link>
                </Li>
                
                <Li isActive={pathname.includes('Movies')}>
                    <Link to="/Movies">Filmes</Link>
                </Li>
                
                <Li isActive={pathname.includes('Series')}>
                    <Link to="/Series">Series</Link>
                </Li>
            </Menu>

            {/* Ícone do Menu Mobile */}
            <MobileIcon onClick={toggleMenu}>
                {isOpen ? <FaTimes /> : <FaBars />}
            </MobileIcon>

            {/* Menu Mobile */}
            <MobileMenu isOpen={isOpen}>
                <Li isActive={pathname === "/"}>
                    <Link to="/" onClick={toggleMenu}>Home</Link>
                </Li>
                
                <Li isActive={pathname.includes('Movies')}>
                    <Link to="/Movies" onClick={toggleMenu}>Filmes</Link>
                </Li>
                
                <Li isActive={pathname.includes('Series')}>
                    <Link to="/Series" onClick={toggleMenu}>Series</Link>
                </Li>
            </MobileMenu>
        </Container>
    )
}

export default Header