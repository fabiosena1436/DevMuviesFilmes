import { Swiper, SwiperSlide } from "swiper/react"
import { Container } from "./styles"
import Card from "../Card"
import { useNavigate } from 'react-router-dom'

function Slider({ info, title }) {
    const navigate = useNavigate()

    const handleCardClick = (item) => {
        if (item.title) {
            navigate(`/detalhe/${item.id}`)
        } else if (item.name) {

            navigate(`/serie/${item.id}`)
        } else {
            navigate(`/detalhe/${item.id}`)
        }
    }

    return (
        <Container>
            <h2>{title}</h2>
            <Swiper
                grabCursor
                spaceBetween={10}
                slidesPerView={'auto'}
                className="swiper"
               
            >
                {info.map((item, index) => (
                    <SwiperSlide key={index}>
                        <Card
                            item={item}
                            onClick={() => handleCardClick(item)}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </Container>
    )
}

export default Slider