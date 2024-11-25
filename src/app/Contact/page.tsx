import React from 'react'

const Contact = () => {
  return (
    <main>
    <div>
      <img src ="Contact-h.png"/>
    </div>
       <div>
        <ul className='flex justify-center gap-20 mt-10 font-serif'>
          <li>Phone number: +1234567890</li>
          <li>Location: South Los Angeles</li>
          </ul>
          </div>
          <div>
            <ul  className='flex justify-center gap-20 mt-8 font-serif'>
          <li>Email: infobao-contact@gmail.com</li>
          <li>Language: Russian, English, Spanish.</li>
        </ul>
       </div>
       <div  className='flex justify-center gap-20 mt-8 font-serif '>
        <p>We hope you like this site and you want will back on this site!</p>
       </div>
    <div className="flex justify-center mt-4">
                <img src ="Shop-Lp.png"/>
             </div>
    </main>
  )
}

export default Contact
