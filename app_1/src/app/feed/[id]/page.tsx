import React from "react";
import { getFeedById } from "../../../api/feed";
import { Container, FeedItem, Image } from "../../../styled/home";
import Link from "next/link";

export default async function MixFeedPage({ params }) {
  console.log(params);

  const id = params.id;

  const feed = await getFeedById(id);

  return (
    <Container>
      <h1>{feed.title}</h1>

      {feed.items.map((item, index) => (
        <Link shallow key={index} href={`/post/${index}`}>
          <FeedItem>
            <small>
              {index}. {item.type} , {item?.id}
            </small>
            <hr />
            <Image
              src={
                item.thumbnail_content?.data?.[0]?.link ||
                item?.data?.items?.[0]?.imgs?.[0]
              }
            ></Image>
          </FeedItem>
        </Link>
      ))}
    </Container>
  );
}
