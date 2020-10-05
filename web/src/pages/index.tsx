import { Text } from "@chakra-ui/core";

import { Container } from "../components/Container";
import { Main } from "../components/Main";
import { OrderScroll } from "../components/OrderScroll";
import { Footer } from "../components/Footer";

const Index = () => (
  <Container>
    <Main>
      <OrderScroll />
    </Main>
    <Footer>
      <Text>Made with 🍺&nbsp; and ❤️&nbsp; by</Text>&nbsp;
      <Text fontWeight={800}> Brewpass</Text>
    </Footer>
  </Container>
);

export default Index;
