import React from 'react';
import './creationModal.css';
import { Link } from 'react-router-dom';

function QuizButton() {

  return(

    <Link to={'/01'}>
    <button className='btn btn-dark buttonLeft revealButton' type='button'>
        Character Quiz
    </button>
    </Link>
  );
}

export default QuizButton;