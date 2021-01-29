import React, { useEffect, useState } from "react";

const Effect2 = () => {
  const [resourcetype, setresourcetype] = useState("users");
  const [item, setitem] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourcetype}`)
      .then((response) => response.json())
      .then((json) => setitem(json));
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

      {item.map((items) => {
        return <pre>{JSON.stringify(items)}</pre>;
      })}
    </>
  );
};
export default Effect2;
