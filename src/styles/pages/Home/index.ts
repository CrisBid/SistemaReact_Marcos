import styled from 'styled-components'

export const Pagina = styled.div`
  display: flex;
  margin-left: 18%;
  margin-top: 7%;
`

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-right: 2vw;
  .navegacao{
    margin-bottom: 3vh;
    h1{
      color: #000000;
    }
  }

  .collun{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .conteudo{
    display: flex;
    width: 52vw;
    padding: 0.5vw;
    background-color: ${props => props.theme.colors.background_box};
    justify-content: center;
    border-radius: 10px;
    border: 1px solid ${props => props.theme.colors.bordas};
    .conteudo_interno{
      display: flex;
      flex-direction: column;
    }
    h1{
      color: #000000;
    }
  }

  .conteudo-lateral{
    display: flex;
    height: 50vh;
    width: 25vw;
    padding: 2vw;
    background-color: ${props => props.theme.colors.background_box};
    justify-content: center;
    border-radius: 10px;
    border: 1px solid ${props => props.theme.colors.bordas};
    .conteudo_interno{
      display: flex;
      flex-direction: column;
    }
    .calendario{
      display: flex;
      width: 20vw;
    }
    h1{
      color: #000000;
    }
  }
`

export const BoxContainer = styled.div`
display: flex;
flex-direction: row;
margin-bottom: 2vw;
justify-content: space-between;
.box-grafico{
  display: flex;
  width: 10vw;
}
.box-text{
  p{
    color: rgba(99,99,99,0.9);
  }
  h1{
    color: rgb(0, 102, 204);
  }
}
 .box{
  display: flex;
  flex-direction: row;
  height: 30vh;
  width: 38vw;
  padding: 2vw;
  background-color: ${props => props.theme.colors.background_box};
  align-items: center;
  border-radius: 10px;
  h2{
    margin-top: 1vw;
    color: #000000;

  }
  h3{
    margin-top: 1vw;
    color: #000000;
  }
 }

 .linha{
    display: flex;
    height: 0.3vh;
    width: 38vw;
    background-color: rgba(99,99,99,0.4);
 }
 .box-link{
  display: flex;
  flex-direction: row;
  height: 8vh;
  width: 38vw;
  padding: 2vw;
  background-color: ${props => props.theme.colors.background_box};
  align-items: center;
  border-radius: 10px;
  a{
    display:  flex;
    color: rgb(50, 125, 255);
    align-items: center;
  }
 }
`
