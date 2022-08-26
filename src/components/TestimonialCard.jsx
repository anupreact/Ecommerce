import React from "react";
import avatar from '../images/man4.png'

const TestimonialCard = (props) => {
    const {id ,name , post , message } = props
  return (
    <section className="card testimonial-card">
      <div className="card-img">
        <img src={avatar} alt="musical instruments" />
      </div>

      <div className="card-desc">
        <p>
          <strong>❝</strong>{message}
          <br />
          <strong>❞</strong>
        </p>
      </div>

      <h4>{name}</h4>
      <span>{post}</span>
    </section>



// const initialState = 0

// const changeCount =  (state = initialState , action)=>{
//     switch(action.type){
//         case 'INCREMENT': return state + action.payload;
//         case 'DECREMENT':  
//         if(state > 0) {
//             return (
//                 state = state - action.payload
//             )
//         }
//         default : return state;
//     }
// }   

// export default changeCount;












  );
};

export default TestimonialCard;
