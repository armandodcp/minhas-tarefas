import { useSelector } from 'react-redux'
import Contato from '../../components/Contato'
import { Lista } from './styles'

import { RootReducer } from '../../store'

const ListaContatos = () => {
  const { cadastros } = useSelector((state: RootReducer) => state.contatos)
  const { pesquisa } = useSelector((state: RootReducer) => state.filtro)

  const filtraContatos = () => {
    let contatosFiltrados = cadastros
    if (pesquisa !== undefined) {
      contatosFiltrados = contatosFiltrados.filter(
        (cadastro) =>
          cadastro.nome.toLowerCase().search(pesquisa.toLowerCase()) >= 0
      )
      return contatosFiltrados
    } else {
      return cadastros
    }
  }

  const contatos = filtraContatos()

  return (
    <Lista>
      {contatos.map((contato) => (
        <li key={contato.nome}>
          <Contato
            id={contato.id}
            nome={contato.nome}
            email={contato.email}
            telefone={contato.telefone}
          />
        </li>
      ))}
    </Lista>
  )
}

export default ListaContatos
