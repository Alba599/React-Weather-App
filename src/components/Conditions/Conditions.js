import React from 'react';

const conditions = (props) => {
   return (
       <div>
           {console.log('in here', props.responseObj)}
           {props.responseObj.cod === 200 ?
               <div>

                   {/* {console.log("Is this working?")} */}
                   {/* <p>{props.responseObj.cnt.list[0]}</p> */}
                   {/* {JSON.stringify(props.responseObj.data)} */}
                   {/* {console.log(console.log(props.responseObj.body))} */}
                   {/* {console.log("Is this working?")} */}
                   <p><strong>{props.responseObj.name}</strong></p>
                   {/* <p>{props.responseObj.wind.speed}</p> */}
                   {/* <p>{props.responseObj.weather[0].main}</p> */}
                   {/* <p>{props.responseObj.main.temp_max}</p> */}
                   <p>It is currently {Math.round(props.responseObj.main.temp)} degrees out with {props.responseObj.weather[0].description}.</p>
                   {console.log(console.log(props.responseObj.main))}
               </div>
           : null
           }
       </div>
   ) 
}

export default conditions;