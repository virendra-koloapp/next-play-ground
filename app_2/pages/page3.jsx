import React from "react";

export default function page3() {
  return (
    <h1>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis quia dolor
      quisquam culpa maiores suscipit a dolores voluptates optio illo
      perspiciatis, molestiae deleniti? Beatae cupiditate impedit distinctio
      incidunt et accusantium.
    </h1>
  );
}

export const getServerSideProps = () => {
  console.log("GET SERVER SIDE PROPS 3");
  return {
    props: {},
  };
};
