import styled from 'styled-components'

export const Pagina = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 40vw;
  margin-top: 7vw;
  margin-bottom: 5vw;
  h1{
      margin-top: 1vw;
      margin-left: 6vw;
    }
  .root{
    height: '100vh',
  }
  .paper{
    margin: 2vw;
    display: 'flex';
    flex-Direction: 'column';
    align-Items: 'center';
  }
  .avatar{
    margin-left: 10vw;
    background-Color: '#ffffff';
  }
  .form{
    width: '100%'; // Fix IE 11 issue.
    margin-Top: 2vw;
  }
  .submit{
  }
`