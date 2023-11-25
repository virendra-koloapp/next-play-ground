import Link from "next/link";
import React from "react";

export default function page1(props) {
  return (
    <div>
      <h1>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque,
        quod.
      </h1>
      <h2>Page 1 </h2>

      <Link
        href={{
          pathname: "/users",
          shallow: true,
          query: {
            [Date.now()]: Date.now(),
          },
        }}
      >
        Add Random Query
      </Link>

      <ul>
        <li>
          <Link shallow href={"/page1"}>
            Page 1
          </Link>
        </li>
        <li>
          <Link shallow href={"/page2"}>
            Page 2
          </Link>
        </li>
        <li>
          <Link shallow href={"/page3"}>
            Page 3
          </Link>
        </li>
        <li>
          <Link shallow href={"/page4"}>
            Page 4
          </Link>
        </li>
      </ul>

      <ul>
        {props.users.map((user) => (
          <li
            style={{
              border: "2px solid red",
              padding: "10px",
              margin: "10px",
              cursor: "pointer",
            }}
          >
            <Link shallow href={`/users/${user.id}`}>
              <div>
                <h2>Shallow Link | Prefeched </h2>
                <p>{user.name}</p>
                <p>{user.email}</p>
                <p>{user.phone}</p>
                <p>{user.id}</p>
              </div>
            </Link>
            <br />
          </li>
        ))}
      </ul>
    </div>
  );
}

export const getServerSideProps = async () => {
  console.log(getServerSideProps.name);

  const returnValue = {
    props: {
      todos: await fetch("https://jsonplaceholder.typicode.com/todos").then(
        (response) => response.json()
      ),
      posts: await fetch("https://jsonplaceholder.typicode.com/posts").then(
        (response) => response.json()
      ),
      users: await fetch("https://jsonplaceholder.typicode.com/users").then(
        (response) => response.json()
      ),
      comments: await fetch(
        "https://jsonplaceholder.typicode.com/comments"
      ).then((response) => response.json()),
    },
  };

  console.log(getServerSideProps.name);

  console.log({ returnValue });

  return returnValue;
};
