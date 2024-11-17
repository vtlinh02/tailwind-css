import { statistics } from "../constants";
import { arrowRight } from "../assets/icons";

const Hero = () => {
  return (
    <section>
      <p className="py-6 text-lg font-palanquin text-orange-400">
        Our summer collections
      </p>
      <h1 className="pb-6 font-montserrat font-bold text-4xl">
        The New Arrival <br />
        <span className="text-orange-500">Nike</span> Shoes
      </h1>
      <p className="pb-8 font-palanquin text-[16px]">
        Discover stylish Nike arrivals, quality comfort, and innovation for your
        active life
      </p>
      <button className="flex px-8 py-4 bg-orange-600 rounded-full">
        <span className="pr-2 text-white-400">Shop now</span>
        <img src={arrowRight} alt="This is an arrow" />
      </button>
      <ul className="pt-[3rem] flex">
        {statistics.map((statistic, index) => (
          <li key={index} className="px-4 font-palanquin">
            <h3 className="font-bold text-[2rem]">{statistic.value}</h3>
            <p className="font-">{statistic.label}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Hero;
