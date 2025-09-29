import homeBg from "../../Asset/Images/Bg.png";
import structuration from "../../Asset/Icons/Structuration.png";
import Performance from "../../Asset/Icons/Performance.png";
import Croissance from "../../Asset/Icons/Croissance.png";
import Gillemet from "../../Asset/Icons/Guillemet.png";
import partner1 from "../../Asset/Images/Patner1.jpeg";
import partner2 from "../../Asset/Images/Patner2.jpeg";
import partner3 from "../../Asset/Images/Patner3.jpeg";

import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
// import { RotatingLines } from "react-loader-spinner";
import ButtonLoader from "../../Components/ButtonLoader/ButtonLoader";

export default function Home() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  // const [IsLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  /**
   * Open modal for dianostic request
   */

  const openDiasnosticModal = (): void => {
    (
      document.getElementById("dianosticModal") as HTMLDialogElement
    ).showModal();
    console.log("fonction works...");
  };

  /**
   *
   */

  const handleMakeResquest = (): void => {
    setIsLoading(true);
    setTimeout(() => {
      toast.success("Merci , votre demande a bien été enregistrer");
      (document.getElementById("dianosticModal") as HTMLDialogElement).close();
      setIsLoading(false);
    }, 1500);
  };

  return (
    <section className="w-full">
      {/* Homez bg - fixed  */}
      <img
        src={homeBg}
        alt="home-bg"
        className="pb-20 absolute sbbs-bg inset-0 h-[450px] md:h-500px w-full object-cover"
      />

      {/* A simplez overlay  */}
      <div className="absolute inset-0 bg-sbbsBlue/95" aria-hidden="true" />

      {/* Content above  */}
      <div className="relative z-10 h-full w-full flex items-center justify-center px-4">
        <div className="text-center max-w-3xl pt-20 md:pt-20">
          <h1
            data-aos="zoom-in"
            className="pt-10 text-white font-extrabold leading-snug text-2xl sm:text-3xl md:text-4xl"
          >
            De la survie à la maîtrise, transformez <br />
            votre entreprise en machine de croissance
          </h1>

          <p
            data-aos="zoom-in"
            className="mt-4 text-gray-200 text-xs sm:text-sm md:text-base"
          >
            SBBS Consulting accompagne les TPE et PME africaines vers
            l'excellence opérationnelle, la performance durable et l'autonomie
            stratégique.
          </p>

          <div className="mt-6" onClick={openDiasnosticModal}>
            <button
              data-aos="fade-up"
              className="bg-sbbsYellow text-black font-bold text-sm md:text-base w-fit h-12 rounded-full shadow-md hover:opacity-90 transition px-4"
            >
              Demander un diagnostic gratuit
            </button>
          </div>
        </div>
      </div>

      {/* CONTAINER */}
      <div className="w-10/12 max-w-7xl mx-auto pt-20 md:pt-32">
        {/* Our three piliars */}
        <div className="flex items-center justify-center my-7">
          <div>
            <h2
              data-aos="fade-up"
              className="text-2xl md:text-3xl font-extrabold text-sbbsBlue text-center"
            >
              Nos 3 piliers fondamentaux
            </h2>
            <p data-aos="fade-up" className="mt-2 text-gray-600">
              Une approche complète pour transformer votre entreprise
            </p>
          </div>
        </div>

        {/* Cartes pilieres */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {/* 1. Structuration */}
          <div
            data-aos="fade-up"
            className="bg-white rounded-xl shadow-md py-4 text-center"
          >
            <div className="flex items-center justify-center w-16 h-16 mx-auto rounded-full bg-sbbsYellow mb-4">
              <img src={structuration} alt="" className="w-7 h-7" />
            </div>
            <h3 className="text-lg font-bold text-sbbsBlue">Structuration</h3>
            <p className="mt-2 text-gray-600 text-sm">
              Mise en place de processus solides,
              <br /> d’outils de gestion efficaces et d’une organisation claire
              pour bâtir des fondations durables.
            </p>
          </div>

          {/* 2. Performance */}
          <div
            data-aos="fade-up"
            className="bg-white rounded-xl shadow-md p-6 text-center"
          >
            <div className="flex items-center justify-center w-16 h-16 mx-auto rounded-full bg-sbbsYellow mb-4">
              <img src={Performance} alt="" className="w-7 h-7" />
            </div>
            <h3 className="text-lg font-bold text-sbbsBlue">Performance</h3>
            <p className="mt-2 text-gray-600 text-sm">
              Optimisation des opérations, amélioration de la productivité et
              maîtrise des résultats financiers pour maximiser vos résultats.
            </p>
          </div>

          {/* 3. Croissance */}
          <div
            data-aos="fade-up"
            className="bg-white rounded-xl shadow-md p-6 text-center"
          >
            <div className="flex items-center justify-center w-16 h-16 mx-auto rounded-full bg-sbbsYellow mb-4">
              <img src={Croissance} alt="" className="w-7 h-7" />
            </div>
            <h3 className="text-lg font-bold text-sbbsBlue">Croissance</h3>
            <p className="mt-2 text-gray-600 text-sm">
              Développement commercial, expansion stratégique et accès à de
              nouveaux marchés pour élever votre entreprise vers de nouveaux
              sommets.
            </p>
          </div>
        </div>
      </div>

      {/* Section temoigange */}

      <div className="bg-sbbsWhite py-7 mt-7">
        <div className="w-10/12 max-w-7xl mx-auto">
          <div className="flex items-center justify-center my-7 ">
            <div data-aos="fade-up">
              <h2 className="text-2xl md:text-3xl font-extrabold text-sbbsBlue text-center">
                Ce que nos clients disent de nous
              </h2>
              <p className="mt-2 text-gray-600 text-center">
                Découvrez les succès de nos clients
              </p>
            </div>
          </div>

          {/* Témoignages */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((elemetn) => (
              <div
                key={elemetn}
                className="bg-sbbsBelge relative rounded-lg shadow-md p-2 text-left flex flex-col gap-4"
              >
                <div className="relative text-gray-900 text-sm">
                  <div
                    data-aos="zoom-in"
                    data-duration-aos="3000"
                    className="font-bold text-sbbsBlue relative"
                  >
                    <img src={Gillemet} alt="" className="w-4 h-4 absolute" />
                    <span className="ml-5"> SBBS Consulting</span>
                  </div>{" "}
                  <p data-aos="zoom-in" className="text-black">
                    a complètement transformé notre organisation. En très peu de
                    temps, nous avons doublé notre chiffre d’affaires et
                    renforcé nos processus.
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-sbbsBlue text-white flex items-center justify-center font-bold">
                    KD
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">
                      Kouadio Diallo
                    </p>
                    <p className="text-xs text-gray-500">PDG, Techwave CI</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* NOs partenaires */}

      <div className=" w-10/12 max-w-7xl mx-auto">
        <div className="flex items-center justify-center my-7">
          <div>
            <h2
              data-aos="fade-up"
              className="text-2xl md:text-3xl font-extrabold text-sbbsBlue text-center"
            >
              Nos partenaires et nos récompenses
            </h2>
          </div>
        </div>

        <div className="mt-10 pb-7 gap-5 mx-auto flex items-center overflow-hidden">
          <div className="flex gap-4 animate-marquee">
            <img
              src={partner1}
              alt=""
              className="md:w-32 rounded-full w-32 h-auto"
            />
            <img
              src={partner2}
              alt=""
              className="md:w-32 rounded-full w-32 h-auto"
            />
            <img
              src={partner3}
              alt=""
              className="md:w-32 rounded-full w-32 h-auto"
            />
            <img
              src={partner1}
              alt=""
              className="md:w-32 rounded-full w-32 h-auto"
            />
            <img
              src={partner2}
              alt=""
              className="md:w-32 rounded-full w-32 h-auto"
            />
          </div>
        </div>
      </div>

      <div className="bg-sbbsBlue flex items-center justify-center w-full h-fit ">
        <div className="text-center max-w-3xl py-7">
          <h1
            data-aos="zoom-in"
            className="pt-10 text-center text-white font-extrabold leading-snug text-2xl sm:text-3xl md:text-4xl"
          >
            Prêt à transformer votre <br /> entreprise ?
          </h1>

          <p
            data-aos="zoom-in"
            className="mt-4 text-gray-200 text-xs sm:text-sm md:text-base"
          >
            Rejoignez les centaines d'entrepreneurs qui ont fait le choix de
            l'excellence
          </p>

          <div
            data-aos="zoom-in"
            className="mt-5"
            onClick={openDiasnosticModal}
          >
            <button className="bg-sbbsYellow text-black font-bold text-sm md:text-base w-fit h-12 rounded-full shadow-md hover:opacity-90 transition px-4">
              Commencez votre diagnostic gratuit
            </button>
          </div>
        </div>
      </div>

      {/* Modal section */}
      <dialog id="dianosticModal" className="modal rounded-lg">
        <div className="modal-box p-3">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          {/* TITLES ACTIONS  */}
          <div className="my-4">
            <h1 className="text-lg font-extrabold leading-3 ">
              Demander un diasnoctic
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
                    className={`input relative input-bordered text-xs w-full h-8md:h-10 max-w-full rounded-md`}
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
                    className={`input relative input-bordered text-xs w-full h-8md:h-10 max-w-full rounded-md `}
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
                  className={`input relative input-bordered text-xs w-full h-8md:h-10 max-w-full rounded-md`}
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
                    className={`input relative input-bordered text-xs w-full h-8md:h-10 max-w-full rounded-md`}
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
                    className={`input relative input-bordered text-xs w-full h-8md:h-10 max-w-full rounded-md`}
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
              onClick={handleMakeResquest}
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
