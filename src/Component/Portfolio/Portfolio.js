import React from 'react';
import portfotlio from '../../images/90064233_678911372847088_4285522031555903488_n.jpg'
import './Portfolio.css'

const Portfolio = () => {
    return (
        <div className='portfolio'>
           <div className='portfolio-intro'>
           <img src={portfotlio} alt="" />
           <div>
           <h3>Muhammad Jakaria Mahmud</h3>
            <p>Kushtia,Bangladesh</p>
           
           </div>
           </div>
           <div className="portfolio-information">
           <p>56kg
           Weight</p>
           <p >5.9
           Height</p>
           <p>25yrs
           Age</p>

           </div>
        </div>
    );
};

export default Portfolio;