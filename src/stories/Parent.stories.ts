import type { Meta, StoryObj } from "@storybook/vue3";

import MyParent from "./Parent.vue";

const meta = {
  title: "Example/Parent",
  component: MyParent,
  render: () => ({
    components: { MyParent },
    template: "<my-Parent />",
  }),
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
  },
  // This component will have an automatically generated docsParent entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
} satisfies Meta<typeof MyParent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const First: Story = {};

export const Second: Story = {};

export const Third: Story = {};
