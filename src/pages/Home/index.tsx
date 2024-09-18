import BarraBusca from '../../containers/BarraBusca'
import BotaoAdicionar from '../../components/BotaoAdicionar'
import ListaContatos from '../../containers/ListaContatos'
import { Titulo } from '../../styles'

const Home = () => (
  <>
    <BotaoAdicionar />
    <Titulo>Lista de contatos</Titulo>
    <BarraBusca mostrarPesquisa />
    <ListaContatos />
  </>
)

export default Home
