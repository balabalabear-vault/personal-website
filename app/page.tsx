import { Container } from "@mui/material";
import Banner from "./Banner";

export const metadata = {
  title: "App Router",
};

export default function Page() {
  return (
    <Container>
      <Banner />
    </Container>
  )
}
