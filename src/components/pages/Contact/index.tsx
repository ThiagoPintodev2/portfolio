import CardConatiner from "@/components/CardContainer";
import Header from "@/components/Header";
import ProfileAside from "@/components/ProfileAside";
import { FaPhoneVolume } from "react-icons/fa6";
import { TfiEmail } from "react-icons/tfi";
import ContactForm from "../../ContactForm/index";

function Contact() {
  return (
    <div>
      <Header />
      <main
        className={`flex w-[95vw] max-w-[1440px] mt-50 h-[90%] mx-auto gap-8 pb-18 items-stretch max-[1024px]:flex-col`}
      >
        <ProfileAside />
        <div
          className={`flex flex-col items-center justify-between bg-[#232120] rounded-3xl 
           pb-[2rem] mx-auto w-[80vw] sm:w-[70vw] md:w-[60vw] lg:flex-1 lg:mt-[8rem] lg:min-h-[100rem]`}
        >
          <div className={`flex flex-col items-center w-[100%]`}>
            <h2
              id={"contato"}
              className={`font-poppins text-[3.2rem] text-ligthbrown m-[1.5rem] opacity-75`}
            >
              CONTATO
            </h2>
            <hr className={`bg-[#232120] h-[2px] w-[12rem]`} />
            <div
              className={`flex flex-col w-[100%] items-center h-[100%] gap-8 mt-[3rem] lg:flex-row lg:w-[90%] ]`}
            >
              <CardConatiner
                icon={<FaPhoneVolume size={25} />}
                title1={"Telefone:"}
                title2={"- +55 (22) 99968-7139"}
                title3={"Disponível para propostas e freelas."}
              />
              <CardConatiner
                icon={<TfiEmail size={25} />}
                title1={"Email:"}
                title2={"- thiago.dev2@gmail.com"}
                title3={"Fique à vontade para enviar uma mensagem."}
              />
            </div>
            <div
              className={`flex flex-col w-[90%] rounded-3xl items-center border-1 
                shadow-xl/40 border-white/5 lg:text-2xl md:h-[50%]`}
            >
              <ContactForm />
            </div>

            <div
              className={`flex flex-col w-[90%] rounded-3xl items-center border-1 
                shadow-xl/40 border-white/5 lg:text-2xl mt-[2rem]`}
            >
              <p
                className={`text-ligthbrown text-[1.3rem] font-poppins p-[2rem] text-center sm:text-[1.8rem]`}
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
