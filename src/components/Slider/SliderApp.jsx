import React from "react";

export const SliderApp = () => {
  return (
    <>
      <div className="w-100% h-600px overflow-hidden">
        <ul className="">
          <li className="w-screen list-none">
            <img className="w-screen h-screen max-w-full"  src="https://arc-anglerfish-arc2-prod-infobae.s3.amazonaws.com/public/LWIDSPJCFVBYVHXC2ZUW6WBEMM.jpg" />
          </li>
          <li className="w-screen list-none">
            {/* <img className="w-screen h-screen"  src="https://s1.1zoom.me/big0/160/354276-admin.jpg" /> */}
          </li>
          <li className="w-screen list-none">
            {/* <img className="w-screen h-screen" src="https://mobimg.b-cdn.net/pic/v2/gallery/preview/goroda-pejzazh-ulicy-22228.jpg" /> */}
          </li>
          <li className="w-screen list-none">
            {/* <img className="w-screen h-screen" src="http://2.bp.blogspot.com/-dNtt1v-HAOE/UFdRpT_pY9I/AAAAAAAABXw/gBzxja1td3Y/s1600/fondos-escritorio-ciudades-1280.jpg" /> */}
          </li>
        </ul>
      </div>
    </>
  );
};
