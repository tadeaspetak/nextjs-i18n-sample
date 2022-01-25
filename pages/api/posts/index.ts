import { NextApiHandler } from "next";
import { getSortedPostsData } from "../../../lib/posts";

const handler: NextApiHandler = (req, res) => {
  switch (req.method) {
    case "GET":
      res.status(200).json(getSortedPostsData());
      break;
    default:
      res.status(405).end(`Method ${req.method} Not Allowed`);
      break;
  }
};

export default handler;
