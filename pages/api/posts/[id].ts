import { NextApiHandler } from "next";
import { getPostData } from "../../../lib/posts";

const handler: NextApiHandler = async (req, res) => {
  switch (req.method) {
    case "GET":
      res.status(200).json(getPostData(req.query.id as string));
      break;
    default:
      res.status(405).end(`Method ${req.method} Not Allowed`);
      break;
  }
};

export default handler;
