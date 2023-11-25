import { headers } from "next/headers";
import Link from "next/link";

export default async function Home() {
  console.log("Calling api");
  const props = {
    todos: await fetch("https://jsonplaceholder.typicode.com/todos").then(
      (response) => response.json()
    ),
    posts: await fetch("https://jsonplaceholder.typicode.com/posts").then(
      (response) => response.json()
    ),
    users: await fetch("https://jsonplaceholder.typicode.com/users").then(
      (response) => response.json()
    ),
    comments: await fetch("https://jsonplaceholder.typicode.com/comments").then(
      (response) => response.json()
    ),
  };

  return (
    <main>
      <h1>Hello World..</h1>
      <p>{headers().get("authorization")}</p>
      <p>{headers().get("source")}</p>

      <h1>{headers().get("my-name")}</h1>
      <h1>{headers().get("deviceId")}</h1>

      <div>
        <h1>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque,
          quod.
        </h1>
        <h2>Page 1 </h2>

        <ul>
          <li>
            <Link href={"/page1"}>Page 1</Link>
          </li>
          <li>
            <Link href={"/page2"}>Page 2</Link>
          </li>
          <li>
            <Link href={"/page3"}>Page 3</Link>
          </li>
          <li>
            <Link href={"/page4"}>Page 4</Link>
          </li>
        </ul>

        <ul>
          {props.users.map((user) => (
            <li>
              <Link href={`/users/${user.id}`}>
                <pre>{JSON.stringify(user, null, 2)}</pre>
              </Link>
            </li>
          ))}
        </ul>

        <pre>{JSON.stringify(props.todos, null, 2)}</pre>
        <pre>{JSON.stringify(props.comments, null, 2)}</pre>
        <pre>{JSON.stringify(props.posts, null, 2)}</pre>
      </div>
    </main>
  );
}
