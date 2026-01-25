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
        text-[1.8rem] shadow-xl/20 border-white/5 border-1 items-center lg:w-[100%] lg:h-[45rem] lg:gap-8 lg:mt-[2rem]`}
    >
      {contactData.map((el, i) => (
        <div key={i}
          className={`flex flex-col mt-[3rem] justify-center items-center text-center 
            gap-3 lg:flex-row lg:justify-start lg:w-[85%] lg:gap-4`}
        >
          <div
            className={`flex items-center text-[4rem] justify-center w-[6.6rem] h-[6.6rem]
               bg-[#3c3730] rounded-2xl lg:text-[2.5rem] lg:w-[5rem] lg:h-[5rem]`}
          >
            {el.contactIcon}
          </div>
          <div className={`flex flex-col lg:text-[1.6rem] lg:text-start`}>
            {el.title}
            <p>{el.value}</p>
          </div>
        </div>
      ))}
      <Button
        className={`flex items-center w-[85%] h-[6rem] rounded-2xl bg-ligthbrown mb-[3rem]
          text-3xl gap-8 font-raleway font-semiboldd cursor-pointer mt-[3rem] text-darkbrown lg:mt-[5rem]`}
      >
        <BsDownload />
        Download Resume
      </Button>
    </div>
  );
}

export default ContactSection;
