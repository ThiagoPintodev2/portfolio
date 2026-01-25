import profileImage from "@/assets/images/thiago-perfil.png";
import { Button } from "@/components/ui/button";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import ContactSection from "../ContactSection";
import AboutMeSection from "../AboutMeSection";
import { useState } from "react";
import TecnologysSection from "@/components/TecnologysSection";

function ProfileAside() {
  const [windowSize, setWindowSize] = useState<number>(window.innerWidth);

  window.addEventListener("resize", () => {
    setWindowSize(window.innerWidth);
  });

  const socialMediaData = [
    {
      SocialMediaIcon: <FaInstagram />,
    },
    {
      SocialMediaIcon: <FaLinkedinIn />,
    },
    {
      SocialMediaIcon: <FaGithub />,
    },
  ];

  return (
    <div>
      {windowSize <= 1023 ? (
        <div
          className={`flex flex-col w-[30rem] mb-[2rem] bg-[#232120] m-auto pb-10 rounded-3xl items-center 
                  min-[480px]:w-[40rem] sm:mt-[3rem] sm:w-[50rem] md:w-[60rem]`}
        >
          <div>
            <img
              src={profileImage}
              alt="profile image"
              className={`w-[17rem] mt-[-8rem] rounded-3xl m-auto sm:w-[20rem] sm:mt-[-10rem]`}
            />
          </div>
          <div className={`flex flex-col items-center justify-center`}>
            <p
              className={`font-poppins text-[3rem] mt-[3.6rem] text-ligthbrown`}
            >
              Thiago da Silva
            </p>
            <p
              className={`font-poppins text-[1.9rem] mt-[1rem] text-ligthbrown font-extralight`}
            >
              Front End Developer
            </p>
          </div>
          <div className={`flex gap-1 mt-[2rem] w-[90%] h-[10vh]`}>
            {socialMediaData.map((el, i) => (
              <Button
                variant={"default"}
                key={i}
                className={
                  i === 0
                    ? `w-[33%] h-[60%] flex items-center justify-center bg-[#1f1d1d] 
                  rounded-l-3xl border border-white/5 shadow-xl/20 cursor-pointer md:h-[75%]`
                    : i === 2
                      ? `w-[33%] h-[60%]  flex items-center justify-center bg-[#1f1d1d] 
                  rounded-r-3xl border border-white/5 shadow-xl/20 cursor-pointer md:h-[75%]`
                      : `w-[33%] h-[60%] flex items-center justify-center bg-[#1f1d1d] 
                  rounded-l-3xl border border-white/5 rounded-md shadow-xl/20 cursor-pointer md:h-[75%]`
                }
              >
                <div>{el.SocialMediaIcon}</div>
              </Button>
            ))}
          </div>
          <div className={`flex flex-col w-[90%] items-center`}>
            <ContactSection />
          </div>
        </div>
      ) : (
        <div className={`flex xl:gap-8 lg:mt-[15rem]`}>
          <div
            className={`flex flex-col w-[30rem] bg-[#232120] pb-10 rounded-3xl items-center 
                  min-[480px]:w-[40rem] md:w-[60rem] lg:flex lg:w-[35%] lg:h-[90rem] lg:ml-[2rem] xl:ml-[6rem]`}
          >
            <div>
              <img
                src={profileImage}
                alt="profile image"
                className={`w-[15rem] mt-[-8rem] rounded-3xl m-auto sm:w-[24rem] sm:mt-[-10rem] sm:w-[24rem] lg:w-[24rem]`}
              /> 
            </div>
            <div className={`flex flex-col items-center justify-center`}>
              <p
                className={`font-poppins text-[3rem] mt-[3.6rem] text-ligthbrown`}
              >
                Thiago da Silva
              </p>
              <p
                className={`font-poppins text-[1.9rem] mt-[1rem] text-ligthbrown font-extralight`}
              >
                Front End Developer
              </p>
            </div>
            <div className={`flex gap-1 mt-[2rem] w-[90%] h-[10vh]`}>
              {socialMediaData.map((el, i) => (
                <Button
                  variant={"default"}
                  key={i}
                  className={
                    i === 0
                      ? `w-[33%] h-[60%] flex items-center justify-center bg-[#1f1d1d] 
                rounded-l-3xl border border-white/5 shadow-xl/20 cursor-pointer md:h-[75%] lg:h-[6rem]`
                      : i === 2
                        ? `w-[33%] h-[60%]  flex items-center justify-center bg-[#1f1d1d] 3
                  rounded-r-3xl border border-white/5 shadow-xl/20 cursor-pointer md:h-[75%] lg:h-[6rem]`
                        : `w-[33%] h-[60%] flex items-center justify-center bg-[#1f1d1d] 
                  rounded-l-3xl border border-white/5 rounded-md shadow-xl/20 cursor-pointer md:h-[75%] lg:h-[6rem]`
                  }
                >
                  <div>{el.SocialMediaIcon}</div>
                </Button>
              ))}
            </div>
            <div className={`flex flex-col w-[90%] items-center`}>
              <ContactSection />
            </div>
          </div>
          <div
            className={`flex flex-col w-[30rem] mb-[2rem] bg-[#232120] m-auto rounded-3xl items-center 
                  min-[480px]:w-[40rem] sm:w-[50rem] md:w-[60rem] lg:w-[60%] lg:h-[90rem] lg:gap-1 lg:pt-[2rem] lg:mr-[2rem] xl:mr-[6rem]`}
          >
            <AboutMeSection />
            <TecnologysSection />
          </div>
        </div>
      )}
    </div>
  );
}

export default ProfileAside;
