import users from "../../data/users";

export default (req, res) => {
  const { page = 1, rowsPerPage = 16 } = req.query;
  const startIndex = (parseInt(page) - 1) * parseInt(rowsPerPage);

  res
    .status(200)
    .json(users.slice(startIndex, startIndex + parseInt(rowsPerPage)));
};
