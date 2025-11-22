const sequelize = require("../common/database.js");
const defineLink = require("../common/models/link.js");
const Link = defineLink(sequelize);

exports.register = async (req, res) => {
  try {
    const { url } = req.body;
    const link = await Link.create({
      url: url,
    });
    res.status(201).json({
      success: true,
      link: { id: link.id, url: link.url, visited: link.visited },
    });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};
