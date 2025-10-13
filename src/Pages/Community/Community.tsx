import { Check, Clock9, MapPin } from "lucide-react";
import structuration from "../../Asset/Icons/Structuration.png";

import type {
  EventType,
  ICommunityBenefics,
  IcommunityTeam,
} from "../../Models/Interfaces/Community/community";
import { useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import ButtonLoader from "../../Components/ButtonLoader/ButtonLoader";
import toast from "react-hot-toast";
import compagnieImage from "../../Asset/Images/Compagnie-name.jpeg";
import { API_getEventList } from "../../Services/even.servce/Even.service";
import type { API_Event_Response } from "../../types/even";
import { Pagination } from "@mui/material";
import { EventCardSkeleton } from "../../Components/EventCardSkeleton/EventCardSkeleton";
import type { IEventSubscriber } from "../../types/eventSubscriber";
import { API_subscriberRequest } from "../../Services/community.service/community.service";

import testymonyVideo from "../../Asset/Videos/Présentation de l'école des affaires LA SOLOMON BETSALEEL BUSINESS SCHOOL SBBS.mp4";
import { useTranslation } from "react-i18next";

export default function Community() {
  const { t } = useTranslation();
  const [selectedType, setSelectedType] = useState<EventType>("Tous");
  const [eventDataIsLoading, setEventDataIsLoading] = useState<boolean>(false);
  const [eventListData, setEventListData] = useState<API_Event_Response>();
  const [totalPages, setTotalPages] = useState<number>(1);
  const [pageQuery, setPageQuery] = useState({
    page: 1,
    size: 5,
  });
  const [actionRequestLoader, setActionRequestLoader] =
    useState<boolean>(false);
  const [formInputValue, setFormInputValue] = useState<IEventSubscriber>({
    firstName: "",
    lastName: "",
    number: "",
    placeOfResidence: "",
    Profession: "",
    mail: "",
  });
  const [requestHasError, setRequestHasError] = useState<boolean>(false);

  const [errorMessage, setErrorMessage] = useState<string>("");

  const communityTeam: IcommunityTeam[] = [
    {
      id: 1,
      enterpriseName: t(
        "community.entrepreneurialElite.compagnie.compagnieName"
      ),
      shortDescription: t(
        "community.entrepreneurialElite.compagnie.descripton"
      ),
      image: compagnieImage,
    },
    {
      id: 2,
      enterpriseName: t(
        "community.entrepreneurialElite.compagnie.compagnieName"
      ),
      shortDescription: t(
        "community.entrepreneurialElite.compagnie.descripton"
      ),
      image: compagnieImage,
    },
    {
      id: 3,
      enterpriseName: t(
        "community.entrepreneurialElite.compagnie.compagnieName"
      ),
      shortDescription: t(
        "community.entrepreneurialElite.compagnie.descripton"
      ),
      image: compagnieImage,
    },
  ];

  /**
   * Community Features data
   */
  const communityFeaturesList: string[] = t(
    "community.omegaBusiness.omegaBusinessFeatures",
    {
      returnObjects: true,
    }
  ) as string[];

  /**
   * Community benefics data
   */

  const communintyBenefits: ICommunityBenefics[] = [
    {
      id: 1,
      label: t("community.communityBenefits.levels1.label"),
      description: t("community.communityBenefits.levels1.description"),
      img: structuration,
    },
    {
      id: 2,
      label: t("community.communityBenefits.levels2.label"),
      description: t("community.communityBenefits.levels2.description"),
      img: structuration,
    },
    {
      id: 3,
      label: t("community.communityBenefits.levels3.label"),
      description: t("community.communityBenefits.levels3.description"),
      img: structuration,
    },
    {
      id: 4,
      label: t("community.communityBenefits.levels4.label"),
      description: t("community.communityBenefits.levels4.description"),
      img: structuration,
    },
    {
      id: 5,
      label: t("community.communityBenefits.levels5.label"),
      description: t("community.communityBenefits.levels5.description"),
      img: structuration,
    },
    {
      id: 6,
      label: t("community.communityBenefits.levels6.label"),
      description: t("community.communityBenefits.levels6.description"),
      img: structuration,
    },
  ];

  /**
   * Categories even type data
   */

  const categories: EventType[] = [
    "Tous",
    "Networking",
    "Formation",
    "Business",
  ];

  /**
   * Filter type variables
   */

  const filteredEvents =
    selectedType === "Tous"
      ? eventListData?.ivents
      : eventListData?.ivents?.filter((event) => event.type === selectedType);

  /**
   *
   */
  const getAllEventList = () => {
    setEventDataIsLoading(true);
    API_getEventList(pageQuery.page, pageQuery.size, "")
      .then((response) => {
        setEventListData(response.data);
        setTotalPages(response.data.totalPages);
        setEventDataIsLoading(false);
      })
      .catch((error) => {
        setEventDataIsLoading(false);
        console.error("error", error);
      });
  };

  // console.log("result===>", eventDataIsLoading);

  /**
   *
   * @param _
   * @param value
   */

  const handlePageChange = (_: React.ChangeEvent<unknown>, value: number) => {
    setPageQuery((prev) => ({ ...prev, page: value }));
    getAllEventList();
  };

  /**
   *
   */
  const clearFormAfterRequest = (): void => {
    setFormInputValue({
      firstName: "",
      lastName: "",
      number: "",
      placeOfResidence: "",
      Profession: "",
      mail: "",
    });
  };

  const openInscriptionModal = (): void => {
    setActionRequestLoader(false);
    setRequestHasError(false);
    (document.getElementById("inscription") as HTMLDialogElement).showModal();
  };

  const closeInscriptionModal = (): void => {
    setRequestHasError(false);
    (document.getElementById("inscription") as HTMLDialogElement).close();
  };

  const handleSubscribeToEvent = () => {
    setActionRequestLoader(true);
    const inputFieldiSEmpty = Object.values(formInputValue).some(
      (valure) => valure.trim() === ""
    );
    if (inputFieldiSEmpty) {
      setActionRequestLoader(false);
      setRequestHasError(true);
      setErrorMessage("Veuillez renseigner tous les champs svp !");
      return;
    }
    API_subscriberRequest(formInputValue)
      .then((response) => {
        clearFormAfterRequest();
        (document.getElementById("inscription") as HTMLDialogElement).close();
        setActionRequestLoader(false);
        setRequestHasError(false);
        toast.success(response.data.message);
      })
      .catch((error) => {
        setRequestHasError(true);
        setActionRequestLoader(false);
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
    getAllEventList();
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <section className="w-full">
      <div className="absolute bg-sbbsBlue h-[600px] md:h-[580px] w-full"></div>
      {/* Content above  */}
      <div className="relative z-10 w-10/12 max-w-7xl mx-auto ">
        <div className="flex items-center justify-center px-4">
          <div className="text-center max-w-3xl pt-20 md:pt-24">
            <h1
              data-aos="zoom-in"
              className="pt-10 text-white font-extrabold leading-snug text-2xl sm:text-3xl md:text-4xl"
            >
              {t("community.hero.title")}
            </h1>

            <p
              data-aos="zoom-in"
              className="mt-4 text-sbbsYellow text-xs sm:text-sm md:text-base"
            >
              {t("community.hero.shortText")}
            </p>

            <div className="max-w-lg mx-auto mt-7">
              <p
                data-aos="zoom-in"
                className="mt-4 text-gray-200 text-xs sm:text-sm md:text-base"
              >
                {t("community.hero.subtitle")}
              </p>
            </div>
          </div>
        </div>
        {/* Le réseau d'excellence des entrepreneurs SBBS */}

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mt-10 pb-5">
          {/* + membres actifs */}
          <div data-aos="zoom-in">
            <div className="max-w-8 mx-auto">
              <h1 className="font-extrabold text-lg md:text-xl text-sbbsYellow">
                500
              </h1>
            </div>
            <p className="text-center text-lg font-bold text-sbbsYellow">
              {t("community.hero.btn.btn1")}
            </p>
          </div>
          {/* + Événements par an */}
          <div data-aos="zoom-in">
            <div className="max-w-8 mx-auto">
              <h1 className="font-extrabold text-lg md:text-xl text-sbbsYellow">
                300
              </h1>
            </div>
            <p className="text-center text-lg font-bold text-sbbsYellow">
              {t("community.hero.btn.btn2")}
            </p>
          </div>
          {/* +Business généré */}
          <div data-aos="zoom-in">
            <div className="max-w-8 mx-auto">
              <h1 className="font-extrabold text-lg md:text-xl text-sbbsYellow">
                50
              </h1>
            </div>
            <p className="text-center text-lg font-bold text-sbbsYellow">
              {t("community.hero.btn.btn3")}
            </p>
          </div>
          {/* Pays représentés */}
          <div data-aos="zoom-in">
            <div className="max-w-8 mx-auto">
              <h1 className="font-extrabold text-lg md:text-xl text-sbbsYellow">
                18
              </h1>
            </div>
            <p className="text-center text-lg font-bold text-sbbsYellow">
              {t("community.hero.btn.btn4")}
            </p>
          </div>
        </div>
      </div>

      {/* Un système d'évaluation complet */}
      <div className="w-full bg-sbbsWhite">
        <div className="w-10/12 max-w-7xl mx-auto pt-24 md:pt-44 flex items-center justify-center">
          {/* Découvrez Omega Business */}

          <div className="flex flex-wrap items-center gap-7 pt-10">
            <div>
              <div
                data-aos="zoom-in"
                className="w-64 md:w-64 rounded-lg  cursor-pointer"
              >
                <div className="w-64 md:w-full  h-44 cursor-pointer">
                  <video width="640" controls className=" rounded-md shadow-sm">
                    <source src={testymonyVideo} type="video/mp4" />
                  </video>
                  <div>
                    <span className="text-gray-500 font-normal">
                      {t("community.omegaBusiness.video.title")}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pb-5">
              <h1
                data-aos="zoom-in"
                className="text-lg lg:text-xl font-bold text-sbbsBlue mb-4"
              >
                {t("community.omegaBusiness.title")}
              </h1>
              <div className="max-w-lg">
                <p
                  data-aos="zoom-in"
                  className="w-full text-sbbsGrayLight text-md font-semibold mb-4"
                >
                  {t("community.omegaBusiness.subtitle")}
                </p>
              </div>

              {/* Features List */}
              <div className="space-y-4 mb-8">
                {communityFeaturesList.map((feature, index) => (
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
            </div>
          </div>
        </div>
      </div>
      {/* Les avantages de la communauté */}
      <div className="w-10/12 max-w-4xl mx-auto">
        <div className="flex items-center justify-center my-7">
          <div>
            <h2
              data-aos="zoom-in"
              className="text-2xl md:text-3xl font-extrabold text-sbbsBlue text-center"
            >
              {t("community.communityBenefits.title")}
            </h2>
            <p data-aos="zoom-in" className="mt-2 text-center text-gray-600">
              {t("community.communityBenefits.subtitle")}
            </p>
          </div>
        </div>
        {/* Les avantages de la communauté */}

        <div className="mt-10 w-full grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
          {/* Bloc */}
          {communintyBenefits.map((item) => (
            <div
              data-aos="fade-up"
              data-duration-aos="4000"
              key={item.id}
              className="bg-white rounded-xl w-full md:w-64 shadow-md p-2"
            >
              <div className="">
                <div className="flex items-center justify-center w-16 h-16  rounded-full bg-sbbsYellow mb-4">
                  <img src={item.img} alt="" className="w-7 h-7" />
                </div>
              </div>

              {/* title */}

              <div>
                <h3 className="text-lg font-bold text-sbbsBlue">
                  {item.label}
                </h3>
                <div className="smx-auto">
                  <p className="mt-2 text-gray-600 text-sm">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Agenda des événements */}
        <div className="flex items-center justify-center pt-10 md:pt-20">
          <div>
            <h2
              data-aos="zoom-in"
              className="text-2xl md:text-3xl font-extrabold text-sbbsBlue text-center"
            >
              {t("community.calendarEvents.title")}
            </h2>
            <p data-aos="zoom-in" className="mt-2 text-gray-600">
              {t("community.calendarEvents.subtitle")}
            </p>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-8 pt-5">
          {categories.map((categorie) => (
            <button
              key={categorie}
              onClick={() => setSelectedType(categorie)}
              className={`px-5 py-2 rounded-full font-medium transition ${
                selectedType === categorie
                  ? "bg-yellow-400 text-black"
                  : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-100"
              }`}
            >
              {categorie}
            </button>
          ))}
        </div>

        {/* Event Cards */}
        <div className="">
          {eventListData?.ivents?.length === 0 || eventDataIsLoading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-10">
              {[1, 2, 3].map((i) => (
                <div>
                  <EventCardSkeleton key={i} />
                </div>
              ))}
            </div>
          ) : null}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-10">
          {filteredEvents?.length !== 0 && !eventDataIsLoading
            ? filteredEvents?.map((event) => (
                <div
                  // data-aos="zoom-in"
                  key={event.id}
                  className=" bg-white rounded-xl shadow-md overflow-hidden"
                >
                  {/* Header color block */}
                  <div className="bg-sbbsBlue p-4 relative">
                    <span className="absolute top-3 right-3 bg-white bg-sbbsBlue font-bold text-xs rounded-md px-2 py-1">
                      {event.date}
                    </span>
                    <span className="bg-sbbsYellow text-xs px-3 py-1 rounded-full font-medium">
                      {event.type}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-2">
                    <h3 className="font-bold text-lg text-gray-900 mb-2 text-nowrap">
                      {event.title}
                    </h3>
                    <div className=" flex items-center gap-2 text-sm text-gray-600 mb-1">
                      <span className="text-nowrap flex items-center">
                        {" "}
                        <MapPin className="w-4 h-4" />{" "}
                        <span className="text-xs font-bold">
                          {event.location}
                        </span>
                      </span>
                      <div className="flex items-center">
                        <Clock9 className="w-4 h-4" />
                        <div>
                          <span className="text-xs font-bold">
                            {" "}
                            {event.time}
                          </span>
                        </div>{" "}
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 mb-4">
                      {event.description}
                    </p>

                    {/* Buttons */}
                    <div className="flex" onClick={openInscriptionModal}>
                      <button className="flex-1 bg-sbbsYellow text-black px-3 py-2 rounded-lg hover:bg-yellow-500 transition font-bold">
                        S’inscrire
                      </button>
                    </div>
                  </div>
                </div>
              ))
            : null}
        </div>

        <div className="flex items-center justify-center">
          <div>
            {eventListData?.ivents?.length === 0 && !eventDataIsLoading ? (
              <span className="text-gray-600 font-bold text-sm">
                Aucun évenement diponible pour le moment
              </span>
            ) : null}
          </div>
        </div>

        {/* PAGINATIONS */}
        <div className="flex items-center justify-center mt-7 pb-5">
          <Pagination
            count={totalPages}
            page={pageQuery.page}
            onChange={handlePageChange}
            variant="outlined"
            shape="rounded"
          />
        </div>
      </div>
      {/* Rejoignez l'élite entrepreneuriale */}
      <div className="w-full bg-sbbsWhite pb-10">
        <div className="flex items-center justify-center w-full h-fit ">
          <div className="text-center max-w-3xl py-7">
            <h1
              // data-aos="zoom-in"
              className="pt-10 text-center text-sbbsBlue font-extrabold leading-snug text-2xl sm:text-3xl md:text-4xl"
            >
              {t("community.entrepreneurialElite.title")}
            </h1>

            <div className="max-w-xl mx-auto">
              <p
                data-aos="zoom-in"
                className="mt-3 text-gray-600 text-xs sm:text-sm md:text-base"
              >
                {t("community.entrepreneurialElite.subtitle")}
              </p>
            </div>
          </div>
        </div>

        {/* Teams SECTIONS */}

        <div className="w-10/12 max-w-3xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-5">
            {communityTeam.map((member) => (
              <div
                // data-aos="zoom-in"
                key={member.id}
                className="bg-white rounded-xl shadow-md overflow-hidden text-center"
              >
                {/* Image Placeholder */}
                <div className="w-full h-40 rounded-lg mb-4">
                  <img src={member.image} alt="compagnieImage" />
                </div>

                <h3 className="font-bold text-sbbsBlue">
                  {member.enterpriseName}
                </h3>
                <p className="text-gray-600 text-sm font-semibold mb-2">
                  {member.shortDescription}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal section */}
      <dialog id="inscription" className="modal rounded-lg">
        <div className="modal-box p-3">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          {/* TITLES ACTIONS  */}
          <div className="my-4">
            <h1 className="text-lg font-extrabold leading-3 ">
              Inscrivez vous à notre événement
            </h1>
          </div>
          <div>
            {requestHasError && (
              <span className="text-red-600 text-xs">{errorMessage}</span>
            )}
          </div>

          {/* CONTENT */}
          <div className={"h-fit"}>
            <div className="mt-4">
              {/* FIRSTNAME AND LASTNAME */}
              <div className="flex items-center gap-3">
                <div className="form-control w-full relative max-w-full">
                  <label className="label mb-0">
                    <span className="label-text font-medium -mb-1 ">Nom</span>
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
                      Prenoms
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
                    Profession
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

              <div className="form-control relative w-full max-w-full mb-4 ">
                <label className="label mb-0">
                  <span className="label-text font-medium -mb-1 ">
                    Lieu de residence
                  </span>
                </label>
                <input
                  type="text"
                  value={formInputValue.placeOfResidence}
                  onChange={(e) => {
                    setFormInputValue((previousState) => ({
                      ...previousState,
                      placeOfResidence: e.target.value,
                    }));
                  }}
                  placeholder="Ex: Abidjan"
                  className={`input relative input-bordered text-xs w-full h-10 md:h-10 max-w-full rounded-md`}
                />
              </div>
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
                      Adrresse mail
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
              onClick={handleSubscribeToEvent}
            >
              {/* {actionRequestLoader ? } */}
              {actionRequestLoader ? (
                <span className="flex justify-center">
                  <ButtonLoader />
                </span>
              ) : (
                " S 'inscrire"
              )}
            </button>

            <button
              className={`w-full h-10 bg-gray-200 rounded-md text-black`}
              onClick={closeInscriptionModal}
            >
              Annuler
            </button>
          </div>
        </div>
      </dialog>
    </section>
  );
}
