import styled from 'styled-components';

export const Conteudo = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  right: 0;
  left: 20;
  height: 60px;
  z-index:5;
  background: ${props => props.theme.colors.background_box};
  border-bottom: 5px solid rgba(0, 50, 90, 0.8);
  .grow{
      flex: 1;
    }
  .menu{
    background-Color: ${props => props.theme.colors.cinza};
  }
  .menuButton{
      margin-Right: theme.spacing(2);
    }
  .title{
      display: 'none';
    }
  .search{
    display: flex;
    flex-direction: row;
    align-items: center;
    border-Radius: "black";
    background-Color: "white";
  }
  .search:hover{
      background-Color: "white";
      margin-Right: theme.spacing(2);
      margin-Left: 0;
      width: '100%';
    }
    .searchIcon{
      margin-left: 2vw;
      padding: theme.spacing(0, 2);
      height: '100%';
      position: 'absolute';
      pointer-Events: 'none';
      display: 'flex';
      align-Items: 'center';
      justify-Content: 'center';
    }
    .inputRoot{
      color: 'inherit';
    }
    .inputInput{
      padding: theme.spacing(1, 1, 1, 0);
      // vertical padding + font size from searchIcon
      padding-Left: 1em;
      width: '100%';
    }
    .sectionDesktop{
      display: 'none';
    }
  
`;

export const Container = styled.div`
  width: 85%;
  position: fixed;
  top: 0;
  right: 0;
  left: 20;
  height: 60px;
  z-index:4;
  background: ${props => props.theme.colors.background_box};
  border-bottom: 5px solid rgba(0, 50, 90, 0.8);
`;

export const Content = styled.div`
  display: flex;
  height: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`;

export const OptionsContainer = styled.div`
  display: flex;
  align-items: center;
  p{
    color: ${props => props.theme.colors.cinza_escuro};
    margin-right: 10px;
  }
  .react_icon{
    color: ${props => props.theme.colors.cinza_escuro};
    width: 1.5vw;
  }
`;

export const Busca = styled.div`
  display: flex;
  align-items: center;
  .react_icon{
    color: ${props => props.theme.colors.cinza_escuro};
    width: 1.5vw;
  }
`;