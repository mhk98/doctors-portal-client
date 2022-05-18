import React from 'react';

const InforCard = ({img, cardTitle, bgClass}) => {
    return (
        <div class={`card lg:card-side bg-base-100 shadow-xl ${bgClass}`}>
  <figure className='8'>
      <img src={img} alt="Album"/>
      </figure>
  <div  className="card-body">
    <h2  className="card-title">{cardTitle}</h2>
    <p>Click the button to listen on Spotiwhy app.</p>
  </div>
</div>
    );
};

export default InforCard;