import React, {useState, useEffect} from 'react';
import axios from 'axios'
import './JokeList.css'
import Joke from './Joke'
import { v4 as uuidv4 } from 'uuid';

const JokeList = () => {
    const [jokeLoading, setJokeLoading] = useState(false)
    const [jokes, setJokes] = useState( JSON.parse(window.localStorage.getItem("jokes")) || []);

    useEffect(() => {
        if (jokes.length === 0 ) {
            setJokeLoading(true)
            fetchJoke()
        }
        window.localStorage.setItem("jokes", JSON.stringify(jokes))
    }, [jokes]);

    jokes.sort((a, b) => b.votes - a.votes)

    const fetchJoke = async () => {
        try{
            let i = 0
            let fetchedJokes = []
            let seenJokes = new Set(jokes.map(j => j.joke))
            //console.log(seenJokes)
            while (i < 10) {
                let response = await axios.get("https://icanhazdadjoke.com/", {headers: {Accept: "application/json"}})
                //console.log(response.data.joke)
                if (!seenJokes.has(response.data.joke)){
                    fetchedJokes.push({joke: response.data.joke, votes: 0, id: uuidv4()})
                    i++
                } else {
                    console.log("Duplicate joke found --->", response.data.joke)
                }
            }
            setJokes([...jokes, ...fetchedJokes])
            //console.log("Fetched jokes:", i)
            setJokeLoading(false)
        } catch(error) {
            console.log(error)
            alert(error)
            setJokeLoading(false)
        }
        

    }

    const updateVotes = (id, newValue) => {
        setJokes(jokes =>  jokes.map(j => j.id === id ? {...j, votes: newValue} : j))
    }

    const handleClick = () => {
        //console.log("button clicked")
        setJokeLoading(true)
        fetchJoke()
    }

    const display = () => {
        return (
            <div className="JokeList">
            <div className="JokeList-sidebar">
                <h1 className="JokeList-title">Dad Jokes</h1>
                <button className="JokeList-getmore" onClick={() => handleClick()}>Fetch Jokes</button>
                <img src="https://assets.dryicons.com/uploads/icon/svg/8927/0eb14c71-38f2-433a-bfc8-23d9c99b3647.svg" />
            </div>
            <div className="JokeList-jokes">
                    {jokes.map(j => <Joke key={j.id} joke={j.joke} votes={j.votes} id={j.id} updateVotes={updateVotes}/>)}
            </div>
            
        </div>
        )
    }

    const spinner = () => {
        return (
            <div className="JokeList-spinner">
                <i className="far fa-8x fa-laugh fa-spin"/>
                <h1 className="JokeList-title">Loading jokes...</h1>
            </div>
        )
    }



    return (
        <>
         {jokeLoading ? spinner() : display() }
        </>
    )
}

export default JokeList