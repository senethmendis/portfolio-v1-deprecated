import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Reactlogo from "./Reactlogo";

import Room from "./Room";

function Hero() {
  return (
    <div className="flex h-screen relative p-6">
      <div className="absolute top-0 left-0  m-auto p-6">
        <Canvas camera={{ fov: 30, position: [5, 5, 5] }}>
          <OrbitControls autoRotate={true} />
          <Stage environment={"city"}>
            <Reactlogo />
          </Stage>
        </Canvas>
      </div>

      <div className="flex-1 h-[100%]  flex flex-col justify-start">
        <div className="p-6 mx-auto my-auto">
          <div className="">
            <h1 className="text-8xl font-bold uppercase">Hi! I am</h1>
            <h1 className="text-8xl font-bold">Seneth Mendis</h1>
          </div>
          <p className="my-6 font-semibold">
            Front-end Developer and a Designer
          </p>

          <div className="">
            <button className="w-[150px] bg-orange-500 p-2 font-bold text-white hover:bg-orange-600">
              Hire Me
            </button>
            <button className="w-[150px] ml-2 p-2 font-bold border-0 inline hover:border-1 border-orange-500">
              Projects
            </button>
          </div>

          <div className="my-6">

            {/*<div className=" w-[50%] p-3">
              <h1 className="text-4xl font-bold">+7</h1>
              <p>
                Projects Worked <br></br> on so far
              </p>
            </div>*/}

            <div className=" flex">
              <div className=" w-[50%] p-3">
                <h1 className="text-3xl font-bold">Undergraduate</h1>
                <p>Completing second yaer</p>
              </div>
              <div className=" w-[50%] p-3">
                <h1 className="text-3xl font-bold">Contact</h1>
                <p className="font-semibold">
                  mendis.seneth@gmail.com <br></br>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-col md:flex-1">
        <div className="w-[100%] h-[100%]">
          <Canvas camera={{ fov: 45, position: [5, 5, 5] }} >
            <OrbitControls autoRotate={true} minZoom={5} />
            <Stage environment={"forest"}>
              <Room />
            </Stage>
          </Canvas>
        </div>
      </div>
    </div>
  );
}

export default Hero;
