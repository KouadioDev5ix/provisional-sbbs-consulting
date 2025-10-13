import type { IBlog } from "../../Models/Interfaces/Blog/blog";
import image from "../../Asset/Images/517724952_1077928814489345_488813582903415815_n-1024x683.jpg";
import testymonyVideo from "../../Asset/Videos/Présentation de l'école des affaires LA SOLOMON BETSALEEL BUSINESS SCHOOL SBBS.mp4";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Blog() {
  const { t } = useTranslation();
  const blogData: IBlog[] = [
    {
      id: 1,
      image: image,
      tilte: t("blog.articles.card1.tiltle"),
      date: t("blog.articles.card1.date"),
      description: t("blog.articles.card1.description"),
    },
    {
      id: 2,
      image: image,
      tilte: t("blog.articles.card1.tiltle"),
      date: t("blog.articles.card1.date"),
      description: t("blog.articles.card1.description"),
    },
    {
      id: 3,
      image: image,
      tilte: t("blog.articles.card1.tiltle"),
      date: t("blog.articles.card1.date"),
      description: t("blog.articles.card1.description"),
    },
    {
      id: 4,
      image: image,
      tilte: t("blog.articles.card1.tiltle"),
      date: t("blog.articles.card1.date"),
      description: t("blog.articles.card1.description"),
    },
  ];

  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <section className="w-full">
      <div className="absolute bg-sbbsBlue h-[400px] md:h-[500px] w-full"></div>

      {/* content aove */}
      {/* Blog & Ressources */}
      <div className="relative z-10 w-10/12 max-w-7xl mx-auto">
        <div className="flex items-center justify-center px-4">
          <div className="text-center max-w-3xl pt-20 md:pt-32">
            <h1
              data-aos="zoom-in"
              className="pt-20 text-white font-extrabold leading-snug text-2xl sm:text-3xl md:text-4xl"
            >
              {t("blog.hero.title")}
            </h1>

            <div className="max-w-2xl mx-auto mt-7">
              <p
                data-aos="zoom-in"
                className="mt-4 text-gray-200 text-xs sm:text-sm md:text-base"
              >
                {t("blog.hero.shortText")}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-32 md:pt-44  max-w-7xl w-10/12 mx-auto">
        <h1 className="text-2xl font-extrabold text-sbbsBlue">
          {t("blog.hero.Article.title")}
        </h1>

        {/* CONTENT */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {blogData.map((blog, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden cursor-pointer"
            >
              {/* Image Placeholder */}

              <Link to={`/blog/${blog.id}`} key={blog.id} state={{ blog }}>
                <div className="w-full h-56 rounded-lg  p-2">
                  <img
                    src={blog.image}
                    alt=""
                    className="w-full h-56 object-cover rounded-lg "
                  />
                </div>
              </Link>
              <div className="p-2">
                <h3 className="font-bold pt-4">{blog.date}</h3>
                <p className="text-sbbsBlue text-sm font-bold mb-2">
                  {blog.tilte}
                </p>
                <p className="text-gray-600 text-sm truncate">
                  {blog.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="my-10 max-w-7xl w-10/12 mx-auto">
        <hr />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          <div
            data-aos="zoom-in"
            className="w-72 md:w-full  h-44 cursor-pointer"
          >
            <video width="640" controls className=" rounded-md shadow-sm">
              <source src={testymonyVideo} type="video/mp4" />
            </video>

            <div>
              <span className="text-gray-500 font-normal">
                {t("blog.video.title")}
              </span>
            </div>
          </div>

          <div
            data-aos="zoom-in"
            className="w-72 md:w-full  h-44 cursor-pointer"
          >
            <video width="640" controls className=" rounded-md shadow-sm">
              <source src={testymonyVideo} type="video/mp4" />
            </video>

            <div>
              <span className="text-gray-500 font-normal">
                {t("blog.video.title")}
              </span>
            </div>
          </div>

          <div
            data-aos="zoom-in"
            className="w-72  md:w-full  h-44 cursor-pointer"
          >
            <video width="640" controls className=" rounded-md shadow-sm">
              <source src={testymonyVideo} type="video/mp4" />
            </video>

            <div>
              <span className="text-gray-500 font-normal">
                {t("blog.video.title")}
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* PAGINATIONS */}
      {/* <div className="flex justify-center my-7">
        <Pagination
          count={1}
          page={1}
          onChange={handlePageChange}
          variant="outlined"
          shape="rounded"
        />
      </div> */}
    </section>
  );
}
