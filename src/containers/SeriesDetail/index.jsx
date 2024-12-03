import { useEffect, useState } from "react"
import { getTvSeriesById, getTvSeriesCredits, getTvSeriesSimilar, getTvSeriesVideos } from "../../services/getDate"
import { useParams, useNavigate } from "react-router-dom"
import { Background, Container, ContainerMovies, Cover, Info } from "./styles"
import { getImages } from '../../utils/getImages'
import SpanGenres from "../../components/SpanGenres"
import Credits from "../../components/Credits"
import Slider from "../../components/Slider"

function SeriesDetail() {
    const { id } = useParams()
    const navigate = useNavigate()

    const [series, setSeries] = useState()
    const [seriesVideos, setSeriesVideos] = useState()
    const [seriesCredits, setSeriesCredits] = useState()
    const [seriesSimilar, setSeriesSimilar] = useState()

    useEffect(() => {
        async function getAllData() {
            try {
                const [series, videos, credits, similar] = await Promise.all([
                    getTvSeriesById(id),
                    getTvSeriesVideos(id),
                    getTvSeriesCredits(id),
                    getTvSeriesSimilar(id),
                ])

                setSeries(series)
                setSeriesVideos(videos)
                setSeriesCredits(credits)
                setSeriesSimilar(similar)
            } catch (error) {
                console.error(error)
            }
        }
        getAllData()
    }, [id])

    return (
        <>
            {series && (
                <>
                    <Background image={getImages(series.backdrop_path)} />
                    <Container>
                        <Cover>
                            <img src={getImages(series.poster_path)} alt="imagem-poster" />
                        </Cover>
                        <Info>
                            <h2>{series.name}</h2>
                            <SpanGenres genres={series.genres} />
                            <p>{series.overview}</p>
                            <Credits credits={seriesCredits} />
                        </Info>
                    </Container>

                    <ContainerMovies>
                        {seriesVideos && seriesVideos.map(video => (
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

                    {seriesSimilar && seriesSimilar.length > 0 && (
                        <div style={{ marginTop: '4rem' }}>
                            <Slider 
                                info={seriesSimilar} 
                                title={'Séries Similares'}
                            />
                        </div>
                    )}
                </>
            )}
        </>
    )
}

export default SeriesDetail