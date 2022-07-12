import { signOut, useSession } from 'next-auth/client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import * as Styled from '../../../styles/components/Login/Menu';

export type MenuProps = {
  title?: string;
};

export const Menu = () => {
  const [session] = useSession();
  const [redirect, setRedirect] = useState('/');

  useEffect(() => {
    if (typeof window === 'undefined') return;

    setRedirect(encodeURI(window.location.pathname));
  }, []);

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    signOut({ redirect: true });
  };

  return (
    <Styled.Wrapper>
      {session ? (
        <a href="#" onClick={handleClick}>
          Sair
        </a>
      ) : (
        <Link
          href={{
            pathname: '/login/administrador',
            query: {
              redirect,
            },
          }}
        >
          <a>Login</a>
        </Link>
      )}
    </Styled.Wrapper>
  );
};