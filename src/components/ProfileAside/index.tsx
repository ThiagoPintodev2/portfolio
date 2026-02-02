import profileImage from "@/assets/images/thiago-perfil.png";
import { Button } from "@/components/ui/button";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import ContactSection from "../ContactSection";

function ProfileAside() {

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
    <aside>
      <div
        className={`flex flex-col w-[80vw] mt-[8rem] h-[100rem] bg-[#232120] m-auto pb-10 rounded-3xl items-center 
                   sm:w-[70vw] sm:h-[102rem] md:w-[60vw] md:h-[105rem] lg:w-[35vw] xl:w-[40rem] lg:h-[100rem]`}
      >
        <div>
          <img
            src={profileImage}
            alt="profile image"
            className={`w-[20rem] mt-[-12rem] rounded-3xl m-auto sm:w-[22rem] sm:mt-[-10rem] md:w-[24rem] border-1 border-mediumbrown shadow-xl/50`}
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
        <div className={`flex gap-1 mt-[2rem] w-[90%] h-[7rem] mb-[2.1rem]`}>
          {socialMediaData.map((el, i) => (
            <Button
              variant={"default"}
              key={i}
              className={
                i === 0
                  ? `w-[33%] h-[6rem] flex items-center justify-center bg-[#1f1d1d] 
                  rounded-l-3xl border border-white/5 shadow-xl/20 cursor-pointer md:h-[6rem] md:mb-[2rem]`
                  : i === 2
                    ? `w-[33%] h-[6rem]  flex items-center justify-center bg-[#1f1d1d] 
                  rounded-r-3xl border border-white/5 shadow-xl/20 cursor-pointer md:h-[6rem]`
                    : `w-[33%] h-[6rem] flex items-center justify-center bg-[#1f1d1d] 
                  rounded-l-3xl border border-white/5 rounded-md shadow-xl/20 cursor-pointer md:h-[6rem]`
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
    </aside>
  );
}

export default ProfileAside;
