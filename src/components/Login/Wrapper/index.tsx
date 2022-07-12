import * as Styled from '../../../styles/components/Login/Wrapper';
import Agro from '../../../../public/Login/agro.png'
import Image from 'next/image';
export type WrapperProps = {
  children: React.ReactNode;
};

export function Wrapper({ children }: WrapperProps) {
  return (
    <Styled.Wrapper>
      <div className='image'>
        <Image src={Agro} alt=""/>
      </div>
      {children}
    </Styled.Wrapper>
  );
}