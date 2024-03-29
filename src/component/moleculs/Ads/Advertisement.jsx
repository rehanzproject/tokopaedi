import React from 'react'
import jordan from '../../../assets/images/jordan.png'
import { useNavigate } from 'react-router-dom'
function Advertisement() {
  const navigate = useNavigate()
  return (
    <div className="bg-white">
      <div className="sm:px-6 sm:py-32 lg:px-8">
        <div className="relative isolate overflow-hidden bg-gray-50 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 sm:py-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
          <svg
            viewBox="0 0 1024 1024"
            className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
            aria-hidden="true"
          >
            <circle cx={512} cy={512} r={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
            
          </svg>
          <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
            <p className='text-sm py-3'>Shoes New Collection</p>
            <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
              Air Jordan
             </h2>
              <br />
            <h1 className='text-5xl font-bold'>Retro White Perforated</h1> 
         
            <p className="mt-6 text-lg leading-8 font-bold ">
           Upto 50% OFF</p>
            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
            <a onClick={()=>navigate('/search?pn=air+jordan')} className="rounded-2xl bg-yellow-300 px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-yellow-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">Lihat Koleksi Produk</a>
            </div>
          </div>
          <div className="relative mt-16 h-80 lg:mt-8 ">
            <img
              className="absolute left-0 top-0 w-[rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
              src={jordan}
              alt="App screenshot"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Advertisement