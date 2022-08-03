// src/mocks/handlers.js
import { rest } from "msw";
import { artists } from "../store/modules/test.data";

export const handlers = [
  // Handles a GET /user request
  rest.get("/user", (req, res, ctx) => {
    return res(
      // Respond with a 200 status code
      ctx.status(200),
      ctx.json({
        data: artists,
      })
    );
  }),
];
