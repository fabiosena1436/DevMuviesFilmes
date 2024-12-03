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
    getAiringTodaySeries,


    getTopSeries
} from "../../services/getDate"

import {
    Background,
    Container,
    ContainerButtons,
    Info,
    Poster
} from "./styles"

function Series() {
    const [showModal, setShowModal] = useState(false)
    const [movie, setMovie] = useState()
    const [topSeries, setTopSeries] = useState()
    const [topPopularSeries, setPopularSeries] = useState()
    const [airingTodaySeries, setairingTodaySeries] = useState()
    const [topPersonPopular, setPersonPopular] = useState()
    const navigate = useNavigate()
    const [featuredShow, setFeaturedShow] = useState()

    useEffect(() => {


        async function getAllData() {

            Promise.all([
                getMovies(),
                getTopSeries(),
                getPopularSeries(),
                getAiringTodaySeries(),
                getPersonPopular()
            ])
                .then(([Movie, TopSeries, PopularSeries, AiringTodaySeries, PersonPopular]) => {
                    setFeaturedShow(TopSeries[0])
                    setMovie(Movie)
                    setTopSeries(TopSeries)
                    setPopularSeries(PopularSeries)
                    setairingTodaySeries(AiringTodaySeries)
                    setPersonPopular(PersonPopular)
                })
                .catch((error) => console.error(error))

        }
        getAllData()
    }, [])


    return (
        <>


            {featuredShow && (
                <Background img={getImages(featuredShow.backdrop_path)}>
                    {showModal && (
                        <Modal movieId={featuredShow.id} setShowModal={setShowModal} />
                    )}
                    <Container>
                        <Info>
                            <h1>{featuredShow.name}</h1>
                            <p>{featuredShow.overview}</p>
                            <ContainerButtons>
                                <Button red={true} onClick={() => navigate(`/serie/${featuredShow.id}`)}>
                                    Assista agora
                                </Button>
                                <Button onClick={() => setShowModal(true)} red={false}>
                                    Assista ao Trailer
                                </Button>
                            </ContainerButtons>
                        </Info>
                        <Poster>
                            <img
                                src={getImages(featuredShow.poster_path)}
                                alt="imagem-do-poster"
                            />
                        </Poster>
                    </Container>
                </Background>
            )}
            {airingTodaySeries && <Slider info={airingTodaySeries} title={'Series Populares'} />}
            {topSeries && <Slider info={topSeries} title={'Top Series'} />}
            {topPopularSeries && <Slider info={topPopularSeries} title={'Series Exibindo hoje'} />}
            {topPersonPopular && <Slider info={topPersonPopular} title={'Top Artistas'} />}



        </>
    )
}

export default Series