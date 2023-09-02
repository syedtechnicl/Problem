import React, { useEffect, useState } from "react";
import ReactStars from "react-stars";
import {
  addDoc,
  doc,
  getDocs,
  updateDoc,
  where,
  query,
} from "firebase/firestore";
import { reviewsRef, db } from "../Firebase/firebase";
import { ColorRing } from "react-loader-spinner";
import swal from "sweetalert";

const Reviews = ({ id, prevesRating, userated }) => {
  const [rating, setRating] = useState(0);
  const [loading, setloading] = useState(false);
  const [form, setform] = useState("");
  const [data, setdata] = useState([]);
  // console.log(rating);

  const SendReview = async () => {
    setloading(true);
    try {
      await addDoc(reviewsRef, {
        movieid: id,
        name: "syed",
        rating: rating,
        thought: form,
        // timestamp: new Date().getDate(),
        timestamp: new Date().getTime(),
      });

      const ref = doc(db, "movies", id);
      await updateDoc(ref, {
        reting: prevesRating + rating,
        rated: userated + 1,
      });
      setRating(0);
      setloading(false);
      setform("");
      swal({
        title: "Review Sent",
        icon: "success",
        button: false,
        timer: 3000,
      });
    } catch (err) {
      swal({
        title: err.message,
        icon: "success",
        timer: 3000,
      });
    }
  };

  useEffect(() => {
    const MainData = async () => {
      let querys = query(reviewsRef, where("movieid", "==", id));
      const snapshot = await getDocs(querys);

      snapshot.forEach((doc) => {
        setdata((pve) => [...pve, doc.data()]);
      });
    };
    MainData();
  }, []);

  return (
    <div className="mt-4 w-full">
      <ReactStars
        size={20}
        half={true}
        onChange={(newRating) => {
          setRating(newRating);
        }}
        value={rating}
      />
      <input
        onChange={(e) => {
          setform(e.currentTarget.value);
        }}
        type="text"
        className="w-full p-2 outline-none header"
      />
      <button
        onClick={() => {
          SendReview();
        }}
        className="bg-green-600 w-full p-1"
      >
        {loading ? (
          <ColorRing
            visible={true}
            height="30"
            width="780"
            ariaLabel="blocks-loading"
            wrapperStyle={{ justifyContent: "center" }}
            colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
          />
        ) : (
          "Share"
        )}
      </button>

      <div className="mt-4">
        {data.map((e, i) => (
          <div className="card mb-2 p-3" key={i}>
            <div className="card-body">
              <h5 className="card-title">Name :{e.name}</h5>
              <p className="card-text">
                Year :{" "}
                <span className="p-5">
                  ( {new Date(e.timestamp).toLocaleString()})
                </span>
              </p>
              <p className="card-text">
                Rating:
                <ReactStars size={20} half={true} value={e.rating} />{" "}
              </p>
              <p className="card-text">Feelings: {e.thought}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
