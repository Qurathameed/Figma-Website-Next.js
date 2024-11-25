import React from 'react'

const Footer = () => {
  return (
    <footer>
      <div className='flex justify-center items-center bg-white py-12 px-6 sm:px-12 md:px-24 gap-8'>
        {/* Footer Image */}
        <img 
          src='footer.png' 
          alt='footer image' 
          className='w-full sm:w-auto md:w-3/4 lg:w-1/2' 
        />
      </div>
    </footer>
  )
}

export default Footer
