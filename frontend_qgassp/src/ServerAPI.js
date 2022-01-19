const SERVER_ADDRESS = "https://ggia.ulno.net";

const parse = async (fetchPromise) => {
  const response = await fetchPromise;
  if (response.ok) {
    return await response.json();
  } else {
    throw new Error((await response.json()).error);
  }
};

const getCountryEmissions = ({ country }) => {
  return parse(
    fetch(SERVER_ADDRESS + "/calc/emission", {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ type: "country", country }),
    })
  );
};

const postCountryEmissions = ({ country }) => {
  return parse(
    fetch(SERVER_ADDRESS + "/calc/emission/country", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ type: "country", country }),
    })
  );
};

/**
 * @return {Object} Server API - {getCountryEmissions, country}
 */
export const createServer = () => {
  return {
    getCalcEmissions: (params) => getCountryEmissions(params),
    postCalcEmissions: (params) => postCountryEmissions(params),
  };
};
