import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

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
        "magic": 76,
        "mmagic": 2803,
        "pyram": 155,
        "skewb": 156,
        "sq1": 502
    }
    const calcPoints = (key, time) => {
        console.log(srednie[key])
        if(time < srednie[key]) {
            return 50 + 50 * (srednie[key] - time) / (srednie[key] - wr[key])
        } else {
            return 10 + 40 * time / srednie[key]
        }
    }
    // const inputData1 = props.player1Data.personal_records
    // const inputData2 = props.player2Data.personal_records
    // const commonKeys = Object.keys(inputData1).filter(key => inputData2.hasOwnProperty(key))
    // var transformedData = []
    // for(key of commonKeys) {
    //     const player1time = inputData1.hasOwnProperty(key) ? calcPoints(key, inputData1[key]) : 10
    //     const player2time = inputData2.hasOwnProperty(key) ? calcPoints(key, inputData2[key]) : 10
    //     transformedData.push({
    //         event: key,
    //         player1: player1time,
    //         player2: player2time
    //     })
    // }
    const transformedData = [
        {event: "222", player1: calcPoints("222", 123), player2: calcPoints("222", 321)},
        {event: "333", player1: calcPoints("333", 1232), player2: calcPoints("333", 3213)},
        {event: "444", player1: calcPoints("444", 3333), player2: calcPoints("444", 5555)},
        {event: "555", player1: calcPoints("555", 12333), player2: calcPoints("555", 14763)},
    ]
    console.log(transformedData)
    return (
        <div className='wcachart'>
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

            <div >
                <h2>Player 1 Info:</h2>
                <p>Player 1 ID: {props.player1Id}</p>
                <p>Name: {props.player1Data.name}</p>
                <p>Position: {props.player1Data.position}</p>
                <p>Age: {props.player1Data.age}</p>
            </div>

            <div >
                <h2>Player 2 Info:</h2>
                <p>Player 2 ID: {props.player2Id}</p>
                <p>Name: {props.player2Data.name}</p>
                <p>Position: {props.player2Data.position}</p>
                <p>Age: {props.player2Data.age}</p>
            </div>
        </div>
    )
}

export default Chart