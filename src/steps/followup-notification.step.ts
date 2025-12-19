import { StepConfig } from "motia";

export const config: StepConfig = {
  name: "followup-notification",
  type: "event",
  subscribes: ["followup.due"],
  emits: [],
};

export const handler = async (ctx: any) => {
  if (!ctx.event) return;

  const { company, role } = ctx.event;
  console.log(`Reminder: Follow up with ${company} for ${role}`);
};
