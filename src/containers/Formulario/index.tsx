import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Form, MensagemErro } from './styles'
import { Titulo, Campo } from '../../styles'
import { ContainerBotoes, Botao, BotaoSalvar } from '../../styles'
import { cadastrar } from '../../store/reducers/contatos'

const Formulario = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')
  const [nomeCompleto, setNomeCompleto] = useState(true)

  const validarNomeCompleto = (valor: string) => {
    const partesNome = valor.trim().split(' ')
    if (
      partesNome.length >= 2 &&
      partesNome.every((parte) => parte.length > 1)
    ) {
      setNomeCompleto(true)
    } else {
      setNomeCompleto(false)
    }
    setNome(valor)
  }

  const cadastrarContato = (evento: FormEvent) => {
    evento.preventDefault()

    if (nomeCompleto) {
      dispatch(
        cadastrar({
          nome,
          email,
          telefone
        })
      )
      navigate('/')
    }
  }

  return (
    <>
      <Titulo>Novo contato</Titulo>
      <Form onSubmit={cadastrarContato}>
        <Campo
          value={nome}
          onChange={({ target }) => validarNomeCompleto(target.value)}
          type="text"
          placeholder="Nome do contato"
          required
        />
        {!nomeCompleto && (
          <MensagemErro>Necessário o nome completo</MensagemErro>
        )}
        <Campo
          value={email}
          onChange={({ target }) => setEmail(target.value)}
          type="email"
          placeholder="E-mail do contato"
          required
        />
        <Campo
          value={telefone}
          onChange={({ target }) => setTelefone(target.value)}
          type="text"
          placeholder="Telefone do contato"
          required
        />
        <ContainerBotoes>
          <BotaoSalvar type="submit">Cadastrar</BotaoSalvar>
          <Botao onClick={() => navigate('/')}>Cancelar</Botao>
        </ContainerBotoes>
      </Form>
    </>
  )
}

export default Formulario
