import { Link } from "react-router-dom";

const HomeInfo = ({ currentStage }) => {
  if (currentStage === 1)
    return (
      <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-2 px-6 text-white mx-5'>
       Welcome viking fans! We are
        <span className='font-semibold mx-2 text-white'><br/> Epic Chronicles Clips 👋<br/> </span>
       A group of history lovers from England
      </h1>
    );

  if (currentStage === 2) {
    return (
      <div className=' sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-2 px-6 text-white mx-5'>
        <h1 className=' font-medium sm:text-l text-center m-2'>
          We create historical videos and short <br /> edits filled with commentary about
        </h1>

        <Link to='/about' className='neo-brutalism-white neo-btn rounded-md text-blue-800 font-bold  mb-2 sm:text-l text-center p-2 ' >
          medieval history myths and facts.
       
        </Link>
      </div>
    );
  }

  if (currentStage === 3) {
    return (
      <div className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-2 px-2 text-white mx-4'>
        <h1 className='font-medium text-center sm:text-l p-2'>
        Find all things about viking history, documentaries, <br />  merch, subscriptions and much more!
        </h1>

        <Link to='/shop' className='neo-brutalism-white neo-btn rounded-md text-blue-800 font-bold p-1 mb-2'>
          Shop your favourite merch.
          {/* <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' /> */}
        </Link>
      </div>
    );
  }

  if (currentStage === 4) {
    return (
      <div className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-2 px-6 text-white mx-5'>
      <h1 className='font-medium sm:text-l text-center p-2'>
        We are just a few keystrokes away <br/> so reach out and
      </h1>

      <Link to='/contact' className='neo-brutalism-white neo-btn rounded-md text-blue-800 font-bold p-1 mb-2'>
        Ask us anything!
        {/* <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' /> */}
      </Link>
    </div>
    );
  }

  

  return null;
};

export default HomeInfo;



// import React from 'react';
// import {Link } from 'react-router-dom';

// const InfoBox = ({text, link, btnText}) =>(
//     <div className='info-box '>
// <p className='font-medium sm:text-l text-center'>{text}</p>
// <Link to={link} className='neo-brutalism-white neo-btn' >
// {btnText}
// {/* <img src={arrow} className='w-4 h-4 object-contain' /> */}
// </Link>
//     </div>
// )
// const renderContent = {
//     1: (
// <h1 className='sm:text-l sm:leading-snug text-center 
// neo-brutalism-blue py-2 px-6 text-white mx-5'>Welcome viking fans! We are 
// <span className='font-semibold'><br/> Epic Chronicles Clips <br/></span>
// A a.group of history lovers from England</h1>
//     ),
//     2: (
// <InfoBox 
// text="Find all things about viking medieval history, documentaries, merch, subscriptions and much more!"
// link = "/about"
// btnText="Learn More"
// />
//     ),
//     3: (
// <h1>3</h1>
//     ),
//     4:(
// <h1>4</h1>
//     ),
// }


// const HomeInfo = ({currentStage}) => {
//   return renderContent[currentStage] || null;
// }

// export default HomeInfo