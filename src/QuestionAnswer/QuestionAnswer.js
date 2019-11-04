import React, { useState } from 'react';

const QuestionAnswer = ({ question, answer }) => {  
  const [ isVisible, setVisibility ] = useState(false);

  const showAnswer = () => {
    setVisibility(!isVisible);
  }

  return (
    <div>
      <h5 onClick={ showAnswer }>{ question }</h5>
      { isVisible && <h6 className="answer">{ answer }</h6> }
    </div>
  );
}

export default QuestionAnswer;