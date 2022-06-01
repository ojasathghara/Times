// the service file performs the database operations, in this case we have hardcoded data which we have imported.
const featuredData = require("../data/featured");

const featuredService = (req, res) => {
    res.send(featuredData);
};

module.exports = featuredService;
