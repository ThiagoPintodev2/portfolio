import type { NavComponentesProps } from "./navcomponentsProps";

function NavComponentesIcons({ value, img }: NavComponentesProps) {
  return (
    <div className={`flex flex-col w-[9rem] items-center h-[9rem] justify-center bg-bgdark3 rounded-2xl bg-ligthbrown`}>
      {img}
      <p className={`font-raleway text-bgdark text-[1.8rem]`}>
        {value}
      </p>
    </div>
  )
}

export default NavComponentesIcons
