import React from "react";

export default function page2() {
  return (
    <h1>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quia velit
      alias voluptate accusantium qui eaque natus provident illum hic.
    </h1>
  );
}

export const getServerSideProps = () => {
  console.log("GET SERVER SIDE PROPS 2 ");
  return {
    props: {},
  };
};
