import type { Meta, StoryObj } from "@storybook/react";
import { ApplicationCard } from "@allo/kit/applications";
import { application } from "@/data/applications";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Applications/Card",
  component: ApplicationCard,
  parameters: {
    layout: "centered",
  },
  argTypes: {},
  args: {},
} satisfies Meta<typeof ApplicationCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: application,
};