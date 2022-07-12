  
import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    width: 100%;
    .image{
      display: flex;
      top: 0;
      height: 100vh;
      width: 65vw;
    }
  `}
`;