import { now } from "lodash";
import { flow, types, getSnapshot, Instance } from "mobx-state-tree";

const Order = types.model({
  id: types.identifier,
  item: types.string,
  venue: types.string,
  lastOrderedMinAgo: types.optional(types.number, -1),
  recentCount: types.optional(types.number, 0),
});

export type OrderInstance = Instance<typeof Order>;

const fakeOrders = [
  {
    id: "1",
    item: "Founders Kentucky Breakfast",
    venue: "William Oliver's Publick House",
    lastOrderedMinAgo: 3,
    recentCount: 5,
  },
  {
    id: "2",
    item: "Maharaj",
    venue: "Town Pump",
    lastOrderedMinAgo: 3,
  },
  {
    id: "3",
    item: "Brooklyn Black",
    venue: "Pour Brothers Community Tavern",
    lastOrderedMinAgo: 70,
    recentCount: 1,
  },
  {
    id: "4",
    item: "Founders Kentucky Breakfast",
    venue: "William Oliver's Publick House",
    lastOrderedMinAgo: 23,
    recentCount: 7,
  },
  {
    id: "5",
    item: "Maharaj",
    venue: "Town Pump",
    lastOrderedMinAgo: 33,
  },
  {
    id: "6",
    item: "Brooklyn Black",
    venue: "Pour Brothers Community Tavern",
    lastOrderedMinAgo: 50,
    recentCount: 11,
  },
  {
    id: "7",
    item: "Founders Kentucky Breakfast",
    venue: "William Oliver's Publick House",
    lastOrderedMinAgo: 13,
    recentCount: 50,
  },
  {
    id: "8",
    item: "Maharaj",
    venue: "Town Pump",
    lastOrderedMinAgo: 3,
  },
  {
    id: "9",
    item: "Brooklyn Black",
    venue: "Pour Brothers Community Tavern",
    lastOrderedMinAgo: 42,
    recentCount: 2,
  },
  {
    id: "10",
    item: "Founders Kentucky Breakfast",
    venue: "William Oliver's Publick House",
    lastOrderedMinAgo: 30,
    recentCount: 15,
  },
];

function moreFakeOrders(offset: number) {
  return fakeOrders.reduce((acc, o) => {
    let id = (parseInt(o.id) + offset).toString(10);
    acc[id] = { ...o, id };
    return acc;
  }, {} as { [key: string]: { id: string; item: string; lastOrderedMinAgo?: number; recentCount?: number } });
}

function delay(ms: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

function hourDiff(order: OrderInstance): number {
  return 1;
}

function hScore(order: OrderInstance): number {
  const sameHourWeight = 20;
  const adjacentHourWeight = 10;
  const recencyWeight = 1.5;
  const countWeight = 3;
  // TODO: take into account total orders, recency and time-of-day

  let score = 0;
  score += sameHourWeight * (hourDiff(order) == 0 ? 1 : 0);
  score += adjacentHourWeight * (hourDiff(order) == 1 ? 1 : 0);
  score += recencyWeight * (60 / (1 + order.lastOrderedMinAgo));
  score += countWeight * order.recentCount;

  return score;
}

export const Orders = types
  .model({
    orders: types.optional(types.map(Order), {}),
    more: types.optional(types.boolean, true),
  })
  .views((self) => ({
    get listFeatured() {
      return Array.from(self.orders.values()).sort(
        (a, b) => hScore(b) - hScore(a)
      );
    },
  }))
  .actions((self) => ({
    reset() {
      self.orders.replace(moreFakeOrders(0));
    },
    fetchMore: flow(function* fetchMore() {
      yield delay(200);
      self.orders.merge(moreFakeOrders(self.orders.size));
      return;
    }),
  }));

export type OrdersInstance = Instance<typeof Orders>;

export const OrdersState = Orders.create();

OrdersState.reset();
