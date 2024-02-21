import envs from "./config/index.js";
import app from "./app.js";

const PORT = envs.port || 4000;

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
