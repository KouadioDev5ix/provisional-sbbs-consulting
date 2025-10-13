import { ChevronLeft } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

export default function BlogDetail() {
  const location = useLocation();
  const navigate = useNavigate();

  const blog = location.state?.blog;

  // console.log(blog);

  return (
    <div className="max-w-6xl mx-auto pt-36 pb-44">
      <div className="p-4">
        <div className="mb-5">
          <button
            onClick={() => navigate(-1)}
            className=" flex items-center  w-fit   text-white rounded-lg"
          >
            <ChevronLeft color="#020617" size={20} />{" "}
            <span className="text-gray-900 font-bold text-sm">
              Retour aux articles
            </span>
          </button>
        </div>
        <div className="">
          <img
            src={blog?.image}
            alt={blog?.tilte}
            className="w-full h-auro object-cover rounded-xl"
          />
        </div>
        <h1 className="text-2xl font-bold mt-4">{blog.tilte}</h1>
        <p className="text-gray-500 text-sm">{blog.date}</p>
        <p className="mt-4 text-gray-700">{blog.description}</p>
      </div>
    </div>
  );
}
