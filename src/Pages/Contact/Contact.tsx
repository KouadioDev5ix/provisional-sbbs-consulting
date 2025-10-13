import { Mail, MapPin, MessageCircleMore, Phone } from "lucide-react";
import { SBBSMap } from "../../Components/Maps/SBBSMap";
import { useState } from "react";
import { API_constactRequest } from "../../Services/contact.service/Contact.service";
import toast from "react-hot-toast";
import type { IContact } from "../../types/contact";
import ButtonLoader from "../../Components/ButtonLoader/ButtonLoader";
import { useTranslation } from "react-i18next";

export default function Contact() {
  const { t } = useTranslation();
  const [actionRequestLoader, setActionRequestLoader] =
    useState<boolean>(false);

  const [formInputValue, setFormInputValue] = useState<IContact>({
    fullName: "",
    compagnieName: "",
    phone: "",
    sectorOfactivity: "",
    typeOfRequestd: "",
    message: "",
  });

  /**
   *
   * @param e
   */

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormInputValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  /**
   *
   */
  const clearFormAfterRequest = (): void => {
    setFormInputValue({
      fullName: "",
      compagnieName: "",
      phone: "",
      sectorOfactivity: "",
      typeOfRequestd: "",
      message: "",
    });
  };

  /**
   *
   * @returns
   */
  const handleContactRequest = () => {
    setActionRequestLoader(true);
    const inputFieldiSEmpty = Object.values(formInputValue).some(
      (valure) => valure.trim() === ""
    );
    if (inputFieldiSEmpty) {
      setActionRequestLoader(false);
      toast.error("Veuillez renseigner tous les champs svp !");
      return;
    }

    API_constactRequest(formInputValue)
      .then((response) => {
        clearFormAfterRequest();
        setActionRequestLoader(false);
        toast.success(response.data.message);
      })
      .catch((error) => {
        setActionRequestLoader(false);
        if (error.message.data) {
          toast.error(error.response.data.message);
        } else {
          toast.error("Une erreur s'est produite");
        }
        console.error("error while creating user", error);
      });
  };

  // const []
  return (
    <section className="w-full">
      <div className="absolute bg-sbbsBlue h-[400px] md:h-[500px] w-full"></div>
      {/* content aove */}
      {/* Parlons de Votre Projet */}
      <div className="relative z-10 w-10/12 max-w-7xl mx-auto">
        <div className="flex items-center justify-center px-4">
          <div className="text-center max-w-3xl pt-20 md:pt-32">
            <h1
              data-aos="zoom-in"
              className="pt-20 text-white font-extrabold leading-snug text-2xl sm:text-3xl md:text-4xl"
            >
              {t("contact.hero.title")}
            </h1>

            <div className="max-w-lg mx-auto mt-7">
              <p
                data-aos="zoom-in"
                className="mt-4 text-gray-200 text-xs sm:text-sm md:text-base"
              >
                {t("contact.hero.subtitle")}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* INPUTS SECTIONS */}

      <div className="pt-44 md:pt-52 max-w-7xl w-10/12 mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
          <div className="bg-sbbsWhite w-fit h-fit border border-gray-200 shadow-md rounded-xl p-4">
            <div>
              <h1 className="text-xl font-extrabold text-sbbsBlue">
                {t("contact.form.title")}
              </h1>
              <p className="text-sbbsGrayLight">
                {t("contact.form.subtitle")}{" "}
              </p>
            </div>
            {/* INPUT SECTIONS */}
            <div className="pt-5 w-full ">
              <div className="flex items-start gap-5">
                {/* Nom complet */}
                <div className="w-full">
                  <label className="form-control w-full max-w-full">
                    <div className="label">
                      <span className="label-text text-gray-800 font-semibold text-sm">
                        {t("contact.form.fields.fullName.label")}
                        <span className="text-sbbsRed">*</span>
                      </span>
                    </div>
                    <div className="w-full">
                      <input
                        value={formInputValue.fullName}
                        onChange={handleChange}
                        name="fullName"
                        type="text"
                        placeholder="Kouadio Kouadio Alfred"
                        className="input bg-gray-200 input-bordered w-full max-w-full rounded-lg"
                      />
                    </div>
                  </label>
                </div>

                {/*Entreprise */}
                <div className="w-full">
                  <label className="form-control w-full max-w-full">
                    <div className="label">
                      <span className="label-text text-gray-800 font-semibold text-sm">
                        {t("contact.form.fields.company.label")}{" "}
                        <span className="text-sbbsRed">*</span>
                      </span>
                    </div>
                    <div className="w-full">
                      <input
                        value={formInputValue.compagnieName}
                        onChange={handleChange}
                        name="compagnieName"
                        type="text"
                        placeholder="Youra Entreprise.inCx"
                        className="input bg-gray-200 input-bordered w-full max-w-full rounded-lg"
                      />
                    </div>
                  </label>
                </div>
              </div>
              <div className="flex items-start gap-5 py-5">
                {/*Entreprise */}
                <div className="w-full">
                  <label className="form-control w-full max-w-full">
                    <div className="label">
                      <span className="label-text text-gray-800 font-semibold text-sm">
                        {t("contact.form.fields.phone.label")}

                        <span className="text-sbbsRed">*</span>
                      </span>
                    </div>
                    <div className="w-full">
                      <input
                        name="phone"
                        value={formInputValue.phone}
                        onChange={handleChange}
                        type="text"
                        placeholder="07 4444456"
                        className="input bg-gray-200 input-bordered w-full max-w-full rounded-lg"
                      />
                    </div>
                  </label>
                </div>
              </div>

              <div className="flex items-start flex-wrap w-full gap-5">
                {/*  Secteur d'activité*/}
                <div className="w-full">
                  <label className="form-control w-full max-w-full">
                    <div className="label">
                      <span className="label-text text-gray-800 font-semibold text-sm">
                        {t("contact.form.fields.sector.label")}
                        <span className="text-sbbsRed">*</span>
                      </span>
                    </div>
                    <div className="w-full">
                      <input
                        value={formInputValue.sectorOfactivity}
                        onChange={handleChange}
                        name="sectorOfactivity"
                        type="text"
                        placeholder="Informatique"
                        className="input bg-gray-200 input-bordered w-full max-w-full rounded-lg"
                      />
                    </div>
                  </label>
                </div>
              </div>
              {/* Type de demande */}
              {/* radios */}
              <div className="flex flex-col">
                <div className="my-2">
                  <span className="label-text text-gray-800 font-semibold text-sm">
                    {t("contact.form.fields.typeOfRequest.label")}
                    <span className="text-sbbsRed">*</span>
                  </span>
                </div>
                {/* Diagnostic gratuit */}
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <input
                      name="typeOfRequestd"
                      value="Diagnostic gratuit"
                      checked={
                        formInputValue.typeOfRequestd === "Diagnostic gratuit"
                      }
                      onChange={handleChange}
                      type="radio"
                      className="radio checked:bg-sbbsYellow"
                    />
                    <span className="label-text text-gray-950 font-semibold text-sm">
                      {t(
                        "contact.form.fields.typeOfRequest.options.diagnostic"
                      )}
                    </span>
                  </label>
                </div>
                {/* Demande de devis */}
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <input
                      name="typeOfRequestd"
                      value="Demande de devis"
                      checked={
                        formInputValue.typeOfRequestd === "Demande de devis"
                      }
                      onChange={handleChange}
                      type="radio"
                      className="radio checked:bg-sbbsYellow"
                    />
                    <span className="label-text text-gray-950 font-semibold text-sm">
                      {t("contact.form.fields.typeOfRequest.options.quote")}
                    </span>
                  </label>
                </div>
                {/* Information générale */}
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <input
                      name="typeOfRequestd"
                      value="Information générale"
                      checked={
                        formInputValue.typeOfRequestd === "Information générale"
                      }
                      onChange={handleChange}
                      type="radio"
                      className="radio checked:bg-sbbsYellow"
                    />
                    <span className="label-text text-gray-950 font-semibold text-sm">
                      {t("contact.form.fields.typeOfRequest.options.info")}
                    </span>
                  </label>
                </div>
                {/* Partenariat */}
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <input
                      name="typeOfRequestd"
                      value="Partenariat"
                      checked={formInputValue.typeOfRequestd === "Partenariat"}
                      onChange={handleChange}
                      type="radio"
                      className="radio checked:bg-sbbsYellow"
                    />
                    <span className="label-text text-gray-950 font-semibold text-sm">
                      {t(
                        "contact.form.fields.typeOfRequest.options.partnership"
                      )}
                    </span>
                  </label>
                </div>
              </div>

              <div className="w-full">
                <label className="form-control">
                  <div className="label">
                    <span className="label-text text-gray-800 font-semibold text-sm">
                      {t("contact.form.fields.message.label")}
                      <span className="text-sbbsRed">*</span>
                    </span>
                  </div>
                  <div>
                    <textarea
                      name="message"
                      value={formInputValue.message}
                      onChange={handleChange}
                      className="textarea textarea-bordered w-full h-24 bg-gray-200"
                      placeholder="Je voudrais ..."
                    ></textarea>
                  </div>
                </label>
              </div>
            </div>

            <div className="my-5">
              <button
                className="bg-sbbsBlue flex items-center justify-center text-sbbsWhite text-sm md:text-base w-full h-10 rounded-full shadow-md hover:opacity-90 transition px-4 font-bold"
                onClick={handleContactRequest}
              >
                {actionRequestLoader ? (
                  <ButtonLoader />
                ) : (
                  <span>{t("contact.form.submit")}</span>
                )}
              </button>
            </div>
          </div>
          {/* Deux blocs a droite */}
          <div>
            <div className="border border-gray-200 bg-white mb-5 p-3 w-[400px] h-fit rounded-xl">
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center bg-sbbsYellow text-black rounded-full h-14 w-14">
                  <Phone />
                </div>
                <h1 className="text-xl font-extrabold text-gray-900">
                  {t("contact.contactInfo.title")}
                </h1>
              </div>

              <div className="flex flex-col  gap-3">
                <div className="flex items-center gap-2 mt-5">
                  <Phone />
                  <p>
                    <span className="font-bold">
                      {t("contact.contactInfo.phone")}:
                    </span>{" "}
                    <span>+225 07 00 00 00 00</span>
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <Mail />
                  <p>
                    <span className="font-bold">
                      {t("contact.contactInfo.email")}:
                    </span>{" "}
                    <span>sbbs@gmail.com</span>
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <MessageCircleMore />
                  <p>
                    <span className="font-bold">
                      {" "}
                      {t("contact.contactInfo.whatsapp")}:
                    </span>{" "}
                    <span>+225 07 00 00 00 00</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="border border-gray-200 bg-white p-3 w-[400px] h-fit rounded-xl">
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center bg-sbbsYellow text-black rounded-full h-14 w-14">
                  <MapPin />
                </div>
                <h1 className="text-xl font-extrabold text-gray-900">
                  {t("contact.regionalOffice.title")}
                </h1>
              </div>

              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2 mt-5">
                  <MapPin />
                  <p>
                    <span className="font-bold">
                      {" "}
                      {t("contact.regionalOffice.addressLabel")}:
                    </span>
                    <span>{t("contact.regionalOffice.address")}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <SBBSMap />
      </div>
    </section>
  );
}
