import { useEffect, useState } from "react"
import {getSerieCredits, getSeriesById, getSerieSimilar, getSerieVideos } from "../../services/getDate"
import { useParams, useNavigate } from "react-router-dom"
import { Background, Container, ContainerMovies, Cover, Info } from "./styles"
import { getImages } from '../../utils/getImages'
import SpanGenres from "../../components/SpanGenres"
import Credits from "../../components/Credits"
import Slider from "../../components/Slider"


function DetailSerie() {

    const { id } = useParams()
    const navigate = useNavigate()

    const handleMovieClick = (serieId) => {
        navigate(`/detalhe/${serieId}`)
        window.scrollTo({ top: 0 })
    }

    const [serie, setMovie] = useState()
    const [serieVideos, setSerieVideos] = useState()
    const [serieCredits, setSerieCreditis] = useState()
    const [serieSimilar, setSerieSimilar] = useState()

    useEffect(() => {


        async function getAllData() {

            Promise.all([
                getSeriesById(id),
                getSerieVideos(id),
                getSerieCredits(id),
                getSerieSimilar(id),

            ])
                .then(([Movie, videos, creditis, similar]) => {

                    setMovie(Movie)
                    setSerieVideos(videos)
                    setSerieCreditis(creditis)
                    setSerieSimilar(similar)

                })
                .catch((error) => console.error(error))

        }
        getAllData()
    }, [id])
    return (
        <>
            {movie && (
                <>
                    <Background image={getImages(serie.backdrop_path)} />
                    <Container>
                        <Cover>
                            <img src={getImages(serie.poster_path)} alt="imgem-poster" />
                        </Cover>
                        <Info>
                            <h2>{serie.title}</h2>
                            <SpanGenres genres={serie.genres} />
                            <p>{serie.overview}</p>
                            <Credits credits={serieCredits} />
                        </Info>
                    </Container>

                    <ContainerMovies>
                        {serieVideos && serieVideos.map(video => (
                            <div key={video.id}>
                                <h4>{video.name}</h4>

                                <iframe
                                    src={`https://www.youtube.com/embed/${video.key}`}
                                    title="Youtube Video Player"
                                    height={'500px'}
                                    width={'100%'}
                                >

                                </iframe>
                            </div>
                        ))}
                    </ContainerMovies>
                    {serieSimilar && <Slider info={serieSimilar} title={'Series similares'}  onClick={handleMovieClick} />}
                </>
            )}
        </>
    )
}

export default DetailSerie