import styled from 'styled-components';

export const Pagina = styled.div`
 .root{
   flex-direction: column;
 }
 .checkbox{
    margin-left: 1vw;
 }
`

export const Pagina1 = styled.div`
  display: flex;
  width: 100%;
  margin-top: 1vw;
  margin-bottom: 1vw;
  justify-content: space-between;
  .Itens{
    align-self: center;
  }
  .Itens1{
    align-self: center;
  }
  .Itens2{
    align-self: center;
  }
`

export const Botoes = styled.div`
  display: flex;
`

export const Selecionados = styled.div`
  display: flex;
  .titlep{
    
  }
  .Edit_buttons{
    display: flex;
    flex-direction: row;
  }
  .Espacamento{
  }
`

export const Pagina2 = styled.div`
`

export const Pagina3 = styled.div`
    .root{
      padding-Left: 2vw;
      padding-Right: 2vw;
    }
    .highlight{
      color: ${props => props.theme.colors.preto};
      background-Color: ${props => props.theme.colors.background_box};
    }
    .title{
      display: flex;
      background-Color: ${props => props.theme.colors.preto};
    }
`

export const Pagina4 = styled.div`
  display: flex;
    .paper{
      display: flex;
      margin-Bottom: 2vw;
    }
    .table{
      min-Width: 750;
    }
    .visuallyHidden{
      border: 0;
      clip: 'rect(0 0 0 0)';
      height: 1;
      margin: -1;
      overflow: 'hidden';
      padding: 0;
      position: 'absolute';
      top: 20;
      width: 1;
    }
`

