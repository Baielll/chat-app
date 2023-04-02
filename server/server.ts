import { fastify } from "fastify";
import { config } from "dotenv";
config()

import cors from "@fastify/cors";
import { userRoutes } from "./routes/users";

const app = fastify();
app.register(cors, { origin: process.env.CLIENT_URL })
app.register(userRoutes)

app.listen({ port: parseInt(process.env.PORT!)})