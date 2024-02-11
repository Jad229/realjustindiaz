type Project = {
  id: number;
  name: string;
  description: string;
  image: string;
  github: string;
  link: string;
};

export const projects: Project[] = [
  {
    id: 1,
    name: "LifeQuest",
    description:
      "LifeQuest isn't just your average habit tracker it's a journey to your best self, gamified for maximum motivation. LifeQuest shows you the impressive stack of achievements, one skill point at a time.",
    image: "/images/projects/lifequest.png",
    github: "https://github.com/Jad229/lifequest",
    link: "https://www.lifequesthq.xyz/",
  },
];
