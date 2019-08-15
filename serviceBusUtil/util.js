const jsonResponse = data => {
  return {
    body: {
      data
    },
    headers: {
      'Content-Type': 'application/json'
    }
  };
};

module.exports = jsonResponse;
