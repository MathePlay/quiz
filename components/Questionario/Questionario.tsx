import styles from './Questionario.module.css'
import QuestaoModel from "../../model/questao"
import Questao from '../Questao/Questao'
import Botao from '../Botao/Botao'

interface QuestionarioProps {
    questao: QuestaoModel
    ultima: boolean
    questaoRespondida: (questao: QuestaoModel) => void
    irProximoPasso: () => void
}

export default function Questionario(props: QuestionarioProps) {

    function respostaFornecida(indice: number) {
        if(!props.questao.respondida) {
            props.questaoRespondida(props.questao.responderCom(indice))
        }
    }

    return (
        <div className={styles.questionario}>
            {props.questao ?
                <Questao
                    valor={props.questao}
                    respostaFornecida={respostaFornecida}
                    tempoEsgotado={props.irProximoPasso} />
                : false
            }

            <Botao
                onClick={props.irProximoPasso}
                texto={props.ultima ? 'Finalizar' : 'Próxima'} />
        </div>
    )
}