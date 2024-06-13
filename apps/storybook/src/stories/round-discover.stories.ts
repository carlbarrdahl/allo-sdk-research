import type { Meta, StoryObj } from "@storybook/react";
import { DiscoverRounds } from "@allo/kit/rounds";

const meta = {
  title: "Rounds/Discover",
  component: DiscoverRounds,
  parameters: {
    layout: "centered",
  },
  // tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof DiscoverRounds>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    query: {
      where: {
        chainId: { in: [10] },
        application: { status: { in: ["APPROVED"] } },
      },
      orderBy: { unique_donors_count: "desc" },
      skip: 0,
      take: 6,
    },
  },
};