import React from "react";

export default function L() {
  return (
    <div>
      {/* MENU LIST ITEMS */}
      <div className="pt-7">
        <NavLink
          to={"/qui-sommes-nous"}
          className={({ isActive }) =>
            isActive ? "text-orange-500" : "text-black"
          }
          onClick={() => setOpenDrawer(false)}
        >
          <button className="py-2 h-14 flex items-center justify-center  text-black text-lg w-full font-semibold gap-x-1 ">
            <CircleHelp />
            Nos offres
          </button>
        </NavLink>
        <hr />
        {/* Méthodologie */}
        <NavLink
          to={"/devenir-patenaire"}
          className={({ isActive }) =>
            isActive ? "text-orange-500" : "text-black"
          }
          onClick={() => setOpenDrawer(false)}
        >
          <div className="py-2 h-14 flex items-center justify-center  text-black text-lg w-full font-semibold gap-x-1">
            <Handshake />
            Méthodologie
          </div>
        </NavLink>
        <hr />
        {/* Certifications */}
        <NavLink
          to={"/devenir-patenaire"}
          className={({ isActive }) =>
            isActive ? "text-orange-500" : "text-black"
          }
          onClick={() => setOpenDrawer(false)}
        >
          <div className="py-2 h-14 flex items-center justify-center  text-black text-lg w-full font-semibold gap-x-1">
            <Handshake />
            Certifications
          </div>
        </NavLink>
        <hr />
        {/* Communauté */}
        <NavLink
          to={"/devenir-patenaire"}
          className={({ isActive }) =>
            isActive ? "text-orange-500" : "text-black"
          }
          onClick={() => setOpenDrawer(false)}
        >
          <div className="py-2 h-14 flex items-center justify-center  text-black text-lg w-full font-semibold gap-x-1">
            <Handshake />
            Communauté
          </div>
        </NavLink>
        {/* Contact */}
        <hr />
        {/* Communauté */}
        <NavLink
          to={"/devenir-patenaire"}
          className={({ isActive }) =>
            isActive ? "text-orange-500" : "text-black"
          }
          onClick={() => setOpenDrawer(false)}
        >
          <div className="py-2 h-14 flex items-center justify-center  text-black text-lg w-full font-semibold gap-x-1">
            <Handshake />
            Contact
          </div>
        </NavLink>
        {/* A propos */}
        <NavLink
          to={"/devenir-patenaire"}
          className={({ isActive }) =>
            isActive ? "text-orange-500" : "text-black"
          }
          onClick={() => setOpenDrawer(false)}
        >
          <div className="py-2 h-14 flex items-center justify-center  text-black text-lg w-full font-semibold gap-x-1">
            <Handshake />A propos
          </div>
        </NavLink>
        {/* Blog */}
        <hr />
        <NavLink
          to={"/devenir-patenaire"}
          className={({ isActive }) =>
            isActive ? "text-orange-500" : "text-black"
          }
          onClick={() => setOpenDrawer(false)}
        >
          <div className="py-2 h-14 flex items-center justify-center  text-black text-lg w-full font-semibold gap-x-1">
            <Handshake />A propos
          </div>
        </NavLink>
      </div>
    </div>
  );
}
