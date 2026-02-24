import CardConatiner from "@/components/CardContainer";
import Header from "@/components/header/Index";
import ProfileAside from "@/components/ProfileAside";
import { FaPhoneVolume } from "react-icons/fa6";
import { TfiEmail } from "react-icons/tfi";
import ContactForm from "../../ContactForm/index";

function Contact() {
  return (
    <div>
      <Header />
      <main
        className={`flex mt-50 max-w-[1280px] h-[90%] m-auto gap-8 pb-18 max-[1024px]:flex-col`}
      >
        <ProfileAside />
        <div
          className={`flex flex-col h-[100%] items-center justify-between bg-[#232120] rounded-3xl m-auto w-[80vw] sm:w-[70vw] md:w-[60vw] lg:mt-[8rem] lg:w-[65vw] lg:h-[100rem]`}
        >
          <div className={`flex flex-col items-center w-[90%]`}>
            <h2
              className={`font-poppins text-[3.2rem] text-ligthbrown m-[1.5rem] opacity-75`}
            >
              CONTATOssssssssssssssssssssssssssss
            </h2>
            <hr className={`bg-[#232120] h-[2px] w-[12rem]`} />
            <div className={`flex w-[90%] h-[16rem] gap-8 mt-[3rem]`}>
              <CardConatiner
                icon={<FaPhoneVolume size={25} />}
                title1={"Telefone:"}
                title2={"+55 (22) 99968-7139"}
                title3={""}
              />
              <CardConatiner
                icon={<TfiEmail size={25} />}
                title1={"Email:"}
                title2={"thiago.dev2@gmail.com"}
                title3={""}
              />
            </div>
            <div
              className={`flex flex-col w-[90%] rounded-3xl items-center border-1 
                shadow-xl/40 border-white/5 lg:text-2xl`}
            >
              <ContactForm />
            </div>
            <div
              className={`flex flex-col w-[90%] rounded-3xl items-center border-1 
                shadow-xl/40 border-white/5 lg:text-2xl mt-[2rem]`}
            >
              <p
                className={`text-ligthbrown font-poppins text-[2rem] p-[4rem] text-justify`}
              >
                Estou sempre aberto a discutir novos projetos, oportunidades no
                mundo da tecnologia e parcerias.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Contact;
