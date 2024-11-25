import React from 'react'

const About = () => {
  return (
    <main>
    <div className='flex justify-center font-serif mt-4 text-2xl border-gray-900 border-t-2'>
      <h1>About Us</h1>
    </div>
       <div  className='flex items-center gap-20  font-serif  text-xl px-60 py-10'>
        <p>Welcome to Furniro, where we believe that furniture is not just functional but an essential part of creating a home that reflects your style and personality. 
          Since our inception in 2001, we have dedicated ourselves to offering an exquisite collection of furniture that marries comfort with elegance.

           Our diverse range includes everything from luxurious sofas to beautifully crafted dining tables, all designed with the finest materials to ensure 
           longevity and aesthetic appeal.
           At the heart of our business is a commitment to customer satisfaction. Our friendly support team is always ready to assist you, ensuring your shopping experience is seamless and enjoyable.

            We also prioritize sustainability, choosing eco-friendly materials whenever possible because we believe that caring for our planet is as important as caring for our homes.

             Join us at Furniro and discover the perfect pieces to elevate your living space into a haven of style and comfort!

          </p>
       </div>
       <div className='flex justify-center font-serif text-xl'>
        <p>
          We Love You!
        </p>
       </div>
    <div className="flex justify-center mt-4">
                <img src ="Shop-Lp.png"/>
             </div>
    </main>
  )
}

export default About
