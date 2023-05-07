export default function Navbar() {
  return (
    <div className="justify-between flex items-center mx-auto px-4 h-24">
      <h1 className="w-full text-3xl font-bold">SENETH <span className="text-4xl text-orange-500">.</span></h1>

      <ul className="md:flex font-semibold hidden"> 
        <li className="p-4 cursor-pointer hover:text-orange-800">Home</li>
        <li className="p-4 cursor-pointer hover:text-orange-800">Works</li>
        <li className="p-4 cursor-pointer hover:text-orange-800">About</li>
        <li className="p-4 cursor-pointer hover:text-orange-800">Projects</li>
        <li className="p-4 cursor-pointer hover:text-orange-800">Services</li>
      </ul>
      <button className="w-[250px] mx-4 bg-orange-400 p-2 rounded-md text-white font-bold hover:bg-orange-600">CV</button>
    </div>
  );
}
