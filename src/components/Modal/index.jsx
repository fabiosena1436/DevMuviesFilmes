import { useEffect, useState } from "react"
import { Background, CloseIcon, Container } from "./styles"

import { CgClose } from "react-icons/cg";
import {  getMovieVideos } from "../../services/getDate";

function Modal({ movieId, setShowModal }) {
    const [movie, setMovie] = useState()
    useEffect(() => {
        async function getMovies() {

           setMovie(await getMovieVideos(movieId))

        }
        getMovies()
    }, [])


    return (
        <Background onClick={() => setShowModal(false)}>

            {movie && (
                <Container>
                    
                    <iframe
                        src={`https://www.youtube.com/embed/${movie[0].key}`}
                        title="Youtube Video Player"
                        height={'500px'}
                        width={'100%'}
                    >

                    </iframe>
                    <CloseIcon>
                    <CgClose />
                    </CloseIcon>
                </Container>
            )}
        </Background>
    )
}

export default Modal