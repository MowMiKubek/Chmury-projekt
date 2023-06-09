import styles from "./styles.module.css";

const Form = (props) => {
    return (
        <div className={styles.players_form}>
            
            <div>
                <label>Player 1 ID:</label>
                <input
                placeholder="2015TKAC02"
                    type="text"
                    value={props.player1Id}
                    onChange={(e) => props.setPlayer1Id(e.target.value)}
                    className={styles.player_input1}
                />
            </div>
            <div>
                <label>Player 2 ID:</label>
                <input
                placeholder="2018MUSI03"
                    type="text"
                    value={props.player2Id}
                    onChange={(e) => props.setPlayer2Id(e.target.value)}
                    className={styles.player_input2}
                />
            </div>
        </div>
    )
}

export default Form