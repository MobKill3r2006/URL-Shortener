const sequelize = require("../common/database");
const defineLink = require("../common/models/link.js");
const Link = defineLink(sequelize);

exports.register = async (req, res) => {
  try {
    const id = req.params.id;
    const link = await Link.findByPk(id);
    await link.increment("visited");
    res.redirect(301, link.url);
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};
