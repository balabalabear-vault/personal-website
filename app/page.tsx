import { Container } from "@mui/material";
import Banner from "./Banner";

export const metadata = {
  title: "Jack Kwok",
};

export default function Page() {
  return (
    <Container maxWidth="lg">
      <Banner />
    </Container>
  )
}
