
import Link from 'next/link'
import Shop from './Shop/page'
import About from './About/page'
import Contact from './Contact/page'
const page = () => {
  return (
    <main >
    <div className="relative h-screen">
    <img src="/banner.png" alt="Hero Image" className="absolute inset-0 object-cover w-full h-full"></img>
    <div className='py-10 px-14 absolute z-10 translate-x-28 left-[570px] mt-24 w-[730px] h-[600px]'>
     <img src='hp-hero.png'/>
          </div>
            </div>
            <div className=' gap-8 mt-10'>
            <h4 className='flex justify-center text-black font-bold text-2xl'>Browse The Range</h4>
            <p className='flex justify-center text-black font-semibold'>Lorem ipsum dolor sit amet cquis, asperiores elit.</p>
          </div>
          <div className='flex justify-center gap-6 mt-10'>
            <img src='/first-pic.png '/>
            <img src='/second-pic.png'/>
            <img src='/third-pic.png'/>
          </div>
          <div>
            <ul className=' flex justify-center gap-[350px] font-semibold text-xl mt-4 '>
              <li>Dining</li>
              <li>Living</li>
              <li>Bedroom</li>
            </ul>
          </div>
         <div className='flex justify-center text-4xl font-bold mt-9'>
          <h4>Our Products</h4>
          </div>
          <div className='flex justify-center gap-10 mt-6'>
            <img src='/img1.png'/>
            <img src='/img2.png'/>
            <img src='/img3.png'/>
            <img src='/img4.png'/>
        </div>
        <div className='flex justify-center gap-9 mt-6'>
          <img src='/img5.png'/>
          <img src='/img6.png'/>
          <img src='/img7.png'/>
          <img src='/img8.png'/>
        </div>
<div className='flex justify-center'>
  <img src='img11.png'/>
</div>
 </main>

  )
}
export default page
