import AboutMeSection from "./AboutMeSection"
import ProfileAside from "./ProfileAside"

function Main() {
  return (
    <div className="flex text-black gap-5 w-[80%] bg-amber-300 m-auto mt-40">
      <ProfileAside />
      <div>ola profile</div>
      <AboutMeSection />
      <div>
        ola about me
      </div>
    </div>
  )
}

export default Main
