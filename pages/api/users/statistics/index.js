import usersStatistic from "../../../../data/users/statistic";
import { handleCors } from "../../../../utils/cors";

export default (req, res) => {
  if (handleCors(req, res)) return;

  const { userIds } = req.query;
  if (userIds) {
    const idsArray = userIds.split(",").map((id) => parseInt(id));
    const filteredStats = usersStatistic
      .filter((stat) => idsArray.includes(stat.user_id))
      .sort((a, b) => a.user_id - b.user_id);

    return res.status(200).json(filteredStats);
  }

  return res.status(400).json({ error: "No userIds provided" });
};
