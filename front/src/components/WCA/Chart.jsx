import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import styles from "./styles.module.css";

const Chart = (props) => {
    const srednie = {
        "222": 762,
        "333": 2264,
        "333bf": 11486,
        "333ft": 10391,
        "333oh": 3011,
        "444": 6021,
        "444bf": 44828,
        "555": 10358,
        "555bf": 77062,
        "666": 18267,
        "777": 26431,
        "clock": 1594,
        "minx": 9766,
        "magic": 273,
        "mmagic": 535,
        "pyram": 1156,
        "skewb": 1175,
        "sq1": 3001
    }
    const wr = {
        "222": 101,
        "333": 469,
        "333bf": 1505,
        "333ft": 1990,
        "333oh": 865,
        "444": 1938,
        "444bf": 6876,
        "555": 3700,
        "555bf": 14763,
        "666": 6856,
        "777": 10212,
        "clock": 356,
        "minx": 2734,
        "magic": 76,
        "mmagic": 2803,
        "pyram": 155,
        "skewb": 156,
        "sq1": 502
    }
    const calcPoints = (key, time) => {
        console.log(srednie[key])
        if (time < srednie[key]) {
            const result = 50 + 50 * (srednie[key] - time) / (srednie[key] - wr[key])
            return result
        } else {
            const result = 10 + 40 * time / srednie[key]
            return result
        }
    }
    const inputData1 = props.player1Data.personal_records
    const inputData2 = props.player2Data.personal_records
    console.log(props.player1Data)
    console.log(props.player2Data)

    const keys1 = Object.keys(inputData1)
    const keys2 = Object.keys(inputData2)
    const commonKeys = [...keys1,
    ...keys2.filter(key => !keys1.includes(key))]
        .filter(key => !key.includes("bf"))
        .filter(key => !key.includes("fm"))
    var transformedData = []
    for (var key of commonKeys) {
        let player1Points, player2Points;
        if (inputData1.hasOwnProperty(key) && inputData1[key].average?.best)
            player1Points = inputData1.hasOwnProperty(key) ? calcPoints(key, inputData1[key].average.best) : 10
        else
            player1Points = 10
        if (inputData2.hasOwnProperty(key) && inputData2[key].average?.best)
            player2Points = inputData2.hasOwnProperty(key) ? calcPoints(key, inputData2[key].average.best) : 10
        else
            player2Points = 10
        transformedData.push({
            event: key,
            player1: player1Points,
            player2: player2Points
        })
    }
    return (
        <div className='wcachart'>
            <div className={styles.players_info}>
                <div className={styles.single_player_info}>
                    <div className={styles.background_image} style={{ backgroundImage: `url(${props.player1Data.person.avatar.url})` }}></div>
                    <div className={styles.overlay}></div>
                    <h2>Player 1 Info:</h2>
                    <p>Player 1 ID: {props.player1Id}</p>
                    <p>Name: {props.player1Data.person.name}</p>
                    <p>Country: {props.player1Data.person.country.id}</p>
                </div>

                <div className={styles.single_player_info}>
                    <div className={styles.background_image} style={{ backgroundImage: `url(${props.player2Data.person.avatar.url})` }}></div>
                    <div className={styles.overlay}></div>
                    <h2>Player 2 Info:</h2>
                    <p>Player 2 ID: {props.player2Id}</p>
                    <p>Name: {props.player2Data.person.name}</p>
                    <p>Country: {props.player2Data.person.country.id}</p>
                </div>
            </div>

            <ResponsiveContainer width="100%" height={400}>
                <RadarChart data={transformedData}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="event" />
                    <PolarRadiusAxis angle={90} domain={[0, 100]} />
                    <Radar
                        name="Player 1"
                        data={props.player1Data}
                        dataKey="player1"
                        stroke="#8884d8"
                        fill="#8884d8"
                        fillOpacity={0.6}
                    />
                    <Radar
                        name="Player 2"
                        data={props.player2Data}
                        dataKey="player2"
                        stroke="#82ca9d"
                        fill="#82ca9d"
                        fillOpacity={0.6}
                    />
                </RadarChart>
            </ResponsiveContainer>


        </div>
    )
}

export default Chart