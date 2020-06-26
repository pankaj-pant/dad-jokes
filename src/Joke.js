import React from 'react';
import './Joke.css'

const Joke = ({joke, votes, id, updateVotes}) => {
    return (
        <div className="Joke">
            <div className="Joke-buttons">
                <i className="fas fa-arrow-up" onClick={ () => updateVotes(id, votes + 1)}/>
                <span className="Joke-votes">{votes}</span>
                <i className="fas fa-arrow-down" onClick={ () => updateVotes(id, votes - 1)}/>
            </div>
            <div className="Joke-text">{joke}</div>
            <div className="Joke-smiley">
            <i class="em em-rolling_on_the_floor_laughing" aria-role="presentation" aria-label="ROLLING ON THE FLOOR LAUGHING"></i>
            </div>
        </div>
    )
}

export default Joke