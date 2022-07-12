import styled from 'styled-components'

export const Menu = styled.div`
  align-content: center;
  height: 40vw;
  width: 15vw;
  margin-top: 2vw;
  border-radius: 20px;
  margin-right: 2vw;
  background-color: ${props => props.theme.colors.cinza};
  p {
    margin-top: 10px;
    font-size: 20px;
    margin-left: 4vw;
  }
  button {
    width: 10vw;
    height: 5vh;
    margin-left: 2vw;
    margin-top: 2vw;
    background-color: ${props => props.theme.colors.primary};
  }
`
