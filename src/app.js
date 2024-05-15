const express = require("express");
const path = require("path");
const qrcode = require("qrcode");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Set view engine to ejs
app.set("view engine", "ejs");

// Route to render the index.ejs file
app.get("/", (req, res, next) => {
	res.render("index.ejs");
});
// post url
app.post("/scan", (req, res, next) => {
	const inputText = req.body.texthere;
	console.log(inputText);
	qrcode.toDataURL(inputText, (err, src) => {
		res.render("scan", {
			qrcode: src,
		});
	});
});
// Start the server
app.listen(port, () => {
	console.log(`listening at port https://localhost:${port}`);
});
