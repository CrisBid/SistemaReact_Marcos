import styled from 'styled-components'

export const Container = styled.div`
  position: fixed;
  background-color: ${props => props.theme.colors.cinza};
  top: 0;
  left: 0;
  bottom: 0;
  z-index:4;
  width: 16vw;
  padding-top: 26px;
`

export const MenuTitle = styled.div`
  display: flex;
  margin-left: 2vw;
  margin-top: 4vw;
  margin-bottom: 1vw;
  h1{
    color: ${props => props.theme.colors.text};

  }
  `

export const MenuItem = styled.div`
  display: flex;
  justify-content: center;
  cursor: pointer;
  color: #161823;
  display: flex;
  margin-bottom: 5px;
  flex-direction: column;
  .nav-link {
    display: flex;
    margin-left: 1vw;
    margin-right: 1vw;
    color: white;
    text-decoration: none;
    text-align: center;
    padding: 10px 20px;
    border-radius: 10px;
  }

  .active {
    background-color: ${props => props.theme.colors.selecao};
  }
  a:hover{
    background-color: ${props => props.theme.colors.hover};
  }

  p{
    margin-left: 1vw;
  }

  .react_icon{
    height: 1.8vw;
    width: 1.8vw;
  }

`

export const MenuUser = styled.div`
  display: flex;
  justify-content: space-between;
  position: fixed;
  width: 16vw;
  left: 0;
  bottom: 0;
  background: #1d1b31;
  transition: all 0.5s ease;
  .button_login{
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center; 
    margin: 1.5vw;
  }
  .button_user{
    display: flex;
    justify-content: flex-start;
    padding: 1vw 10px;
    overflow: hidden;
    .avatar{
      display: flex;
    }

    .profile-details{
      display: flex;
      align-items: center;
    }

    .img{
      height: 45px;
      width: 45px;
      object-fit: cover;
      border-radius: 6px;
      margin-right: 10px;
    }
  
    .name_job{
      margin-left: 1vw;
    }
    .name{
      display: flex;
      font-size: 15px;
      font-weight: 600;
      color: #fff;
      white-space: nowrap;
    }
    .job{
      display: flex;
      font-size: 10px;
      font-weight: 300;
      color: #fff;
      white-space: nowrap;
    }
  }

  .exit{
    display: flex;
    justify-content: center;
    align-items: center;
    .exit_icon{
      color: ${props => props.theme.colors.background_box};
    }
  }

`