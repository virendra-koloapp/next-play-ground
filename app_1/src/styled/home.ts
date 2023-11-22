"use client";
import Link from "next/link";
import styled from "styled-components";

export const StyledLink = styled(Link)`
  display: flex;
  flex-direction: column;
  border: 1px solid tomato;
  border-radius: 8px;
  padding: 1rem;
  gap: 12px;
  margin-top: 12px;
`;

export const StyledList = styled.li`
  list-style: none;
  margin: 0;
  padding: 0;

  font-size: 20px;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  overflow: hidden;
  gap: 12px;
`;
export const FeedItem = styled.div`
  border: 2px solid red;
  border-radius: 8px;
  :hover {
    background-color: #eee;
  }
`;
export const Image = styled.img`
  aspect-ratio: 1/1;
  width: 80vw;
  object-fit: contain;
`;
