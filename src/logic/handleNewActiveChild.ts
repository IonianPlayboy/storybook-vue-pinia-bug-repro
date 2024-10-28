import { useActiveChildStore } from "../piniaStores/activeChild";

export const handleNewActiveChild = (id: string) => {
  useActiveChildStore().setActiveChildId(id);
};
