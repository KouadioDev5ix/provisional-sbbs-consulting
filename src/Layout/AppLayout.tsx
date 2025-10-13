import { useState } from "react";
import type { ILayoutComponent } from "../Models/Interfaces/layoout";
import { navBarElement } from "../Constant/NavBarData";
import sbbsLogo from "../Asset/Images/SBBS-logo.jpeg";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Drawer } from "@mui/material";
import switchLanguage from "../Asset/Images/TurnLanguage.png";
import toast from "react-hot-toast";
import ButtonLoader from "../Components/ButtonLoader/ButtonLoader";
import { ArrowUp } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function AppLayout({ children }: ILayoutComponent) {
  const { t, i18n } = useTranslation();

  const [openDrawer, setOpenDrawer] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [inputsValue, setInputValue] = useState<string>("");

  /**
   *
   */
  const toggleLanguage = () => {
    const newLang = i18n.language === "fr" ? "en" : "fr";
    i18n.changeLanguage(newLang);
    localStorage.setItem("i18nextLng", newLang);
  };

  /**
   * @function handleSubscribeToNewsLetter()
   */

  const handleSubscribeToNewsLetter = (): void => {
    setIsLoading(true);

    if (inputsValue.trim() === "") {
      setIsLoading(false);
    } else {
      setTimeout(() => {
        toast.success("Merci pour votre inscription !");
        setIsLoading(false);
        setInputValue("");
      }, 1000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="flex flex-col w-full bg-gray-50">
      {/* Header*/}
      <div className="w-full fixed top-0 z-50 drop-shadow-md bg-sbbsWhite mb-5">
        {/* Header Links */}

        <div className="w-11/12 max-w-7xl mx-auto flex items-center justify-between text-black px-4 h-20">
          <div className="cursor-pointer">
            <a href="/">
              <img src={sbbsLogo} alt="" className="w-44 h-14 " />
            </a>
          </div>

          <div className="flex items-center gap-5">
            {navBarElement.map((item, index) => (
              <NavLink
                key={index}
                to={item.linkTo}
                className={({ isActive }) =>
                  `relative cursor-pointer text-sm tracking-wide 
                   transition-colors duration-300
                   before:content-[''] before:absolute before:left-0 before:-bottom-1 
                   before:h-[3px] before:transition-all before:duration-300 md:block hidden
                 ${
                   isActive
                     ? "text-sbbsBlue before:w-full before:bg-sbbsYellow"
                     : "text-black hover:text-sbbsBlue before:w-0 hover:before:w-full before:bg-sbbsYellow"
                 }`
                }
              >
                {t(item.label)}
              </NavLink>
            ))}
          </div>

          <div>
            {/* <img src={switchLanguage} alt="" className="cursor-pointer" /> */}

            {/* Lang switch */}
            <img
              src={switchLanguage}
              alt="Change Language"
              onClick={toggleLanguage}
              className="cursor-pointer w-6 h-6 hover:scale-110 transition"
              title={
                i18n.language === "fr"
                  ? "Switch to English"
                  : "Passer en Français"
              }
            />
          </div>

          <div className="md:hidden block" onClick={() => setOpenDrawer(true)}>
            <Menu />
          </div>
        </div>
      </div>

      {/* OUTLET */}
      <div className="grow w-full">{children}</div>
      {/* FOOTER */}
      {/* <div className="bg-sbbsBlue w-full h-14  border-t shadow-xl border-sbbsFooterColor"></div> */}
      <div className="w-full h-full bg-sbbsFooterColor">
        <div className="w-10/12 max-w-5xl mx-auto pt-12">
          <div className="w-full grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-7 md:gap-16">
            <div className="space-y-3">
              <a
                data-aos="fade-up"
                aria-current="page"
                className="active"
                href="#/"
              >
                <img src={sbbsLogo} alt="" className="w-20" />
              </a>
              <div className="text-sm text-gray-100 font-normal">
                <p data-aos="fade-up" data-duration-aos="4000">
                  {t("footer.description")}
                </p>

                {/* <p data-aos="fade-up" data-duration-aos="8000">
                  et PME africaines vers l'excellence opérationnelle.{" "}
                  </p> */}
              </div>
            </div>

            <div className="md:px-5">
              <h2 className="text-lg text-sbbsYellow font-bold font-title">
                {t("footer.quickLinks.title")}
              </h2>
              <div className="mt-3 space-y-1 text-white">
                <p
                  data-aos="fade-up"
                  data-duration-aos="2000"
                  className="text-xs cursor-pointer hover:underline"
                >
                  {t("footer.quickLinks.links.offers")}
                </p>

                <p
                  data-aos="fade-up"
                  data-duration-aos="4000"
                  className="text-xs cursor-pointer hover:underline"
                >
                  {t("footer.quickLinks.links.methodologies")}
                </p>
                <p
                  data-aos="fade-up"
                  data-duration-aos="5000"
                  className="text-xs cursor-pointer hover:underline"
                >
                  {t("footer.quickLinks.links.certifications")}
                </p>
                <p
                  data-aos="fade-up"
                  data-duration-aos="6000"
                  className="text-xs cursor-pointer hover:underline"
                >
                  {t("footer.quickLinks.links.community")}
                </p>
                <p
                  data-aos="fade-up"
                  data-duration-aos="7000"
                  className="text-xs cursor-pointer hover:underline"
                >
                  {t("footer.quickLinks.links.contact")}
                </p>
                <p
                  data-aos="fade-up"
                  data-duration-aos="8000"
                  className="text-xs cursor-pointer hover:underline"
                >
                  {t("footer.quickLinks.links.about")}
                </p>
                <p
                  data-aos="fade-up"
                  data-duration-aos="9000"
                  className="text-xs cursor-pointer hover:underline"
                >
                  {t("footer.quickLinks.links.blog")}
                </p>
              </div>
            </div>

            <div className="md:px-5">
              <h2 className="text-lg text-sbbsYellow font-bold font-title">
                {t("footer.contact.title")}
              </h2>

              <div className="mt-3 space-y-1 text-white">
                <p
                  data-aos="fade-up"
                  data-duration-aos="4000"
                  className="text-xs cursor-pointer hover:underline"
                >
                  sbbs@gmail.com
                </p>
                <p
                  data-aos="fade-up"
                  data-duration-aos="7000"
                  className="text-xs cursor-pointer hover:underline"
                >
                  {" "}
                  +225 07 55555540
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-end mr-5 pb-5">
          {/* <ScrollToTop /> */}
          <button
            onClick={scrollToTop}
            className="bg-white p-4 rounded-full z-50 shadow-lg hover:bg-gray-100 transition"
          >
            <ArrowUp className="w-5 h-5 text-black" />
          </button>
        </div>

        {/* <div>
          <button>Scroller </button>
          </div> */}

        {/* <div className="flex items-center justify-end mr-5 pb-4">
          <p className="text-sm text-white font-bold  mr-2">Powered By</p>
          <img src={sbbsLogo} alt="" className="w-10 h-10 rounded-full" />
          </div> */}

        <div className="mr-5 mb-5 pt-10 relative flex items-center justify-end">
          <div className="absolute bottom-0">
            <div className="w-full">
              <h1 className="text-lg font-bold text-sbbsYellow">
                {t("footer.newsletter.title")}
              </h1>
              <div className="relative">
                <input
                  value={inputsValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  type="text"
                  placeholder="kouadio@gmail.com"
                  className="px-2 py-3 rounded-md w-80 text-sm text-gray-800 "
                />
                <span
                  className="bg-sbbsYellow rounded-md font-bold absolute cursor-pointer inset-y-0 right-0 px-2 w-24 flex items-center justify-center text-sm"
                  onClick={handleSubscribeToNewsLetter}
                >
                  {isLoading ? (
                    <span className="flex justify-center">
                      <ButtonLoader />
                    </span>
                  ) : (
                    <span>{t("footer.newsletter.button")}</span>
                  )}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className=" py-4 flex flex-wrap items-center justify-center border-t border-t-sbbsBlue gap-3">
          <p className="text-xs text-white font-medium font-pragraph">
            {t("footer.copyright")}
          </p>
        </div>
      </div>

      {/* DRAWER SECTIONS */}
      <Drawer
        open={openDrawer}
        anchor={"right"}
        onClose={() => setOpenDrawer(false)}
        PaperProps={{
          sx: {
            width: {
              xs: "100%",
              sm: 350,
            },
          },
        }}
      >
        <div className="">
          <div className=" flex items-center justify-between px-4 mt-2">
            <div className="cursor-pointer">
              <a href="/">
                <img src={sbbsLogo} alt="" className="w-44 h-14" />
              </a>
            </div>

            {/* Close drawer */}

            <div onClick={() => setOpenDrawer(false)}>
              <p>
                <X className="h-10 w-10" />
              </p>
            </div>
          </div>

          {/* CONTENT */}
          <hr className="my-2 border-t border-gray-300 w-full" />
          <div className="pt-5">
            <div className="flex flex-col items-center gap-y-7">
              {navBarElement.map((item, index) => (
                <NavLink
                  to={item.linkTo}
                  key={index}
                  className={({ isActive }) =>
                    `flex items-center gap-2 text-lg font-semibold ${
                      isActive ? "text-sbbsBlue" : "text-gray-900"
                    }`
                  }
                  onClick={() => setOpenDrawer(false)}
                >
                  {item.icon} {t(item.label)}
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      </Drawer>
    </div>
  );
}
