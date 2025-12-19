import { StepConfig } from "motia";

export const config: StepConfig = {
  name: "check-followup",
  type: "cron",
  cron: "* * * * *",
  emits: ["followup.due"],
};

export const handler = async (ctx: any) => {
  const applications = await ctx.state.get("applications");

  if (!applications || !Array.isArray(applications)) {
    console.log("No applications found");
    return;
  }

  const today = new Date().toISOString().split("T")[0];

  for (const app of applications) {
    if (app.followupDate === today) {
      await ctx.emit("followup.due", app);
    }
  }
};
