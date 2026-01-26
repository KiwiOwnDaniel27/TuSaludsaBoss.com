import React from 'react'

const Titule = ({title, text, link}) => {
  return (
    <div  className="flex items-center justify-between flex-wrap gap-4">
        <div>
            <h2>{title}</h2>
            <p className="max-w-[640px] mt-4 mb-6" >{text}</p>
        </div>

        <a href="https://wa.me/+593984611893" className="secundary-btn">{link}</a>
    </div>
  )
}

export default Titule;