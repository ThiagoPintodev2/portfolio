import profileImage from "@/assets/profileImage.jpg"

function ProfileAside() {
  return (
    <div className={`w-[30%] h-[90vh] bg-bgdark2 rounded-3xl`}>
      <img src={profileImage} alt="profile image" className={`w-[60%] mt-[-25%] rounded-3xl m-auto`} />
    </div>
  )
}

export default ProfileAside
