import { Stack } from "@chakra-ui/core";
import { observer } from "mobx-react-lite";

import { OrderItemsByHourModelType } from "../models";
import { OrderTile } from "./OrderTile";

export interface OrderStackProps {
  items: OrderItemsByHourModelType[];
  virtualTime: Date;
}

const minutesAgo = (lastOrder: string, virtualTime: Date): number => {
  return (virtualTime.valueOf() - new Date(lastOrder).valueOf()) / (60 * 1000);
};

export const OrderStack = observer(
  ({ items, virtualTime }: OrderStackProps) => {
    console.log("items", items.length);
    console.log("virtualTime", virtualTime);

    return (
      <Stack spacing="-1px">
        {items.map(
          ({
            id,
            menu_item_id,
            hour_of_day,
            menu_item,
            venue,
            last_order,
            count,
            heuristicScore,
          }) => (
            <OrderTile
              key={menu_item_id + "_" + hour_of_day}
              id={id}
              item={menu_item}
              venue={venue}
              ago={minutesAgo(last_order, virtualTime)}
              recent={count}
              score={heuristicScore(virtualTime)}
            />
          )
        )}
      </Stack>
    );
  }
);
