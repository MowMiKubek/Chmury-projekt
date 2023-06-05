const Form = (props) => {
    return (
        <>
        <div>
            <label>Player 1 ID:</label>
            <input
                type="text"
                value={props.player1Id}
                onChange={(e) => props.setPlayer1Id(e.target.value)}
                />
        </div>
        <div>
            <label>Player 2 ID:</label>
            <input
                type="text"
                value={props.player2Id}
                onChange={(e) => props.setPlayer2Id(e.target.value)}
                />
        </div>
        </>
    )
}

export default Form