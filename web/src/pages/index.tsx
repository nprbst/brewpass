import { Text } from "@chakra-ui/core";

import { Container } from "../components/Container";
import { Main } from "../components/Main";
import { OrderStack } from "../components/OrderStack";
import { OrderProps } from "../components/OrderTile";
import { Footer } from "../components/Footer";

const fakeOrders: OrderProps[] = [
  {
    item: "Founders Kentucky Breakfast",
    venue: "William Oliver's Publick House",
    ago: 3,
    recent: 5,
  },
  {
    item: "Maharaj",
    venue: "Town Pump",
    ago: 3,
  },
  {
    item: "Brooklyn Black",
    venue: "Pour Brothers Community Tavern",
    ago: 70,
    recent: 1,
  },
  {
    item: "Founders Kentucky Breakfast",
    venue: "William Oliver's Publick House",
    ago: 90,
    recent: 10,
  },
  {
    item: "Maharaj",
    venue: "Town Pump",
    ago: 3,
  },
  {
    item: "Brooklyn Black",
    venue: "Pour Brothers Community Tavern",
  },
  {
    item: "Founders Kentucky Breakfast",
    venue: "William Oliver's Publick House",
    ago: 3,
    recent: 5,
  },
  {
    item: "Maharaj",
    venue: "Town Pump",
    ago: 3,
  },
  {
    item: "Brooklyn Black",
    venue: "Pour Brothers Community Tavern",
  },
];

const Index = () => (
  <Container>
    <Main>
      <OrderStack orders={fakeOrders} />
    </Main>

    <Footer>
      <Text>Made with 🍺&nbsp; and ❤️&nbsp; by</Text>&nbsp;
      <Text fontWeight={800}> Brewpass</Text>
    </Footer>
  </Container>
);

export default Index;
