import React, {useState, useEffect} from 'react';
import axios from 'axios'
import './JokeList.css'
import Joke from './Joke'

const JokeList = () => {
    const [jokes, setJokes] = useState([]);

    useEffect(() => {
        const fetchJoke = async () => {
            let i = 0
            let fetchedJokes =[]
            while (i < 10) {
                let response = await axios.get("https://icanhazdadjoke.com/", {headers: {Accept: "application/json"}})
                console.log(response.data.joke)
                fetchedJokes.push({joke: response.data.joke, votes: 0, id: response.data.id})
                i++
            }
            setJokes(fetchedJokes)
            console.log("Fetched jokes:", i)
    
        }
        fetchJoke()
    }, []);

    const updateVotes = (id, newValue) => {
        setJokes(jokes =>  jokes.map(j => j.id === id ? {...j, votes: newValue} : j))
    }


    return (
        <div className="JokeList">
            <div className="JokeList-sidebar">
                <h1 className="JokeList-title">Dad Jokes</h1>
                <button className="JokeList-getmore" >Fetch Jokes</button>
                <img src="https://assets.dryicons.com/uploads/icon/svg/8927/0eb14c71-38f2-433a-bfc8-23d9c99b3647.svg" />
            </div>
            <div className="JokeList-jokes">
                
               
                    {jokes.map(j => <Joke key={j.id} joke={j.joke} votes={j.votes} id={j.id} updateVotes={updateVotes}/>)}
              
            </div>
            
        </div>
    )
}

export default JokeList