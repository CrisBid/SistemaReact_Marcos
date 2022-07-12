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
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 2vw;
    h1{
    margin-right: 1vw;
    font-size: 20px;
    color: ${props => props.theme.colors.preto};
    }
  }
  .conteudo{
    display: flex;
    flex-direction:column;
    background-color: ${props => props.theme.colors.background_box};
    border-radius: 10px;
    border: 1px solid ${props => props.theme.colors.bordas};
    .conteudo_interno{
    }
    h1{
      margin: 1vw;
      font-size: 20px;
      color: ${props => props.theme.colors.preto};
      }
  }
`