import React from 'react';
import Loading from './Loading';
import Tour from './Tour';
const Tours = ({ props, removeTour}) => {
  return <>
     <section>
      <div className="title">
        <h2>ours tours</h2>
        <div className="underline"></div>
      </div>
      <div>
        {props.map((tour)=>{
          return <Tour key={tour.id} {...tour} removeTour={removeTour}/>
        })}
      </div>
    </section>
  </>
};

export default Tours;
