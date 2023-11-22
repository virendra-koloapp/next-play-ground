import { StyledLink, StyledList } from "../styled/home";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <StyledList>
        <StyledLink prefetch href={"/feed/12"}>
          12
        </StyledLink>
        <StyledLink prefetch href={"/feed/15"}>
          5
        </StyledLink>
        <StyledLink prefetch href={"/feed/11"}>
          11
        </StyledLink>
        <StyledLink prefetch href={"/feed/13"}>
          13
        </StyledLink>
        <StyledLink prefetch href={"/feed/1663155314"}>
          1663155314
        </StyledLink>
      </StyledList>
    </main>
  );
}
