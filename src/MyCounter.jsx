import { useState } from "react";
import styles from './button.module.css'

export default function MyCounter() {

    const [counter, setCounter] = useState(0)

    function aumentar() {
        setCounter(counter + 1)
    }

    return (
        <div className="container">
            <h1>My Counter</h1>
            <h3>{counter}</h3>
            <button className={styles.button} onClick={aumentar}>aumentar</button>
        </div>
    )

}