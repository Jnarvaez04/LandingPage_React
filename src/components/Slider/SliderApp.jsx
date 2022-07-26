import React from "react";

export const SliderApp = () => {
  return (
    <>
        <div className="w-95% m-auto overflow-hidden">
          <ul className="slider p-0 flex w-screen">
            <li className="list-none w-100%">
              <img
                className="w-screen h-screen"
                src="https://as01.epimg.net/meristation/imagenes/2019/09/24/noticias/1569346534_609742_1569346641_noticia_normal.jpg"
              />
            </li>
            <li className="w-screen list-none">
              <img
                className="w-screen h-screen"
                src="https://wallpapercave.com/wp/wp3438277.jpg"
              />
            </li>
            <li className="w-screen list-none">
              <img
                className="w-screen h-screen"
                src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Talon_5.jpg"
              />
            </li>
            <li className="w-screen list-none">
              <img
                className="w-screen h-screen"
                src="https://cdn.wallpapersafari.com/48/99/QdMOeo.jpg"
              />
            </li>
          </ul>
        </div>
    </>
  );
};
