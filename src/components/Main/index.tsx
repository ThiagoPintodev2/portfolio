import AboutMeSection from "./AboutMeSection";
import ProfileAside from "./ProfileAside";

function Main() {
  return (
    <div className="flex text-black gap-10 w-[80%] m-auto mt-70">
      <ProfileAside />
      <AboutMeSection />
    </div>
  );
}

export default Main;
