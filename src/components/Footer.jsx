import { BsFacebook } from "react-icons/bs";
import { GrInstagram } from "react-icons/gr";
import { BsLinkedin } from "react-icons/bs";
function Footer() {

    const handleAnchorClick = event => {
        // 👇️ use event.preventDefault() if you want to
        // prevent navigation
        // event.preventDefault();
    
        console.log('Anchor element clicked');
    
        // 👇️ refers to the link element
        console.log(event.currentTarget);
      };

  return (
    
      <div className="w-[100%] flex h-auto p-5 bg-slate-950">
        <div className="flex-1">
          <div className="m-auto">
            <h1 className="text-white text-3xl">Create Your Site in</h1>
            <div className="text-orange-500 text-3xl font-bold">
            ©{new Date().getFullYear()}
            </div>
            <button></button>
          </div>
        </div>

        <div className="flex-1 flex flex-row justify-center items-center">
          <div className="m-auto flex gap-10">
            <BsFacebook color="white" size={30} onClick={handleAnchorClick} href="https://www.instagram.com/mendis4k/" />
            <GrInstagram color="white" size={30} />
            <BsLinkedin color="white" size={30} />
          </div>
        </div>
      </div>
    
  );
}

export default Footer;
