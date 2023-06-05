import React, { useState } from 'react';
import styles from "./styles.module.css";
import axios from 'axios'

import Form from './components/Form';
import Chart from './components/Chart';

const App = () => {
    const handleLogout = () => {
        localStorage.removeItem("token");
        window.location.reload();
    };

    const fetchData = async (wcaID) => {
        try{
            const result = await axios.get(`http://localhost:5000/api/${wcaID}`)
            const data = result.data
            return data
        } catch(err) {
            return err
        }
    }

    const [player1Data, setPlayer1Data] = useState(null);
    const [player2Data, setPlayer2Data] = useState(null);
    const [player1Id, setPlayer1Id] = useState('2015tkac02');
    const [player2Id, setPlayer2Id] = useState('2013roga01');
    const [isDataConfirmed, setIsDataConfirmed] = useState(false);

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
        try{
            const data1 = await fetchData(player1Id)
            const data2 = await fetchData(player2Id)
            setPlayer1Data(data1)
            setPlayer2Data(data2)
            console.log(data1, data2)
            setIsDataConfirmed(true)
        }catch (err) {
            console.log(err)
        }
    }

    const handleConfirmData = () => {
        setIsDataConfirmed(true);
    };

    return (
        <div className={styles.main_container}>
            <nav className={styles.navbar}>
                <h1>MySite</h1>
                <button className={styles.white_btn} onClick={handleLogout}>
                    Logout
                </button>
            </nav>

            <Form 
                player1Id={player1Id}
                player2Id={player2Id}
                setPlayer1Id={setPlayer1Id}
                setPlayer2Id={setPlayer2Id}
            />

            <button onClick={loadData}>Confirm Data</button>

            {isDataConfirmed && player1Data && player2Data ? (
                 <Chart 
                 player1Id={player1Id}
                 player2Id={player2Id}
                 player1Data={player1Data}
                 player2Data={player2Data}/>
            ) : (
                <p>Enter player IDs and click "Confirm Data" to compare statistics.</p>
            )}
        </div>
    );
};

export default App;

