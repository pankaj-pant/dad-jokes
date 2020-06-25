import React, {useState} from 'react';
import axios from 'axios'

const JokeList = () => {
    const [jokes, setJokes] = useState([])

    const fetchJoke = async () => {
        let i = 0
        let fetchedJokes =[]
        while (i < 10) {
            let response = await axios.get("https://icanhazdadjoke.com/", {headers: {Accept: "application/json"}})
            console.log(response.data.joke)
            fetchedJokes.push(response.data.joke)
            i++
        }
        setJokes(fetchedJokes)
        console.log("Fetched jokes:", i)

    }
    return (
        <div>
            <h1>Dad Jokes</h1>
            <button onClick={() => fetchJoke()}>Fetch Joke</button>
            <ul>
                {jokes.map(j => <li key={j}>{j}</li>)}
            </ul>
        </div>
    )
}

export default JokeList