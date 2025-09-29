import { Mail, MapPin, MessageCircleMore, Phone } from "lucide-react";
import { SBBSMap } from "../../Components/Maps/SBBSMap";

export default function Contact() {
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
              Parlons de Votre Projet
            </h1>

            <div className="max-w-lg mx-auto mt-7">
              <p
                data-aos="zoom-in"
                className="mt-4 text-gray-200 text-xs sm:text-sm md:text-base"
              >
                Notre équipe est à votre écoute pour transformer votre
                entreprise. Contactez-nous pour un diagnostic gratuit et
                personnalisé.
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
                Demandez votre diagnostic gratuit
              </h1>
              <p className="text-sbbsGrayLight">
                Remplissez le formulaire ci-dessous et un consultant <br />
                vous contactera sous 24h
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
                        Nom complet <span className="text-sbbsRed">*</span>
                      </span>
                    </div>
                    <div className="w-full">
                      <input
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
                        Entreprise <span className="text-sbbsRed">*</span>
                      </span>
                    </div>
                    <div className="w-full">
                      <input
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
                        Téléphone <span className="text-sbbsRed">*</span>
                      </span>
                    </div>
                    <div className="w-full">
                      <input
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
                        Secteur d'activité{" "}
                        <span className="text-sbbsRed">*</span>
                      </span>
                    </div>
                    <div className="w-full">
                      <input
                        type="text"
                        placeholder="Informatique"
                        className="input bg-gray-200 input-bordered w-full max-w-full rounded-lg"
                      />
                    </div>
                  </label>
                </div>
              </div>
              {/* Type de demande */}

              <div className="flex flex-col">
                <div className="my-2">
                  <span className="label-text text-gray-800 font-semibold text-sm">
                    Type de demande <span className="text-sbbsRed">*</span>
                  </span>
                </div>
                {/* Diagnostic gratuit */}
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <input
                      type="radio"
                      name="radio-10"
                      className="radio checked:bg-sbbsYellow"
                    />
                    <span className="label-text text-gray-950 font-semibold text-sm">
                      Diagnostic gratuit
                    </span>
                  </label>
                </div>
                {/* Demande de devis */}
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <input
                      type="radio"
                      name="radio-10"
                      className="radio checked:bg-sbbsYellow"
                    />
                    <span className="label-text text-gray-950 font-semibold text-sm">
                      Demande de devis
                    </span>
                  </label>
                </div>
                {/* Information générale */}
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <input
                      type="radio"
                      name="radio-10"
                      className="radio checked:bg-sbbsYellow"
                    />
                    <span className="label-text text-gray-950 font-semibold text-sm">
                      Information générale
                    </span>
                  </label>
                </div>
                {/* Partenariat */}
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <input
                      type="radio"
                      name="radio-10"
                      className="radio checked:bg-sbbsYellow"
                    />
                    <span className="label-text text-gray-950 font-semibold text-sm">
                      Partenariat
                    </span>
                  </label>
                </div>
              </div>

              <div className="w-full">
                <label className="form-control">
                  <div className="label">
                    <span className="label-text text-gray-800 font-semibold text-sm">
                      Votre message <span className="text-sbbsRed">*</span>
                    </span>
                  </div>
                  <div>
                    <textarea
                      className="textarea textarea-bordered w-full h-24 bg-gray-200"
                      placeholder="Je voudrais ..."
                    ></textarea>
                  </div>
                </label>
              </div>
            </div>

            <div className="my-5">
              <button className="bg-sbbsBlue text-sbbsWhite text-sm md:text-base w-full h-10 rounded-full shadow-md hover:opacity-90 transition px-4 font-bold">
                Valider ma requête
              </button>
            </div>
          </div>
          {/* Deux blocs a droite */}
          <div>
            <div className="border border-gray-200 bg-white mb-5 p-3 w-fit h-fit rounded-xl">
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center bg-sbbsYellow text-black rounded-full h-14 w-14">
                  <Phone />
                </div>
                <h1 className="text-xl font-extrabold text-gray-900">
                  Contactez-nous directement
                </h1>
              </div>

              <div className="flex flex-col  gap-3">
                <div className="flex items-center gap-2 mt-5">
                  <Phone />
                  <p>
                    <span className="font-bold"> Téléphone:</span>{" "}
                    <span>+225 07 00 00 00 00</span>
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <Mail />
                  <p>
                    <span className="font-bold"> Email:</span>{" "}
                    <span>sbbs@gmail.com</span>
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <MessageCircleMore />
                  <p>
                    <span className="font-bold"> Whatsapp:</span>{" "}
                    <span>+225 07 00 00 00 00</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="border border-gray-200 bg-white p-3 w-fit h-fit rounded-xl">
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center bg-sbbsYellow text-black rounded-full h-14 w-14">
                  <MapPin />
                </div>
                <h1 className="text-xl font-extrabold text-gray-900">
                  Bureaux <br /> régionaux
                </h1>
              </div>

              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2 mt-5">
                  <MapPin />
                  <p>
                    <span className="font-bold"> Adresse:</span>
                    <span>Abidjan, Cocody- Carrefour Affi</span>
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
