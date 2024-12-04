import styled from "styled-components"



export const Container = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   

   img{
      border-radius: 30px;
      width: 330px;
      height: 100%;
   }

   h3{
      color: #ffffff;
      margin-top: 15px;
      @media (max-width: 1024px) {
        font-size: 0.8rem;
    }
   }
`
