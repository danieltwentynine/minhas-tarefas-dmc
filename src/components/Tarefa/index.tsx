import { useState } from 'react'
import * as S from './styles'

import * as enums from '../../utils/enums/Tarefa'

type Props = {
  titulo: string
  prioridade: enums.Prioridade
  status: enums.Status
  descricao: string
}

const Tarefa = ({ descricao, prioridade, status, titulo }: Props) => {
  const [estaEditando, setEstaEditando] = useState(false)
  const [descricaoLocal, setDescricaoLocal] = useState(descricao) // Novo estado local

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
        onChange={(e) => setDescricaoLocal(e.target.value)} // Handler para mudanças
        readOnly={!estaEditando} // Só permite edição quando estaEditando for true
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
            <S.BotaoRemover>Remover</S.BotaoRemover>
          </>
        )}
      </S.BarraAcoes>
    </S.Card>
  )
}

export default Tarefa
