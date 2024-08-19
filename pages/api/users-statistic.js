import usersStatistic from "../../data/users-statistic";

export default (req, res) => {
  const { userIdFrom = 1, userIdTo = 16 } = req.query;
  const filteredStats = usersStatistic
    .filter(
      (stat) =>
        stat.user_id >= parseInt(userIdFrom) &&
        stat.user_id <= parseInt(userIdTo)
    )
    .reduce((acc, stat) => {
      const existingStat = acc.find((s) => s.user_id === stat.user_id);
      if (existingStat) {
        existingStat.page_views += stat.page_views;
        existingStat.clicks += stat.clicks;
      } else {
        acc.push({ ...stat });
      }
      return acc;
    }, [])
    .sort((a, b) => a.user_id - b.user_id);

  res.status(200).json(filteredStats);
};
