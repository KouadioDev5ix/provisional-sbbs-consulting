import homeBg from "../../Asset/Images/Bg.png";
import {
  Calculator,
  Check,
  FileText,
  Monitor,
  Percent,
  Plus,
  X,
} from "lucide-react";
import type {
  IModules,
  IOfffersFeatures,
} from "../../Models/Interfaces/Offers/offers";
import structuration from "../../Asset/Icons/Structuration.png";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";

import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import ButtonLoader from "../../Components/ButtonLoader/ButtonLoader";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function Offers() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  /**
   * Open modal for dianostic request
   */

  const openAskQuoteModal = (): void => {
    (document.getElementById("quoteModal") as HTMLDialogElement).showModal();
    console.log("fonction works...");
  };

  /**
   *
   */

  const handleAskQuoteResquest = (): void => {
    setIsLoading(true);
    setTimeout(() => {
      toast.success("Merci , votre demande a bien été enregistrer");
      (document.getElementById("quoteModal") as HTMLDialogElement).close();
      setIsLoading(false);
    }, 1500);
  };

  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  const features: string[] = [
    "Diagnostic complet de votre entreprise",
    "Plan d'action personnalisé sur 12 mois",
    "Implémentation du système SYSTEMA",
    "Mise en place de la Machine à Vendre",
    "Formation complète de vos équipes",
  ];

  const modules: IModules[] = [
    {
      icon: <FileText className="w-8 h-8 text-white" />,
      title: "Structuration",
      description:
        "Processus, organigramme, fiches de poste, manuel de procédures",
      bgColor: "bg-sbbsBlue",
    },
    {
      icon: <Calculator className="w-8 h-8 text-white" />,
      title: "Finance & Gestion",
      description: "Tableau de bord, KPIs, gestion de trésorerie, rentabilité",
      bgColor: "bg-sbbsBlue",
    },
    {
      icon: <Percent className="w-8 h-8 text-white" />,
      title: "Commercial",
      description: "Stratégie de vente, pipeline, script, closing techniques",
      bgColor: "bg-sbbsBlue",
    },
    {
      icon: <Monitor className="w-8 h-8 text-white" />,
      title: "Digital & Marketing",
      description:
        "CRM, automatisation, présence en ligne, génération de leads",
      bgColor: "bg-sbbsBlue",
    },
  ];

  const offfersFeatures: IOfffersFeatures[] = [
    {
      name: "Diagnostic initial",
      starter: true,
      packComplet: true,
      premium: true,
    },
    {
      name: "Plan d'action personnalisé",
      starter: true,
      packComplet: true,
      premium: true,
    },
    {
      name: "Système SYSTEMA",
      starter: false,
      packComplet: true,
      premium: true,
    },
    {
      name: "Machine à Vendre",
      starter: false,
      packComplet: true,
      premium: true,
    },
    {
      name: "Formation équipes",
      starter: "2 sessions",
      packComplet: "Illimité",
      premium: "Illimité + coaching",
    },
    {
      name: "Suivi consultant",
      starter: "1 trimestre",
      packComplet: "Mensuel",
      premium: "Hebdomadaire",
    },
    {
      name: "Certification SBBS",
      starter: false,
      packComplet: true,
      premium: true,
    },
  ];

  /***
   *
   */

  const renderFeatureValue = (value: boolean | string) => {
    if (typeof value === "boolean") {
      return value ? (
        <Check className="w-5 h-5 text-green-500 mx-auto" />
      ) : (
        <X className="w-5 h-5 text-red-500 mx-auto" />
      );
    }
    return <span className="text-gray-700 text-sm font-medium">{value}</span>;
  };

  return (
    <section className="w-full">
      {/* Homez bg - fixed  */}
      <img
        src={homeBg}
        alt=""
        className="absolute inset-0 h-[450px] md:h-[500px] w-full object-cover"
      />
      {/* A simplez overlay  */}
      <div className="absolute inset-0 bg-sbbsBlue/95" aria-hidden="true" />
      {/* Content above  */}
      <div className="relative z-10 h-full w-full flex items-center justify-center px-4">
        <div className="text-center max-w-3xl pt-20 md:pt-44">
          <h1
            data-aos="zoom-in"
            data-duration-aos="4000"
            className="pt-10 text-white font-extrabold leading-snug text-2xl sm:text-3xl md:text-4xl"
          >
            Transformez votre entreprise avec nos solutions sur-mesure
          </h1>

          <p
            data-aos="zoom-in"
            data-duration-aos="5000"
            className="mt-4 text-gray-200 text-xs sm:text-sm md:text-base"
          >
            Des offres complètes pour structurer, optimiser et propulser votre
            croissance
          </p>
        </div>
      </div>
      {/* CONTAINER */}
      <div className="w-10/12 max-w-7xl mx-auto pt-8 md:pt-4">
        {/* Our... */}
        <div className="pt-44 md:pt-44 flex items-center justify-center my-7">
          <div className="">
            <h2
              data-aos="zoom-in"
              className="text-2xl md:text-3xl font-extrabold text-sbbsBlue text-center"
            >
              Notre Pack Phare
            </h2>
            <p data-aos="zoom-in" className="mt-2 text-gray-600">
              La solution complète pour transformer votre entreprise en 12 mois
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-5">
          {/* Left Content - Modules */}
          <div className="bg-white w-full h-fit md:h-[450px] rounded-xl shadow-md border border-gray-300 p-4 mb-5">
            <div className="flex flex-col gap-5 items-center">
              {/* Left Content */}
              <div>
                <h1
                  data-aos="zoom-in"
                  className="text-lg lg:text-xl font-bold text-sbbsBlue mb-4"
                >
                  Pack Systema +<br />
                  Machine à Vendre
                </h1>
                <p
                  data-aos="zoom-in"
                  className="w-full text-sbbsYellow text-md font-semibold mb-4"
                >
                  L'accompagnement ultime pour votre croissance
                </p>

                {/* Features List */}
                <div className="space-y-4 mb-8">
                  {features.map((feature, index) => (
                    <div
                      data-aos="zoom-in"
                      key={index}
                      className="flex items-center space-x-3"
                    >
                      <div className="flex-shrink-0 w-6 h-6 bg-sbbsYellow rounded-full flex items-center justify-center">
                        <Check className="w-4 h-4 text-black" />
                      </div>
                      <span className="text-gray-800 text-sm md:text-xs ">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <button
                  data-aos="zoom-in"
                  className="w-fit lg:w-fit bg-sbbsYellow text-black font-semibold h-10 px-4 rounded-full transition-colors duration-200"
                  onClick={openAskQuoteModal}
                >
                  Demander un devis personnalisé
                </button>
              </div>
            </div>
          </div>

          {/* Right Content - Modules */}
          <div className="">
            <h2
              data-aos="zoom-in"
              className="text-sbbsBlue text-xl font-bold mb-2 text-center"
            >
              Modules inclus dans le pack
            </h2>

            <div className="grid grid-cols-2 gap-4">
              {modules.map((module, index) => (
                <div
                  data-aos="zoom-in"
                  key={index}
                  className="bg-white border border-gray-200 rounded-xl p-2 hover:shadow-md transition-shadow duration-200"
                >
                  <div
                    className={`${module.bgColor} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}
                  >
                    {module.icon}
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2 text-sm lg:text-base">
                    {module.title}
                  </h3>
                  <p className="text-gray-600 text-xs lg:text-sm leading-relaxed">
                    {module.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Services Complémentaires */}
      <div className="w-10/12 max-w-6xl mx-auto">
        <div className="flex items-center justify-center my-7">
          <div data-aos="zoom-in">
            <h2 className="text-2xl md:text-3xl font-extrabold text-sbbsBlue text-center">
              Services Complémentaires
            </h2>
            <p className="mt-2 text-gray-600">
              Renforcez votre transformation avec nos modules additionnels
            </p>
          </div>
        </div>

        {/* Cartes pilieres */}
        <div className="mt-10 w-full grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-4">
          {/* 1. ERP Léger */}
          <div
            data-aos="zoom-in"
            className="bg-white rounded-xl w-full md:w-64 shadow-md p-3 text-center"
          >
            <div className="flex items-center justify-center w-16 h-16 mx-auto rounded-full bg-sbbsYellow mb-4">
              <img src={structuration} alt="" className="w-7 h-7" />
            </div>
            <h3 className="text-lg font-bold text-sbbsBlue">ERP Léger</h3>
            <div className="mx-auto">
              <p className="mt-2 text-gray-600 text-sm">
                Solution de gestion intégrée adaptée aux PME africaines. Gérez
                vos stocks, factures et comptabilité en un seul endroit.
              </p>
              <h1 className="text-sbbsCustomOrange font-semibold mt-3">
                À partir de 50.000 FCFA/mois
              </h1>
            </div>
          </div>

          {/* 2. Automatisation Marketing */}
          <div
            data-aos="zoom-in"
            className="bg-white rounded-xl w-full md:w-64 shadow-md p-3 text-center"
          >
            <div className="flex items-center justify-center w-16 h-16 mx-auto rounded-full bg-sbbsYellow mb-4">
              <img src={structuration} alt="" className="w-7 h-7" />
            </div>
            <h3 className="text-lg font-bold text-sbbsBlue">
              Automatisation Marketing
            </h3>
            <p className="mt-2 text-gray-600 text-sm">
              Optimisation des opérations, amélioration de la productivité et
              maîtrise des résultats financiers pour maximiser vos résultats.
            </p>

            <h1 className="text-sbbsCustomOrange font-semibold mt-3">
              À partir de 75.000 FCFA/mois
            </h1>
          </div>

          {/* 3. CRM Premium */}
          <div
            data-aos="zoom-in"
            className="bg-white rounded-xl shadow-md p-3 w-full md:w-64 text-center"
          >
            <div className="flex items-center justify-center w-16 h-16 mx-auto rounded-full bg-sbbsYellow mb-4">
              <img src={structuration} alt="" className="w-7 h-7" />
            </div>
            <h3 className="text-lg font-bold text-sbbsBlue">CRM Premium</h3>
            <p className="mt-2 text-gray-600 text-sm">
              Développement commercial, expansion stratégique et accès à de
              nouveaux marchés pour élever votre entreprise vers de nouveaux
              sommets.
            </p>
            <h1 className="text-sbbsCustomOrange font-semibold mt-3">
              <h1 className="text-sbbsCustomOrange font-semibold mt-3">
                À partir de 50.000 FCFA/mois
              </h1>
            </h1>
          </div>
          {/* 4. Formation Continue */}
          <div
            data-aos="zoom-in"
            className="bg-white rounded-xl shadow-md p-3 w-full md:w-64 text-center"
          >
            <div className="flex items-center justify-center w-16 h-16 mx-auto rounded-full bg-sbbsYellow mb-4">
              <img src={structuration} alt="" className="w-7 h-7" />
            </div>
            <h3 className="text-lg font-bold text-sbbsBlue">
              Formation Continue
            </h3>
            <p className="mt-2 text-gray-600 text-sm">
              Développement commercial, expansion stratégique et accès à de
              nouveaux marchés pour élever votre entreprise vers de nouveaux
              sommets.
            </p>
            <h1 className="text-sbbsCustomOrange font-semibold mt-3">
              Sur mesure
            </h1>
          </div>
        </div>
      </div>
      {/* Comparez nos offres */}
      <div className="w-10/12 max-w-7xl mx-auto pt-10 md:pt-14">
        <div className="flex items-center justify-center my-7">
          <div data-aos="zoom-in">
            <h2 className="text-2xl md:text-3xl font-extrabold text-sbbsBlue text-center">
              Comparez nos offres
            </h2>
            <p className="mt-2 text-gray-600">
              Choisissez la formule adaptée à vos besoins et votre budget
            </p>
          </div>
        </div>
        {/* Unified Table */}
        <div className="flex items-center justify-center">
          <button className="bg-sbbsYellow text-black w-fit h-fit rounded-full px-4 -mb-2">
            Recommandé
          </button>
        </div>
        <div className="bg-white overflow-auto rounded-lg shadow-lg border border-gray-200">
          <table className="w-full">
            {/* Table Header */}

            <thead>
              <tr className="bg-sbbsBlue">
                <th className="px-3 md:px-6 py-4 text-left text-white font-semibold text-sm md:text-base">
                  Caractéristiques
                </th>
                <th className="px-3 md:px-6 py-4 text-center text-white font-semibold text-sm md:text-base">
                  Starter
                </th>
                <th className="px-3 md:px-6 py-4 text-center text-white font-semibold text-sm md:text-base">
                  Pack complet
                </th>
                <th className="px-3 md:px-6 py-4 text-center text-white font-semibold text-sm md:text-base">
                  Premium
                </th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody>
              {offfersFeatures.map((feature, index) => (
                <tr
                  key={index}
                  className={`${
                    index % 2 === 0 ? "bg-gray-50" : "bg-white"
                  } hover:bg-blue-50 transition-colors`}
                >
                  <td className="px-3 md:px-6 py-4 font-medium text-gray-800 border-b border-gray-200 text-sm md:text-base">
                    {feature.name}
                  </td>
                  <td className="px-3 md:px-6 py-4 text-center border-b border-gray-200">
                    {renderFeatureValue(feature.starter)}
                  </td>
                  <td className="px-3 md:px-6 py-4 text-center border-b border-gray-200">
                    {renderFeatureValue(feature.packComplet)}
                  </td>
                  <td className="px-3 md:px-6 py-4 text-center border-b border-gray-200">
                    {renderFeatureValue(feature.premium)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {/* Accordion */}
      <div className="w-10/12 max-w-xl mx-auto pt-7 md:pt-10 pb-9">
        <div className="flex items-center justify-center my-7">
          <div data-aos="zoom-in">
            <h2 className="text-2xl md:text-3xl font-extrabold text-sbbsBlue text-center">
              Questions fréquentes
            </h2>
            <p className="mt-2 text-gray-600">
              Tout ce que vous devez savoir sur nos offres
            </p>
          </div>
        </div>
        {/* Comment se déroule le diagnostic initial ? */}
        <div data-aos="fade-up" data-duration-aos="4000">
          <Accordion>
            <AccordionSummary
              expandIcon={
                <Plus className="bg-sbbsYellow text-black rounded-full text-sm w-5 h-5" />
              }
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography component="span">
                <span className="text-gray-800 font-bold">
                  Comment se déroule le diagnostic initial ?
                </span>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <p className="text-sbbsGray text-sm">
                Le diagnostic initial se déroule sur 2 semaines et comprend :
                une analyse documentaire approfondie, des entretiens avec les
                dirigeants et les équipes clés, l'observation des processus en
                place, l'évaluation des outils et systèmes existants, et la
                remise d'un rapport détaillé avec nos recommandations
                prioritaires. Cette phase est cruciale pour établir une baseline
                et définir les axes d'amélioration.
              </p>
            </AccordionDetails>
          </Accordion>
        </div>
        {/* Quelle est la différence entre SYSTEMA et la Machine à Vendre ? */}
        <div data-aos="fade-up" data-duration-aos="5000" className="my-5">
          <Accordion>
            <AccordionSummary
              expandIcon={
                <Plus className="bg-sbbsYellow text-black rounded-full text-sm w-5 h-5" />
              }
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography component="span">
                <span className="text-gray-800 font-bold">
                  Quelle est la différence entre SYSTEMA et la Machine à Vendre
                  ?
                </span>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <p className="text-sbbsGray text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatum laborum rem voluptate facere dicta fugiat, maiores
                necessitatibus corporis?
              </p>
            </AccordionDetails>
          </Accordion>
        </div>
        {/* Comment sont organisées les formations pour nos équipes ? */}
        <div data-aos="fade-up" data-duration-aos="6000">
          <Accordion>
            <AccordionSummary
              expandIcon={
                <Plus className="bg-sbbsYellow text-black rounded-full text-sm w-5 h-5" />
              }
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography component="span">
                <span className="text-gray-800 font-bold">
                  Comment sont organisées les formations pour nos équipes ?
                </span>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <p className="text-sbbsGray text-sm">
                Le diagnostic initial se déroule sur 2 semaines et comprend :
                une analyse documentaire approfondie, des entretiens avec les
                dirigeants et les équipes clés, l'observation des processus en
                place, l'évaluation des outils et systèmes existants, et la
                remise d'un rapport détaillé avec nos recommandations
                prioritaires. Cette phase est cruciale pour établir une baseline
                et définir les axes d'amélioration.
              </p>
            </AccordionDetails>
          </Accordion>
        </div>
        {/* Quelles sont les modalités de paiement ? */}
        <div data-aos="fade-up" data-duration-aos="7000" className="my-5">
          <Accordion>
            <AccordionSummary
              expandIcon={
                <Plus className="bg-sbbsYellow text-black rounded-full text-sm w-5 h-5" />
              }
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography component="span">
                <span className="text-gray-800 font-bold">
                  Quelles sont les modalités de paiement ?
                </span>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <p className="text-sbbsGray text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatum laborum rem voluptate facere dicta fugiat, maiores
                necessitatibus corporis?
              </p>
            </AccordionDetails>
          </Accordion>
        </div>
        {/* Que se passe-t-il après les 12 mois d'accompagnement ? */}

        <div data-aos="fade-up" data-duration-aos="8000" className="">
          <Accordion>
            <AccordionSummary
              expandIcon={
                <Plus className="bg-sbbsYellow text-black rounded-full text-sm w-5 h-5" />
              }
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography component="span">
                <span className="text-gray-800 font-bold">
                  Que se passe-t-il après les 12 mois d'accompagnement ?
                </span>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <p className="text-sbbsGray text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatum laborum rem voluptate facere dicta fugiat, maiores
                necessitatibus corporis? Voluptatum laborum rem voluptate facere
                dicta fugiat, maiores necessitatibus corporis?
              </p>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
      {/* Prêt à passer à l'action ? */}
      <div className="bg-sbbsBlue flex items-center justify-center w-full h-fit ">
        <div
          data-aos="zoom-in"
          // data-duration-aos="7000"
          className="text-center max-w-3xl py-7"
        >
          <h1 className="pt-10 text-center text-white font-extrabold leading-snug text-2xl sm:text-3xl md:text-4xl">
            Prêt à passer à l'action ?
          </h1>

          <p className="mt-4 text-gray-200 text-xs sm:text-sm md:text-base">
            Commencez votre transformation dès aujourd'hui <br /> avec un
            diagnostic gratuit
          </p>

          <div className="mt-6 flex  items-center justify-center gap-5">
            <button
              className="bg-sbbsYellow text-black font-bold text-sm md:text-base w-fit h-10 rounded-full shadow-md hover:opacity-90 transition px-4"
              onClick={openAskQuoteModal}
            >
              Demander un devis gratuit
            </button>
          </div>
        </div>
      </div>

      {/* Modal section */}
      <dialog id="quoteModal" className="modal rounded-lg">
        <div className="modal-box p-3">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          {/* TITLES ACTIONS  */}
          <div className="my-4">
            <h1 className="text-lg font-extrabold leading-3 ">
              Demande de dévis
            </h1>
          </div>
          {/* CONTENT */}
          <div className={"h-fit"}>
            <div className="mt-4">
              {/* FIRSTNAME AND LASTNAME */}
              <div className="flex items-center gap-3">
                <div className="form-control w-full relative max-w-full">
                  <label className="label mb-0">
                    <span className="label-text font-medium -mb-1">Nom</span>
                  </label>
                  <input
                    // value={inputs.lastName}
                    // onChange={(e) => {
                    //   setInputs((previousState) => ({
                    //     ...previousState,
                    //     lastName: e.target.value,
                    //   }));
                    // }}
                    type="text"
                    placeholder="Ex: Kouadio"
                    className={`input relative input-bordered text-xs w-full h-10 md:h-10 max-w-full rounded-md`}
                  />
                </div>
                <div className="form-control w-full relative max-w-full">
                  <label className="label mb-0">
                    <span className="label-text font-medium -mb-1 ">
                      Prenoms
                    </span>
                  </label>
                  <input
                    // value={inputs.firstName}

                    type="text"
                    placeholder="Ex: Kouadio Alfred"
                    className={`input relative input-bordered text-xs w-full h-10 md:h-10 max-w-full rounded-md `}
                  />
                </div>
              </div>

              <div className="form-control relative w-full max-w-full my-2">
                <label className="label mb-0">
                  <span className="label-text font-medium -mb-1 ">
                    Profession
                  </span>
                </label>
                <input
                  // value={inputs.userName}
                  // onChange={(e) => {
                  //   setInputs((previousState) => ({
                  //     ...previousState,
                  //     userName: e.target.value,
                  //   }));
                  // }}
                  type="text"
                  placeholder="Entrepreneur"
                  className={`input relative input-bordered text-xs w-full h-10 md:h-10 max-w-full rounded-md`}
                />
              </div>

              {/* CITY */}

              {/* <div className="form-control relative w-full max-w-full mb-4 ">
                <label className="label mb-0">
                  <span className="label-text font-medium -mb-1 ">
                    Lieu de residence
                  </span>
                </label>
                <input
                  type="text"
                  // value={inputs.city}
                  // onChange={(e) => {
                  //   setInputs((previousState) => ({
                  //     ...previousState,
                  //     city: e.target.value,
                  //   }));
                  // }}
                  placeholder="Ex: Abidjan"
                  className={`input relative input-bordered text-xs w-full h-10 md:h-10 max-w-full rounded-md`}
                />
              </div> */}
              {/* PHONE AND EMAIL */}
              <div className="flex items-center gap-3">
                <div className="form-control relative w-full max-w-full">
                  <label className="label mb-0">
                    <span className="label-text font-medium -mb-1 ">
                      Numéro
                    </span>
                  </label>
                  <input
                    type="text"
                    // value={inputs.number}
                    // onChange={(e) => {
                    //   setInputs((previousState) => ({
                    //     ...previousState,
                    //     number: e.target.value,
                    //   }));
                    // }}
                    placeholder="Ex: 05 85 13 22 12"
                    className={`input relative input-bordered text-xs w-full h-10 md:h-10 max-w-full rounded-md`}
                  />
                </div>
                <div className="form-control relative w-full max-w-full">
                  <label className="label mb-0">
                    <span className="label-text font-medium -mb-1 ">
                      Adrresse mail
                    </span>
                  </label>
                  <input
                    // value={inputs.mail}
                    // onChange={(e) => {
                    //   setInputs((previousState) => ({
                    //     ...previousState,
                    //     mail: e.target.value,
                    //   }));
                    // }}
                    type="text"
                    placeholder="Ex: kouadio@gmail.com"
                    className={`input relative input-bordered text-xs w-full h-10 md:h-10 max-w-full rounded-md`}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4 pt-7">
            <button
              disabled={isLoading}
              className={`${
                isLoading ? "cursor-not-allowed" : ""
              } w-full h-10 bg-sbbsBlue rounded-md text-white`}
              onClick={handleAskQuoteResquest}
            >
              {/* {isLoading ? } */}
              {isLoading ? (
                <span className="flex justify-center">
                  <ButtonLoader />
                </span>
              ) : (
                "Valider"
              )}
            </button>

            <button className={`w-full h-10 bg-gray-200 rounded-md text-black`}>
              Annuler
            </button>
          </div>
        </div>
      </dialog>
    </section>
  );
}
