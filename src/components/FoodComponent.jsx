import React from 'react'

function FoodComponent({image_url,name}) {
  return (
    <div className='card'>
        <div className='card-body'>
            <div className='card-image'>
            <img src={image_url} alt={name} />
            </div>
        </div>
        <div className='card-title'>{name}</div>
    </div>
  )
}

export default FoodComponent