import React from 'react';

import QuestionAnswer from '../QuestionAnswer/QuestionAnswer';

const  JSQuestions = () => {
  return (
    <div>
      <h2 className="text-center">Javascript</h2>
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
    question: "this and bind",
    answer: <>
              <span>
              Where <b><i>this</i></b> is referred to - is determined in the time of the call, 
              it is context-sensitive. And it has to be because a function doesn't have just 
              one <b><i>this</i></b> , it's context-sensitive. A function is just a value so it 
              can be: passed as a property on an object, it can be assigned to a variable or it
              can be passed as an argument to another function. A function can be called in 
              multiple contexts. You cannot really say upfront what <b><i>this</i></b> is without 
              knowing where the function is called unless you have use <b><i>bind</i></b> to 
              create a new function where <b><i>this</i></b> is bound to a specific value.<br/>
              </span>
              <span>
                <a 
                  href={ `https://youtu.be/PIkA60I0dKU`}
                  target="_blank"
                  rel="noopener noreferrer">
                  Link 1
                </a>
              </span>              
            </>
  },
  {
    question: "Prototype",
    answer: <>
              <span>
              In Javascript, we achieve inheritance using prototypes - a very simple and powerful 
              inheritance model (class keyword in JS uses Prototype under the hood). Prototypes are 
              delegates. They do not create a copy of the original object - they delegate prototype 
              access to the original object (it can be changed with <i>setPrototypeOf()</i>). So, 
              they don't work like classes which creates a sort of copy from a blueprint.<br/>
              </span>
              <span>
              The prototype is just a way of saying that for this object use this other object as a 
              backup (as a delegate, as a prototype). If someone calls an object with a property that 
              does not exist on it - go look in this other object. That is what prototype is - it just 
              a delegate that we assign to an object.<br/>
              </span>
              <span>
                <a 
                  href={ `https://youtu.be/YkoelSTUy7A`}
                  target="_blank"
                  rel="noopener noreferrer">
                  Link 1
                </a>
              </span>              
            </>
  },
  {
    question: "new keyword",
    answer: <>
              <span>
                <b><i>new</i></b> do a couple of things:<br/>
              </span>
              <span>
                1. A new object is created. Creates a new plain object with no properties.<br/>
              </span>
              <span>
              2. It binds this to the object. Sets the prototype: looks at whatever we called 
              new on and it's going to check that object prototype property and it's going to 
              set the prototype of the new object that it just has created to be that object.<br/>
              </span>
              <span>
              3. The constructor function’s prototype object becomes the __proto__ property of the 
              new objectExecutes constructor with <b><i>this</i></b>. Looks at the same object as 
              the constructor and calls that function but it's going to call it with a new
              object that is created in step one.<br/>
              </span>
              <span>
              4. It returns the object from the function. Returns the created object (unless the 
              constructor returns an object and then it will reject that instead).<br/>
              </span>       
              <span>
              So, <b><i>new</i></b> creates a new plain (simple) 
              object, then looks to the function Person to take the object that is on it's
              prototype property and it's going to set that object as the prototype of the new 
              simple object that it has just created and it's then going to feed it into 
              the Person constructor as the <b><i>this</i></b> keyword and then return whatever 
              the Person object returns or if it doesn't return anything it returns this simple
              object <br/><br/>
              </span>
              <span>Example with new</span>                           
                <code className="line-break">
                  <p>{'function Person(saying) {'}</p>
                  <p className="indent">{'this.saying = saying'}</p>
                  <p>{'}'}</p>
                  <br/>
                  <p>{'Person.prototype.talk = function() {'}</p>
                  <p className="indent">{'console.log("I say: ", this.saying)'}</p>                
                  <p>{'}'}</p>
                  <br/>
                  <p>{'var crockford = new Person("SEMICOLONS !!!")'}</p>  
                  <p>{'crockford.talk();'}</p>
                </code><br/>
              <span>Example with custom new (spawn)</span>
                <code className="line-break">
                  <p>{'function Person(saying) {'}</p>
                  <p className="indent">{'this.saying = saying'}</p>
                  <p>{'}'}</p>
                  <br/>
                  <p>{'Person.prototype.talk = function() {'}</p>
                  <p className="indent">{'console.log("I say: ", this.saying)'}</p>                
                  <p>{'}'}</p>
                  <br/>
                  <p>{'function spawn(constructor) {'}</p>
                  <p className="indent">{'var obj = {}'}</p>
                  <p className="indent">{'Object.setPrototypeOf(obj, constructor.prototype)'}</p>
                  <p className="indent">{'var argsArray = Array.prototype.slice.apply(arguments)'}</p>
                  <p className="indent">{'return constructor.apply(obj, argsArray.slice(1)) || obj'}</p>
                  <p>{'}'}</p>
                  <br/>
                  <p>{'var crockford = spawn(Person, "SEMICOLANS!!!1one1")'}</p>  
                  <p>{'crockford.talk();'}</p>
                </code><br/>
              <span>            
              <a 
                href={ `https://youtu.be/Y3zzCY62NYc` }
                target="_blank"
                rel="noopener noreferrer">
                Link 1
              </a>
              </span>
              <span>      
              <a 
                href={ `https://codeburst.io/javascript-for-beginners-the-new-operator-cee35beb669e` }
                target="_blank"
                rel="noopener noreferrer">
                Link 2
              </a>
              </span>
              <span>
              <a 
                href={ `https://www.tutorialsteacher.com/javascript/new-keyword-in-javascript` }
                target="_blank"
                rel="noopener noreferrer">
                Link 3
              </a>
              </span>           
            </>
  },
  {
    question: "__proto__ vs prototype",
    answer: <>
              <span>
                The <i>__proto__</i> property points to the object that the current 
                object actually will use when doing lookups on the prototype chain, 
                while <i>prototype</i> only exists on functions, in case you want to 
                use those objects as constructors passed to the <b><i>new</i></b> keyword.<br/>
              </span>
              <span>
                Dealing with prototypes we have to remember that all we're doing is 
                delegation (objects delegating to other objects). It might be a bit misleading 
                that we are calling it prototypal inheritance because it isn't inheritance 
                at all - it's just <i>prototypal delegation</i>.<br/>
              </span>
              <span>
                <i>__proto__</i> is the property on an object that actually points out
                the <i>prototype</i> that has been set for that object.<br/>
              </span>
              <span>
                <i>prototype</i> is the property automatically created only on functions and it is useful 
                only when you want to use those functions as constructors with <b><i>new</i></b>.<br/>
              </span>                 
              <span>
                <a 
                  href={ `https://www.youtube.com/watch?v=DqGwxR_0d1M`}
                  target="_blank"
                  rel="noopener noreferrer">
                  Link 1
                </a>
              </span>              
            </>
  }, 
  {
    question: "Object.create()",
    answer: <>
              <span>
              <b><i>Object.create()</i></b> - creates a new object with the prototype
              set to a certain object. So, if we ask the property (method) that doesn't 
              exist on this new object it delegates this call to its prototype and ask 
              the prototype do you have this property (method) and if - call that.<br/>
              In practice, for a performance standpoint, we use <b><i>Object.create()</i></b> instead 
              of <b><i>setPrototypeOf()</i></b>, because it's very hard for the JS engine to 
              optimize the speed of your application. That's why in real-life applications we 
              never use <b><i>setPrototypeOf()</i></b> and we never assign new prototypes to object.<br/>
              </span>
              <span>
                <a 
                  href={ `https://youtu.be/CDFN1VatiJA`}
                  target="_blank"
                  rel="noopener noreferrer">
                  Object.create()
                </a>
              </span>
              <span>
                <a 
                  href={ `https://youtu.be/riDVvXZ_Kb4`}
                  target="_blank"
                  rel="noopener noreferrer">
                  Prototypes and Object.create()
                </a>
              </span>             
            </>
  },
  {
    question: "How does 'class' work in JavaScript",
    answer: <>
              <span>
              <b><i>Class</i></b> is just a very thin layer on top of the prototypal 
              inheritance. There is <i>no class-based inheritance in JavaScript</i>. 
              It's just a syntactic sugar.<br/>
              </span>
              <span>
                <a 
                  href={ `https://youtu.be/Tllw4EPhLiQ`}
                  target="_blank"
                  rel="noopener noreferrer">
                  Link 1
                </a>
              </span>              
            </>
  },
  {
    question: "Object.assign()",
    answer: <>
              <span>
              <i>Object.assign()</i> copies the values (of all enumerable own properties) 
              from one or more source objects to a target object. It has a signature 
              of <i>Object.assign(target, ...sources)</i>. The target object is the first 
              parameter and is also used as the return value. <i>Object.assign()</i> is useful 
              for merging objects or cloning them shallowly.<br/>
              </span>
              <span>
                <a 
                  href={ `https://googlechrome.github.io/samples/object-assign-es6/`}
                  target="_blank"
                  rel="noopener noreferrer">
                  Link 1
                </a>
              </span>              
            </>
  },
  {
    question: "Higher-order functions",
    answer: <>
              <span>
                <b><i>Functional programming</i></b> hepls to write 
                code faster with fewer bugs, because you will be reuse 
                more of your code. In functional programming languages we
                can pass functions to values or into other 
                functions (<b><i>higher-order functions - HOC</i></b>). 
                Examples: filter, map, reduce.<br/> 
                <span>
                  Functions that you send into other functions are 
                  called <b><i>callback functions</i></b>. Because the host                     
                  function will call back to them.<br/>
                </span>
                <span>
                  HOC are good for <b><i>composition</i></b> - compouse a lot 
                  of small functions into bigger functions.<br/>
                </span>
                <span>
                  Like <b><i>filter()</i></b>, <b><i>map()</i></b> is a function on the 
                  array object. <i>map()</i> will take a callback function, just 
                  like <i>filter()</i> does. The callback function will be passed 
                  each item in the array. But here is where <i>map()</i> gets 
                  different from <i>filter()</i>.<br/>
                </span>
                <span>
                  <i>filter()</i> expects that it's a callback function to return 
                  a true or false value that determines whether or not the item 
                  should be included in the array or not. <i>map()</i> will include 
                  all items in the array but instead, it expects the callback 
                  function to return a transformed object that will put into the new
                  array instead of the original one.<br/>
                </span>
                <span>
                  <i>map(), filter(), <b>find()</b></i> are all list transformations - 
                  they turn your list into something else. But they are all pretty 
                  specific. <b><i>reduce()</i></b> is not. <i>reduce()</i> is the multi-tool on list
                  transformations. It can be used to express any list transformation. You can 
                  use <i>reduce()</i> to implement functions like <i>map(), filter(), find()</i> or 
                  any other list transformation. So, <i>reduce()</i> is especially helpful if you 
                  can't find a prebuilt list transformation method that fits your problem.<br/>
                </span>
                <span>
                  <i>reduce()</i>  also is a function on array object and it takes a callback function 
                  but unlike <i>map()</i> and <i>filter()</i> it wants an object - you can think of 
                  this object as a starting point. And we set the starting point as the first argument 
                  to the callback. The iterated item is the second argument.<br/>
                </span>
                <span>
                  In JS functions are not just functions. They are also <b><i>closures</i></b>. 
                  That means the function body has access to variables that are defined outside 
                  function. In JavaScript, closures are created every time a function is                     
                  created, at function creation time.<br/>
                </span>
                <span>
                  <b><i>Currying</i></b> is when a function doesn't take all of its arguments 
                  upfront. When a function, instead of taking all arguments at one time, 
                  takes the first one and returns a new function that takes the second one 
                  and returns a new function which takes the third one, and so forth, until 
                  all arguments have been fulfilled. The idea with carrying is that your 
                  function can pass through the application and gradually receive the arguments 
                  that it needs.<br/>
                </span>
                <span>
                  <b><i> Recursion</i></b>  is when a function calls itself until it doesn't. 
                  The <b><i>call stack</i></b> is the stack of function calls that your code has 
                  made and in most non-functional programming languages there is an upper limit 
                  to how far you can go. The functional programming language has never had his 
                  limit because you use recursion for everything and then you can't have this limit.<br/>
                </span>
                <span>
                  JS has the limitation in ES5 but it is removed in ES6 (even though that Babel can 
                  simulate it because it's an engine thing). That's why ES6 is interesting from a 
                  functional programming perspective because it removes one of the main limitations 
                  to doing functional programming with JS (this feature is called <i>tail call optimization</i>).<br/>
                </span>
                <span>
                  Every time you do a loop you can use recursion instead but it doesn't work the other way 
                  around because there are things that recursion can do that loops cannot: 
                  work with <i>tree structures</i>.<br/>
                </span>
              </span>
              <span>
                <a 
                  href={ `https://youtu.be/BMUiFMZr7vk` }
                  target="_blank"
                  rel="noopener noreferrer">
                  Functional Programming
                </a>
              </span>
              <span>
                <a 
                  href={ `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures` }
                  target="_blank"
                  rel="noopener noreferrer">
                  Closures
                </a>
              </span>
              <span>
                <a 
                  href={ `https://lodash.com/docs#curry` }
                  target="_blank"
                  rel="noopener noreferrer">
                  Currying
                </a>
              </span>
              <span>
                <a 
                  href={ `https://youtu.be/k7-N8R0-KY4` }
                  target="_blank"
                  rel="noopener noreferrer">
                  Recursion
                </a>
              </span>
            </>
  },
  {
    question: "Promises",
    answer: <>
              <span>
                <b><i>Promises</i></b> are (just like callbacks) a way of dealing with asynchronous code 
                when we don't know when things are gonna happen or in what order. But promises are more 
                powerful than callbacks because they can be composed avoiding callback hell.<br/>
              </span>
              <span>
                <a 
                  href={ `https://youtu.be/2d7s3spWAzo`}
                  target="_blank"
                  rel="noopener noreferrer">
                  Link 1
                </a>
              </span>              
            </>
  },
  {
    question: "Factory Functions",
    answer: <>
              <span>
                <b><i>Factories</i></b> are functions that create objects and return them.                   
                In most cases, you can use factories instead of classes. Factories                   
                are much simpler than classes. But classes are a bit faster but that                   
                it is by so little that it only matters if you're creating 10 000                   
                items per frame or more.<br/>
              </span>
              <span>
                <a 
                  href={ `https://youtu.be/ImwrezYhw4w` }
                  target="_blank"
                  rel="noopener noreferrer">
                  Link 1
                </a>
              </span>              
            </>
  },
  {
    question: "Composition over Inheritance",
    answer: <>
              <span>
                <b><i>Inheritance</i></b> is when you design your types around what 
                they are while the <b><i>composition</i></b> is when you design your 
                types around what they do.<br/>
              </span>
              <span>
                Inheritance encourages you to build this taxonomy of objects very early 
                on in the project. And you are most likely going to make big design 
                mistakes while doing that. Because humans cannot predict the future.<br/>
              </span>
              <span>
                It's better to use composition from the start. It's more flexible, it's 
                more powerful, and it's really easy to do.<br/>
              </span>
              <span>
                <a 
                  href={ `https://youtu.be/wfMtDGfHWpA` }
                  target="_blank"
                  rel="noopener noreferrer">
                  Link 1
                </a>
              </span>              
            </>
  },
  {
    question: "async / await",
    answer: <>
              <span>
                <b><i>async / await</i></b> keywords allow us to pause the execution of 
                functions and this, in turn, allows us to write asynchronous code that 
                reads like synchronous.<br/>
              </span>
              <span>
                Inside a function marked as async, you are allowed to place the await 
                keyword in front of an expression that returns a promise. When you do, 
                the execution of the async function is paused until the promise is resolved.<br/>
              </span>
              <span>
                The idea behind the <b><i>async / await</i></b> keywords is to be able to 
                write asynchronous code that flows like synchronous code. Async functions 
                always return a promise when you call them (it makes sense because they are 
                asynchronous).<br/>
              </span>
              <span>
                If we do a couple of queries to the server async/await will load the query 
                in sequence while the promised example will load them in parallel. So a 
                promised example is a lot faster.<br/>
              </span>
              <span>
                <b><i>Async/await works fine for such cases:</i></b><br/>
                <span>
                  <i>1. Fetch a single promise</i>. This makes the code flow in a more 
                  approachable manner, it cannot wait for multiple promises. So it wasn't 
                  as flexible as raw promises. You can just fall back to raw promises when 
                  async/await limits you.
                </span><br/>
                <span>
                  <i>2. If we have multiple promises and we didn't want to fetch them in parallel</i>. 
                  For example, if we have a case where we wanted things to happen in sequence, like 
                  a script that processes a few hundred thousand users: loop through the users and 
                  then for every user it processes the user and it awaits for every process to 
                  complete (resolve) before it continues. So, in this case, we have a lot of users 
                  and we don't want to create a hundred thousand requests at the same time. Here 
                  async/await makes a lot of sense.
                </span><br/>
              </span>
              <span>
                <a 
                  href={ `https://youtu.be/568g8hxJJp4` }
                  target="_blank"
                  rel="noopener noreferrer">
                  Link 1
                </a>
              </span>              
            </>
  },
  {
    question: "Fetch API",
    answer: <>
              <span>
                <b><i>Fetch</i></b> is a new API that makes <i>‘<b>Fetch</b>’ing</i> remote 
                resources much easier. Like XMLHttpRequest, Fetch can be used for making 
                requests same origin or cross domain requests. Fetch uses a cleaner, more 
                powerful API that separates the request from the response and uses a promise 
                to return the response.<br/>
              </span>
              <span>
                <a 
                  href={ `https://youtu.be/g6-ZwZmRncs` }
                  target="_blank"
                  rel="noopener noreferrer">
                  Fetch API
                </a>
              </span>
              <span>
                <a 
                  href={ `https://developers.google.com/web/ilt/pwa/working-with-the-fetch-api-slides` }
                  target="_blank"
                  rel="noopener noreferrer">
                  Working with the Fetch API
                </a>
              </span>          
            </>
  },
  {
    question: "Next",
    answer: <>
              <span>
              <i>Object.assign()</i> copies the values (of all enumerable own properties) 
              from one or more source objects to a target object.<br/>
              </span>
              <span>
                <a 
                  href={ ``}
                  target="_blank"
                  rel="noopener noreferrer">
                  Link 1
                </a>
              </span>              
            </>
  },
  {
    question: "Next",
    answer: <>
              <span>
              <i>Object.assign()</i> copies the values (of all enumerable own properties) 
              from one or more source objects to a target object.<br/>
              </span>
              <span>
                <a 
                  href={ ``}
                  target="_blank"
                  rel="noopener noreferrer">
                  Link 1
                </a>
              </span>              
            </>
  },
  {
    question: "Next",
    answer: <>
              <span>
              <i>Object.assign()</i> copies the values (of all enumerable own properties) 
              from one or more source objects to a target object.<br/>
              </span>
              <span>
                <a 
                  href={ ``}
                  target="_blank"
                  rel="noopener noreferrer">
                  Link 1
                </a>
              </span>              
            </>
  },
]


export default  JSQuestions;