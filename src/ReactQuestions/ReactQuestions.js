import React  from 'react';

import QuestionAnswer from '../QuestionAnswer/QuestionAnswer';

const  ReactQuestions = () => {
  return (
    <div>
      <h2 className="text-center">React</h2>
      { 
        data.map(({question, answer}, i) =>
          <QuestionAnswer
            key = { i }
            question = { question }
            answer = { answer }
          />
        )
      }
    </div>
  )
}

const data = [ 
  {
    question:"useReducer hook",
    answer: <>
              <span>
                <a 
                  href={ `https://www.youtube.com/watch?v=cVYp4u1m6iA&list=LLzxmCuYYxYWzthclwEV6B5g&index=28`}
                  target="_blank"
                  rel="noopener noreferrer">
                  Link 1
                </a>
              </span>
              <span>
                <a 
                  href={ `https://www.youtube.com/watch?v=wcRawY6aJaw&list=LLzxmCuYYxYWzthclwEV6B5g&index=2&t=0s`}
                  target="_blank"
                  rel="noopener noreferrer">
                  Link 2
                </a>
              </span>
            </>
  },
  {
    question:"useMemo hook",
    answer: <>
              <span>
                <a 
                  href={ `https://usehooks.com/useMemo/`}
                  target="_blank"
                  rel="noopener noreferrer">
                  Link 1
                </a>
              </span>
            </>
  }, 
]

export default  ReactQuestions;