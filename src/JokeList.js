import React, {useState} from 'react';
import axios from 'axios'
import './JokeList.css'

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
        <div className="JokeList">
            <div className="JokeList-sidebar">
                <h1 className="JokeList-title">Dad Jokes</h1>
                <button className="JokeList-getmore" onClick={() => fetchJoke()}>Fetch Joke</button>
                <img src="https://assets.dryicons.com/uploads/icon/svg/8927/0eb14c71-38f2-433a-bfc8-23d9c99b3647.svg" />
            </div>
            <div className="JokeList-jokes">
                
                <ul>
                    {jokes.map(j => <li key={j}>{j}</li>)}
                </ul>
            </div>
            
        </div>
    )
}

export default JokeList