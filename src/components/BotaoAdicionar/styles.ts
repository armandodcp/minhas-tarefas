import { Link } from 'react-router-dom'
import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const Circulo = styled(Link)`
  height: 32px;
  width: 32px;
  background-color: ${variaveis.verde};
  color: #fff;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  text-decoration: none;
  float: right;
  margin: 32px 0;
`
