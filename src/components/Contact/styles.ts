import styled from "styled-components";


export const Container = styled.section`
  margin-top: 10rem;

  header{
    text-align: center;
    h2{
      text-align: center;
      font-size: 4rem;
    }
    p{
      color: var(--aqua);
      font-weight: 500;
    }
  }

  .contacts{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    place-items: center;
    margin-top: 1.5rem;
    div{
      display: flex;
      align-items: center;
      justify-content: center;
      max-width: 30rem;
      gap: 2rem;
      background-color: var(--aqua);
      border-radius: 1.4rem;
      padding: 1.6rem 2.8rem;
      transition: background-color 0.25s;
      img{
        width: 4rem;
      }
      span{
        color: var(--black);
        font-weight: 500;
        &.phone{
          position: relative;
          &::before{
            content: '';
            position: absolute;
            width: 55%;
            height: 100%;
            right: -10px;
            background-color: var(--aqua);
            filter: blur(3.5px);
          }
        }
      }
      &:hover{
        filter: brightness(0.8);
        span{
          color: #FFF;
          &::before{
            content: none;
          }
        }
      }
    }
  }


  @media(max-width: 960px){
    .contacts{
      flex-direction: column;
      div{
        width: 100%;
        
      }
    }
  }
  
`

