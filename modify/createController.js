const sequelize = require("../common/database.js");
const defineLink = require("../common/models/link.js");
const Link = defineLink(sequelize);

const { validators } = require("../utils"); // or "../../utils" depending on path
const { isSafeId } = validators;

exports.register = async (req, res) => {
  try {
    const { url, id } = req.body;

    // Generate ID if none given
    const shortId = id || nanoid(6);

    if (!isSafeId(id)) {
      return res.status(400).json({
        success: false,
        error: "Custom ID can only contain letters, numbers, - and _",
        name: "IllegalCharacters",
      });
    }

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
