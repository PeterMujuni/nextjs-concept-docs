import dbConnect from "../../../db/dbConnect";
import Hero from "../../../models/Hero";

dbConnect();

// get a unique record, edit, delete

export default async (req, res) => {
	const {
		query: { id },
		method,
	} = req;

    // console.log("query param", req.query);

	switch (method) {
		case "GET":
			try {
				const hero = await Hero.findById(id);

				if (!hero) {
					res.status(400).json({ succes: false });
				}

				res.status(200).json({ succes: true, hero });
			} catch (error) {
				res.status(400).json({ succes: false });
			}
			break;
		case "PUT":
			try {
				const hero = await Hero.findByIdAndUpdate(id, req.body, {
					new: true,
					runValidators: true,
				});

				if (!hero) {
					res.status(400).json({ succes: false });
				}

				res.status(200).json({ succes: true, hero });
			} catch (error) {
				res.status(400).json({ succes: false });
			}
			break;
		case "DELETE":
			try {
				const hero = await Hero.deleteOne({_id: id});

				if (!hero) {
					res.status(400).json({ succes: false });
				}

				res.status(200).json({ succes: true, hero });
			} catch (error) {
				res.status(400).json({ succes: false });
			}
			break;

		default:
            res.status(400).json({ succes: false });
			break;
	}
};
