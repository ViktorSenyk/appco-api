import users from "../../../data/users";

export default (req, res) => {
  const { page = 1, rowsPerPage = 16 } = req.query;
  const startIndex = (page - 1) * rowsPerPage;
  const data = users.slice(startIndex, startIndex + parseInt(rowsPerPage));
  const pagesCount = Math.ceil(users.length / rowsPerPage);

  res.status(200).json({ pagesCount, data });
};
