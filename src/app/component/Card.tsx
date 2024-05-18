"use client";

import React from "react";
import Image from "next/image";

type CardProps = {
  title_1: string;
  title_2: string;
  publishedDate: string;
  description: string;
  illustration: {
    illustration_src: string;
    illustration_alt: string;
    width_illustration: number;
    height_illustration: number;
  };
  avatar: {
    avatar_src: string;
    avatar_alt: string;
    width_avatar: number;
    height_avatar: number;
  };
  name: string;
};

const Card = ({
  title_1,
  title_2,
  publishedDate,
  description,
  illustration: {
    height_illustration,
    illustration_alt,
    illustration_src,
    width_illustration,
  },
  avatar: { avatar_alt, avatar_src, height_avatar, width_avatar },
  name,
}: CardProps) => {
  return (
    <div className="mx-auto px-5 max-w-[375px] md:max-w-[440px] ">
      <div className="flex flex-col p-6 bg-neutral-white rounded-3xl border-2 drop-shadow-custom">
        <Image
          src={illustration_src}
          alt={illustration_alt}
          width={width_illustration}
          height={height_illustration}
          className="rounded-2xl object-contain"
        />
        <div className="pt-6 pb-4 mr-auto ">
          <h2 className="bg-primary text-base rounded font-very-bold px-3 py-1 hover:bg-primary/70 ">
            {title_1}
          </h2>
        </div>
        <p className="text-sm text-neutral-black font-semibold">
          {publishedDate}
        </p>
        <h3 className="text-2xl font-very-bold mt-5">{title_2}</h3>
        <div className="py-4">
          <p className="text-sm md:text-base text-neutral-grey">
            {description}
          </p>
        </div>
        <div className="flex flex-row items-center py-2">
          <Image
            src={avatar_src}
            alt={avatar_alt}
            width={width_avatar}
            height={height_avatar}
            className="block rounded-full object-cover "
          />
          <p className="text-base font-very-bold text-neutral-black ml-4">
            {name}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
