const sequelize = require("../common/database.js");
const defineLink = require("../common/models/link.js");
const Link = defineLink(sequelize);

exports.register = async (req, res) => {
  try {
    const { id } = req.body;
    const link = await Link.findByPk(id);
    const deletedLink = link;
    await link.destroy();
    res.status(201).json({
      success: true,
      link: { id: deletedLink.id, url: deletedLink.url, visited: deletedLink.visited, deleted: true },
    });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};
