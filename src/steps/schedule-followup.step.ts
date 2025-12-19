import { StepConfig } from "motia";

export const config: StepConfig = {
  name: "schedule-followup",
  type: "event",
  subscribes: ["application.created"],
  emits: [],
};

export const handler = async (ctx: any) => {
  const app = ctx.event;

  const existing = (await ctx.state.get("applications")) || [];

  await ctx.state.set("applications", [...existing, app]);

  console.log("Application saved for followup");
};
