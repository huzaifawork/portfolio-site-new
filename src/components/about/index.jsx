import React from "react";
import ItemLayout from "./ItemLayout";
import Link from "next/link";
import Image from "next/image";

const AboutDetails = () => {
  return (
    <section className="py-20 w-full">
      <div className="grid grid-cols-12 gap-4 xs:gap-6  md:gap-8 w-full">
        <ItemLayout
          className={
            " col-span-full lg:col-span-8 row-span-2 flex-col items-start"
          }
        >
          <h2 className="  text-xl md:text-2xl text-left w-full capitalize">
            Full Stack Developer & Data Science Enthusiast
          </h2>
          <p className="font-light  text-xs sm:text-sm md:text-base   ">
            With over 2 years of experience in web development, I&apos;ve mastered the art of creating
            dynamic and responsive web applications. My expertise lies in modern web technologies
            and frameworks, with a strong foundation in full-stack development. Recently, I&apos;ve
            expanded my horizons into data science, bringing analytical thinking to my development
            work. I&apos;m currently exploring Flutter for mobile development while maintaining my
            passion for web technologies. My journey combines traditional web development with
            emerging technologies, allowing me to create versatile and innovative solutions.
          </p>
        </ItemLayout>

        <ItemLayout
          className={" col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            5+ <sub className="font-semibold text-base">clients</sub>
          </p>
        </ItemLayout>

        <ItemLayout
          className={"col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            2+{" "}
            <sub className="font-semibold text-base">years of experience</sub>
          </p>
        </ItemLayout>

        <ItemLayout
          className={"col-span-6 relative !p-0"}
        >
          <Image
            src="https://github-readme-stats.vercel.app/api?username=huzaifawork&show_icons=true&theme=radical&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false"
            alt="GitHub Language Stats"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            unoptimized
          />
        </ItemLayout>

        <ItemLayout className={"col-span-4 relative !p-0"}>
          <Image
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=huzaifawork&show_icons=true&theme=radical&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false"
            alt="GitHub Stats"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            unoptimized
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full relative"}>
          <Image
            src={`https://skillicons.dev/icons?i=bootstrap,css,dart,express,figma,firebase,flutter,git,github,gmail,gradle,html,js,materialui,mongodb,mysql,nextjs,nodejs,npm,py,react,redux,sass,tailwind,threejs,vercel,vite,vscode,yarn`}
            alt="Skills"
            fill
            sizes="100vw"
            unoptimized
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-6 relative !p-0"}>
        <a href="https://git.io/streak-stats">
          <Image src="https://github-readme-streak-stats.herokuapp.com?user=huzaifawork&theme=highcontrast&hide_border=true&type=png&background=EB545400&ring=FBE134&currStreakLabel=EBEA43" alt="GitHub Streak" fill sizes="(max-width: 768px) 100vw, 50vw" unoptimized />
        </a>
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-6 relative !p-0"}>
          <Image src="https://github-readme-stats.vercel.app/api/pin/?username=huzaifawork&repo=AI-Based-Management-System&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false&description_lines_count=2" alt="GitHub Pinned Repo" fill sizes="(max-width: 768px) 100vw, 50vw" unoptimized />
        </ItemLayout>
      </div>
    </section>
  );
};

export default AboutDetails;
