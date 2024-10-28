import type { Meta, StoryObj } from "@storybook/vue3";

import MyItemWithId from "../components/ItemWithId.vue";

const meta = {
  title: "Example/ItemWithId",
  component: MyItemWithId,
  args: {
    id: 0,
    label: "Default",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof MyItemWithId>;

export default meta;

type Story = StoryObj<typeof meta>;

export const First: Story = {
  args: {
    id: 1,
    label: "First",
  },
};

export const Second: Story = {
  args: {
    id: 2,
    label: "Second",
  },
};
