import styled, { createGlobalStyle } from 'styled-components'
import variaveis from './variaveis'

const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
  }
`

export const Container = styled.main`
  padding: 0 40px;
  width: 50vw;
  height: 96vh;
  margin: 16px auto;
  border: solid 1px #eee;
  border-radius: 8px;
  overflow-y: scroll;

  @media (max-width: 768px) {
    margin: 0;
    border: none;
    width: 100%;
    height: 100%;
  }
`

export const Titulo = styled.h2`
  display: block;
  margin-top: 40px;
  margin-bottom: 40px;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
`

export const Campo = styled.input`
  padding: 8px;
  border-radius: 8px;
  width: 100%;
  border: solid 1px #ddd;
`

export const Botao = styled.button`
  font-weight: bold;
  font-size: 12px;
  color: #fff;
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  background-color: ${variaveis.azulEscuro};
  border-radius: 8px;
  margin-right: 8px;
  width: 128px;

  @media (max-width: 768px) {
    width: 100%;
  }
`

export const BotaoSalvar = styled(Botao)`
  background-color: ${variaveis.verde};
`

export const ContainerBotoes = styled.div`
  display: flex;
  justify-content: flex-end;

  @media (max-width: 768px) {
    display: block;
  }
`

export default EstiloGlobal
