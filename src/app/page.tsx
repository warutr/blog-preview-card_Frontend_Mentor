import React from "react";
import Card from "./component/Card";

const HomePage = () => {
  return (
    <div>
      <Card
        illustration={{
          illustration_src: "/images/illustration-article.svg",
          illustration_alt: "illustration-article",
          width_illustration: 400,
          height_illustration: 400,
        }}
        title_1="Learning"
        publishedDate="Published 21 Dec 2023"
        title_2="HTML & CSS foundations"
        description="These languages are the backbone of every website, defining structure, content, and presentation."
        avatar={{
          avatar_src: "/images/image-avatar.webp",
          avatar_alt: "illustration-article",
          width_avatar: 32,
          height_avatar: 32,
        }}
        name="Greg Hooper"
      />
    </div>
  );
};

export default HomePage;
