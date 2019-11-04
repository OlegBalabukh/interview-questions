import React from 'react';

import QuestionAnswer from '../QuestionAnswer/QuestionAnswer';

const  ReduxQuestions = () => {
  return (
    <div>
      <h2 className="text-center">Redux</h2>
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
    question: `Why Redux need reducers to be “pure functions?`,
    answer: <>
              <span>
                Redux takes a given state (object) and passes it to each reducer in a loop. 
                And it expects a brand new object from the reducer if there are any changes. 
                And it also expects to get the old object back if there are no changes.<br/>
              </span>
              <span>
                Redux simply checks whether the old object is the same as the new object by 
                comparing the memory locations of the two objects. So if you mutate the old 
                object’s property inside a reducer, the “new state” and the “old state” will 
                both point to the same object. Hence Redux thinks nothing has changed! 
                So this won’t work.
              </span>
            </>
  },
  {
    question: "Why redux store immutable?",
    answer: <>
              <span>
                There is only one way to know if two JavaScript objects have the same
                properties. To deep-compare them.<br/>
              </span>
              <span>
                But this becomes extremely expensive in real-world apps, because of the 
                typically large objects and the number of times they need to be compared.<br/>
              </span>
              <span>
                So one work around is to have a policy to ask developers to create a new object                 
                whenever there is a change, then send it to the framework. And if there are no 
                changes, then send back the old object as it is. In other words, new objects 
                represent new states.<br/>
              </span>
              <span>
                Note that you must clone old states using slice — or a similar mechanism — to 
                copy old values into a new object.<br/>
              </span>
              <span>
                Now, with this policy in place, you can compare two objects’ memory location 
                using !== without having to compare each property within each object. And if 
                the two objects are not the same, then you know that the object has changed 
                state (that is, some property somewhere in the JavaScript object has changed). 
                That’s exactly the strategy Redux employs to make things work.<br/>
              </span>
              <span>
                So that’s why Redux needs for “Reducers” to be pure functions!<br/>
              </span>
              <span>
                <a 
                  href={ `https://www.freecodecamp.org/news/why-redux-needs-reducers-to-be-pure-functions-d438c58ae468`}
                  target="_blank"
                  rel="noopener noreferrer">
                  Link 1
                </a>
              </span>
              <span>
                <a 
                  href={ `https://stackoverflow.com/questions/44767160/why-are-pure-reducers-so-important-in-redux`}
                  target="_blank"
                  rel="noopener noreferrer">
                  Link 2
                </a>
              </span>
            </>
  },
]

export default  ReduxQuestions;