import React from 'react';
import './List.css';
import Card from './Card'


function List({ title,username, cards }){
  return (
    <div className="list">
      <div className='title'>
      <h3>{title}</h3>
      </div>
      <div className="cards">
        {cards.map((card,index)=>(
          <Card key={index} text={card.text} />
        ))}
      </div>
    </div>
  );
};


export default List;
