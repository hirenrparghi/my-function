exports.handler = async (event) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify("Hello everyone from Lambda and Github13!"),
  }
  return response
}
