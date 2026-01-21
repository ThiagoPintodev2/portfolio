import type { MenuNavProps } from "./MenuNavProps";

function NavComponentesIcons({ value, img }: MenuNavProps) {
  return (
    <div className={`flex flex-col w-[6rem] items-center h-[5.5rem] justify-center bg-bgdark3 rounded-2xl bg-ligthbrown`}>
      {img}
      <p className={`font-raleway text-bgdark text-[1.2rem] mobile2:text-2xl`}>
        {value}
      </p>
    </div>
  )
}

export default NavComponentesIcons
