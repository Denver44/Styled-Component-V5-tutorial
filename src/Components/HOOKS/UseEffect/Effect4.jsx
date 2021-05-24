import React, { useEffect, useState } from "react";

const Effect2 = () => {
  const [resourcetype, setresourcetype] = useState("users");

  // We have to unscribe when we fetch data from api or we put any listener we have to remove the listener
  // using return at the end we unscribe from the api or remove listener

  useEffect(() => {
    console.log("resource change");
    return () => {
      console.log("return from resource change");
    };
  }, [resourcetype]);

  return (
    <>
      <button
        onClick={() => {
          setresourcetype("posts");
        }}
      >
        post
      </button>
      <button
        onClick={() => {
          setresourcetype("comments");
        }}
      >
        comments{" "}
      </button>
      <button
        onClick={() => {
          setresourcetype("users");
        }}
      >
        user{" "}
      </button>

      <h1>{resourcetype}</h1>
    </>
  );
};
export default Effect2;
