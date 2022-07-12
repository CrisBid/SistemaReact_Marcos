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
  margin-right: 1vw;
  .navegacao{
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 1vw;
    h1{
    margin-right: 1vw;
    font-size: 20px;
    color: ${props => props.theme.colors.preto};
    }
  }
  .titulo{
    margin-bottom: 2vw;
    h1{
    margin-right: 1vw;
    font-size: 20px;
    color: ${props => props.theme.colors.preto};
    }
  }
  .pagina{
    display: flex;
    width: 100%;
  }
  .coluna_1{
    display: flex;
    flex-direction: column;
    .boxContainer{
      display: flex;
      margin-bottom: 2vw;
      .box{
        display: flex;
        width: 100%;
        flex-direction: column;
        padding: 1vw;
        margin-right: 2vw;
        background-color: ${props => props.theme.colors.background_box};
        border-radius: 10px;
        .box_interno{
          display: flex;
          flex-direction: column;
          .titulo{
            font-size: 18px;
            font-weight: 500;
            color: #000000;
            padding-right: 5vw;
          }
          .avatar_box{
            display: flex;
            justify-content: center;
            margin: 1vw;
            .avatar{
              border-radius: 100%;
          }
          }
          .nome{
            display: flex;
            justify-content: center;
            color: #000000;
            font-size: 13px;
          }
          .permissao{
            display: flex;
            justify-content: center;
            color: #3f3f3f;
            font-size: 11px;
            
          }
        }
        .box_interno_informacoes{
          display: flex;
          flex-direction: column;
          .titulo{
            font-size: 18px;
            font-weight: 500;
            color: #000000;
          }
          .info{
            display: flex;
            align-items: center;
            margin-top: 5px;
            color: #000000;
            font-size: 14px;
          }
          .icon{
            margin-right: 0.5vw;
            color: #000000;
            width: 16px;
          }
        }
      }
    }
  }
  .coluna_2{
    display: flex;
    width: 100%;
    flex-direction: column;
  }
  .conteudo{
    display: flex;
    flex-direction:column;
    background-color: ${props => props.theme.colors.background_box};
    border-radius: 10px;
    border: 1px solid ${props => props.theme.colors.bordas};
    .conteudo_interno{
    }
    .conteudo_interno_box{
      margin-top: 1vw;
      margin-left: 1vw;
      margin-right: 1vw;
    }
    h1{
      margin: 1vw;
      font-size: 20px;
      color: ${props => props.theme.colors.preto};
    }
  }
`
export const BoxContainer = styled.div`
display: flex;
flex-direction: row;
margin-bottom: 2vw;
justify-content: space-between;
 .box{
  display: flex;
  flex-direction: column;
  width: 15vw;
  background-color: ${props => props.theme.colors.background_box};
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  .button{
    padding: 1vw;
    margin: 1vw;
    border-radius: 10px;
  }
 }
`
