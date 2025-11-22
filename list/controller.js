const sequelize = require("../common/database");
const defineLink = require("../common/models/link.js");
const Link = defineLink(sequelize);

exports.register = async (req, res) => {
  try {
    const links = await Link.findAll();
    res.status(201).json({
      success: true,
      links: links,
    });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};
