import { useEffect, useState } from "react"
import { getMovieById, getMovieCreditis, getMovieSimilar, getMovieVideos } from "../../services/getDate"
import { useParams, useNavigate } from "react-router-dom"
import { Background, Container, ContainerMovies, Cover, Info } from "./styles"
import { getImages } from '../../utils/getImages'
import SpanGenres from "../../components/SpanGenres"
import Credits from "../../components/Credits"
import Slider from "../../components/Slider"


function Detail() {

    const { id } = useParams()
    const navigate = useNavigate()

    const handleMovieClick = (movieId) => {
        navigate(`/detalhe/${movieId}`)
        window.scrollTo({ top: 0 })
    }

    const [movie, setMovie] = useState()
    const [movieVideos, setMovieVideos] = useState()
    const [movieCredits, setMovieCreditis] = useState()
    const [movieSimilar, setMovieSimilar] = useState()

    useEffect(() => {


        async function getAllData() {

            Promise.all([
                getMovieById(id),
                getMovieVideos(id),
                getMovieCreditis(id),
                getMovieSimilar(id),

            ])
                .then(([Movie, videos, creditis, similar]) => {

                    setMovie(Movie)
                    setMovieVideos(videos)
                    setMovieCreditis(creditis)
                    setMovieSimilar(similar)

                })
                .catch((error) => console.error(error))

        }
        getAllData()
    }, [id])
    return (
        <>
            {movie && (
                <>
                    <Background image={getImages(movie.backdrop_path)} />
                    <Container>
                        <Cover>
                            <img src={getImages(movie.poster_path)} alt="imgem-poster" />
                        </Cover>
                        <Info>
                            <h2>{movie.title}</h2>
                            <SpanGenres genres={movie.genres} />
                            <p>{movie.overview}</p>
                            <Credits credits={movieCredits} />
                        </Info>
                    </Container>

                    <ContainerMovies>
                        {movieVideos && movieVideos.map(video => (
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
                    {movieSimilar && <Slider info={movieSimilar} title={'Filmes similares'}  onClick={handleMovieClick} />}
                </>
            )}
        </>
    )
}

export default Detail