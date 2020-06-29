import React from 'react';
import './Joke.css'

const Joke = ({joke, votes, id, updateVotes}) => {
     const getColor = () => {
        let numVotes = votes 
        switch(true) {
            case numVotes >= 15: 
                return "#4CAF50"
            case numVotes >= 12: 
                return "#8BC34A"
            case numVotes >= 9:
                return "#CDDC39"
            case numVotes >= 6:
                return "#FFEB3B"
            case numVotes >= 3:
                return "#FFC107"
            case numVotes >= 0:
                return "#FF9800"
            default:
                return "#f44336"
        }
    }

    const getEmoji = () => {
        let numVotes = votes
        switch(true) {
            case numVotes >= 15:
                return "em em-rolling_on_the_floor_laughing";
            case numVotes >= 12:
                return "em em-laughing";
            case numVotes >= 9:
                return "em em-smiley";
            case numVotes >= 6 :
                return "em em-slightly_smiling_face";
            case numVotes >= 3:
                return "em em-neutral_face";
            case numVotes >= 0:
                return "em em-confused";
            default:
                return "em em-angry";
        }
      }

    return (
        <div className="Joke">
            <div className="Joke-buttons">
                <i className="fas fa-arrow-up" onClick={ () => updateVotes(id, votes + 1)}/>
                <span className="Joke-votes" style={{borderColor: getColor()}}>{votes}</span>
                <i className="fas fa-arrow-down" onClick={ () => updateVotes(id, votes - 1)}/>
            </div>
            <div className="Joke-text">{joke}</div>
            <div className="Joke-smiley">
            <i className={getEmoji()} aria-label="ROLLING ON THE FLOOR LAUGHING"></i>
            </div>
        </div>
    )
}

export default Joke