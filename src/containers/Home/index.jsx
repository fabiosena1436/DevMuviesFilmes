import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

import Button from "../../components/Button"
import Slider from "../../components/Slider"
import { getImages } from "../../utils/getImages"
import Modal from "../../components/Modal"


import {
    getMovies,
    getPersonPopular,
    getPopularSeries,
    getsetNowPlayingr,
    getTopMovies,
    getTopSeries
} from "../../services/getDate"

import {
    Background,
    Container,
    ContainerButtons,
    Info,
    Poster
} from "./styles"

function Home() {
    const [showModal, setShowModal] = useState(false)
    const [movie, setMovie] = useState()
    const [topMovies, setTopMovies] = useState()
    const [topSeries, setTopSeries] = useState()
    const [topPopularSeries, setPopularSeries] = useState()
    const [topPersonPopular, setPersonPopular] = useState()
    const [topNowPlaying, setNowPlayingr] = useState()
    const navigate = useNavigate()

    useEffect(() => {


        async function getAllData() {

            Promise.all([
                getMovies(),
                getTopMovies(),
                getTopSeries(),
                getPopularSeries(),
                getsetNowPlayingr(),
                getPersonPopular()
            ])
                .then(([Movie, TopMovies, TopSeries, PopularSeries, NowPlayingr, PersonPopular]) => {
                    setMovie(Movie)
                    setTopMovies(TopMovies)
                    setTopSeries(TopSeries)
                    setPopularSeries(PopularSeries)
                    setNowPlayingr(NowPlayingr)
                    setPersonPopular(PersonPopular)
                })
                .catch((error) => console.error(error))

        }
        getAllData()
    }, [])


    return (
        <>
            {movie && (

                <Background img={getImages(movie.backdrop_path)}>
                    {showModal && (
                        <Modal movieId={movie.id} setShowModal={setShowModal} />
                    )}
                    <Container>
                        <Info>
                            <h1>{movie.title}</h1>
                            <p>{movie.overview}</p>
                            <ContainerButtons>
                                <Button red={true} onClick={() => navigate(`/detalhe/${movie.id}`)}>Assista agora</Button>
                                <Button onClick={() => setShowModal(true)} red={false}>Assista ao Trailer</Button>
                            </ContainerButtons>
                        </Info>
                        <Poster>
                            <img src={getImages(movie.poster_path)} alt="imagem-do-poster" />
                        </Poster>
                    </Container>
                </Background>
            )}


            {topMovies && <Slider info={topMovies} title={'Top Filmes'} />}
            {topSeries && <Slider info={topSeries} title={'Top Series'} />}
            {topPopularSeries && <Slider info={topPopularSeries} title={'Top Series Populares'} />}
            {topNowPlaying && <Slider info={topNowPlaying} title={'Exibindo agora'} />}
            {topPersonPopular && <Slider info={topPersonPopular} title={'Top Artistas'} />}

            

        </>
    )
}

export default Home