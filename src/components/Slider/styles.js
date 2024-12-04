import styled from "styled-components"


export const Container = styled.div`

    background: #000;
    padding: 0 20px;


    h2{
        color: #ffffff;
        font-size: 1.6;
        margin: 40px 0 20px 20px;
    
    }

   .swiper-wrapper{
        display: flex;
        img{
            width: 300px;
            border-radius: 20px;
            @media (max-width: 1024px) {
             border-radius: 10px;
            }
    @media (max-width: 768px) {
        max-width: 150px;
    }

  }
   }


`

