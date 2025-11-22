const express = require("express");
const app = express();

const sequelize = require("./common/database");
const defineLink = require("./common/models/link");
const Link = defineLink(sequelize);

sequelize.sync({ alter: true });

const modifyRoutes = require("./modify/routes");
const listRoutes = require("./list/routes");
const redirectRoutes = require("./redirect/routes");

app.use(express.json());
app.use("/api/", modifyRoutes);
app.use("/api/", listRoutes);
app.use("/:id", redirectRoutes);

app.get("/api/status", (req, res) => {
  res.json({
    status: "Running",
    timestamp: new Date().toISOString(),
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
