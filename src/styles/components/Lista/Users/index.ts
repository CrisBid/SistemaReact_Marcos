import styled from 'styled-components';

export const Pagina = styled.div`
    .root{
        width: 100%;
        max-Width: 360;
        background-Color: white;
    }
    .secao{
        border-radius: 10px;
    }
    .avatar{
        margin-right: 2vw;
    }
    .button{
        width: 5vw;
        height: 1.5vw;
        border-radius: 10px;
        padding: 1vw;
        background-color: ${props => props.theme.colors.cinza};
        color: ${props => props.theme.colors.text};
    }
`