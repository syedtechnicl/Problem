import React, { useEffect, useState } from "react";
import ReactStars from "react-stars";
import { ThreeCircles } from "react-loader-spinner";
import swal from "sweetalert";
import { getDocs } from "firebase/firestore";
import { moviesRef } from "../Firebase/firebase";
import { useParams } from "react-router-dom";
// prams
import { Link } from "react-router-dom";

const Cards = () => {
  const [loading, setloading] = useState(false);
  const [data, setdata] = useState([]);
  // prams
  const { id } = useParams();

  console.log(id);

  useEffect(() => {
    setloading(true);
    const MianDatass = async () => {
      const maindass = await getDocs(moviesRef);
      await maindass.forEach((doc) => {
        setdata((prv) => [...prv, { ...doc.data(), id: doc.id }]);
      });
      setloading(false);
    };
    MianDatass();
  }, []);

  return (
    <>
      {loading ? (
        <ThreeCircles
          height="700"
          width="100"
          color="green"
          wrapperStyle={{ justifyContent: "center" }}
          wrapperClass=""
          visible={true}
          ariaLabel="three-circles-rotating"
          outerCircleColor="orange"
          innerCircleColor="white"
          middleCircleColor="green"
        />
      ) : (
        data &&
        data.map((elm, ind) => {
          return (
            <>
              <Link to={`/details/${elm.id}`}>
                <div
                  className="flex flex-wrap justify-between p-3 mt-2"
                  key={ind}
                >
                  <div className="card font-meduim shadow-lg p-2">
                    <img className="h-72 img-fluid" src={elm.image} alt="" />
                    <h1>
                      <span className="text-gray-500">Name : </span>
                      {elm.title}
                    </h1>
                    <h1>
                      <span className="text-gray-500 flex flex-auto">
                        Rating :
                        <ReactStars
                          size={24}
                          half={true}
                          value={elm.Rating}
                          color2={"#ffd700"}
                        />
                      </span>
                    </h1>
                    <h1>
                      <span className="text-gray-500">Year : </span>
                      {elm.year}
                    </h1>
                  </div>
                </div>
              </Link>
            </>
          );
        })
      )}
    </>
  );
};
export default Cards;
