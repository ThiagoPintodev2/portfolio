import { MdOutlinePhoneIphone } from "react-icons/md";
import { AiOutlineMail } from "react-icons/ai";
import { IoLocationSharp } from "react-icons/io5";
import { Button } from "@/components/ui/button";
import { BsDownload } from "react-icons/bs";

function ContactSection() {
  const contactData = [
    {
      title: "Phone",
      value: "(22) 99968-7139",
      contactIcon: <MdOutlinePhoneIphone />,
    },
    {
      title: "Email",
      value: "thiago.silvabz@hotmail.com",
      contactIcon: <AiOutlineMail />,
    },
    {
      title: "Location",
      value: "Rio de Janeito - Brasil",
      contactIcon: <IoLocationSharp />,
    },
  ];

  return (
    <div
      className={`flex flex-col w-[100%] bg-[#1f1d1d] rounded-3xl text-ligthbrown font-raleway 
        text-[1.8rem] shadow-xl/20 border-white/5 border-1 items-center h-[65rem] sm:h-[65rem] lg:w-[100%] lg:h-[60rem]`}
    >
      {contactData.map((el, i) => (
        <div key={i}
          className={`flex flex-col justify-center items-center text-center 
            gap-3 lg:w-[85%]`}
        >
          <div
            className={`flex items-center mt-[3rem] text-[4rem] justify-center w-[6.6rem] h-[6.6rem]
              bg-[#3c3730] rounded-2xl lg:text-[2.5rem] lg:w-[6rem] lg:h-[6rem] border-1 border-mediumbrown shadow-xl/30`}
          >
            {el.contactIcon}
          </div>
          <div className={`flex flex-col lg:text-[1.6rem]`}>
            {el.title}
            <p>{el.value}</p>
          </div>
            <div className="w-[22rem] h-[0.5px] border-white/5 border-1 mt-[1rem] sm:w-[30rem] md:w-[35rem] lg:w-[25rem]"></div>
            
        </div>
      ))}
      
      <Button
        className={`flex items-center w-[85%] h-[6rem] rounded-2xl bg-ligthbrown mb-[3rem] border-white/5 lg:shadow-xl/20
          text-[1.5rem] gap-8 font-raleway font-semiboldd cursor-pointer mt-[3rem] text-darkbrown sm:text-[2rem] lg:mt-[2rem]`}
      >
        <BsDownload />
        Download Resume
      </Button>
    </div>
  );
}

export default ContactSection;
