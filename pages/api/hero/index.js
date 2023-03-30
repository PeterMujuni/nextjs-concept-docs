import dbConnect from "../../../db/dbConnect";
import Hero from "../../../models/Hero";

dbConnect();

// get all records, post a new record

const getHero = async (req, res) => {
	const { method } = req;
	// console.log("REQUEST FROM INDEX", req);
	switch (method) {
		case "GET":
			try {
				const heroes = await Hero.find({});
				res.status(200).json({ success: true, heroes });
			} catch (error) {
				res.status(400).json({ success: false });
			}
			break;
		case "POST":
			// console.log(req.body);
			try {
				const hero = await Hero.create(req.body);

				res.status(200).json({ success: true, hero });
			} catch (error) {
				res.status(400).json({
					success: false,
					message: "Database Error",
				});
			}
			break;

		default:
			res.status(400).json({ success: false, message: "Something else is going on" });
			break;
	}
};

export default getHero;
