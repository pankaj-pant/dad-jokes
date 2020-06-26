import React from 'react';

const Joke = ({joke, votes, id, updateVotes}) => {
    return (
        <div className="Joke">
            <div className="Joke-buttons">
                <button onClick={ () => updateVotes(id, votes + 1)}>
                    <i className="fas fa-arrow-up" />
                </button>
                <span>{votes}</span>
                <button onClick={ () => updateVotes(id, votes - 1)}>
                    <i className="fas fa-arrow-down" />
                </button>
            </div>
            <div className="Joke-text">{joke}</div>
        </div>
    )
}

export default Joke