import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { remover, editar } from '../../store/reducers/contatos'
import ContatoClass from '../../models/Contato'
import variaveis from '../../styles/variaveis'
import { Botao, BotaoSalvar, ContainerBotoes } from '../../styles'
import * as S from './styles'

type Props = ContatoClass

const Contato = ({
  id,
  nome: nomeOriginal,
  email: emailOriginal,
  telefone: telefoneOriginal
}: Props) => {
  const dispatch = useDispatch()
  const [estaEditando, setEstaEditando] = useState(false)
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')

  useEffect(() => {
    if (nomeOriginal.length > 0) {
      setNome(nomeOriginal)
    }
    if (emailOriginal.length > 0) {
      setEmail(emailOriginal)
    }
    if (telefoneOriginal.toString().length > 0) {
      setTelefone(telefoneOriginal)
    }
  }, [nomeOriginal, emailOriginal, telefoneOriginal])

  function cancelarEdicao() {
    setEstaEditando(false)
    setNome(nomeOriginal)
    setEmail(emailOriginal)
    setTelefone(telefoneOriginal)
  }

  function destaqueEdicao() {
    return {
      color: estaEditando ? `${variaveis.verde}` : ''
    }
  }

  return (
    <S.Card>
      <S.Nome
        disabled={!estaEditando}
        style={destaqueEdicao()}
        value={nome}
        onChange={(evento) => setNome(evento.target.value)}
      />
      <S.EmailTelefone
        disabled={!estaEditando}
        style={destaqueEdicao()}
        value={email}
        onChange={(evento) => setEmail(evento.target.value)}
      />
      <S.EmailTelefone
        disabled={!estaEditando}
        style={destaqueEdicao()}
        value={telefone}
        onChange={(evento) => setTelefone(evento.target.value)}
      />
      <S.BarraAcoes>
        {estaEditando ? (
          <>
            <ContainerBotoes>
              <BotaoSalvar
                onClick={() => {
                  dispatch(
                    editar({
                      id,
                      nome,
                      email,
                      telefone
                    })
                  )
                  setEstaEditando(false)
                }}
              >
                Salvar
              </BotaoSalvar>
              <S.BotaoCancelarRemover onClick={cancelarEdicao}>
                Cancelar
              </S.BotaoCancelarRemover>
            </ContainerBotoes>
          </>
        ) : (
          <>
            <ContainerBotoes>
              <Botao onClick={() => setEstaEditando(true)}>Editar</Botao>
              <S.BotaoCancelarRemover onClick={() => dispatch(remover(id))}>
                Remover
              </S.BotaoCancelarRemover>
            </ContainerBotoes>
          </>
        )}
      </S.BarraAcoes>
    </S.Card>
  )
}

export default Contato
