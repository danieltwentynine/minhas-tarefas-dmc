import FiltroCard from '../../components/FiltroCard'

import * as S from './styles'

const BarraLateral = () => (
  <S.Aside>
    <div>
      <input type="text" placeholder="Buscar" />
      <S.Filtros>
        <FiltroCard legenda="Pendentes" contador={1} />
        <FiltroCard legenda="Concluídas" contador={2} />
        <FiltroCard legenda="Urgents" contador={3} />
        <FiltroCard legenda="Importantes" contador={4} />
        <FiltroCard legenda="Normal" contador={5} />
        <FiltroCard ativo legenda="Todas" contador={6} />
      </S.Filtros>
    </div>
  </S.Aside>
)

export default BarraLateral
