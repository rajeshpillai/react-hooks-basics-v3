import React from 'react'

export default function StarRating({
    count, 
    value, 
    inactiveColor="#ddd", 
    size=24, 
    activeColor="#f00",
    onChange}) {

  // new Array(count).fill("*")  // OR
  const stars = Array.from({length: count}, () => '🟊');
  console.log("stars: ", stars);

  const handleClick = (value) => {
    onChange(value + 1);  
  }

  return (
    <div>
      {
        stars.map((star, index) => {
          let style = inactiveColor;
          if (index < value) {
            // 3 rating -> 0 1 2 => selected 
            // 5 rating -> 0 1 2 3 4 => selected
            style = activeColor;
          }
          return (
            <span 
              key = {index}
              style={{color: style, width: size, height: size, fontSize:size}}
              className="star"
              onClick={()=>handleClick(index)}>🟊</span>
          )
        })
      }
    </div>
  )
}
