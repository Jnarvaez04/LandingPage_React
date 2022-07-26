import React from "react";

export const CardsApp = () => {
  return (
    <>
      <div className="contenedor mt-10 w-screen h-auto m-auto flex flex-wrap justify-center">
        <div className="container__background-triangle">
            <div className="triangle triangle1"></div>
            <div className="triangle triangle2"></div>
            <div className="triangle triangle3"></div>
        </div>

        {/* CARD 1 */}
        <div className="shadow rounded-2xl w-80 m-10 p-2">
          <div className="w-full h-44 overflow-hidden rounded-xl">
            <img
              src="https://fondosmil.com/fondo/2081.jpg"
              alt=""
            />
          </div>
          <h2 className="mt-1 text-4xl font-normal text-white">Titulo</h2>
          <p className="mt-1 text-xl font-base tracking-normal text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            odio vero laborum rem natus incidunt voluptatibus dolorem dolor
            eaque laboriosam? Rerum est velit tempora pariatur sed, perferendis
            iste recusandae suscipit.
          </p>
          <hr className="mt-3 border-none h-px bg-slate-900	" />
          <div className="flex mt-3 justify-between">
            <h3 className="text-base font-semibold text-white">Jhoan Narvaez</h3>
            <i>08-marzo-2022</i>
          </div>
        </div>

        {/* CARD 2 */}

        <div className="shadow rounded-2xl w-80 m-10 p-2">
          <div className="w-full h-44 overflow-hidden rounded-xl">
            <img
              src="https://fondosmil.com/fondo/2081.jpg"
              alt=""
            />
          </div>
          <h2 className="mt-1 text-4xl font-normal text-white">Titulo</h2>
          <p className="mt-1 text-xl font-base tracking-normal text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            odio vero laborum rem natus incidunt voluptatibus dolorem dolor
            eaque laboriosam? Rerum est velit tempora pariatur sed, perferendis
            iste recusandae suscipit.
          </p>
          <hr className="mt-3 border-none h-px bg-slate-900	" />
          <div className="flex mt-3 justify-between">
            <h3 className="text-base font-semibold text-white">Jhoan Narvaez</h3>
            <i>08-marzo-2022</i>
          </div>
        </div>

        {/* CARD 3 */}
        <div className="shadow rounded-2xl w-80 m-10 p-2">
          <div className="w-full h-44 overflow-hidden rounded-xl">
            <img
              src="https://fondosmil.com/fondo/2081.jpg"
              alt=""
            />
          </div>
          <h2 className="mt-1 text-4xl font-normal text-white">Titulo</h2>
          <p className="mt-1 text-xl font-base tracking-normal text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            odio vero laborum rem natus incidunt voluptatibus dolorem dolor
            eaque laboriosam? Rerum est velit tempora pariatur sed, perferendis
            iste recusandae suscipit.
          </p>
          <hr className="mt-3 border-none h-px bg-slate-900	" />
          <div className="mt-3 flex justify-between">
            <h3 className="text-base font-semibold text-white">Jhoan Narvaez</h3>
            <i>08-marzo-2022</i>
          </div>
        </div>
      </div>
    </>
  );
};
