import React from "react";

export const NavbarApp = () => {

    const lista = document.querySelector('#hola');
    const menu = document.querySelector('#udemy');

    const Prueba = () => {
      lista.classList.toggle("show");
    }

    const menuResponsive = () => {
      // alert('hola mundo');
      menu.classList.toggle("menuresponsive");
    }

  return (
    <>
      <nav class="bg-slate-700 sticky top-0">
        <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div class="relative flex items-center justify-between h-16">
            <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button
                onClick={()=>menuResponsive()}
                type="button"
                class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span class="sr-only">Open main menu</span>

                <svg
                  class="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>

                <svg
                  class="hidden h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
              <div class="flex-shrink-0 flex items-center">
                <img
                  class="block lg:hidden h-8 w-auto"
                  src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                  alt="Workflow"
                />
                <img
                  class="hidden lg:block h-8 w-auto rounded-md"
                  src="https://www.pushgaming.com/i/logo-v2-dark.png"
                  alt="Workflow"
                />
              </div>
              <div  class="hidden sm:block sm:ml-6">
                <div class="flex space-x-4">
                  <a
                    href="#"
                    class="bg-gray-900 text-white px-3 py-2 rounded-md font-semibold text-base"
                    aria-current="page"
                  >
                    Home
                  </a>

                  <a
                    href="#"
                    class="text-black font-semibold hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base"
                  >
                    Sessiones
                  </a>

                  <a
                    href="#"
                    class="text-black font-semibold hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md tex-base"
                  >
                    Destacados
                  </a>

                  <a
                    href="#"
                    class="text-black font-semibold hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base"
                  >
                    Top Juegos
                  </a>
                </div>
              </div>
            </div>
            <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <button
                type="button"
                class="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              >
                <span class="sr-only">View notifications</span>

                <svg
                  class="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
              </button>

              <div class="ml-3 relative">
                <div className="trabajo" >
                  <button
                    onClick={()=>Prueba()}
                    type="button"
                    class="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                    id="user-menu-button"
                    aria-expanded="false"
                    aria-haspopup="true"
                  >
                    <span class="sr-only">Open user menu</span>
                    <img
                      class="h-8 w-8 rounded-full"
                      src="https://cdn3.vectorstock.com/i/thumb-large/38/02/game-user-logo-icon-design-vector-22953802.jpg"
                      alt=""
                    />
                  </button>
                </div>

                <div
                  class="origin-top-right hidden absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="user-menu-button"
                  tabindex="-1"
                  id="hola"
                >
                  <a
                    href="#"
                    class="block px-4 py-2 text-sm text-black font-semibold"
                    role="menuitem"
                    tabindex="-1"
                    id="user-menu-item-0"
                  >
                    Your Profile
                  </a>
                  <a
                    href="#"
                    class="block px-4 py-2 text-sm text-black font-semibold"
                    role="menuitem"
                    tabindex="-1"
                    id="user-menu-item-1"
                  >
                    Settings
                  </a>
                  <a
                    href="#"
                    class="block px-4 py-2 text-sm text-black font-semibold"
                    role="menuitem"
                    tabindex="-1"
                    id="user-menu-item-2"
                  >
                    Sign out
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div   class="sm:hidden" id="mobile-menu">
          <div id="udemy"class="hidden px-2 pt-2 pb-3 space-y-1">
            <a
              href="#"
              class="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-semibold"
              aria-current="page"
            >
              HOME
            </a>

            <a
              href="#"
              class="text-black hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-semibold"
            >
              SESSIONES
            </a>

            <a
              href="#"
              class="text-black hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-semibold"
            >
              DESTACADOS
            </a>

            <a
              href="#"
              class="text-black hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-semibold"
            >
              TOP JUEGOS
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};
