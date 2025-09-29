import { ArrowUp } from "lucide-react";

export function ScrollToTop() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      /***
       * défilement fluidde
       */
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-5 right-5 p-3 bg-white rounded-full shadow-lg hover:bg-gray-100 transition"
    >
      <ArrowUp className="w-5 h-5 text-black" />
    </button>
  );
}
