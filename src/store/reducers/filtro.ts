import { PayloadAction, createSlice } from '@reduxjs/toolkit'

type FiltroState = {
  pesquisa?: string
}

const initialState: FiltroState = {
  pesquisa: ''
}

const filtroSlice = createSlice({
  name: 'filtro',
  initialState,
  reducers: {
    alterarPesquisa: (state, action: PayloadAction<string>) => {
      state.pesquisa = action.payload
    }
  }
})

export const { alterarPesquisa } = filtroSlice.actions
export default filtroSlice.reducer
