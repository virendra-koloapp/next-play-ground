import React from "react";

export default function Page4() {
  return (
    <h1>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi, unde
      quaerat reprehenderit accusamus, culpa nostrum iste iusto perferendis
      recusandae pariatur dolorum autem quibusdam alias sapiente harum animi
      sed, minus expedita? Nostrum tempore fugiat porro odit facere architecto
      at aut vel. Corporis eveniet repudiandae, deserunt iure reiciendis qui
      labore!
    </h1>
  );
}

export const getServerSideProps = () => {
  console.log("GET SERVER SIDE PROPS 4");
  return {
    props: {},
  };
};
