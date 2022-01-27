exports.handler = async (event) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify("Hello all from 1Lambda and Github!"),
  }
  return response
}
