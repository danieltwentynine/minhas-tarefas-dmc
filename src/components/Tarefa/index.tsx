import { useState } from 'react'
import * as S from './styles'

import * as enums from '../../utils/enums/Tarefa'
import { useDispatch } from 'react-redux'
import { remover } from '../../store/reducers/tarefas'
import TarefaClass from '../../models/Tarefa'

type Props = TarefaClass

const Tarefa = ({ descricao, prioridade, status, titulo, id }: Props) => {
  const [estaEditando, setEstaEditando] = useState(false)
  const [descricaoLocal, setDescricaoLocal] = useState(descricao)

  const dispatch = useDispatch()

  return (
    <S.Card>
      <S.Titulo>{titulo}</S.Titulo>
      <S.Tag parametro="prioridade" prioridade={prioridade}>
        {prioridade}
      </S.Tag>
      <S.Tag parametro="status" status={status}>
        {status}
      </S.Tag>
      <S.Descricao
        value={descricaoLocal}
        onChange={(e) => setDescricaoLocal(e.target.value)}
        readOnly={!estaEditando}
      />
      <S.BarraAcoes>
        {estaEditando ? (
          <>
            <S.BotaoSalvar>Salvar</S.BotaoSalvar>
            <S.BotaoSCancelar onClick={() => setEstaEditando(false)}>
              Cancelar
            </S.BotaoSCancelar>
          </>
        ) : (
          <>
            <S.Botao onClick={() => setEstaEditando(true)}>Editar</S.Botao>
            <S.BotaoRemover onClick={() => dispatch(remover(id))}>
              Remover
            </S.BotaoRemover>
          </>
        )}
      </S.BarraAcoes>
    </S.Card>
  )
}

export default Tarefa
