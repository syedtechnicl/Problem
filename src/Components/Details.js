import React, { useEffect, useState } from "react";
import ReactStars from "react-stars";
import { useParams } from "react-router-dom";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../Firebase/firebase";
import { LineWave } from "react-loader-spinner";
import Reviews from "./Reviews";

const Details = () => {
  const { id } = useParams();
  const [data, setdatat] = useState({
    title: "",
    year: "",
    image: "",
    description: "",
    rating: 0,
  });

  const [loading, setloading] = useState(false);
  useEffect(() => {
    setloading(true);
    const mainfunc = async () => {
      const _doc = await doc(db, "movies", id);
      const _data = await getDoc(_doc);
      setdatat(_data.data());
      setloading(false);
    };
    mainfunc();
  }, []);

  console.log(data);

  return (
    <>
      {loading ? (
        <LineWave
          height="700"
          width="100"
          color="white"
          wrapperStyle={{ justifyContent: "center", fontSize: "22px" }}
          wrapperClass=""
          visible={true}
          ariaLabel="three-circles-rotating"
          outerCircleColor="orange"
          innerCircleColor="white"
          middleCircleColor="green"
        />
      ) : (
        <div className="p-4 mt-4 flex w-full justify-center">
          <img
            className="h-96 block md:sticky top-24"
            src={data && data.image}
            alt=""
          />
          <div className="ml-4 w-1/2">
            <h1 className="text-3xl font-bold text-gray-400">
              Title : {data && data.title}
              <span className="text-xl">Year :{data && data.year}</span>
            </h1>
            <ReactStars size={20} half={true} value={4.5} edit={false} />
            <p className="mt-3">{data && data.des}</p>
            <Reviews id={id} prevesRating={data.rating} userated={data.rated} />
          </div>
        </div>
      )}
    </>
  );
};

export default Details;
