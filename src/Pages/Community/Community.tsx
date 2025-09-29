import { Check, Clock9, MapPin, Play } from "lucide-react";
import structuration from "../../Asset/Icons/Structuration.png";
import type {
  EventType,
  ICommunityBenefics,
  ICommunityEventCard,
  IcommunityTeam,
} from "../../Models/Interfaces/Community/community";
// import type { EventType } from "./T";
import { useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import ButtonLoader from "../../Components/ButtonLoader/ButtonLoader";
import toast from "react-hot-toast";
import compagnieImage from "../../Asset/Images/Compagnie-name.jpeg";

export default function Community() {
  const [selectedType, setSelectedType] = useState<EventType>("Tous");

  const [isLoading, setIsLoading] = useState<boolean>(false);

  /**
   * Open modal for dianostic request
   */

  const openInscriptionModal = (): void => {
    setIsLoading(false);
    (document.getElementById("inscription") as HTMLDialogElement).showModal();
  };

  const inscription = (): void => {
    setIsLoading(true);
    setTimeout(() => {
      toast.success("Iscription éffectué avec succés");
      (document.getElementById("inscription") as HTMLDialogElement).close();
      setIsLoading(false);
    }, 1000);
  };

  const communityTeam: IcommunityTeam[] = [
    {
      id: 1,
      enterpriseName: "BC Inc Companies",
      shortDescription:
        "lorem ispsum dolor site ketreum par insn lompe lorem ispsum dolor ",
      image: compagnieImage,
    },
    {
      id: 2,
      enterpriseName: "BC Inc Companies",
      shortDescription:
        "lorem ispsum dolor site ketreum par insn lompe lorem ispsum dolor ",
      image: compagnieImage,
    },
    {
      id: 3,
      enterpriseName: "BC Inc Companies",
      shortDescription:
        "lorem ispsum dolor site ketreum par insn lompe lorem ispsum dolor ",
      image: compagnieImage,
    },
  ];
  /**
   * Community Features data
   */

  const communityFeaturesList: string[] = [
    "Networking de haut niveau entre dirigeants",
    "Formations continues et masterclasses exclusives",
    "Opportunités d'affaires et partenariats",
    "Mentorat et partage d'expériences",
  ];

  /**
   * Community benefics data
   */

  const communintyBenefits: ICommunityBenefics[] = [
    {
      id: 1,
      label: "Networking Premium",
      description:
        "Connectez-vous avec des entrepreneurs ambitieux et créez des synergies business durables.",
      img: structuration,
    },
    {
      id: 2,
      label: "Formation Continue",
      description:
        "Restez à la pointe avec des formations et masterclasses animées par des experts..",
      img: structuration,
    },
    {
      id: 3,
      label: "Opportunités Business",
      description:
        "Développez votre chiffre d'affaires grâce aux opportunités partagées dans la communauté.",
      img: structuration,
    },
    {
      id: 4,
      label: "Accélération & Mentorat",
      description:
        "Bénéficiez de l'expérience des membres seniors et accélérez votre développement.",
      img: structuration,
    },
    {
      id: 5,
      label: "Rayonnement International",
      description:
        "Étendez votre influence au-delà des frontières avec notre réseau panafricain.",
      img: structuration,
    },
    {
      id: 6,
      label: "Privilèges Exclusifs",
      description:
        "Accédez à des avantages négociés et des tarifs préférentiels.",
      img: structuration,
    },
  ];

  /**
   * Event card data
   */

  const events: ICommunityEventCard[] = [
    {
      id: 1,
      type: "Networking",
      title: "Leadership & Croissance",
      location: "Sofitel Abidjan",
      time: "18h30 - 22h00",
      description:
        "Masterclass animée par un expert international sur les stratégies de croissance rapide et durable.",
      date: "15 SEPT",
    },
    {
      id: 2,
      type: "Networking",
      title: "Leadership & Croissance ",
      location: "Sofitel Abidjan",
      time: "18h30 - 22h00",
      description:
        "Masterclass animée par un expert international sur les stratégies de croissance rapide et durable.",
      date: "15 SEPT",
    },
    {
      id: 3,
      type: "Networking",
      title: "Leadership & Croissance ",
      location: "Sofitel Abidjan",
      time: "18h30 - 22h00",
      description:
        "Masterclass animée par un expert international sur les stratégies de croissance rapide et durable.",
      date: "15 SEPT",
    },
  ];

  /**
   * Categories even type data
   */

  const categories: EventType[] = ["Tous", "Networking", "Formation"];
  /**
   * Filter type variables
   */

  const filteredEvents =
    selectedType === "Tous"
      ? events
      : events.filter((event) => event.type === selectedType);

  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <section className="w-full">
      <div className="absolute bg-sbbsBlue h-[550px] md:h-[580px] w-full"></div>
      {/* Content above  */}
      <div className="relative z-10 w-10/12 max-w-7xl mx-auto ">
        <div className="flex items-center justify-center px-4">
          <div className="text-center max-w-3xl pt-20 md:pt-24">
            <h1
              data-aos="zoom-in"
              className="pt-10 text-white font-extrabold leading-snug text-2xl sm:text-3xl md:text-4xl"
            >
              Communauté Omega Business
            </h1>

            <p
              data-aos="zoom-in"
              className="mt-4 text-sbbsYellow text-xs sm:text-sm md:text-base"
            >
              Le réseau d'excellence des entrepreneurs SBBS
            </p>

            <div className="max-w-lg mx-auto mt-7">
              <p
                data-aos="zoom-in"
                className="mt-4 text-gray-200 text-xs sm:text-sm md:text-base"
              >
                Rejoignez un écosystème dynamique d'entrepreneurs certifiés qui
                partagent, grandissent et réussissent ensemble. Plus qu'une
                communauté, c'est votre accélérateur de croissance.
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
              + membres actifs
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
              + Événements par an
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
              + Business généré
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
              Pays représentés
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
                className="w-64 md:w-64 rounded-lg bg-sbbsBlue cursor-pointer"
              >
                <div className="flex items-center justify-center p-6">
                  <button className="flex items-center justify-center bg-sbbsYellow rounded-full h-14 w-14">
                    <Play />
                  </button>
                </div>
              </div>
            </div>

            <div className="pb-5">
              <h1
                data-aos="zoom-in"
                className="text-lg lg:text-xl font-bold text-sbbsBlue mb-4"
              >
                Découvrez Omega Business
              </h1>
              <div className="max-w-lg">
                <p
                  data-aos="zoom-in"
                  className="w-full text-sbbsGrayLight text-md font-semibold mb-4"
                >
                  Une communauté exclusive où les entrepreneurs certifiés SBBS
                  se retrouvent pour partager leurs expériences, développer des
                  synergies et accélérer leur croissance.
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
      <div className="w-10/12 max-w-3xl mx-auto">
        <div className="flex items-center justify-center my-7">
          <div>
            <h2
              data-aos="zoom-in"
              className="text-2xl md:text-3xl font-extrabold text-sbbsBlue text-center"
            >
              Les avantages de la communauté
            </h2>
            <p data-aos="zoom-in" className="mt-2 text-center text-gray-600">
              Un écosystème complet pour votre croissance continue
            </p>
          </div>
        </div>
        {/* Les avantages de la communauté */}

        <div className="mt-10 w-full grid grid-cols-1 gap-7 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
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
              Agenda des événements
            </h2>
            <p data-aos="zoom-in" className="mt-2 text-gray-600">
              Ne manquez aucune opportunité de croissance et de networking
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-10">
          {filteredEvents.map((event) => (
            <div
              data-aos="zoom-in"
              key={event.id}
              className="bg-white rounded-xl shadow-md overflow-hidden"
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
                <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
                  <span className="text-nowrap flex items-center">
                    {" "}
                    <MapPin className="w-4 h-4" />{" "}
                    <span className="text-xs font-bold">{event.location}</span>
                  </span>
                  <span className="text-nowrap flex items-center">
                    <Clock9 className="w-4 h-4" />
                    <span className="text-xs font-bold">{event.time}</span>
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  {event.description}
                </p>

                {/* Buttons */}
                <div className="flex" onClick={openInscriptionModal}>
                  <button className="flex-1 bg-sbbsYellow text-black  px-3 py-2 rounded-lg hover:bg-yellow-500 transition font-bold">
                    S’inscrire
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Rejoignez l'élite entrepreneuriale */}
      <div className="w-full bg-sbbsWhite pb-10">
        <div className="flex items-center justify-center w-full h-fit ">
          <div className="text-center max-w-3xl py-7">
            <h1
              data-aos="zoom-in"
              className="pt-10 text-center text-sbbsBlue font-extrabold leading-snug text-2xl sm:text-3xl md:text-4xl"
            >
              Decouvrez l'élite entrepreneuriale
            </h1>

            <div className="max-w-xl mx-auto">
              <p
                data-aos="zoom-in"
                className="mt-3 text-gray-600 text-xs sm:text-sm md:text-base"
              >
                Faites partie d'un réseau exclusif qui propulse votre succès
              </p>
            </div>
          </div>
        </div>

        {/* Teams SECTIONS */}

        <div className="w-10/12 max-w-3xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-5">
            {communityTeam.map((member) => (
              <div
                data-aos="zoom-in"
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

              <div className="form-control relative w-full max-w-full mb-4 ">
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
              onClick={inscription}
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
