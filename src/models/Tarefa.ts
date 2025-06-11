import * as enums from '../utils/enums/Tarefa'

class Tarefa {
  titulo: string
  prioridade: enums.Prioridade
  estado: enums.Status
  descricao: string
  id: number
  status: enums.Prioridade | enums.Status | undefined

  constructor(
    titulo: string,
    prioridade: enums.Prioridade,
    estado: enums.Status,
    descricao: string,
    id: number
  ) {
    this.titulo = titulo
    this.prioridade = prioridade
    this.estado = estado
    this.descricao = descricao
    this.id = id
  }
}

export default Tarefa
