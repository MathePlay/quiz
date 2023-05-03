
import Botao from '../../components/Botao/Botao'
import Estatisticas from '../../components/Estatistica/Estatistica'
import styles from '../styles/resultado.module.css'
import { useRouter } from "next/router"



export default function resultado() {
    const router = useRouter()

    const total = +router.query.total
    const certas = +router.query.certas
    const percentual = Math.round((certas / total) * 100)

    return (
        <div className={styles.resultado}>
            <h1>Resultado Final</h1>
            <div style={{ display: 'flex' }}>
                < Estatisticas texto='Perguntas' valor={total} />
                < Estatisticas texto='Certas' valor={certas} corFundo='#9CD2A4'/>
                < Estatisticas texto='Percentual' valor={`${percentual}%`} corFundo='#DE6A33'/>
            </div>
            <Botao href='/' texto='Tentar novamente' />
        </div>
    )
}