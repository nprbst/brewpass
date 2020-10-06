import { Instance, types } from "mobx-state-tree";
import { OrderBy } from "./OrderByEnum";
import { OrderItemsByHourModelType } from "./OrderItemsByHourModel";
import { selectFromOrderItemsByHour } from "./OrderItemsByHourModel.base";
import { RootStoreBase } from "./RootStore.base";

export const isSSR = () => typeof window === "undefined";

export interface RootStoreType extends Instance<typeof RootStore.Type> {}

// prettier-ignore
export const ORDER_ITEMS_by_hour_FRAGMENT = selectFromOrderItemsByHour()
  .hour_of_day
  .count
  .last_order
  .menu_item
  .menu_item_id
  .venue
  .toString()

const queryOrderItemsByHourParams = (
  limit: number,
  offset: number,
  hoursOffset: number
) => {
  const thisHour = new Date().getUTCHours();
  const firstHour = thisHour - hoursOffset;
  const lastHour = thisHour + hoursOffset;
  return {
    limit,
    offset,
    orderBy: [{ count: OrderBy.desc, last_order: OrderBy.desc }],
    where: { hour_of_day: { _gte: firstHour, _lte: lastHour } },
  };
};

export const RootStore = RootStoreBase.props({
  virtualTime: types.optional(types.Date, new Date()),
})
  .views((self) => ({
    get sortedOrderItems(): OrderItemsByHourModelType[] {
      return Array.from(self.orderItemsByHours.values()).sort((a, b) => {
        return (
          b.heuristicScore(self.virtualTime) -
          a.heuristicScore(self.virtualTime)
        );
      });
    },
  }))
  .actions((self) => ({
    subscribeOrderItems(limit: number, offset: number, hoursOffset: number) {
      self.subscribeOrder_items_by_hour(
        queryOrderItemsByHourParams(limit, offset, hoursOffset),
        ORDER_ITEMS_by_hour_FRAGMENT,
        (items) => {
          items.map((item: any) => {
            const d = new Date(item.last_order);
            if (self.virtualTime?.valueOf() < d.valueOf()) {
              self.virtualTime = d;
            }
          });
        }
      );
    },
    loadOrderItems(limit: number, offset: number, hoursOffset: number) {
      const reset = offset == 0;
      const query = self.queryOrder_items_by_hour(
        queryOrderItemsByHourParams(limit, offset, hoursOffset),
        ORDER_ITEMS_by_hour_FRAGMENT
      );
      query.then((data) => {
        // Update virtual time
        if (reset) {
          self.virtualTime = new Date();
          self.orderItemsByHours.clear();
        }
        data.order_items_by_hour.map((item) => {
          const d = new Date(item.last_order);
          if (self.virtualTime?.valueOf() < d.valueOf()) {
            self.virtualTime = d;
          }
        });
      });
      return query;
    },
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self));
    },
  }))
  .actions((self) => ({
    afterCreate() {
      self.virtualTime = new Date();
      !isSSR() && self.subscribeOrderItems(20, 0, 2);
    },
    loadInitial() {
      return self.loadOrderItems(20, 0, 2);
    },
    loadMore() {
      return self.loadOrderItems(20, self.orderItemsByHours.size, 2);
    },
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self));
    },
  }));
