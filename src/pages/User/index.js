import { useContext, useEffect } from 'react';

import { Title } from '../../components/Title';
import { AuthContext } from '../../Contexts/AuthContext';
import {  } from './styles';


export function User() {
  const { user } = useContext(AuthContext)

  return (
    <>
    <Title>Hello {user.email}</Title>
    </>
  );
}

