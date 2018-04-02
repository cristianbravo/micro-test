const {json} = require('micro');

module.exports = async (req, res) => {
  const data = await json(req);
  console.log(data);

  return 'Data loggeada a la consola';
}