import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { alterarPesquisa } from '../../store/reducers/filtro'
import * as S from './styles'

type Props = {
  mostrarPesquisa: boolean
}

const BarraBusca = ({ mostrarPesquisa }: Props) => {
  const dispatch = useDispatch()
  const { pesquisa } = useSelector((state: RootReducer) => state.filtro)

  return (
    <>
      <S.Pesquisa />
      {mostrarPesquisa && (
        <S.BarraPesquisa
          type="text"
          placeholder="Buscar"
          value={pesquisa}
          onChange={(evento) => dispatch(alterarPesquisa(evento.target.value))}
        />
      )}
    </>
  )
}

export default BarraBusca
