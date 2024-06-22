"use client";

import { DiscoverApplications } from "@allo/kit";

export function Applications({ roundId = "", chainId = 0 }) {
  return (
    <DiscoverApplications
      columns={[3]}
      query={{
        where: {
          roundId: { equals: roundId },
          chainId: { equals: chainId },
          status: { equals: "APPROVED" },
        },
        orderBy: {
          total_amount_donated_in_usd: "desc",
        },
        take: 6,
      }}
      renderItem={(application, Card) => (
        <Card
          key={application.id}
          {...application}
          components={["contributors"]}
        />
      )}
    />
  );
}