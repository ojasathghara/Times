// necessary imports
const express = require("express");
const cors = require("cors"); // to allow cross origin resource access
const path = require("path");

// importing individual component routers
const latestRouter = require("./routes/latestRoute");
const featuredRouter = require("./routes/featuredRoute");

// setting a port variable
const PORT = process.env.port || 16500;
const app = express();

// telling express where to look for static files e.g. css and client side javascript
app.use(express.static(__dirname + "/public"));
app.use(cors());

// telling server to use the router corresponding to the path for the api
app.use("/getTimeStories", latestRouter);
app.use("/getFeaturedStories", featuredRouter);

// serving the initial file
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/public/index.html"));
});

// starting the port
app.listen(PORT, console.log(`Server started on port ${PORT}`));
