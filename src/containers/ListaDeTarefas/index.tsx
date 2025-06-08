import React from 'react'
import Tarefa from '../../components/Tarefa'
import { Container } from './styles'
import * as enums from '../../utils/enums/Tarefa'

const tarefas = [
  {
    titulo: 'Estudar React',
    descricao: 'Ver a aula 6 na plataforma da Ebac',
    prioridade: enums.Prioridade.IMPORTANTE,
    status: enums.Status.CONCLUIDA
  },
  {
    titulo: 'Estudar Typescript',
    descricao: 'Ver a aula 7 na plataforma da Ebac',
    prioridade: enums.Prioridade.URGENTE,
    status: enums.Status.PENDENTE
  }
]

const ListaDeTarefas = () => (
  <Container>
    <ul>
      {tarefas.map((t) => (
        <li key={t.titulo}>
          <Tarefa
            descricao={t.descricao}
            titulo={t.titulo}
            status={t.status}
            prioridade={t.prioridade}
          />
        </li>
      ))}
    </ul>
  </Container>
)

export default ListaDeTarefas
