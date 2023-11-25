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
          <li>
            <Link shallow href={`/users/${user.id}`}>
              <pre>{JSON.stringify(user, null, 2)}</pre>
            </Link>
          </li>
        ))}
      </ul>

      <pre>{JSON.stringify(props.todos, null, 2)}</pre>
      <pre>{JSON.stringify(props.comments, null, 2)}</pre>
      <pre>{JSON.stringify(props.posts, null, 2)}</pre>
    </div>
  );
}

export const getServerSideProps = async () => {
  await new Promise((r) => {
    setTimeout(r, 2000);
  });

  return {
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
};
