import { useActiveItemStore } from "../piniaStores/activeItem";

export const handleNewActiveItem = (id: number) => {
  useActiveItemStore().setActiveItemId(id);
};
