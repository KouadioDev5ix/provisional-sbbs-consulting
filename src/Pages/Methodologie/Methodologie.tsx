import { Play } from "lucide-react";
import type {
  ISteps,
  ISuccessStories,
} from "../../Models/Interfaces/Methodologies/methodologie";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Methodologie() {
  const steps: ISteps[] = [
    {
      number: 1,
      title: "Diagnostic",
      period: "2 semaines",
      description:
        "Analyse complète de votre écosystème numérique actuel des opportunités d'amélioration et potentiel de croissance.",
    },
    {
      number: 2,
      title: "Plan d'action",
      period: "1 semaines",
      description:
        "Élaboration d'une feuille de route personnalisée, validation des objectifs et planification des actions.",
    },
    {
      number: 3,
      title: "Mise en Œuvre",
      period: "10 mois",
      description:
        "Implémentation progressive des solutions, formation des équipes, suivi rigoureux et ajustements.",
    },
    {
      number: 4,
      title: "Certification",
      period: "2 semaines",
      description:
        "Évaluation finale, attribution de la mention SBBS, intégration à la communauté d'élite Business.",
    },
  ];

  const successStories: ISuccessStories[] = [
    {
      company: "Techninnov CI",
      sector: "Secteur : Technologies - 50 employés",
      metrics: {
        revenue: { value: "+120%", label: "Chiffre d'affaires" },
        costs: { value: "-45%", label: "Coûts opérationnels" },
      },
      productivity: { value: "85%", label: "Productivité" },
      satisfaction: { value: "95%", label: "Satisfaction client" },
      rating: "SBBS-2",
      ratingColor: "blue",
      testimonial:
        '"SBBS Consulting a transformé notre façon de travailler. Nous avons maintenant des processus clairs et une équipe motivée qui comprend sa valeur ajoutée sur nos marchés."',
    },
    {
      company: "AgroPlus Benin",
      sector: "Secteur : Agroalimentaire - 30 employés",
      metrics: {
        revenue: { value: "+120%", label: "Chiffre d'affaires" },
        costs: { value: "-45%", label: "Coûts opérationnels" },
      },
      productivity: { value: "90%", label: "Productivité" },
      satisfaction: { value: "98%", label: "Satisfaction client" },
      rating: "SBBS-5",
      ratingColor: "yellow",
      testimonial:
        '"SBBS Consulting a transformé notre façon de travailler. Nous avons maintenant des processus clairs et une équipe motivée qui comprend sa valeur ajoutée sur nos marchés."',
    },
    {
      company: "LogisTrans Ghana",
      sector: "Secteur : Logistique - 75 employés",
      metrics: {
        revenue: { value: "+120%", label: "Chiffre d'affaires" },
        costs: { value: "-45%", label: "Coûts opérationnels" },
      },
      productivity: { value: "88%", label: "Productivité" },
      satisfaction: { value: "92%", label: "Satisfaction client" },
      rating: "SBBS-5",
      ratingColor: "yellow",
      testimonial:
        '"SBBS Consulting a transformé notre façon de travailler. Nous avons maintenant des processus clairs et une équipe motivée qui comprend sa valeur ajoutée sur nos marchés."',
    },
  ];

  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <section className="w-full">
      {/* <img
        src={homeBg}
        alt=""
        className="absolute inset-0 h-[450px] md:h-screen w-full object-cover"
      /> */}
      <div className="absolute bg-sbbsBlue h-[450px] md:h-[500px] w-full"></div>
      {/* Content above  */}
      <div className="relative z-10 h-full w-full flex items-center justify-center px-4">
        <div className="text-center max-w-3xl pt-20 md:pt-32">
          <h1
            data-aos="zoom-in"
            className="pt-10 text-white font-extrabold leading-snug text-2xl sm:text-3xl md:text-4xl"
          >
            Une Méthodologie Éprouvée
          </h1>

          <p
            data-aos="zoom-in"
            className="mt-4 text-sbbsYellow text-xs sm:text-sm md:text-base"
          >
            Des Résultats Mesurables et Durables
          </p>

          <p
            data-aos="zoom-in"
            className="mt-4 text-gray-200 text-xs sm:text-sm md:text-base"
          >
            Notre approche structurée combine rigueur méthodologique et
            pragmatisme terrain pour transformer durablement votre entreprise.
            Découvrez comment nous avons accompagné plus de 500 entreprises vers
            l'excellence opérationnelle.
          </p>
        </div>
      </div>
      {/* Les 4 étapes de votre transformation */}
      <div className="w-10/12 max-w-7xl mx-auto pt-24 md:pt-32">
        <div className="flex items-center justify-center my-7">
          <div className="pt-24 md:pt-14">
            <h2
              data-aos="zoom-in"
              className="text-xl md:text-3xl font-extrabold text-sbbsBlue text-center"
            >
              Les 4 étapes de votre transformation
            </h2>
            <p data-aos="zoom-in" className="mt-2 text-gray-600 text-center">
              Un parcours structuré et progressif vers l'excellence
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center relative">
              <div className="relative z-10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3 border-4 border-sbbsYellow">
                <span
                  data-aos="zoom-in"
                  className="text-2xl font-bold text-sbbsBlue"
                >
                  {step.number}
                </span>
              </div>

              <h3
                data-aos="zoom-in"
                className="text-xl font-bold text-sbbsBlue mb-2"
              >
                {step.title}
              </h3>
              <div
                data-aos="zoom-in"
                className="text-lg text-sbbsCustomOrange font-bold"
              >
                {step.period}
              </div>

              <p
                data-aos="zoom-in"
                className="text-gray-600 text-sm leading-relaxed px-2"
              >
                {step.description}
              </p>
            </div>
          ))}
        </div>
        {/* Histoires de réussite */}
        <div className="flex items-center justify-center">
          <div data-aos="zoom-in" className="pt-12">
            <h2 className="text-xl md:text-3xl font-extrabold text-sbbsBlue text-center">
              Histoires de réussite
            </h2>
            <p className="mt-2 mb-5 text-gray-600 text-center">
              Des transformations concrètes et mesurables
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 pb-10">
          {successStories.map((story, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden"
            >
              {/* Header bleu */}
              <div className="bg-sbbsBlue p-4">
                <h3 className="text-lg font-bold text-yellow-400">
                  {story.company}
                </h3>
                <p className="text-white/80 text-sm">{story.sector}</p>
              </div>

              {/* Metrics */}
              <div className="p-6 grid grid-cols-2 gap-6 text-center">
                {/* Revenue */}
                <div data-aos="fade-up" data-duration-aos="4000">
                  <span className="text-2xl font-bold text-sbbsCustomOrange">
                    {story.metrics.revenue.value}
                  </span>
                  <p className="text-sm text-gray-600 mt-1">
                    {story.metrics.revenue.label}
                  </p>
                </div>

                {/* Costs */}
                <div data-aos="fade-up" data-duration-aos="5000">
                  <span className="text-2xl font-bold text-sbbsCustomOrange">
                    {story.metrics.costs.value}
                  </span>
                  <p className="text-sm text-gray-600 mt-1">
                    {story.metrics.costs.label}
                  </p>
                </div>

                {/* Productivity */}
                <div data-aos="fade-up" data-duration-aos="7000">
                  <span className="text-2xl font-bold text-sbbsCustomOrange">
                    {story.productivity.value}
                  </span>
                  <p className="text-sm text-gray-600 mt-1">
                    {story.productivity.label}
                  </p>
                </div>

                {/* Satisfaction */}
                <div data-aos="fade-up" data-duration-aos="4000">
                  <span className="text-2xl font-bold text-sbbsCustomOrange">
                    {story.satisfaction.value}
                  </span>
                  <p className="text-sm text-gray-600 mt-1">
                    {story.satisfaction.label}
                  </p>
                </div>
              </div>

              {/* Testimonial */}
              <blockquote
                data-aos="fade-up"
                data-duration-aos="9000"
                className="bg-sbbsBelge px-4 py-3 text-sm text-gray-700 italic mx-4 mb-4 rounded-lg"
              >
                {story.testimonial}
              </blockquote>
            </div>
          ))}
        </div>
      </div>
      {/* Témoignages vidéos */}
      <div className="w-full h-fit bg-sbbsWhite pb-7">
        <div className="w-10/12 max-w-2xl mx-auto bg-sbbsWhite">
          <div className="text-center pt-8 md:pt-4">
            <h1
              data-aos="zoom-in"
              className="pt-10 text-sbbsBlue font-extrabold leading-snug text-2xl sm:text-3xl md:text-4xl"
            >
              Témoignages vidéos
            </h1>

            <p
              data-aos="zoom-in"
              className="mt-4 text-gray-600 text-xs sm:text-sm md:text-base"
            >
              Des Résultats Mesurables et Durables
            </p>

            <div className="flex items-center justify-center">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
                <div data-aos="zoom-in">
                  {/*  Card 1 */}
                  <div className="w-64 md:w-full rounded-lg bg-sbbsBlue cursor-pointer">
                    <div className="flex items-center justify-center p-6">
                      <button className="flex items-center justify-center bg-sbbsYellow rounded-full h-14 w-14">
                        <Play />
                      </button>
                    </div>
                  </div>
                  <div>
                    <p>
                      <span className="text-md font-bold text-gray-600">
                        {" "}
                        Koffi
                      </span>{" "}
                      :{" "}
                      <span className="text-xs font-semibold text-sbbsBlue">
                        Lorem ipsum dolor
                      </span>
                    </p>
                  </div>
                </div>
                {/* Card 2 */}
                <div data-aos="zoom-in">
                  {/*  Card 1 */}
                  <div className="w-64 md:w-full rounded-lg bg-sbbsBlue cursor-pointer">
                    <div className="flex items-center justify-center p-6">
                      <button className="flex items-center justify-center bg-sbbsYellow rounded-full h-14 w-14">
                        <Play />
                      </button>
                    </div>
                  </div>
                  <div>
                    <p>
                      <span className="text-md font-bold text-gray-600">
                        {" "}
                        Koffi
                      </span>{" "}
                      :{" "}
                      <span className="text-xs font-semibold text-sbbsBlue">
                        Lorem ipsum dolor
                      </span>
                    </p>
                  </div>
                </div>
                {/* Card 3 */}
                <div data-aos="zoom-in">
                  {/*  Card 1 */}
                  <div className="w-64 md:w-full rounded-lg bg-sbbsBlue cursor-pointer">
                    <div className="flex items-center justify-center p-6">
                      <button className="flex items-center justify-center bg-sbbsYellow rounded-full h-14 w-14">
                        <Play />
                      </button>
                    </div>
                  </div>
                  <div>
                    <p>
                      <span className="text-md font-bold text-gray-600">
                        {" "}
                        Koffi
                      </span>{" "}
                      :{" "}
                      <span className="text-xs font-semibold text-sbbsBlue">
                        Lorem ipsum dolor
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Résultats moyens constatés */}
      <div className="bg-sbbsBlue flex items-center justify-center w-full h-fit pb-10 ">
        <div className="w-10/12 maw-w-7xl mx-auto">
          <div className="text-center py-5">
            <h1
              data-aos="zoom-in"
              className="pt-10 text-center text-sbbsYellow font-extrabold leading-snug text-2xl sm:text-3xl md:text-4xl"
            >
              Résultats moyens constatés
            </h1>

            <p
              data-aos="zoom-in"
              className="mt-4 text-gray-200 text-xs sm:text-sm md:text-base"
            >
              Sur l'ensemble de nos clients accompagnés
            </p>

            <div className="flex items-center justify-center">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-5">
                {/* +87% */}
                <div className="w-72 md:w-full p-2 rounded-lg bg-sbbsBlueLigth cursor-pointer ">
                  <div className="flex items-center justify-center p-1">
                    <h1 className="text-sbbsYellow text-2xl md:text-4xl font-extrabold">
                      +87%
                    </h1>
                  </div>
                  <p className="text-sm text-sbbsWhite">
                    Croissance moyenne du chiffre d'affaires sur 12 mois
                  </p>
                </div>
                {/* -42% */}
                <div className="w-72 md:w-full p-2 rounded-lg bg-sbbsBlueLigth cursor-pointer">
                  <div className="flex items-center justify-center p-1">
                    <h1 className="text-sbbsYellow text-2xl md:text-4xl font-extrabold">
                      -42%
                    </h1>
                  </div>
                  <p className="text-sm text-sbbsWhite">
                    Optimisation des charges opérationnelles
                  </p>
                </div>
                {/* x2.5 */}
                <div className="w-72 md:w-full p-2 rounded-lg bg-sbbsBlueLigth cursor-pointer">
                  <div className="flex items-center justify-center p-1">
                    <h1 className="text-sbbsYellow text-2xl md:text-4xl  font-extrabold">
                      x2.5
                    </h1>
                  </div>
                  <p className="text-sm text-sbbsWhite">
                    Amélioration de l'efficacité <br /> globale
                  </p>
                </div>
                {/* 6 mois */}
                <div className="w-72 md:w-full p-2 rounded-lg bg-sbbsBlueLigth cursor-pointer">
                  <div className="flex items-center justify-center p-1">
                    <h1 className="text-sbbsYellow text-2xl md:text-4xl  font-extrabold">
                      6 mois
                    </h1>
                  </div>
                  <p className="text-sm text-sbbsWhite">
                    Retour sur investissement de l'accompagnement
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Évaluez votre niveau de maturité */}

      <div className="w-full bg-sbbsWhite">
        <div className="flex items-center justify-center w-full h-fit ">
          <div className="text-center max-w-3xl py-7">
            <h1
              data-aos="zoom-in"
              data-duration-aos="4000"
              className="pt-10 text-center text-sbbsBlue font-extrabold leading-snug text-2xl sm:text-3xl md:text-4xl"
            >
              Évaluez votre niveau de maturité
            </h1>

            <div
              data-aos="zoom-in"
              data-duration-aos="4000"
              className="max-w-xl mx-auto"
            >
              <p className="mt-4 text-gray-600 text-xs sm:text-sm md:text-base">
                Découvrez votre score SBBS actuel et identifiez vos axes
                d'amélioration prioritaires en moins de 5 minutes
              </p>
            </div>

            <div data-aos="zoom-in" data-duration-aos="7000" className="mt-6">
              <Link to={"certifications"}>
                <button className="bg-sbbsBlue text-sbbsWhite font-medium text-sm md:text-base w-fit h-10 rounded-full shadow-md hover:opacity-90 transition px-4">
                  Lancer le simulateur gratuit
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
