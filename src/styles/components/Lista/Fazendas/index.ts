import styled from 'styled-components';

export const Pagina = styled.div`
    display: flex;
    flex-direction:column;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    .root{
        display: flex;
        flex-direction: column;
        background-color: ${props => props.theme.colors.background_box};
    }
    .secao{
        display: flex;
        padding-top: 1vw;
        padding-bottom: 1vw;
        background-color: ${props => props.theme.colors.background_box};
    }
    .secao:hover{
        background-color: ${props => props.theme.colors.cinza_claro}
    }
    .checkbox{

    }
    .primeiro{
        margin-left: 2vw;
    }
    .segundo{
        margin-left: 0vw;
    }
    .terceiro{
        margin-left: 0vw;
    }
    .quarto{
        margin-left: 0vw;
        margin-right: 10vw;
    }
`

export const Cabecario = styled.div`
    display: flex;
    justify-content: space-between;
    padding-top: 0.2vw;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    margin: 0.5vw;
    align-items: center;
    margin-right: 15vw;
        button{
        height: 1.5vw;
        width: 15.5vw;
        background-color: ${props => props.theme.colors.background_box};
        color: ${props => props.theme.colors.preto};
        }
`

export const Borda = styled.div`
    width: 100%;
    padding-top: 5px;
    background-color: ${props => props.theme.colors.preto};

`

export const Borda_Fina = styled.div`
    width: 100%;
    padding-top: 2px;
    background-color: ${props => props.theme.colors.cinza_escuro};

`