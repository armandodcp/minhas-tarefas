import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const Form = styled.form`
  width: 100%;
  font-weight: bold;
  font-size: 14px;
  color: #666666;

  input {
    margin: 4px 0;
  }

  button {
    margin-top: 48px;
  }

  @media (max-width: 768px) {
    button {
      margin-top: 8px;
    }
  }
`

export const MensagemErro = styled.p`
  color: ${variaveis.vermelho};
  font-size: 12px;
  margin-bottom: 8px;
  margin-left: 4px;
`
