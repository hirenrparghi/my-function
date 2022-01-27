exports.handler = async (event) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify("Hello from 1Lambda and Github!"),
  }
  return response
}
