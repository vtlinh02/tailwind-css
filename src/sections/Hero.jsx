import { statistics, shoes } from "../constants";
import { bigShoe1 } from "../assets/images";

import { useState } from "react";
import { Button } from "../components";

const Hero = () => {
  const [currentShoe, setCurrentShoe] = useState(bigShoe1);
  return (
    <section className="h-screen flex w-full justify-center max-container">
      <div className="w-2/5 flex relative flex-col justify-center">
        <p className="text-xl font-montserrat text-coral-red">
          Our Summer collections
        </p>
        <h1 className="whitespace-nowrap text-8xl font-bold font-palanquin pt-8 ">
          <span className=" relative z-10 bg-white">The New Arrival </span>
          <br />
          <span className="text-coral-red inline-block mt-8">Nike</span> Shoes
        </h1>
        <p className="text-xl font-montserrat text-slate-gray pt-8 pb-16">
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>

        <Button />

        <ul className="flex gap-10 pt-8">
          {statistics.map((stat, index) => (
            <li>
              <div className="text-4xl font-palanquin font-bold">
                {stat.value}
              </div>
              <div className="text-xl font-montserrat text-slate-gray">
                {stat.label}
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className=" relative flex-1 flex justify-center items-center bg-primary bg-hero bg-cover bg-center">
        <img
          src={currentShoe}
          alt="This is a big Shoe"
          width={500}
          height={500}
        />
        <ul className="flex absolute bottom-0 left-[20%] gap-8">
          {shoes.map((shoe, index) => (
            <li
              onClick={() => {
                setCurrentShoe(shoe.bigShoe);
              }}
              className={`cursor-pointer ${
                currentShoe === shoe.bigShoe
                  ? "border-4 border-coral-red"
                  : undefined
              }`}
            >
              <img
                src={shoe.thumbnail}
                alt="This is a shoe"
                className="bg-card bg-cover bg-center"
                width={110}
                height={110}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Hero;
