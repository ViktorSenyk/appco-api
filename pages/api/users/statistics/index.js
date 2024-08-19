import usersStatistic from "../../../../data/users/statistic";

export default (req, res) => {
  const { userIds } = req.query;

  if (userIds) {
    const idsArray = userIds.split(",").map((id) => parseInt(id));
    const filteredStats = usersStatistic
      .filter((stat) => idsArray.includes(stat.user_id))
      .sort((a, b) => a.user_id - b.user_id);

    res.status(200).json(filteredStats);
  } else {
    res.status(400).json({ error: "No userIds provided" });
  }
};
