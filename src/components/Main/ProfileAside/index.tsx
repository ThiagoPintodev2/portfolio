import profileImage from "@/assets/profileImage.jpg";
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
    <div
      className={`flex flex-col w-[90vw] bg-[#232120] rounded-3xl items-center md:text-[40rem]`}
    >
      <div>
        <img
          src={profileImage}
          alt="profile image"
          className={`w-[60%] mt-[-25%] rounded-3xl m-auto`}
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
      <div className={`flex gap-1 mt-[2rem] w-[90%] h-[10vh]`}>
        {socialMediaData.map((el, i) => (
          <Button
            className={
              i === 0
                ? `w-[33%] h-[60%] flex items-center justify-center bg-[#1f1d1d] 
                rounded-l-3xl border border-white/5 shadow-xl/20 cursor-pointer`
                : i === 2
                  ? `w-[33%] h-[60%]  flex items-center justify-center bg-[#1f1d1d] 3
                  rounded-r-3xl border border-white/5 shadow-xl/20 cursor-pointer`
                  : `w-[33%] h-[60%] flex items-center justify-center bg-[#1f1d1d] 
                  rounded-l-3xl border border-white/5 rounded-md shadow-xl/20 cursor-pointer`
            }
          >
            {el.SocialMediaIcon}
          </Button>
        ))}
      </div>
      <div className={`flex flex-col w-[90%] items-center`}>
        <ContactSection />
      </div>
    </div>
  );
}

export default ProfileAside;
