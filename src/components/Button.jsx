import React from 'react'
 

function Button({children}) {
  return (
   <button className="text-white bg-teal-950 px-2 py-1 h-fit rounded whitespace-nowrap cursor-pointer">
 {children}
</button>
  )
}

export default Button;