import React, { Fragment, useState } from 'react'

const Sushi = ({sushi, eatMoreSushi, eatenSushis}) => {
  // const [eaten, setEaten] = useState(false);
  return (
    <div className="sushi">
      <div className="plate" 
           onClick={() => {
             eatMoreSushi(sushi)
            //  setEaten(true)
           }}>
        { 
           eatenSushis.includes(sushi) ?
           null
           :
           <img src={sushi.img_url} width="100%" />
        }
      </div>
      <h4 className="sushi-details">
        {sushi.name} - ${sushi.price}
      </h4>
    </div>
  )
}

export default Sushi