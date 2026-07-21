import profileImage from "@/assets/images/thiago-perfil.png";
import { Button } from "@/components/ui/button";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import ContactSection from "../ContactSection";
import type { socialMediaDataProps } from "./socialMediaDataProps";

function ProfileAside() {
  const socialMediaData: socialMediaDataProps[] = [
    {
      socialMediaIcon: <FaInstagram />,
      href: "https://www.instagram.com/thiago.silvarj?igsh=cGFmNHl4NmtxYzZh&utm_source=qr",
    },
    {
      socialMediaIcon: <FaLinkedinIn />,
      href: "https://www.linkedin.com/in/thiago-pinto-ab13b1256/",
    },
    {
      socialMediaIcon: <FaGithub />,
      href: "https://github.com/ThiagoPintodev2",
    },
  ];

  return (
    <aside className={`lg:contents`}>
      <div
        className={`flex flex-col w-[80vw] mt-[8rem] min-h-[100rem] bg-[#232120] mx-auto pb-10 rounded-3xl items-center 
                   sm:w-[70vw] sm:min-h-[102rem] md:w-[60vw] md:min-h-[105rem] lg:w-[30%] lg:shrink-0 lg:self-stretch`}
      >
        <div>
          <img
            src={profileImage}
            alt="profile image"
            className={`w-[20rem] mt-[-12rem] rounded-3xl m-auto sm:w-[22rem] sm:mt-[-10rem] md:w-[24rem] 
              border-1 border-mediumbrown shadow-xl/50`}
          />
        </div>
        <div className={`flex flex-col items-center justify-center`}>
          <p className={`font-poppins text-[3rem] mt-[3.6rem] text-ligthbrown`}>
            Thiago da Silva
          </p>
          <p
            className={`font-poppins text-[1.9rem] mt-[1rem] text-ligthbrown font-extralight`}
          >
            Front End Developer
          </p>
        </div>
        <div className={`flex w-[100%]`}>
          <ul className={`flex justify-center w-[100%]`}>
            <li className={`flex gap-1 mt-[2rem] w-[90%] h-[7rem] mb-[2.1rem]`}>
              {socialMediaData.map((el, i) => (
                <Button
                  asChild
                  variant={"default"}
                  key={i}
                  className={
                    i === 0
                      ? `w-[33%] h-[6rem] flex items-center justify-center bg-[#1f1d1d] text-2xl
                  rounded-l-3xl border border-white/5 shadow-xl/20 cursor-pointer md:h-[6rem] md:mb-[2rem]`
                      : i === 2
                        ? `w-[33%] h-[6rem]  flex items-center justify-center bg-[#1f1d1d] 
                  rounded-r-3xl border border-white/5 shadow-xl/20 cursor-pointer md:h-[6rem]`
                        : `w-[33%] h-[6rem] flex items-center justify-center bg-[#1f1d1d] 
                  rounded-l-3xl border border-white/5 rounded-md shadow-xl/20 cursor-pointer md:h-[6rem]`
                  }
                >
                  <a href={el.href} target="_blank">
                    {el.socialMediaIcon}
                  </a>
                </Button>
              ))}
            </li>
          </ul>
        </div>
        <div className={`flex flex-col w-[90%] items-center`}>
          <ContactSection />
        </div>
      </div>
    </aside>
  );
}

export default ProfileAside;
