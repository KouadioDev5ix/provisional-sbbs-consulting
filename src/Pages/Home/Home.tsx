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
import type { IDianostic } from "../../types/dianostic";
import { API_dianosticRequest } from "../../Services/dianostic.service/dianostic.service";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation();

  const [formInputValue, setFormInputValue] = useState<IDianostic>({
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

    setRequestHasError(false);
  };

  const closeModal = (): void => {
    (document.getElementById("dianosticModal") as HTMLDialogElement).close();
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

  const handleContactRequest = () => {
    const inputFieldiSEmpty = Object.values(formInputValue).some(
      (valure) => valure.trim() === ""
    );
    // console.log("function wordks fine ");
    setActionRequestLoader(true);
    if (inputFieldiSEmpty) {
      setActionRequestLoader(false);
      setRequestHasError(true);
      setErrorMessage("Tous les champs sont réquis svp !");
      return;
    }
    API_dianosticRequest(formInputValue)
      .then((response) => {
        clearFormAfterRequest();
        setActionRequestLoader(false);
        (
          document.getElementById("dianosticModal") as HTMLDialogElement
        ).close();
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
            {t("home.hero.title")}
          </h1>

          <p
            data-aos="zoom-in"
            className="mt-4 text-gray-200 text-xs sm:text-sm md:text-base"
          >
            {t("home.hero.description")}
          </p>

          <div className="mt-6" onClick={openDiasnosticModal}>
            <button
              data-aos="fade-up"
              className="bg-sbbsYellow text-black font-bold text-sm md:text-base w-fit h-12 rounded-full shadow-md hover:opacity-90 transition px-4"
            >
              {t("home.hero.cta")}
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
              {t("home.pillars.title")}
            </h2>
            <p data-aos="fade-up" className="mt-2 text-gray-600">
              {t("home.pillars.subtitle")}
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
            <h3 className="text-lg font-bold text-sbbsBlue">
              {" "}
              {t("home.pillars.structuration.title")}
            </h3>
            <p className="mt-2 text-gray-600 text-sm">
              {t("home.pillars.structuration.text")}
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
            <h3 className="text-lg font-bold text-sbbsBlue">
              {" "}
              {t("home.pillars.performance.title")}
            </h3>
            <p className="mt-2 text-gray-600 text-sm">
              {t("home.pillars.performance.text")}
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
            <h3 className="text-lg font-bold text-sbbsBlue">
              {" "}
              {t("home.pillars.growth.title")}
            </h3>
            <p className="mt-2 text-gray-600 text-sm">
              {t("home.pillars.growth.text")}
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
                {t("home.testimonials.title")}
              </h2>
              <p className="mt-2 text-gray-600 text-center">
                {t("home.testimonials.subtitle")}
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
                    {t("home.testimonials.sample.quote")}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-sbbsBlue text-white flex items-center justify-center font-bold">
                    KD
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">
                      {t("home.testimonials.sample.author")}
                    </p>
                    <p className="text-xs text-gray-500">
                      {" "}
                      {t("home.testimonials.sample.position")}
                    </p>
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
              data-aos="zoom-in"
              className="text-2xl md:text-3xl font-extrabold text-sbbsBlue text-center"
            >
              {t("home.partners.title")}
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
            {t("home.ctaSection.title")}
          </h1>

          <p
            data-aos="zoom-in"
            className="mt-4 text-gray-200 text-xs sm:text-sm md:text-base"
          >
            {t("home.ctaSection.subtitle")}
          </p>

          <div
            data-aos="zoom-in"
            className="mt-5"
            onClick={openDiasnosticModal}
          >
            <button className="bg-sbbsYellow text-black font-bold text-sm md:text-base w-fit h-12 rounded-full shadow-md hover:opacity-90 transition px-4">
              {t("home.ctaSection.cta")}
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
              {t("home.modal.title")}
            </h1>
          </div>

          <div>
            {requestHasError && (
              <span className="text-red-600 text-sm">
                {t("home.modal.errors.allRequired")}
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
                    <span className="label-text font-medium -mb-1 ">
                      {t("home.modal.fields.lastName")}
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
                    className={`input relative input-bordered text-xs w-full h-8md:h-10 max-w-full rounded-md`}
                  />
                </div>
                <div className="form-control w-full relative max-w-full">
                  <label className="label mb-0">
                    <span className="label-text font-medium -mb-1 ">
                      {t("home.modal.fields.firstName")}
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
                    className={`input relative input-bordered text-xs w-full h-8md:h-10 max-w-full rounded-md `}
                  />
                </div>
              </div>

              <div className="form-control relative w-full max-w-full my-2">
                <label className="label mb-0">
                  <span className="label-text font-medium -mb-1 ">
                    {t("home.modal.fields.profession")}
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
                  className={`input relative input-bordered text-xs w-full h-8md:h-10 max-w-full rounded-md`}
                />
              </div>

              {/* PHONE AND EMAIL */}
              <div className="flex items-center gap-3">
                <div className="form-control relative w-full max-w-full">
                  <label className="label mb-0">
                    <span className="label-text font-medium -mb-1 ">
                      {t("home.modal.fields.number")}
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
                    className={`input relative input-bordered text-xs w-full h-8md:h-10 max-w-full rounded-md`}
                  />
                </div>
                <div className="form-control relative w-full max-w-full">
                  <label className="label mb-0">
                    <span className="label-text font-medium -mb-1 ">
                      {t("home.modal.fields.mail")}
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
                    className={`input relative input-bordered text-xs w-full h-8md:h-10 max-w-full rounded-md`}
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
              onClick={handleContactRequest}
            >
              {/* {isLoading ? } */}
              {actionRequestLoader ? (
                <span className="flex justify-center">
                  <ButtonLoader />
                </span>
              ) : (
                <span>{t("home.modal.buttons.submit")}</span>
              )}
            </button>

            <button
              className={`w-full h-10 bg-gray-200 rounded-md text-black`}
              onClick={closeModal}
            >
              {t("home.modal.buttons.cancel")}
            </button>
          </div>
        </div>
      </dialog>
    </section>
  );
}
