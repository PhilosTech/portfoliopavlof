import styled from "styled-components";

export const Container = styled.section`
  padding-top: 15%;
  display: flex;
  justify-content: space-between;
  gap: 8rem;
  background: rgba(0,0,0,0);
  .hero-text{
    width: 100%;
    max-width: 48rem;
    & > p{
      font-size: 1.8rem;
    }
    h1{
      font-size: 6rem;
    }

    h3{
      font-size: 3rem;
      color:var(--aqua);
      margin: 1rem 0;
    }

    
    p.small-resume {
      margin-bottom: 1rem;
    }
  }
  .container-btn {
    display: flex;
    justify-content: space-between;
    max-width: 42rem;
  }
// New added
  .social-media{
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    padding-top:5rem;
    padding-left:1rem;

    img,span{
      font-size: 3rem;
      width: 3.5rem;
    }
  }


  .button{
    margin: 2rem 0 0 0;
    padding: 1.4rem 6rem;
    &.light {
        background: transparent;
    border: 1px solid var(--aqua);
    }
  }

  .hero-image{
    img{
      max-width: 500px;
    }
  }


  @media(max-width: 960px){
    display: block;
    margin-top: 15%;
    .hero-text{

      h1{
        font-size: 5rem;
      }
    }
    
    .hero-image{
      display: none;
    }
  }

  @media(max-width: 600px){
    margin-top: 35%;
  }
  @media(max-width: 480px){
    margin-top: 45%;
  }
`