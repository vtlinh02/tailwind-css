import { arrowRight } from "../assets/icons";

const Button = () => {
  return (
    <div className="flex justify-center gap-4 bg-coral-red w-[250px] px-8 py-4 rounded-full">
      <span className="text-2xl font-palanquin text-white ">Shop now</span>
      <img src={arrowRight} alt="Arrow right" />
    </div>
  );
};

export default Button;
