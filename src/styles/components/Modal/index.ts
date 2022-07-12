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
      margin-top: 1vw;
      margin-bottom: 1vw;
      background-color: ${props => props.theme.colors.background_box};
      padding: 1vw;
      .cabecario{
          display: flex;
          width: 100%;
          .close{
            display: flex;
            color: #ee0000;
            margin-top: -0.5vw
          }
        }
      .conteudo_interno{
        display: flex;
        flex-direction: column;
        margin: 0.5vw;
        h1{
          margin: 1vw;
          margin-top: 0vw;
          margin-bottom: 0vw;
          font-size: 30px;
          color: ${props => props.theme.colors.preto};
        }
        .root{
            display: flex;
            flex-direction: column;
            justify-content: center;
            margin-top: 0.5vw;
            margin-left: 0.5vw;
            .input{
                margin-top: 0.5vw;
                margin-bottom: 0.5vw;
                margin-right: 2vw;
            }
            .input_t{
                margin-top: 0.5vw;
                margin-bottom: 2.5vw;
                margin-right: 2vw;
            }
            .input_date_m{
                width: 6vw;
                margin-top: 0.5vw;
                margin-bottom: 0.5vw;
                margin-right: 2vw;
            }.input_date_y{
                width: 10vw;
                margin-top: 0.5vw;
                margin-bottom: 0.5vw;
                margin-right: 2vw;
            }
            .button{
            }
        }
    }
    }
`