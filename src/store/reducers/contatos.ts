import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contato from '../../models/Contato'

type ContatosState = {
  cadastros: Contato[]
}

const initialState: ContatosState = {
  cadastros: [
    {
      id: 1,
      nome: 'Gian Souza',
      email: 'gian.souza@ebac.com.br',
      telefone: '+55 (11) 98765-4321'
    },
    {
      id: 2,
      nome: 'Armando de Caires',
      email: 'armando.dcp@gmail.com',
      telefone: '11 91234-5678'
    }
  ]
}

const contatoSlice = createSlice({
  name: 'contatos',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.cadastros = [
        ...state.cadastros.filter((contato) => contato.id !== action.payload)
      ]
    },
    editar: (state, action: PayloadAction<Contato>) => {
      const indexContato = state.cadastros.findIndex(
        (contato) => contato.id === action.payload.id
      )

      if (indexContato >= 0) {
        state.cadastros[indexContato] = action.payload
      }
    },
    cadastrar: (state, action: PayloadAction<Omit<Contato, 'id'>>) => {
      const contatoJaExiste = state.cadastros.find(
        (contato) =>
          contato.nome.toLowerCase() === action.payload.nome.toLowerCase()
      )

      if (contatoJaExiste) {
        alert('Já existe um contato com esse nome')
      } else {
        const ultimaContato = state.cadastros[state.cadastros.length - 1]
        const contatoNovo = {
          ...action.payload,
          id: ultimaContato ? ultimaContato.id + 1 : 1
        }
        state.cadastros.push(contatoNovo)
      }
    }
  }
})

export const { remover, editar, cadastrar } = contatoSlice.actions
export default contatoSlice.reducer
