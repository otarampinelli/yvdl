import dotenv from "dotenv";

dotenv.config({
  path: ".env",
});

const envs = {
  env: process.env.NODE_ENV,
  port: process.env.PORT,
};

export default envs;
