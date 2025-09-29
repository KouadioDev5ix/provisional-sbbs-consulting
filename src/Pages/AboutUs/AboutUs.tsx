import homeBg from "../../Asset/Images/Bg.png";
import ourADN from "../../Asset/Icons/Our ADN.png";
import ourVision from "../../Asset/Icons/Our vision.png";
import type {
  IAboutUsFeature,
  ITeamMember,
  ITimelineItem,
} from "../../Models/Interfaces/About-us/about";
import structuration from "../../Asset/Icons/Structuration.png";

import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function AboutUs() {
  const aboutUsFeatures: IAboutUsFeature[] = [
    {
      id: 1,
      icon: structuration,
      title: "Notre Mission",
      description:
        "Structurer et transformer les TPE/PME africaines en entreprises performantes, rentables et autonomes. Nous créons les champions économiques de demain en fournissant les outils, méthodes et accompagnement nécessaires à leur croissance durable.",
    },
    {
      id: 2,
      icon: ourVision,
      title: "Notre Vision",
      description:
        "Devenir le partenaire de référence pour la transformation des entreprises en Afrique. Nous aspirons à créer un écosystème entrepreneurial africain structuré, innovant et compétitif sur la scène internationale.",
    },
    {
      id: 3,
      icon: ourADN,
      title: "Notre ADN",
      description:
        "Excellence, Impact et Proximité. Nous combinons rigueur méthodologique et compréhension profonde des réalités africaines pour délivrer des résultats tangibles et mesurables à chaque entreprise accompagnée.",
    },
  ];

  /**
   * timeLinesDtata
   */

  const timelines: ITimelineItem[] = [
    {
      year: "2018",
      title: "La genèse",
      description:
        "Création du Groupe SBBS avec une vision claire : accompagner les entreprises africaines. Premiers accompagnements d’entreprises en Côte d’Ivoire.",
    },
    {
      year: "2020",
      title: "Expansion Régionale",
      description:
        "Ouverture des bureaux au Bénin et au Togo. Déploiement de la méthodologie SYSTEMA adaptée au contexte africain.",
    },
  ];

  /**
   * Team dataz
   */
  const teams: ITeamMember[] = [
    {
      id: 1,
      name: "Dr. Dramane Konaté",
      role: "Fondateur & CEO",
      description:
        "Visionnaire de l’entrepreneuriat africain. Avec plus de 20 années d’expérience, il a su élaborer des stratégies de transformation innovantes et concrètes.",
    },
    {
      id: 2,
      name: "Dr. Dramane Konaté",
      role: "Fondateur & CEO",
      description:
        "Visionnaire de l’entrepreneuriat africain. Avec plus de 20 années d’expérience, il a su élaborer des stratégies de transformation innovantes et concrètes.",
    },
    {
      id: 3,
      name: "Dr. Dramane Konaté",
      role: "Fondateur & CEO",
      description:
        "Visionnaire de l’entrepreneuriat africain. Avec plus de 20 années d’expérience, il a su élaborer des stratégies de transformation innovantes et concrètes.",
    },
    {
      id: 4,
      name: "Dr. Dramane Konaté",
      role: "Fondateur & CEO",
      description:
        "Visionnaire de l’entrepreneuriat africain. Avec plus de 20 années d’expérience, il a su élaborer des stratégies de transformation innovantes et concrètes.",
    },
    {
      id: 5,
      name: "Dr. Dramane Konaté",
      role: "Fondateur & CEO",
      description:
        "Visionnaire de l’entrepreneuriat africain. Avec plus de 20 années d’expérience, il a su élaborer des stratégies de transformation innovantes et concrètes.",
    },
    {
      id: 6,
      name: "Dr. Dramane Konaté",
      role: "Fondateur & CEO",
      description:
        "Visionnaire de l’entrepreneuriat africain. Avec plus de 20 années d’expérience, il a su élaborer des stratégies de transformation innovantes et concrètes.",
    },
  ];

  /**
   * *********************************Function sdections******************
   *
   *
   */

  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <section className="w-full">
      <img
        src={homeBg}
        alt=""
        className="absolute sbbs-bg inset-0 h-[400px] md:h-[500px] w-full object-cover"
      />
      {/* Content above  */}
      <div className="relative z-10 h-full w-full flex items-center justify-center px-4">
        <div className="text-center max-w-3xl pt-20 md:pt-32">
          <h1
            data-aos="zoom-in"
            className="pt-10 text-white font-extrabold leading-snug text-2xl sm:text-3xl md:text-4xl"
          >
            Notre Histoire, Notre Mission
          </h1>

          <p
            data-aos="zoom-in"
            className="mt-4 text-sbbsYellow text-xs sm:text-sm md:text-base"
          >
            Bâtisseurs d'Excellence Entrepreneuriale en Afrique
          </p>

          <p
            data-aos="zoom-in"
            className="mt-4 text-gray-200 text-xs sm:text-sm md:text-base"
          >
            Depuis notre création, nous accompagnons les TPE et PME africaines
            dans leur transformation vers l'excellence opérationnelle. Notre
            approche unique combine expertise locale et standards internationaux
            pour créer des entreprises durables et performantes
          </p>
        </div>
      </div>

      <div className="pt-32 md:pt-44 bg-sbbsYellow">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 pb-5">
          {/* Années d’expérience */}
          <div data-aos="zoom-in" className="text-sbbsBlue">
            <div className="max-w-8 mx-auto">
              <h1 className="font-extrabold text-lg md:text-xl">15</h1>
            </div>
            <p className="text-center text-lg font-bold">Années d’expérience</p>
          </div>
          {/*   Entreprises transformées */}
          <div data-aos="zoom-in" className="text-sbbsBlue">
            <div className="max-w-8 mx-auto">
              <h1 className="font-extrabold text-lg md:text-xl">300</h1>
            </div>
            <p className="text-center text-lg font-bold">
              Entreprises transformées
            </p>
          </div>
          {/* Consultants experts*/}
          <div data-aos="zoom-in" className="text-sbbsBlue">
            <div className="max-w-8 mx-auto">
              <h1 className="font-extrabold text-lg md:text-xl">50</h1>
            </div>
            <p className="text-center text-lg font-bold">Consultants experts</p>
          </div>
          {/* Villes couvertes */}
          <div data-aos="zoom-in" className="text-sbbsBlue">
            <div className="max-w-8 mx-auto">
              <h1 className="font-extrabold text-lg md:text-xl">18</h1>
            </div>
            <p className="text-center text-lg font-bold">Villes couvertes</p>
          </div>
        </div>
      </div>
      {/* Notre Mission */}
      {/* Notre Vision */}
      {/* Notre ADN */}
      <div className="max-w-4xl mx-auto px-5">
        <div className="mt-10 w-full grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
          {/* Bloc */}
          {aboutUsFeatures.map((item) => (
            <div
              data-aos="zoom-in"
              key={item.id}
              className=" bg-white rounded-xl w-full md:w-64 shadow-md p-2"
            >
              <div className="flex items-center justify-center">
                <div className="flex items-center justify-center w-16 h-16  rounded-full bg-sbbsYellow mb-4">
                  <img src={item.icon} alt="" className="w-7 h-7" />
                </div>
              </div>

              {/* title */}

              <div>
                <h3 className="text-center text-lg font-bold text-sbbsBlue">
                  {item.title}
                </h3>
                <div className="w-fit mx-auto">
                  <p className="mt-2 text-gray-600 text-sm">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center px-4 pt-10 md:pt-20">
          <div className="text-center max-w-3xl   ">
            <h1
              data-aos="zoom-in"
              className="text-sbbsBlue font-extrabold leading-snug text-xl sm:text-3xl md:text-4xl"
            >
              Notre parcours
            </h1>

            <p
              data-aos="zoom-in"
              className="mt-1 text-sbbsGrayLight text-xs sm:text-sm md:text-base"
            >
              Les étapes clés qui ont façonné SBBS Consulting
            </p>
          </div>
        </div>

        {/* Card */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
          {timelines.map((item, index) => (
            <div data-aos="zoom-in" key={index} className="w-full">
              <div className="flex flex-col items-center">
                <span className="bg-sbbsYellow text-black font-bold text-lg rounded-full w-16 h-16 flex items-center justify-center">
                  {item.year}
                </span>
              </div>
              <div className="bg-white rounded-xl shadow-md p-3">
                <h3 className="font-bold text-sbbsBlue mb-2">{item.title}</h3>
                <p className="text-gray-600 text-xs md:text-sm">
                  {item.description}
                </p>
              </div>
            </div>
          ))}

          {/* Arrows  */}
        </div>
      </div>

      <div className="max-w-2xl flex items-center justify-center mx-auto mt-5 pb-5 ">
        <div className="flex items-center gap-3">
          <button className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-full hover:bg-gray-300">
            ◀
          </button>
          <button
            // onClick={handleNextSlide}
            className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-full hover:bg-gray-300"
          >
            ▶
          </button>
        </div>
      </div>
      {/* Notre équipe d’experts */}
      <div className="w-full bg-sbbsWhite pt-10 pb-7">
        {/* === TEAM === */}
        <section className="max-w-4xl mx-auto">
          <h2
            data-aos="zoom-in"
            className="text-center text-2xl md:text-3xl font-bold text-sbbsBlue mb-2"
          >
            Notre équipe d’experts
          </h2>
          <p data-aos="zoom-in" className="text-center text-gray-600 mb-8">
            Des consultants passionnés au service de votre croissance
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-5">
            {teams.map((member) => (
              <div
                data-aos="zoom-in"
                key={member.id}
                className="bg-white rounded-xl shadow-md overflow-hidden text-center"
              >
                {/* Image Placeholder */}
                <div className="bg-gray-300 w-full h-40 rounded-lg mb-4"></div>

                <h3 className="font-bold text-sbbsBlue">{member.name}</h3>
                <p className="text-sbbsYellow text-sm font-semibold mb-2">
                  {member.role}
                </p>
                <p className="text-gray-600 text-sm p-2">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Rejoignez la Communauté SBBS*/}
      <div className="bg-sbbsBlue flex items-center justify-center w-full h-fit ">
        <div className="text-center max-w-3xl py-7">
          <h1
            data-aos="zoom-in"
            data-duration-aos="4000"
            className="pt-10 text-center text-white font-extrabold leading-snug text-2xl sm:text-3xl md:text-4xl"
          >
            Rejoignez la Communauté SBBS
          </h1>

          <div className="max-w-2xl items-center justify-center ">
            <p
              data-aos="zoom-in"
              data-duration-aos="5000"
              className="mt-4 text-center text-gray-200 text-xs sm:text-sm md:text-base"
            >
              Faites partie d'un réseau d'entrepreneurs ambitieux <br /> qui
              transforment l'économie africaine
            </p>
          </div>

          <div className="mt-6 gap-5">
            <button
              data-aos="zoom-in"
              data-duration-aos="7000"
              className="bg-sbbsYellow text-black font-bold text-sm md:text-base w-fit h-10 rounded-full shadow-md hover:opacity-90 transition px-4"
            >
              Découvrir Omega Business
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
