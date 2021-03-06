var Reward = require('../models/reward.model');

/**
 * Get rewards list.
 * @property {number} req.query.offset - Number of issues to be skipped.
 * @property {number} req.query.limit - Limit number of issues to be returned.
 * @returns {Issue[]}
 */
async function list(req, res, next) {
  const { limit = 0, offset = 0, q = {} } = req.query;

  let docs = [];
  if(limit > 0) {
    docs = await Reward.list({ limit, offset, q });
  }

  const result = {
    offset: offset,
    limit: limit,
    totalDocs: await Reward.count(q),
    docs: docs
  };

  res.json(result)
}

module.exports = { list };
