import users from "../../../data/users";
import { handleCors } from "../../../utils/cors";

export default (req, res) => {
  if (handleCors(req, res)) return;

  const { page = 1, rowsPerPage = 16 } = req.query;
  const startIndex = (page - 1) * rowsPerPage;
  const data = users.slice(startIndex, startIndex + parseInt(rowsPerPage));
  const pagesCount = Math.ceil(users.length / rowsPerPage);

  return res.status(200).json({ pagesCount, data });
};
