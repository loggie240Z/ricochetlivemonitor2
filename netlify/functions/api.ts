import serverless from "serverless-http";
import { createServer } from "../../server";

let handler: any;

export default async (req: any, context: any) => {
  if (!handler) {
    const app = createServer();
    handler = serverless(app);
  }

  try {
    return await handler(req, context);
  } catch (error) {
    console.error("Netlify function error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Internal server error" }),
    };
  }
};
