import React from 'react';
import axios from 'axios'

const JokeList = () => {
    const fetchJoke = () => {
        axios.get("https://icanhazdadjoke.com/", {headers: {Accept: "application/json"}})
            .then(response => console.log(response.data.joke))
            .catch(error => console.log(error))
    }
    return (
        <div>
            <h1>Dad Jokes</h1>
            <button onClick={() => fetchJoke()}>Fetch Joke</button>
        </div>
    )
}

export default JokeList