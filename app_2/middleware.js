import { NextResponse } from "next/server";

import { v4 as uuid } from "uuid";

const jose = require("jose");

export async function middleware(request) {
  const response = NextResponse.next();

  if (request.nextUrl.pathname.includes(".")) {
    return response;
  }

  console.log("Middleware running", request.url);

  response.headers.set("my-name", uuid());
  response.headers.set("deviceId", uuid());

  const alg = "RS256";

  // const privateKey = await jose.importJWK(jwk, alg);

  // console.log(
  //   await new jose.SignJWT({
  //     name: "virendra kumar patel",
  //   })
  //     .setProtectedHeader({
  //       alg: alg,
  //     })
  //     .sign(privateKey)
  // );

  // fetch("https://jsonplaceholder.typicode.com/todos/1")
  //   .then((response) => response.json())
  //   .then((json) => console.log(json));

  return response;
}
