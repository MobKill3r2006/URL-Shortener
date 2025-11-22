const sequelize = require("../common/database.js");
const defineLink = require("../common/models/link.js");
const Link = defineLink(sequelize);

exports.register = async (req, res) => {
  try {
    const { url, id } = req.body;

    // Generate ID if none given
    const shortId = id || nanoid(6);

    const link = await Link.create({
      url: url,
      id: shortId,
    });
    res.status(201).json({
      success: true,
      link: { id: link.id, url: link.url, visited: link.visited },
    });
  } catch (err) {
    if (err.name === "SequelizeUniqueConstraintError") {
      errorMsg = "Custom ID already exists. Please choose a different ID.";
      res.status(400).json({ success: false, error: errorMsg, name: err.name });
    }
    res.status(500).json({ success: false, error: err.message, name: err.name });
  }
};
