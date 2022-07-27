import React from 'react'

export const FooterApp = () => {
  return (
    <>
    <div className='w-full h-auto bg-slate-800 flex justify-center align-middle'>
      <div className='mt-5'>
        <h3 className='text-amber-500 text-center mb-2 font-black'>Push Gaming</h3>
        <p className='text-white text-center font-medium px-10'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur explicabo beatae vel illum ad rerum voluptatum autem magni aspernatur iste veritatis nobis</p>
        <ul className='w-screen flex flex-col justify-center items-center mt-1 mb-3'>
          <li><a href="#" className='text-white font-light'>Servicios</a></li>
          <li><a href="#" className='text-white font-light'>Proyecto</a></li>
          <li><a href="#" className='text-white font-light'>Comercio</a></li>
        </ul>
        <div className='w-screen bg-black flex justify-center pt-3 pb-3'>
          <h2 className='text-white font-bold'>Todos los derechos reservados</h2>
        </div>
      </div>
    </div>
    </>
  )
}




