import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import styles from './Temporizador.module.css'


interface TemporizadorProp {
    key: any
    tempoEsgotado: () => void
}

export default function Temporizador(props: TemporizadorProp){
    return(
        <div className={styles.temporizador}>
            <CountdownCircleTimer 
                duration={10}
                size={120}
                isPlaying
                onComplete={props.tempoEsgotado}
                colors={[ '#BCE596', '#F7B801', '#ED827A', '#ED827A']}
                colorsTime={[10, 6, 3, 0]}
            >
                {({ remainingTime }) => remainingTime}
            </CountdownCircleTimer>
        </div>
    )
}