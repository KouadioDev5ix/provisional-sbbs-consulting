import cup from "../../Asset/Images/CUT.png";
import Growth from "../../Asset/Images/Growth.png";
import Evaluation from "../../Asset/Images/Evaluation.png";
import { Check } from "lucide-react";
import type {
  ICriterias,
  Ilevels,
} from "../../Models/Interfaces/Certifications/certifaction";

import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import QurestionComponent from "../../Components/QuestionComponent/QuestionComponent";
import { useTranslation } from "react-i18next";

export default function Certification() {
  const { t } = useTranslation();

  const certificationFeaturesList: string[] = t(
    "certification.certificationSBBS.fearturesListes",
    {
      returnObjects: true,
    }
  ) as string[];

  const levels: Ilevels[] = [
    {
      id: 1,
      title: t("certification.certificationSBBS.levels1.title"),
      description: t("certification.certificationSBBS.levels1.description"),
      color: "bg-red-500",
    },
    {
      id: 2,
      title: t("certification.certificationSBBS.levels2.title"),
      description: t("certification.certificationSBBS.levels2.description"),
      color: "bg-orange-400",
    },
    {
      id: 3,
      title: t("certification.certificationSBBS.levels3.title"),
      description: t("certification.certificationSBBS.levels3.description"),
      color: "bg-yellow-400",
    },
    {
      id: 4,
      title: t("certification.certificationSBBS.levels4.title"),
      description: t("certification.certificationSBBS.levels4.description"),
      color: "bg-green-400",
    },
    {
      id: 5,
      title: t("certification.certificationSBBS.levels5.title"),
      description: t("certification.certificationSBBS.levels5.description"),
      color: "bg-green-500",
    },
    {
      id: 6,
      title: t("certification.certificationSBBS.levels6.title"),
      description: t("certification.certificationSBBS.levels6.description"),
      color: "bg-green-600",
    },
  ];

  const criterias: ICriterias[] = [
    {
      criteria: t("certification.criteria.tableBody.A.criteria"),
      weight: "20%",
      indicators: t("certification.criteria.tableBody.A.indicators"),
    },
    {
      criteria: t("certification.criteria.tableBody.B.criteria"),
      weight: "20%",
      indicators: t("certification.criteria.tableBody.B.indicators"),
    },
    {
      criteria: t("certification.criteria.tableBody.C.criteria"),
      weight: "20%",
      indicators: t("certification.criteria.tableBody.C.indicators"),
    },
    {
      criteria: t("certification.criteria.tableBody.D.criteria"),
      weight: "15%",
      indicators: t("certification.criteria.tableBody.D.indicators"),
    },
    {
      criteria: t("certification.criteria.tableBody.E.criteria"),
      weight: "15%",
      indicators: t("certification.criteria.tableBody.E.indicators"),
    },
    {
      criteria: t("certification.criteria.tableBody.F.criteria"),
      weight: "10%",
      indicators: t("certification.criteria.tableBody.F.indicators"),
    },
  ];

  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <section className="w-full">
      <div className="absolute bg-sbbsBlue h-[450px] md:h-[500px] w-full"></div>
      {/* Content above  */}
      <div className="relative z-10 h-full w-full flex items-center justify-center px-4 pt-24 md:pt-32">
        <div className="text-center max-w-3xl">
          <h1
            data-aos="zoom-in"
            className="text-white font-extrabold leading-snug text-2xl sm:text-3xl md:text-4xl"
          >
            {t("certification.hero.title")}
          </h1>

          <p
            data-aos="zoom-in"
            className="mt-4 text-sbbsYellow text-xs sm:text-sm md:text-base"
          >
            {t("certification.hero.shortText")}
          </p>

          <div data-aos="zoom-in" className="max-w-lg mx-auto">
            <p className="mt-4 text-gray-200 text-xs sm:text-sm md:text-base">
              {t("certification.hero.subtitle")}
            </p>
          </div>

          {/* Certification reconnue */}
          <div
            data-aos="zoom-in"
            className="mt-5 flex flex-wrap items-center justify-center gap-5"
          >
            <button className=" flex items-center justify-center gap-2 bg-sbbsBlueLigth text-sbbsWhite font-semibold text-sm md:text-base w-fit h-10 rounded-full shadow-md hover:opacity-90 transition px-4">
              <img src={cup} alt="" className="w-4 h-4" />
              {t("certification.hero.btn.btn1")}
            </button>
            <button className=" flex items-center justify-center gap-2 bg-sbbsBlueLigth text-sbbsWhite font-semibold text-sm md:text-base w-fit h-10 rounded-full shadow-md hover:opacity-90 transition px-4">
              <img src={Growth} alt="" className="w-4 h-4" />
              {t("certification.hero.btn.btn2")}
            </button>
            <button className=" flex items-center justify-center gap-2 bg-sbbsBlueLigth text-sbbsWhite font-semibold text-sm md:text-base w-fit h-10 rounded-full shadow-md hover:opacity-90 transition px-4">
              <img src={Evaluation} alt="" className="w-4 h-4" />
              {t("certification.hero.btn.btn3")}
            </button>
          </div>
        </div>
      </div>

      {/* Un système d'évaluation complet */}
      <div className="w-full bg-sbbsWhite">
        <div className="w-10/12 max-w-7xl mx-auto pt-24 md:pt-44">
          <div className="flex items-center justify-center pb-5">
            <div className="">
              <h2
                data-aos="zoom-in"
                className="text-xl md:text-3xl font-extrabold text-sbbsBlue text-center"
              >
                {t("certification.evaluationSystem.title")}
              </h2>
              <div className="max-w-lg mx-auto">
                <p
                  data-aos="zoom-in"
                  className="mt-2 text-gray-600 text-center"
                >
                  {t("certification.evaluationSystem.subtitle")}
                </p>
              </div>
            </div>
          </div>
          {/* Pourquoi obtenir la certification <br /> SBBS ? */}
          <div className="pb-5">
            <h1
              data-aos="zoom-in"
              className="text-lg lg:text-xl font-bold text-sbbsBlue mb-4"
            >
              {t("certification.certificationSBBS.title")}
            </h1>
            <div className="max-w-lg">
              <p
                data-aos="zoom-in"
                className="w-full text-sbbsGrayLight text-md font-semibold mb-4"
              >
                {t("certification.certificationSBBS.subtitle")}
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-4 mb-8">
              {certificationFeaturesList.map((feature, index) => (
                <div
                  data-aos="zoom-in"
                  key={index}
                  className="flex items-center space-x-3"
                >
                  <div className="flex-shrink-0 w-6 h-6 bg-sbbsYellow rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-black" />
                  </div>
                  <span className="text-sbbsGrayLight text-sm  md:text-lg ">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Les 6 niveaux de certification */}
      <div className="w-10/12 max-w-7xl mx-auto pt-7 md:pt-10">
        {/* Les 6 niveaux de certification */}
        <div className="flex items-center justify-center  ">
          <div data-aos="zoom-in" className="">
            <h1 className=" text-sbbsBlue font-extrabold leading-snug text-2xl sm:text-3xl md:text-4xl">
              {t("certification.certificationSBBS.levelsOfCertification.title")}
            </h1>

            <p className="mt-4 text-sbbsGrayLight text-xs sm:text-sm md:text-base">
              {t(
                "certification.certificationSBBS.levelsOfCertification.subtitle"
              )}
            </p>
          </div>
        </div>
        {/* Levels */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-8">
          {levels.map((level) => (
            <div
              data-aos="zoom-in"
              data-aos-duration="2000"
              key={level.id}
              className={`${level.color} text-white p-4 rounded-lg shadow-md flex flex-col items-center text-center`}
            >
              <span className="text-2xl font-bold">{level.id}</span>
              <h3 className="text-lg font-semibold mt-2">{level.title}</h3>
              <p className="text-sm mt-2">{level.description}</p>
            </div>
          ))}
        </div>

        {/* Table */}
        <div className="overflow-x-auto mt-10 border rounded-lg  border-gray-200">
          <table className="w-full border-collapse rounded-lg overflow-hidden shadow-lg">
            <thead>
              <tr className="bg-sbbsBlue text-white">
                <th className="p-3 text-left">
                  {t("certification.criteria.tableHead.evaluationCriteria")}
                </th>
                <th className="p-3 text-left">
                  {t("certification.criteria.tableHead.Weighting")}
                </th>
                <th className="p-3 text-left">
                  {t("certification.criteria.tableHead.keyIndicators")}
                </th>
              </tr>
            </thead>
            <tbody>
              {criterias.map((item, index) => (
                <tr key={index} className={`bg-white border-b`}>
                  <td className="p-3 font-medium">{item.criteria}</td>

                  <td className={`p-3`}>
                    <span
                      className={`p-1
                      ${
                        item.weight === "20%"
                          ? "text-green-600 text-xs bg-green-100 rounded-md inline-block font-semibold "
                          : item.weight === "15%"
                          ? "text-orange-600 text-xs bg-orange-100 rounded-md inline-block font-semibold "
                          : "text-red-600 text-xs bg-red-100 rounded-md inline-block font-semibold "
                      }
                    `}
                    >
                      {item.weight}
                    </span>
                  </td>
                  <td className="p-3 text-gray-700">{item.indicators}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Simulateur de notation */}
        <div className="pt-5 md:pt-8">
          {/* Histoires de réussite */}
          <div className="flex items-center justify-center my-7">
            <div className="">
              <h2
                data-aos="zoom-in"
                className="text-xl md:text-3xl font-extrabold text-sbbsBlue text-center"
              >
                {t("certification.ratingSimulator.title")}
              </h2>
              <p data-aos="zoom-in" className="mt-2 text-sbbsGrayLight">
                {t("certification.ratingSimulator.subtitle")}
              </p>
            </div>
          </div>
        </div>

        {/* Chaque niveau représente un stade de maturité organisationnelle */}

        <div>
          <QurestionComponent />
        </div>
      </div>
      {/* Ils ont progressé avec SBBS */}
      <div className="w-full bg-sbbsWhite px-4">
        <div className="flex items-center justify-center w-full h-fit">
          <div className="text-center max-w-5xl py-5">
            <h1
              data-aos="zoom-in"
              className="pt-10 text-center text-sbbsBlue font-extrabold leading-snug text-2xl sm:text-3xl md:text-4xl"
            >
              {t("certification.Testymonial.titlte")}
            </h1>

            <div className="max-w-4xl mx-auto mb-10">
              <p
                data-aos="zoom-in"
                className="mt-2 text-gray-600 text-xs sm:text-sm md:text-base"
              >
                {t("certification.Testymonial.subtitle")}
              </p>
            </div>

            <div className="">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {/* TechInnov CI */}
                <div>
                  <div data-aos="zoom-in" className="flex items-start gap-2">
                    <div className="w-9 h-9 rounded-full bg-sbbsBlue"></div>
                    <div>
                      <h1 className="text-left text-sbbsYellow font-bold">
                        {t("certification.Testymonial.card1.compagnieName")}
                      </h1>
                      <p className="text-xs text-sbbsGrayLight text-nowrap">
                        {t("certification.Testymonial.card1.sector")}
                      </p>
                    </div>
                  </div>

                  <div className="max-w-md mx-auto ">
                    {/* Testimonial */}
                    <blockquote
                      data-aos="zoom-in"
                      className="bg-sbbsBelge px-4 py-3 mt-3 text-sm text-gray-700 italic mx-2 mb-4 rounded-lg"
                    >
                      {t("certification.Testymonial.card1.description")}
                    </blockquote>
                  </div>
                </div>
                {/* TechInnov CI */}
                <div>
                  <div data-aos="zoom-in" className="flex items-start gap-2">
                    <div className="w-9 h-9 rounded-full bg-sbbsBlue"></div>
                    <div>
                      <h1 className="text-left text-sbbsYellow font-bold">
                        {t("certification.Testymonial.card1.compagnieName")}
                      </h1>
                      <p className="text-xs text-sbbsGrayLight text-nowrap">
                        {t("certification.Testymonial.card1.sector")}
                      </p>
                    </div>
                  </div>

                  <div className="max-w-md mx-auto ">
                    {/* Testimonial */}
                    <blockquote
                      data-aos="zoom-in"
                      className="bg-sbbsBelge px-4 py-3 mt-3 text-sm text-gray-700 italic mx-2 mb-4 rounded-lg"
                    >
                      {t("certification.Testymonial.card1.description")}
                    </blockquote>
                  </div>
                </div>
                {/* TechInnov CI */}
                <div>
                  <div data-aos="zoom-in" className="flex items-start gap-2">
                    <div className="w-9 h-9 rounded-full bg-sbbsBlue"></div>
                    <div>
                      <h1 className="text-left text-sbbsYellow font-bold">
                        {t("certification.Testymonial.card1.compagnieName")}
                      </h1>
                      <p className="text-xs text-sbbsGrayLight text-nowrap">
                        {t("certification.Testymonial.card1.sector")}
                      </p>
                    </div>
                  </div>

                  <div className="max-w-md mx-auto ">
                    {/* Testimonial */}
                    <blockquote
                      data-aos="zoom-in"
                      className="bg-sbbsBelge px-4 py-3 mt-3 text-sm text-gray-700 italic mx-2 mb-4 rounded-lg"
                    >
                      {t("certification.Testymonial.card1.description")}
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Prêt à passer à l'action ? */}
      <div className="bg-sbbsBlue flex items-center justify-center w-full h-fit ">
        <div className="text-center max-w-3xl py-7">
          <h1
            data-aos="zoom-in"
            data-duration-aos="2000"
            className="pt-10 text-center text-white font-extrabold leading-snug text-2xl sm:text-3xl md:text-4xl"
          >
            {t("certification.downloadOfficialGrid.titlte")}
          </h1>

          <div className="max-w-md">
            <p
              data-aos="zoom-in"
              data-duration-aos="5000"
              className="mt-4 text-gray-200 text-xs sm:text-sm md:text-base"
            >
              {t("certification.downloadOfficialGrid.subtitle")}
            </p>
          </div>

          <div className="mt-6 flex items-center justify-center gap-5">
            <button
              data-aos="zoom-in"
              data-duration-aos="6000"
              className="bg-sbbsYellow text-black font-bold text-sm md:text-base w-fit h-10 rounded-full shadow-md hover:opacity-90 transition px-4"
            >
              {t("certification.downloadOfficialGrid.btn")}
            </button>

            {/* <button
              data-aos="fade-up"
              data-duration-aos="7000"
              className="bg-sbbsWhite text-black font-bold text-sm md:text-base w-fit h-10 rounded-full shadow-md hover:opacity-90 transition px-4"
            >
              Demander une évaluation
            </button> */}
          </div>
        </div>
      </div>
    </section>
  );
}
