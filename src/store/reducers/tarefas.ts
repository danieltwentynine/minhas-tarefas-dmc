import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Tarefa from '../../models/Tarefa'
import * as enums from '../../utils/enums/Tarefa'

const tarefasSlice = createSlice({
  name: 'tarefas',
  initialState: [
    new Tarefa(
      'Estudar Redux',
      enums.Prioridade.IMPORTANTE,
      enums.Status.PENDENTE,
      ' ',
      1
    ),
    new Tarefa(
      'Estudar Flutter',
      enums.Prioridade.URGENTE,
      enums.Status.PENDENTE,
      ' ',
      1
    ),
    new Tarefa(
      'Estudar React',
      enums.Prioridade.NORMAL,
      enums.Status.CONCLUIDA,
      ' ',
      1
    )
  ],
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state = state.filter(
        (tarefa: { id: number }) => tarefa.id !== action.payload
      )
    }
  }
})

export const { remover } = tarefasSlice.actions

export default tarefasSlice.reducer
