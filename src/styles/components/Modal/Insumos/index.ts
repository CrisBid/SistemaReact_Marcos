import styled from 'styled-components'

export const Pagina = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
  .paper{
      display: flex;
      flex-direction: column;
      justify-content: center;
      border-radius: 10px;
      align-items: center;
      margin-top: 5vw;
      background-color: ${props => props.theme.colors.background_box};
      padding: 1vw;
      .close{
          display: flex;
          width: 100%;
          margin-left: 180%;
        }
      .conteudo_interno{
        display: flex;
        flex-direction: column;
        h1{
          margin: 1vw;
          margin-right: 30vw;
          margin-top: 0vw;
          font-size: 30px;
          color: ${props => props.theme.colors.preto};
        }
  
      }
    }
`