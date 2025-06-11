import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Tarefa from '../../models/Tarefa'
import * as enums from '../../utils/enums/Tarefa'

type TarefasState = {
  itens: Tarefa[]
}

const initialState: TarefasState = {
  itens: [
    {
      id: 1,
      descricao: 'Estudando Javascript revendo o exercicio do modulo 7',
      prioridade: enums.Prioridade.NORMAL,
      status: enums.Status.CONCLUIDA,
      titulo: 'Estudar JS'
    },
    {
      id: 2,
      descricao: 'Estudando Typescript revendo o exercicio do modulo 10',
      prioridade: enums.Prioridade.IMPORTANTE,
      status: enums.Status.CONCLUIDA,
      titulo: 'Estudar TS'
    },
    {
      id: 3,
      descricao: 'Estudando Redux revendo o exercicio do modulo 11',
      prioridade: enums.Prioridade.URGENTE,
      status: enums.Status.PENDENTE,
      titulo: 'Estudar Redux'
    },
    {
      id: 4,
      descricao: 'Estudando React com CSS revendo o exercicio do modulo 12',
      prioridade: enums.Prioridade.URGENTE,
      status: enums.Status.PENDENTE,
      titulo: 'Estudar React/CSS'
    }
  ]
}

const tarefasSlice = createSlice({
  name: 'tarefas',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter(
        (tarefa: { id: number }) => tarefa.id !== action.payload
      )
    }
  }
})

export const { remover } = tarefasSlice.actions

export default tarefasSlice.reducer
