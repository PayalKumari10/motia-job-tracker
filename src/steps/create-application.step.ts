import { StepConfig } from "motia";

export const config: StepConfig = {
  name: "create-application",
  type: "api",
  method: "POST",
  path: "/applications",
  emits: ["application.created"],
};

export const handler = async (input: any, ctx: any) => {
  console.log("INPUT 👉", input);

  const body = input.body;

  if (!body) {
    return {
      status: 400,
      body: { message: "Request body missing" },
    };
  }

  const { company, role, followupDate } = body;

  await ctx.emit("application.created", {
    company,
    role,
    followupDate,
  });

  return {
    status: 200,
    body: { message: "Application created successfully" },
  };
};
