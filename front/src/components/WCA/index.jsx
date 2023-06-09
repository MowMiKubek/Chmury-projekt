import React, { useState } from 'react';
import styles from "./styles.module.css";
import axios from 'axios'

import Form from './Form';
import Chart from './Chart';

const App = (props) => {
    const fetchData = async (wcaID) => {
        try {
            const result = await axios.get(`http://localhost:5000/api/wca/${wcaID}`)
            const data = result.data
            return data
        } catch (err) {
            throw new Error('Failed to fetch data, check the ID'); // Throw an error if request fails
        }
    }

    const [player1Data, setPlayer1Data] = useState(null);
    const [player2Data, setPlayer2Data] = useState(null);
    const [player1Id, setPlayer1Id] = useState(''); // 2015tkac02
    const [player2Id, setPlayer2Id] = useState(''); // 2013roga02
    const [isDataConfirmed, setIsDataConfirmed] = useState(false);
    const [error, setError] = useState(null);

    // useEffect(() => {
    //     const setData = async () => {
    //         try{
    //             const data1 = await fetchData(player1Id)
    //             const data2 = await fetchData(player2Id)
    //             setPlayer1Data(data1)
    //             setPlayer2Data(data2)
    //         }catch (err) {
    //             console.log(err)
    //         }
    //     }
    //     if(isDataConfirmed) {
    //         setData()
    //         console.log(player1Data, player2Data)
    //     }
    // }, [isDataConfirmed, player1Id, player2Id]);

    const loadData = async () => {
        if (player1Id.trim() === "" || player2Id.trim() === "") {
            // Perform action for empty data
            alert("Please enter both Player IDs");
        } else {
            try {
                const data1 = await fetchData(player1Id);
                const data2 = await fetchData(player2Id);
                setPlayer1Data(data1);
                setPlayer2Data(data2);
                console.log(data1, data2);
                setIsDataConfirmed(true);
                setError(null); // Clear any previous errors
            } catch (err) {
                setError(err.message); // Set the error state
            }
        }
    };


    return (
        <div>
            <Form 
                player1Id={player1Id}
                player2Id={player2Id}
                setPlayer1Id={setPlayer1Id}
                setPlayer2Id={setPlayer2Id}
            />

            <div className={styles.button_container}>
                <button onClick={loadData}>Confirm Data</button>
            </div>

            {error ? (
                <p className={styles.alert_message}>{error}</p> // Display error message
            ) : isDataConfirmed && player1Data && player2Data ? (
                <Chart 
                    player1Id={player1Id}
                    player2Id={player2Id}
                    player1Data={player1Data}
                    player2Data={player2Data}
                />
            ) : (
                <p className={styles.alert_message}>Enter player IDs and click "Confirm Data" to compare statistics.</p>
            )}
        </div>
    );
};

export default App;

