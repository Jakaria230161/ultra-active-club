import React from 'react';
import './Question.css'

const Question = () => {
    return (
        <div className='q-container'>
            <h1>How does work react?</h1>
            <p>It’s a library. For building user interfaces. This is perfect because, more often than not, this is all we want. The best part about this description is that it highlights React’s simplicity. It’s not a mega framework. It’s not a full-stack solution that’s going to handle everything from the database to real-time updates over web socket connections. We don’t actually want most of these pre-packaged solutions, because in the end, they usually cause more problems than they solve. Facebook sure did listen to what we want.
            </p>
            <br></br>
            <br></br>

            <h1>How to work useEffect?</h1>
            <p>When we want to perform something after each render of component then we can use the useEffect() hook. By using this Hook, we tell React that our component needs to do something after render by passing a function. React remember the function we passed in useEffect() hook and call it later after performing the DOM updates.

            By default, the useEffect hook runs after the first render and after every update. React updates the DOM by the time it runs the effect

            </p>
            <br></br>
            <br></br>
            <h1>What is difference between props and state?</h1>
            <p>Props are used to pass data from one component to another.
            The state is a local data storage that is local to the component only and cannot be passed to other components.
                The this.setState property is used to update the state values in the component.
            </p>
        </div>
    );
};

export default Question;