import Header from "@/components/Header";
import ProfileAside from "@/components/ProfileAside";
import { FaLinkedinIn } from "react-icons/fa";
import { HiOutlineCode } from "react-icons/hi";
import { IoChatbubbleEllipsesOutline, IoMailOutline, IoPaperPlaneOutline } from "react-icons/io5";
import type { ComponentType, ReactNode } from "react";

const email = "thiago.dev2@gmail.com";
const linkedin = "https://www.linkedin.com/in/thiago-pinto-ab13b1256/";

const cardClass =
  "rounded-2xl border-1 border-white/5 bg-[#1f1d1d] px-[2rem] py-[1.6rem] text-ligthbrown shadow-xl/20";

function ContactCard({
  Icon,
  title,
  children,
}: {
  Icon: ComponentType<{ size?: number; className?: string }>;
  title: string;
  children: ReactNode;
}) {
  return (
    <article className={cardClass}>
      <div className="mb-[1.2rem] flex items-center gap-3">
        <Icon size={22} className="text-ligthbrown" />
        <h3 className="font-poppins text-[1.8rem] font-semibold text-ligthbrown">
          {title}
        </h3>
      </div>
      <div className="font-raleway text-[1.6rem] leading-relaxed text-ligthbrown">
        {children}
      </div>
    </article>
  );
}

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
          <div className="flex w-full flex-col items-center gap-[1.6rem]">
            <header className="flex flex-col items-center px-[2rem] text-center">
              <h2
                id="contato"
                className="m-[1.5rem] font-poppins text-[3.2rem] text-ligthbrown opacity-75"
              >
                VAMOS CONVERSAR?
              </h2>
              <p className="font-raleway text-[1.6rem] text-ligthbrown">
                Estou aberto a novas oportunidades e desafios na área de
                tecnologia.
              </p>
            </header>

            <div className="grid w-[90%] grid-cols-1 gap-[1.6rem] md:grid-cols-2">
              <a href={`mailto:${email}`} className={`${cardClass} block`}>
                <IoMailOutline size={22} className="text-ligthbrown" />
                <h3 className="mt-[1rem] font-poppins text-[1.8rem] font-semibold">
                  E-mail
                </h3>
                <p className="mt-[0.6rem] font-raleway text-[1.6rem] leading-relaxed">
                  Para propostas profissionais e contatos.
                </p>
              </a>
              <a
                href={linkedin}
                target="_blank"
                rel="noreferrer"
                className={`${cardClass} block`}
              >
                <FaLinkedinIn size={22} className="text-ligthbrown" />
                <h3 className="mt-[1rem] font-poppins text-[1.8rem] font-semibold">
                  LinkedIn
                </h3>
                <p className="mt-[0.6rem] font-raleway text-[1.6rem] leading-relaxed">
                  Conecte-se comigo profissionalmente.
                </p>
              </a>
            </div>

            <div className="flex w-[90%] flex-col gap-[1.6rem]">
              <ContactCard Icon={HiOutlineCode} title="O que estou buscando">
                <p>
                  Busco oportunidades como Desenvolvedor Full Stack, contribuindo para o 
                  desenvolvimento de aplicações web e aprimorando continuamente minhas habilidades em Front-End e Back-End.
                </p>
              </ContactCard>

              <ContactCard
                Icon={IoChatbubbleEllipsesOutline}
                title="Tem um projeto ou uma oportunidade?"
              >
                <p>
                  Será um prazer conversar sobre ideias, colaborar em novos
                  projetos e conhecer oportunidades na área de desenvolvimento.
                </p>
                <a
                  href={`mailto:${email}`}
                  className="mt-[1.6rem] flex w-full cursor-pointer items-center justify-center gap-3 rounded-xl bg-ligthbrown py-[1.4rem] font-poppins text-[1.6rem] font-semibold text-darkbrown transition-all hover:bg-primary/90"
                >
                  <IoPaperPlaneOutline size={18} />
                  Entre em contato comigo
                </a>
              </ContactCard>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Contact;
