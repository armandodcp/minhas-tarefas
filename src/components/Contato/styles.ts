import styled from 'styled-components'
import variaveis from '../../styles/variaveis'
import { Botao } from '../../styles'

export const Card = styled.div`
  background-color: #fcfcfc;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
  padding: 16px;
  margin-bottom: 32px;
  border-radius: 4px;
  }
`

export const Nome = styled.input`
  color: #000;
  font-size: 18px;
  font-weight: bold;
  width: 100%;
  resize: none;
  border: none;
  background-color: transparent;
`

export const EmailTelefone = styled.input`
  color: #8b8b8b;
  font-size: 14px;
  line-height: 24px;
  font-family: 'Roboto Mono', monospace;
  display: block;
  width: 100%;
  margin-bottom: 16px;
  margin-top: 16px;
  resize: none;
  border: none;
  background-color: transparent;
`

export const BarraAcoes = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding-top: 16px;
`

export const BotaoCancelarRemover = styled(Botao)`
  background-color: ${variaveis.vermelho};
  width: 128px;

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 8px;
  }
`
