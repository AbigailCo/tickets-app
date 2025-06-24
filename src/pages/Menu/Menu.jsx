import { CircleX } from "lucide-react";

import * as C from "../../components";
import pag1 from "../../assets/pag1.jpeg";
import pag2 from "../../assets/pag2.jpeg";


function AppMozo() {
    
  return (
    <>
      <C.Navbar />
      <div className=" contenedor min-h-screen flex justify-center items-start bg-gray-100 p-4">
        <div className="">
          <div className="flex justify-center my-4">
            <img
              src={pag1}
              alt="Menú página 1"
              className="max-w-full md:max-w-3xl h-auto rounded-xl shadow-lg object-contain"
            />
          </div>
          <div className="flex justify-center my-4">
            <img
              src={pag2}
              alt="Menú página 2"
              className="max-w-full md:max-w-3xl h-auto rounded-xl shadow-lg object-contain"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default AppMozo;
