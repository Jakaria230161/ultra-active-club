import React from 'react';
import './Question.css'

const Question = () => {
    return (
        <div className='q-container'>
            <h1>HOw to work react?</h1>
            <p>Let us understand this with a practical example.

                Let’s say one of your friends posted a photograph on Facebook. Now you go and like the image and then you started checking out the comments too. Now while you are browsing over comments you see that the likes count has increased by 100, since you liked the picture, even without reloading the page. This magical count change is because of ReactJS. </p>
            <br>

            </br>

            <h2>how to work useEffect?</h2>
            <p>The useEffect hook is the Swiss Army knife of all the hooks. It’s the solution to many problems: how to fetch data when a component mounts, how to run code when state changes or when a prop changes, how to set up timers or intervals, you name it.</p>
            <br>

            </br>
            <h2>differece props and state?</h2>
            <p>Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components</p>
        </div>
    );
};

export default Question;