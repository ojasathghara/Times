// the service file performs the database operations, in this case we have hardcoded data which we have imported.
const latestData = require("../data/latest");

const latestService = (req, res) => {
    res.send(latestData);
};

module.exports = latestService;
