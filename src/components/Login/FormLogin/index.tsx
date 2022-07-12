import React, { useEffect, useState } from 'react';
import EmailIcon from '@material-ui/icons/Email';
import LockIcon from '@material-ui/icons/Lock';

import { TextInput } from '../TextInput';
import * as Styled from '../../../styles/components/Login/FormLogin';
import {Button} from '@material-ui/core';
import { useRouter } from 'next/router'

export type FormLoginProps = {
  errorMessage?: string;
  onLogin?: (email: string, password: string) => Promise<void>;
};

export const FormLogin = ({ errorMessage, onLogin }: FormLoginProps) => {
  const [email, setEmail] = useState('');
  const router = useRouter()
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {

  };

  return (
    <Styled.Wrapper onSubmit={handleSubmit}>
      <div className='FormL'>
        <h1>Login Administrador</h1>
        <TextInput
          name="user-identifier"
          label="Seu e-mail"
          onInputChange={(v) => setEmail(v)}
          value={email}
          icon={<EmailIcon />}
          type="email"
        />
        <TextInput
          name="user-password"
          label="Sua senha"
          onInputChange={(v) => setPassword(v)}
          value={password}
          icon={<LockIcon />}
          type="password"
        />

        <Button onClick={() => router.push('/app/home')} variant="outlined">Login</Button>
      </div>
    </Styled.Wrapper>
  );
};