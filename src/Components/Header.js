import React, { useContext } from "react";
import AddIcon from "@mui/icons-material/Add";
// router links
import { Link } from "react-router-dom";
import Mycontext from "../Mycontext/Mycontext";

const Header = () => {
  const { login } = useContext(Mycontext);

  return (
    <>
      <div className="sticky z-10 header top-0 text-3xl flex justify-between items-center text-red-500 font-bold p-3 border-b-2 border-gray-500">
        <Link to={"/"}>
          {" "}
          <span>Filmrise</span>
        </Link>
        <Link to={"/addmovies"}>
          {" "}
          {login ? (
            <>
              {" "}
              <button>
                <AddIcon className="mr-1" color="secondary" />{" "}
                <span className="text-white">Add New</span>
              </button>
            </>
          ) : (
            <>
              <Link to={"/login"}>
                <button>
                  <span className="text-white">Login</span>
                </button>
              </Link>
            </>
          )}
        </Link>
      </div>
    </>
  );
};

export default Header;
