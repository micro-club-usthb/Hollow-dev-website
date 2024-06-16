import hollowKnight from "../../assets/character.png";
export default function Loading() {
  return (
    <div className="h-[89vh] flex justify-center items-center">
      <div className="flex flex-col justify-center items-center gap-[5px]">
        <img
          src={hollowKnight}
          alt="hollow knight"
          className="h-[130px] w-[100px] bg-transparent z-10 opacity-80 animate-[floating_2000ms_infinite_1200ms] invisible"
        />
        <div className="w-[80px] bg-circle h-[25px] animate-[circle_1200ms] rounded-[50%] drop-shadow-custom1 z-0"></div>
      </div>
    </div>
  );
}
