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
import type { IOfffersFeatures } from "../../Models/Interfaces/Offers/offers";
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
import type { IDevis } from "../../types/devis";
import { API_devisRequest } from "../../Services/devis.service/devis.service";

import { useTranslation } from "react-i18next";

export default function Offers() {
  const { t } = useTranslation();

  const [formInputValue, setFormInputValue] = useState<IDevis>({
    firstName: "",
    lastName: "",
    number: "",
    Profession: "",
    mail: "",
  });
  const [actionRequestLoader, setActionRequestLoader] =
    useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [requestHasError, setRequestHasError] = useState<boolean>(false);

  /**
   * Open modal for dianostic request
   */

  const openAskQuoteModal = (): void => {
    (document.getElementById("quoteModal") as HTMLDialogElement).showModal();

    setRequestHasError(false);
  };

  const closeModal = (): void => {
    (document.getElementById("quoteModal") as HTMLDialogElement).close();
  };

  /**
   *
   */

  const clearFormAfterRequest = (): void => {
    setFormInputValue({
      firstName: "",
      lastName: "",
      number: "",
      Profession: "",
      mail: "",
    });
  };

  /**
   *
   * @returns
   */

  const handleAskQuoteResquest = () => {
    const inputFieldiSEmpty = Object.values(formInputValue).some(
      (valure) => valure.trim() === ""
    );
    setActionRequestLoader(true);
    if (inputFieldiSEmpty) {
      setActionRequestLoader(false);
      setRequestHasError(true);
      setErrorMessage("Veuillez renseigner tous les champs svp !");
      return;
    }
    API_devisRequest(formInputValue)
      .then((response) => {
        clearFormAfterRequest();
        setActionRequestLoader(false);
        (document.getElementById("quoteModal") as HTMLDialogElement).close();
        toast.success(response.data.message);
      })
      .catch((error) => {
        setActionRequestLoader(false);
        setRequestHasError(true);
        if (error.message.data) {
          setErrorMessage(error.response.data.message);
        } else {
          setErrorMessage("Une erreur s'est produite");
        }
        console.error("error while creating user", error);
      });
  };

  /**
   *
   */

  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  const features: string[] = t("offers.pack.features", {
    returnObjects: true,
  }) as string[];

  type TableBodyType = {
    name1: string;
    name2: string;
    name3: string;
    name4: string;
    name5: string;
    name6: string;
    name7: string;
  };

  const tableBody = t("offers.compare.TableBody", {
    returnObjects: true,
  }) as TableBodyType;

  const offfersFeatures: IOfffersFeatures[] = [
    {
      name: tableBody.name1,
      starter: true,
      packComplet: true,
      premium: true,
    },
    {
      name: tableBody.name2,
      starter: true,
      packComplet: true,
      premium: true,
    },
    {
      name: tableBody.name3,
      starter: false,
      packComplet: true,
      premium: true,
    },
    {
      name: tableBody.name4,
      starter: false,
      packComplet: true,
      premium: true,
    },
    {
      name: tableBody.name5,
      starter: false,
      packComplet: true,
      premium: true,
    },
    {
      name: tableBody.name6,
      starter: false,
      packComplet: true,
      premium: true,
    },
    {
      name: tableBody.name7,
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
            {t("offers.hero.title")}
          </h1>

          <p
            data-aos="zoom-in"
            data-duration-aos="5000"
            className="mt-4 text-gray-200 text-xs sm:text-sm md:text-base"
          >
            {t("offers.hero.subtitle")}
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
              {t("offers.pack.title")}
            </h2>
            <p data-aos="zoom-in" className="mt-2 text-gray-600">
              {t("offers.pack.subtitle")}
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
                  {t("offers.pack.Systema")}
                </h1>
                <p
                  data-aos="zoom-in"
                  className="w-full text-sbbsYellow text-md font-semibold mb-4"
                >
                  {t("offers.pack.SystemaSubtitle")}
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
                  className="w-full font-bold text-sm bg-sbbsYellow text-black h-10 px-4 rounded-full transition-colors duration-200"
                  onClick={openAskQuoteModal}
                >
                  {t("offers.pack.cta")}
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
              {t("offers.modules.title")}
            </h2>

            <div className="grid grid-cols-2 gap-4">
              {/* Card 1 */}
              <div
                data-aos="zoom-in"
                className="bg-white border border-gray-200 rounded-xl p-2 hover:shadow-md transition-shadow duration-200"
              >
                <div
                  className={`bg-sbbsBlue w-12 h-12 rounded-lg flex items-center justify-center mb-4`}
                >
                  <FileText className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2 text-sm lg:text-base">
                  {t("offers.modules.A.title")}
                </h3>
                <p className="text-gray-600 text-xs lg:text-sm leading-relaxed">
                  {t("offers.modules.A.description")}
                </p>
              </div>
              {/* Card 2 */}
              <div
                data-aos="zoom-in"
                className="bg-white border border-gray-200 rounded-xl p-2 hover:shadow-md transition-shadow duration-200"
              >
                <div
                  className={`bg-sbbsBlue w-12 h-12 rounded-lg flex items-center justify-center mb-4`}
                >
                  <Calculator className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2 text-sm lg:text-base">
                  {t("offers.modules.B.title")}
                </h3>
                <p className="text-gray-600 text-xs lg:text-sm leading-relaxed">
                  {t("offers.modules.B.description")}
                </p>
              </div>
              {/* Card 3*/}
              <div
                data-aos="zoom-in"
                className="bg-white border border-gray-200 rounded-xl p-2 hover:shadow-md transition-shadow duration-200"
              >
                <div
                  className={`bg-sbbsBlue w-12 h-12 rounded-lg flex items-center justify-center mb-4`}
                >
                  <Percent className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2 text-sm lg:text-base">
                  {t("offers.modules.C.title")}
                </h3>
                <p className="text-gray-600 text-xs lg:text-sm leading-relaxed">
                  {t("offers.modules.C.description")}
                </p>
              </div>
              {/* Card 4 */}
              <div
                data-aos="zoom-in"
                className="bg-white border border-gray-200 rounded-xl p-2 hover:shadow-md transition-shadow duration-200"
              >
                <div
                  className={`bg-sbbsBlue w-12 h-12 rounded-lg flex items-center justify-center mb-4`}
                >
                  <Monitor className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2 text-sm lg:text-base">
                  {t("offers.modules.D.title")}
                </h3>
                <p className="text-gray-600 text-xs lg:text-sm leading-relaxed">
                  {t("offers.modules.D.description")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Complémentaires */}
      <div className="w-10/12 max-w-7xl mx-auto">
        <div className="flex items-center justify-center my-7">
          <div data-aos="zoom-in">
            <h2 className="text-2xl md:text-3xl font-extrabold text-sbbsBlue text-center">
              {t("offers.services.title")}
            </h2>
            <p className="mt-2 text-gray-600">
              {t("offers.services.subtitle")}
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
            <h3 className="text-lg font-bold text-sbbsBlue">
              {t("offers.services.erp.title")}
            </h3>
            <div className="mx-auto">
              <p className="mt-2 text-gray-600 text-sm">
                {t("offers.services.erp.desc")}
              </p>
              <h1 className="text-sbbsCustomOrange font-semibold mt-3">
                {t("offers.services.erp.price")}
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
              {t("offers.services.marketing.title")}
            </h3>
            <p className="mt-2 text-gray-600 text-sm">
              {t("offers.services.marketing.desc")}
            </p>

            <h1 className="text-sbbsCustomOrange font-semibold mt-3">
              {t("offers.services.marketing.price")}
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
            <h3 className="text-lg font-bold text-sbbsBlue">
              {t("offers.services.crm.title")}
            </h3>
            <p className="mt-2 text-gray-600 text-sm">
              {t("offers.services.crm.desc")}
            </p>
            <h1 className="text-sbbsCustomOrange font-semibold mt-3">
              <h1 className="text-sbbsCustomOrange font-semibold mt-3">
                {t("offers.services.crm.price")}
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
              {t("offers.services.training.title")}
            </h3>
            <p className="mt-2 text-gray-600 text-sm">
              {t("offers.services.training.desc")}
            </p>
            <h1 className="text-sbbsCustomOrange font-semibold mt-3">
              {t("offers.services.training.price")}
            </h1>
          </div>
        </div>
      </div>
      {/* Comparez nos offres */}
      <div className="w-10/12 max-w-7xl mx-auto pt-10 md:pt-14">
        <div className="flex items-center justify-center my-7">
          <div data-aos="zoom-in">
            <h2 className="text-2xl md:text-3xl font-extrabold text-sbbsBlue text-center">
              {t("offers.compare.title")}
            </h2>
            <p className="mt-2 text-gray-600">{t("offers.compare.subtitle")}</p>
          </div>
        </div>
        {/* Unified Table */}
        <div className="flex items-center justify-center">
          <button className="bg-sbbsYellow text-black w-fit h-fit rounded-full px-4 -mb-2">
            {t("offers.compare.recommended")}
          </button>
        </div>
        <div className="bg-white overflow-auto rounded-lg shadow-lg border border-gray-200">
          <table className="w-full">
            {/* Table Header */}
            <thead>
              <tr className="bg-sbbsBlue">
                <th className="px-3 md:px-6 py-4 text-left text-white font-semibold text-sm md:text-base">
                  {t("offers.compare.tableTitle.features")}
                </th>
                <th className="px-3 md:px-6 py-4 text-center text-white font-semibold text-sm md:text-base">
                  {t("offers.compare.tableTitle.starter")}
                </th>
                <th className="px-3 md:px-6 py-4 text-center text-white font-semibold text-sm md:text-base">
                  {t("offers.compare.tableTitle.completePack")}
                </th>
                <th className="px-3 md:px-6 py-4 text-center text-white font-semibold text-sm md:text-base">
                  {t("offers.compare.tableTitle.premium")}
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
              {t("offers.faq.title")}
            </h2>
            <p className="mt-2 text-gray-600">{t("offers.faq.subtitle")}</p>
          </div>
        </div>
        {/* Comment se déroule le diagnostic initial ? */}
        <div data-aos="zoom-in" data-duration-aos="4000">
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
                  {t("offers.faq.Accordion.Question1.title")}
                </span>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <p className="text-sbbsGray text-sm">
                {t("offers.faq.Accordion.Question1.content")}
              </p>
            </AccordionDetails>
          </Accordion>
        </div>
        {/* Quelle est la différence entre SYSTEMA et la Machine à Vendre ? */}
        <div data-aos="zoom-in" data-duration-aos="5000" className="my-5">
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
                  {t("offers.faq.Accordion.Question2.title")}
                </span>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <p className="text-sbbsGray text-sm">
                {t("offers.faq.Accordion.Question2.content")}
              </p>
            </AccordionDetails>
          </Accordion>
        </div>
        {/* Comment sont organisées les formations pour nos équipes ? */}
        <div data-aos="zoom-in" data-duration-aos="6000">
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
                  {t("offers.faq.Accordion.Question3.title")}
                </span>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <p className="text-sbbsGray text-sm">
                {t("offers.faq.Accordion.Question3.content")}
              </p>
            </AccordionDetails>
          </Accordion>
        </div>
        {/* Quelles sont les modalités de paiement ? */}
        <div data-aos="zoom-in" data-duration-aos="7000" className="my-5">
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
                  {t("offers.faq.Accordion.Question4.title")}
                </span>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <p className="text-sbbsGray text-sm">
                {t("offers.faq.Accordion.Question4.content")}
              </p>
            </AccordionDetails>
          </Accordion>
        </div>
        {/* Que se passe-t-il après les 12 mois d'accompagnement ? */}

        <div data-aos="zoom-in" data-duration-aos="8000" className="">
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
                  {t("offers.faq.Accordion.Question5.title")}
                </span>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <p className="text-sbbsGray text-sm">
                {t("offers.faq.Accordion.Question5.content")}
              </p>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
      {/* Prêt à passer à l'action ? */}
      <div className="bg-sbbsBlue flex items-center justify-center w-full h-fit ">
        <div data-aos="zoom-in" className="text-center max-w-3xl py-7">
          <h1 className="pt-10 text-center text-white font-extrabold leading-snug text-2xl sm:text-3xl md:text-4xl">
            {t("offers.cta.title")}
          </h1>

          <p className="mt-4 text-gray-200 text-xs sm:text-sm md:text-base">
            {t("offers.cta.subtitle")}
          </p>

          <div className="mt-6 flex  items-center justify-center gap-5">
            <button
              className="bg-sbbsYellow text-black font-bold text-sm md:text-base w-fit h-10 rounded-full shadow-md hover:opacity-90 transition px-4"
              onClick={openAskQuoteModal}
            >
              {t("offers.cta.btn")}
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
              {t("offers.form.title")}
            </h1>
          </div>

          <div>
            {requestHasError && (
              <span className="text-red-600 text-sm">
                {t("offers.form.error")}
              </span>
            )}
          </div>
          {/* CONTENT */}
          <div className={"h-fit"}>
            <div className="mt-4">
              {/* FIRSTNAME AND LASTNAME */}
              <div className="flex items-center gap-3">
                <div className="form-control w-full relative max-w-full">
                  <label className="label mb-0">
                    <span className="label-text font-medium -mb-1">
                      {t("offers.form.labels.lastName")}
                    </span>
                  </label>
                  <input
                    value={formInputValue.lastName}
                    onChange={(e) => {
                      setFormInputValue((previousState) => ({
                        ...previousState,
                        lastName: e.target.value,
                      }));
                    }}
                    type="text"
                    placeholder="Ex: Kouadio"
                    className={`input relative input-bordered text-xs w-full h-10 md:h-10 max-w-full rounded-md`}
                  />
                </div>
                <div className="form-control w-full relative max-w-full">
                  <label className="label mb-0">
                    <span className="label-text font-medium -mb-1 ">
                      {t("offers.form.labels.firstName")}
                    </span>
                  </label>
                  <input
                    value={formInputValue.firstName}
                    onChange={(e) => {
                      setFormInputValue((previousState) => ({
                        ...previousState,
                        firstName: e.target.value,
                      }));
                    }}
                    type="text"
                    placeholder="Ex: Kouadio Alfred"
                    className={`input relative input-bordered text-xs w-full h-10 md:h-10 max-w-full rounded-md `}
                  />
                </div>
              </div>

              <div className="form-control relative w-full max-w-full my-2">
                <label className="label mb-0">
                  <span className="label-text font-medium -mb-1 ">
                    {t("offers.form.labels.profession")}
                  </span>
                </label>
                <input
                  value={formInputValue.Profession}
                  onChange={(e) => {
                    setFormInputValue((previousState) => ({
                      ...previousState,
                      Profession: e.target.value,
                    }));
                  }}
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
                      {t("offers.form.labels.number")}
                    </span>
                  </label>
                  <input
                    type="text"
                    value={formInputValue.number}
                    onChange={(e) => {
                      setFormInputValue((previousState) => ({
                        ...previousState,
                        number: e.target.value,
                      }));
                    }}
                    placeholder="Ex: 05 85 13 22 12"
                    className={`input relative input-bordered text-xs w-full h-10 md:h-10 max-w-full rounded-md`}
                  />
                </div>
                <div className="form-control relative w-full max-w-full">
                  <label className="label mb-0">
                    <span className="label-text font-medium -mb-1 ">
                      {t("offers.form.labels.mail")}
                    </span>
                  </label>
                  <input
                    value={formInputValue.mail}
                    onChange={(e) => {
                      setFormInputValue((previousState) => ({
                        ...previousState,
                        mail: e.target.value,
                      }));
                    }}
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
              disabled={actionRequestLoader}
              className={`${
                actionRequestLoader ? "cursor-not-allowed" : ""
              } w-full h-10 bg-sbbsBlue rounded-md text-white`}
              onClick={handleAskQuoteResquest}
            >
              {/* {isLoading ? } */}
              {actionRequestLoader ? (
                <span className="flex justify-center">
                  <ButtonLoader />
                </span>
              ) : (
                <span>{t("offers.form.actions.validate")}</span>
              )}
            </button>

            <button
              className={`w-full h-10 bg-gray-200 rounded-md text-black`}
              onClick={closeModal}
            >
              {t("offers.form.actions.cancel")}
            </button>
          </div>
        </div>
      </dialog>
    </section>
  );
}
