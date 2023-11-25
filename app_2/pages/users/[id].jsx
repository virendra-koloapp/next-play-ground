import { useRouter } from "next/router";
import React from "react";

export default function UserDetails(props) {
  const router = useRouter();

  return (
    <div>
      <h1> {props.user.name}</h1>
      <h1> {props.user.email}</h1>
      <h1> {props.user.phone}</h1>
      <h1> {props.user.id}</h1>
      <button onClick={() => router.back()}>Back </button>
    </div>
  );
}

export const getServerSideProps = async ({ query }) => {
  console.log("GET SERVER SIDE PROPS 1");

  return {
    props: {
      user: await fetch(
        "https://jsonplaceholder.typicode.com/users/" + query.id
      ).then((response) => response.json()),
    },
  };
};
