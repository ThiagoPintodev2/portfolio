import type { CardPortifolioProps } from "./cardPortifolio";

function CardPortifolio({ title, description, img }: CardPortifolioProps) {
  return (
    <div>
      <div className={`bg-amber-400 rounded-2xl`}>
        <img
          src={img}
          alt="Projects images"
          className={`w-[60rem] h-[38rem] rounded-3xl p-[1rem]`}
        />
        <p className={`text-[1.2rem]`}>{title}</p>
        <p className={`text-2xl`}>{description}</p>
      </div>
    </div>
  );
}

export default CardPortifolio;
