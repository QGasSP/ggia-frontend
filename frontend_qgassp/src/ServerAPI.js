const SERVER_ADDRESS = "https://ggia-dev.ulno.net/";

const parse = async (fetchPromise) => {
  const response = await fetchPromise;
  if (response.ok) {
    return await response.json();
  } else {
    throw new Error((await response.json()).error);
  }
};

const getTransportBaseline = ({ baseline }) => {
  return parse(
    fetch(SERVER_ADDRESS + "/api/v1/calculate/transport/baseline", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ type: "baseline", baseline }),
    })
  );
};

/**
 * @return {Object} Server API - {getTransport, baseline}
 */
export const createServer = () => {
  return {
    getTransportBaseline: (params) => getTransportBaseline(params),
  };
};
