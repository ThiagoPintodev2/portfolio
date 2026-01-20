import { MdOutlinePhoneIphone } from "react-icons/md";
import { AiOutlineMail } from "react-icons/ai";
import { IoLocationSharp } from "react-icons/io5";

function ContactSection() {
  return (
    <div
      className={`flex flex-col w-[100%] bg-[#1f1d1d] rounded-3xl gap-[5rem] text-gray-300 font-raleway text-[1.2vw]`}
    >
      <div className={`flex mt-[5rem] ml-[1.5rem] items-center max-[1050px]:flex-col max-[1050px]:text-center max-[1050px]:ml-0 max-[1050px]:gap-2`}>
        <div
          className={`flex items-center justify-center w-[6.6rem] h-[6.6rem] bg-[#3c3730] rounded-3xl max-[1200px]:w-[5.5rem] max-[1200px]:h-[5.5rem]`}
        >
          <MdOutlinePhoneIphone />
        </div>
        <div className={`flex flex-col ml-[1rem]`}>
          Phone
          <p>(22) 99968-7139</p>
        </div>
      </div>
      <div className={`flex ml-[1.5rem] items-center`}>
        <div
          className={`flex items-center justify-center w-[6.6rem] h-[6.6rem] bg-[#3c3730] rounded-3xl max-[1200px]:w-[5.5rem] max-[1200px]:h-[5.5rem]`}
        >
          <AiOutlineMail  />
        </div>
        <div className={`flex flex-col ml-[1rem]`}>
          Email
          <p>thiago.silvabz@hotmail.com</p>
        </div>
      </div>
      <div className={`flex ml-[1.5rem] items-center mb-[5rem]`}>
        <div
          className={`flex items-center justify-center w-[6.6rem] h-[6.6rem] bg-[#3c3730] rounded-3xl max-[1200px]:w-[5.5rem] max-[1200px]:h-[5.5rem]`}
        >
          <IoLocationSharp />
        </div>
        <div className={`flex flex-col ml-[1rem]`}>
          Location
          <p>Rio de Janeito - Brasil</p>
        </div>
      </div>
     
    </div>
  );
}

export default ContactSection;
