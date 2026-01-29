import type { MenuNavProps } from "./MenuNavProps";

function NavComponentesIcons({ value, img }: MenuNavProps) {
  return (
    <div className={`flex flex-col w-[6rem] h-[6rem] gap-2 items-center justify-center
    rounded-2xl bg-bgdark2 border-1 border-mediumbrown shadow-xl/50`}>
      {img}
      <p className={`font-raleway text-ligthbrown text-[1.2rem] sm:text-[1.2rem]`}>
        {value}
      </p>
    </div>
  )
}

export default NavComponentesIcons
