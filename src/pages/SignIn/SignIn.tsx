import React, { FC } from 'react';
import { FiLock, FiLogIn, FiMail } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import logoImg from '../../assets/logo.svg';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import { Background, Container, Content } from './SignIn.style';

const SignIn: FC<{ title?: string }> = ({ title }) => (
  <Container>
    <Background />

    <Content>
      <img src={logoImg} alt="logo" />

      <form action="">
        <h1>Faça seu logon</h1>

        <Input name="Email" type="email" placeholder="Email" icon={FiMail} />
        <Input
          name="Password"
          type="password"
          placeholder="Senha"
          icon={FiLock}
        />
        <Button type="submit">Entrar</Button>
        <Link to="/forgot">Esqueci minha senha</Link>
      </form>
      <Link to="/signup">
        <FiLogIn />
        Criar conta
      </Link>
    </Content>
  </Container>
);

export { SignIn };
