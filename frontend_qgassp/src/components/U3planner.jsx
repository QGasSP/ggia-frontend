import React, { useState, useEffect } from "react";
import { Button } from "./Button";
import "../css/u3planner.css";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";
import axios from "axios";
import urlPrefix from "../Config";
import Alert from "@mui/material/Alert";
import Tooltip from "@mui/material/Tooltip";
import {useNavigate} from "react-router-dom";
import { useStorageInt, useStorageString } from "../reducers/useStorage";
import { Container } from "@mui/material";

/**
 * U3 planner component for user inputs for policy quantification
 * @return {}
 */

export const U3planner = () => {
  const navigate = useNavigate();

  // get items 
  const base= JSON.parse(localStorage.getItem("baseline"));
  const baseline = base.baseline;
  const newDevelopment = JSON.parse(localStorage.getItem("newDevelopment"));
  const emission = JSON.parse(localStorage.getItem("emission"));

  // policy quantification response / request
  const [policyQuantification, setPolicyQuantification] = useStorageString("policyQuantification","");
  const [policyQuantificationTransportResponse, setPolicyQuantificationTransportResponse] = useState(() => {
    const savedBasline = localStorage.getItem("policyQuantificationTransportResponse");
    const initialValue = JSON.parse(savedBasline);
    return initialValue || {};
  });
  const [policyQuantificationTransportRequest, setPolicyQuantificationTransportRequest] = useState({});

  const [errorU3, setU3Error] = useState("");
 
  const [shares, setShares] = useStorageString("shares","");

  // passenger mobility
  const [passengerMobility, setPassengerMobility] =  useStorageString("passengerMobility","");
  const [populationAffectedPassengerMobility, setPopulationAffectedPassengerMobility] = useStorageInt("populationAffectedPassengerMobility",0);
  const [passengerMobilityYearStart, setPassengerMobilityYearStart]= useStorageInt("passengerMobilityYearStart", 0);
  const [passengerMobilityYearEnd, setPassengerMobilityYearEnd]= useStorageInt("passengerMobilityYearEnd", 0);
  const [passengerMobilityExpectedChange, setPassengerMobilityExpectedChange] = useStorageInt("passengerMobilityExpectedChange", 0)
  // passenger mobility end

  // freight transport start
  const [freightTransport, setFreightTransport] = useStorageString("freightTransport","");
  const [freightTransportMobility, setFreightTransportMobility] = useStorageInt("freightTransportMobility", 0)
  const [freightTransportYearStart, setFreightTransportYearStart] = useStorageInt("freightTransportYearStart", 0)
  const [freightTransportYearEnd, setFreightTransportYearEnd] = useStorageInt("freightTransportYearEnd", 0)
  // freight transport end

  // modal split-passanger section starts
   const [modalPassShares, setModalPassShares] = useStorageString("modalPassShares","");
  const [modalSplitPassenger, setModalSplitPassenger] = useStorageString("modalSplitPassenger","");
  const [bus, setBus] = useStorageInt("buses",0);
  const [metro, setMetro] = useStorageInt("metros",0);
  const [tram, setTram] = useStorageInt("trams",0);
  const [train, setTrain] = useStorageInt("trains",0);
  const [car, setCar] = useStorageInt("cars",0);
  const [modalSplitPassengerPopulationAffected, setModalSplitPassengerPopulationAffected] = useStorageInt("modalSplitPassengerPopulationAffected", 0)
  const [modalSplitPassengerYearStart, setModalSplitPassengerYearStart] = useStorageInt("modalSplitPassengerYearStart", 0)
  const [modalSplitPassengerYearEnd, setModalSplitPassengerYearEnd] = useStorageInt("modalSplitPassengerYearEnd", 0)
  // modal split-passanger section end


  // modal split freight transport start
  const [railTransport, setRailTransport] = useStorageInt("railTransport",0);
  const [waterwaysTransport, setWaterwaysTransport] = useStorageInt("waterwaysTransport",0);
  const [roadTransport, setRoadTransport] = useStorageInt("roadTransport",0);
  const [modalFreShares, setModalFreightShares] = useStorageString("modalFreShares","");
  const [modalSplitFreight, setModalSplitFreight] = useStorageString("modalSplitFreight","");

  const [modalSplitFreightYearStart, setModalSplitFreightYearStart] = useStorageInt("modalSplitFreightYearStart", 0)
  const [modalSplitFreightYearEnd, setModalSplitFreightYearEnd] = useStorageInt("modalSplitFreightYearEnd", 0)
  // modal split freight transport end

  
  // Shares of fuel types in bus transport start
  const [lpg, setLpg] = useStorageInt("lpg",0);
  const [cng, setCng] = useStorageInt("cng",0);
  const [electricity, setElectricity] = useStorageInt("electricity",0);
  const [petrol, setPetrol] = useStorageInt("petrol",0);
  const [diesel, setDiesel] = useStorageInt("diesel",0);

  const [fuelSharesBusTypes, setFuelSharesBusTypes] = useStorageString("fuelSharesBusTypes","");
  const [fuelSharesBus, setFuelSharesBus] = useStorageString("fuelShareBus","");
  const [fuelSharesBusYearStart, setFuelSharesBusYearStart] = useStorageInt("fuelSharesBusYearStart", 0)
  const [fuelSharesBusYearEnd, setFuelSharesBusYearEnd] = useStorageInt("fuelSharesBusYearEnd", 0)
  const [fuelSharesBusPopulationAffected, setFuelSharesBusPopulationAffected] = useStorageInt("fuelSharesBusPopulationAffected", 0)
  // fuel shares bus end


  // shares of fuel types in car transport start
  const [fuelSharesCarTypes, setFuelSharesCarTypes] = useStorageString("fuelSharesCarTypes","");
  const [fuelSharesCar, setFuelSharesCar] = useStorageString("fuelSharesCar","");
  const [fuelSharesCarYearStart, setFuelSharesCarYearStart] = useStorageInt("fuelSharesCarYearStart", 0);
  const [fuelSharesCarYearEnd, setFuelSharesCarYearEnd] = useStorageInt("fuelSharesCarYearEnd", 0);
  const [fuelSharesCarPopulationAffected, setFuelSharesCarPopulationAffected] = useStorageInt("fuelSharesCarPopulationAffected", 0);
  const [carLpg, setCarLpg] = useStorageInt("carLpg", 0)
  const [carCng, setCarCng] = useStorageInt("carCng", 0)
  const [carElectricity, setCarElectricity] = useStorageInt("carElectricity", 0)
  const [carPetrol, setCarPetrol] = useStorageInt("carPetrol",0);
  const [carDiesel, setCarDiesel] = useStorageInt("carDiesel",0);
  const [ngv, setNgv] = useStorageInt("ngv",0);
  const [hep, setHep] = useStorageInt("hep",0);
  const [phev, setPhev] = useStorageInt("phev",0);
  const [hydrogenfuel, setHydrogenfuel] = useStorageInt("hydrogenfuel",0);
  const [bioethanol, setBioethanol] = useStorageInt("bioethanol",0);
  const [biodiesel, setBiodiesel] = useStorageInt("biodiesel",0);
  const [bifuel, setBifuel] = useStorageInt("bifuel",0);
  const [other, setOther] = useStorageInt("other",0);
  // shares of fuel types in car transport end
  
  // electricity transportation renewables start
  const [renewables, setRenewables] = useStorageInt("renewables",0);
  const [electricityTransTypes, setElectricityTransTypes] = useStorageString("electricityTransTypes","");
  const [electricityTransport, setElectricityTransport] = useStorageString("electricityTransport","");
  const [electricityTransportYearStart, setElectricityTransportYearStart] = useStorageInt("electricityTransportYearStart", 0)
  const [electricityTransportYearEnd, setElectricityTransportYearEnd] = useStorageInt("electricityTransportYearEnd", 0)
  const [electricityTransportPopulationAffected, setElectricityTransportPopulationAffected] = useStorageInt("electricityTransportPopulationAffected", 0)

  const optionsNew = [];
  for (let i = 2022; i < 2051; i++) optionsNew.push(i);

  // passenger mobility handlers
  const handlePassengerMobilityExpectedChange = (e) => {
    e.preventDefault();
    setPassengerMobilityExpectedChange(Number(e.target.value))
  }

  const handlePopulationAffectedPassengerMobility = (e) => {
    e.preventDefault();
    setPopulationAffectedPassengerMobility(Number(e.target.value))
  }

  const handlePassengerMobilityYearStart = (e) => {
    e.preventDefault();
    setPassengerMobilityYearStart(Number(e.target.value))
  }

  const handlePassengerMobilityYearEnd = (e) => {
    e.preventDefault();
    setPassengerMobilityYearEnd(Number(e.target.value))
  }  

  // freight transport mobility handlers
  const handleFreightTransportMobility = (e) => {
    e.preventDefault();
    setFreightTransportMobility(Number(e.target.value))
  }

  const handleFreightTransportYearStart = (e) => {
    e.preventDefault();
    setFreightTransportYearStart(Number(e.target.value))
  }

  const handleFreightTransportYearEnd = (e) => {
    e.preventDefault();
    setFreightTransportYearEnd(Number(e.target.value))
  }

  // handlers for modal split passenger transport
  const handleModalSplitPassengerPopulationAffected = (e) => {
    e.preventDefault();
    setModalSplitPassengerPopulationAffected(Number(e.target.value))
  }

  const handleModalSplitPassengerYearStart = (e) => {
    e.preventDefault();
    setModalSplitPassengerYearStart(Number(e.target.value))
  }

  const handleModalSplitPassengerYearEnd = (e) => {
    e.preventDefault();
    setModalSplitPassengerYearEnd(Number(e.target.value))
  }

  const handleBus = (e) => {
    e.preventDefault();
    setBus(Number(e.target.value));
  };
  const handleMetro = (e) => {
    e.preventDefault();
    setMetro(Number(e.target.value));
  };
  const handleTram = (e) => {
    e.preventDefault();
    setTram(Number(e.target.value));
  };
  const handleTrain = (e) => {
    e.preventDefault();
    setTrain(Number(e.target.value));
  };
  const handleCar = (e) => {
    e.preventDefault();
    setCar(Number(e.target.value));
  };


  // handlers for modal split freight transport

  const handleRailTransport = (e) => {
    e.preventDefault();
    setRailTransport(Number(e.target.value));
  };

  const handleWaterwaysTransport = (e) => {
    e.preventDefault();
    setWaterwaysTransport(Number(e.target.value));
  };

  const handleRoadTransport = (e) => {
    e.preventDefault();
    setRoadTransport(Number(e.target.value));
  };

  const handleModalSplitFreightYearStart = (e) => {
    e.preventDefault();
    setModalSplitFreightYearStart(Number(e.target.value))
  }

  const handleModalSplitFreightYearEnd = (e) => {
    e.preventDefault();
    setModalSplitFreightYearEnd(Number(e.target.value))
  }


  // handlers for bus fuel shares
  const handleLpg = (e) => {
    e.preventDefault();
    setLpg(Number(e.target.value));
  };
  const handleCng = (e) => {
    e.preventDefault();
    setCng(Number(e.target.value));
  };
  const handleElectricity = (e) => {
    e.preventDefault();
    setElectricity(Number(e.target.value));
  };
  const handlePetrol = (e) => {
    e.preventDefault();
    setPetrol(Number(e.target.value));
  };
  const handleDiesel = (e) => {
    e.preventDefault();
    setDiesel(Number(e.target.value));
  };

  const handleFuelSharesBusYearStart = (e) => {
    e.preventDefault();
    setFuelSharesBusYearStart(Number(e.target.value));
  }

  const handleFuelSharesBusYearEnd = (e) => {
    e.preventDefault();
    setFuelSharesBusYearEnd(Number(e.target.value));
  }

  const handleFuelSharesBusPopulationAffected = (e) => {
    e.preventDefault();
    setFuelSharesBusPopulationAffected(Number(e.target.value));
  }

// handlers for car fuels

  const handleFuelSharesCarYearStart = (e) => {
    e.preventDefault();
    setFuelSharesCarYearStart(Number(e.target.value))
};

  const handleFuelSharesCarYearEnd = (e) => {
    e.preventDefault();
    setFuelSharesCarYearEnd(Number(e.target.value))
};

const handleFuelSharesCarPopulationAffected = (e) => {
    e.preventDefault();
    setFuelSharesCarPopulationAffected(Number(e.target.value))
};

const handleCarLpg = (e) => {
  e.preventDefault();
  setCarLpg(Number(e.target.value));
};

const handleCarCng = (e) => {
  e.preventDefault();
  setCarCng(Number(e.target.value));
};

const handleCarPetrol = e => {
  e.preventDefault();
  setCarPetrol(Number(e.target.value))
}

const handleCarDiesel = e => {
  e.preventDefault();
  setCarDiesel(Number(e.target.value));
};

const handleCarElectricity = e => {
  e.preventDefault();
  setCarElectricity(Number(e.target.value))
};

const handleNgv = (e) => {
    e.preventDefault();
    setNgv(Number(e.target.value));
  };
const handleHep = (e) => {
    e.preventDefault();
    setHep(Number(e.target.value));
  };
const handlePhev = (e) => {
    e.preventDefault();
    setPhev(Number(e.target.value));
  };
const handleHydrogenfuel = (e) => {
    e.preventDefault();
    setHydrogenfuel(Number(e.target.value));
  };
const handleBioethanol = (e) => {
    e.preventDefault();
    setBioethanol(Number(e.target.value));
  };
const handleBiodiesel = (e) => {
    e.preventDefault();
    setBiodiesel(Number(e.target.value));
  };
const handleBifuel = (e) => {
    e.preventDefault();
    setBifuel(Number(e.target.value));
  };
  
const handleOther = (e) => {
    e.preventDefault();
    setOther(Number(e.target.value));
  };

  // car fuel shares end

  // electricity trans types start

  const handleRenewables = (e) => {
    e.preventDefault();
    setRenewables(Number(e.target.value));
  };

  const handleElectricityTransportYearStart = e => {
    e.preventDefault();
    setElectricityTransportYearStart(Number(e.target.value));
  };

  const handleElectricityTransportYearEnd = e => {
    e.preventDefault();
    setElectricityTransportYearEnd(Number(e.target.value));
  };

  const handleElectricityTransportPopulationAffected = e => {
    e.preventDefault();
    setElectricityTransportPopulationAffected(Number(e.target.value));
  };



  

  const createPolicyQuantification = (e) => {
    e.preventDefault();

    const passengerMobility = {
      "expectedChange": passengerMobilityExpectedChange,
      "affectedArea": populationAffectedPassengerMobility,
      "yearStart": passengerMobilityYearStart,
      "yearEnd": passengerMobilityYearEnd
    };
    setPassengerMobility(passengerMobility);

    const freightTransport = {
      "expectedChange": freightTransportMobility,
      "yearStart": freightTransportYearStart,
      "yearEnd": freightTransportYearEnd
    };
    setFreightTransport(freightTransport);

    const modalPassShares = {
      bus,
      metro,
      tram,
      train,
      car,
    };
    setModalPassShares(modalPassShares);

    const modalSplitPassenger = {
      "shares": modalPassShares,
      "affectedPopulation": modalSplitPassengerPopulationAffected,
      "yearStart": modalSplitPassengerYearStart,
      "yearEnd": modalSplitPassengerYearEnd,
    };
    setModalSplitPassenger(modalSplitPassenger);

    // modal freight
    const modalFreShares = {
      railTransport,
      waterwaysTransport,
      roadTransport,
    };
    setModalFreightShares(modalFreShares);

    const modalSplitFreight = {
      "shares": modalFreShares,
      "yearStart": modalSplitFreightYearStart,
      "yearEnd": modalSplitFreightYearEnd,
    };
    setModalSplitFreight(modalSplitFreight);


    // bus start
    const fuelSharesBusTypes = {
      lpg,
      cng,
      electricity,
      petrol,
      diesel,
    };
    setFuelSharesBusTypes(fuelSharesBusTypes);

    const fuelSharesBus = {
      "types": fuelSharesBusTypes,
      "yearStart": fuelSharesBusYearStart,
      "yearEnd": fuelSharesBusYearEnd,
      "affectedArea": fuelSharesBusPopulationAffected,
    };
    setFuelSharesBus(fuelSharesBus);
    // bus end

    // fuel car start
    const fuelSharesCarTypes = {
      lpg,
      cng,
      ngv,
      hep,
      phev,
      hydrogenfuel,
      bioethanol,
      biodiesel,
      bifuel,
      other,
      electricity,
      petrol,
      diesel,
    };
    setFuelSharesCarTypes(fuelSharesCarTypes);

    const fuelSharesCar = {
      "types": fuelSharesCarTypes,
      "yearStart": fuelSharesCarYearStart,
      "yearEnd": fuelSharesCarYearEnd,
      "affectedArea": fuelSharesCarPopulationAffected,
    };
    setFuelSharesCar(fuelSharesCar);
    // fuel car end

    // electricity  start
    const electricityTransTypes = {
      renewables,
    };
    setElectricityTransTypes(electricityTransTypes);

    const electricityTransport = {
      "types": electricityTransTypes,
      "yearStart": electricityTransportYearStart,
      "yearEnd": electricityTransportYearEnd,
      "affectedArea": electricityTransportPopulationAffected,
    };
    setElectricityTransport(electricityTransport);

    // electricity end

    const policyQuantification = {
      passengerMobility,
      freightTransport,
      modalSplitPassenger,
      modalSplitFreight,
      fuelSharesBus,
      fuelSharesCar,
      electricityTransport
    };
    
    setPolicyQuantification(policyQuantification);

    const headers = {
      "Content-type": "application/json",
      "Access-Control-Allow-Origin": "*",
    };

    const raw = { baseline, newDevelopment, policyQuantification };
    setPolicyQuantificationTransportRequest(raw)

    // eslint-disable-next-line no-console
    // console.log("policy quantification", policyQuantification);

    // eslint-disable-next-line no-console
    // console.log("raw", baseline);


    axios
      .post(
        urlPrefix + "/api/v1/calculate/transport",
        headers,
        raw)
        // eslint-disable-next-line no-console
      .then((response) => {
            setPolicyQuantificationTransportResponse(response.data)
      })
      .catch((error) => {
        setU3Error({ errorMessage: error.message });
        // eslint-disable-next-line no-console
        console.error("There was an error!", errorU3);
      });

 { /* useEffect(() => {
    fetchPolicyData()
  },[]) */}

  };

  useEffect(() => {
   localStorage.setItem("policyQuantificationTransportResponse", JSON.stringify(policyQuantificationTransportResponse));
  }, [policyQuantificationTransportResponse]);

  useEffect(() => {
    localStorage.setItem(
      "policyQuantificationTransportRequest",
      JSON.stringify(policyQuantificationTransportRequest)
    );
  }, [policyQuantificationTransportRequest]);

   const gotoU3policies = () => {
    navigate("/u3policies", {
      replace: true,
    }); 
  };

        // eslint-disable-next-line no-console
        console.log("policyquantification response", policyQuantificationTransportResponse);
        // eslint-disable-next-line no-console
        console.log("policyquantification request", policyQuantificationTransportRequest);


    return (
      <Container maxWidth="xl">
      <article>
           <br/>
        <div>
          <Divider textAlign="left" flexItem>
            {" "}
            <Chip label="POLICY QUANTIFICATION" />
          </Divider>
          <br/>
          <Alert severity="info">
            This section estimates the impact of a planning policy on the
            transport-related greenhouse gas emissions.
          </Alert>
        </div>

        <section className="section-u3">
          <form onSubmit={createPolicyQuantification}>
            <div className="row_u3">
              <div className="div2">
                <Alert severity="info">
                  Does the planning policy reduce the need for motorized
                  passenger transport within the assessment area? Estimate the
                  change and the population affected below.
                </Alert>
              </div>
             {/*  passenger mobility section start */}
              <div className="column_u3" >
                <div>
                  {" "}
                  <label>
                    <b>Passenger mobility</b>
                  </label>
                </div>
                <div>
                  {" "}
                  <label>Change in passenger mobility %</label>
                </div>
                <Tooltip title="Start year is the first year during which the policy changes the need for motorized passenger transport within the area. The change is assumed permanent after the last year of implementation.">
                  <div>
                    <label>Policy period</label>
                    <div className="divspace">
                      <select
                        className="select_u3"
                        name="start_year"
                        onChange={handlePassengerMobilityYearStart}
                        value={passengerMobilityYearStart}
                        placeholder={passengerMobilityYearStart}
                        
                        required
                      >
                        <option value="DefaultOption">Select start year</option>
                        {optionsNew.map((option) => (
                          <option key={option} value={option}>
                            {option}{" "}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                    <select
                      className="select_u3"
                      name="finish_year"
                      onChange={handlePassengerMobilityYearEnd}
                      value={passengerMobilityYearEnd}
                      placeholder={passengerMobilityYearEnd}
                      
                      required
                    >
                      <option value="DefaultOption">Select end year</option>
                      {optionsNew.map((option) => (
                        <option key={option} value={option}>
                          {option}{" "}
                        </option>
                      ))}
                    </select>
                    </div>
                  </div>
                </Tooltip>
              </div>
              <Tooltip title="A reduction is inserted as a positive percentage.">
                <div className="column_u3">
                  <div>
                    {" "}
                    <label>Decrease in mobility</label>
                  </div>
                  <div>
                    {" "}
                    <input
                      id="inputspace"
                      type="number"
                      step="0.1"
                      placeholder={passengerMobilityExpectedChange}
                      value={passengerMobilityExpectedChange}
                      onChange={handlePassengerMobilityExpectedChange}

                      required
                    />
                  </div>
                </div>
              </Tooltip>
              <Tooltip title="Estimate the percentage of the population that is affected by the policy.">
                <div className="column_u3">
                  {/* <label className="space_holder"></label> */}
                  <label>Population affected</label>
                  <input
                    className="input_affected_area"
                    type="number"
                    step="0.1"
                    placeholder={populationAffectedPassengerMobility}
                    min="0"
                    max="100"
                    onChange={handlePopulationAffectedPassengerMobility}
                    value={populationAffectedPassengerMobility}
                    required
                  />
                </div>
              </Tooltip>
              <div className="column_u3"></div>
            </div>
            {/*  passenger mobility section end*/}

            {/*  freight transport section */}
            <div className="row_u3">
              <div className="div2">
                <Alert severity="info">
                  Does the planning policy reduce the freight transport within
                  the assessment area? Estimate the total change in the
                  assessment area below.
                </Alert>
              </div>
              <div className="column_u3">
                <div>
                  <label>
                    <b>Freight transport</b>
                  </label>
                </div>
                <div>
                  {" "}
                  <label>Change in freight transport %</label>
                </div>
                <Tooltip title="Start year is the first year during which the policy changes the volume of freight transport within the area. The change is assumed permanent after the last year of implementation.">
                  <div>
                    <div>
                      {" "}
                      <label>Policy period</label>
                    </div>
                    <div className="divspace">
                      <select
                        className="select_u3"
                        id="start_year"
                        name="start_year"
                        onChange={handleFreightTransportYearStart}
                        value={freightTransportYearStart}
                        required
                      >
                        <option value="DefaultOption">Select start year</option>
                        {optionsNew.map((option) => (
                          <option key={option} value={option}>
                            {option}{" "}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="divspace">
                      <select
                        className="select_u3"
                        id="finish_year"
                        name="finish_year"
                        onChange={handleFreightTransportYearEnd}
                        value={freightTransportYearEnd}
                        required
                      >
                        <option value="DefaultOption">Select end year</option>
                        {optionsNew.map((option) => (
                          <option key={option} value={option}>
                            {option}{" "}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </Tooltip>
              </div>
              <Tooltip title="A reduction is inserted as a positive percentage.">
                <div className="column_u3">
                  <label>Decrease in mobility</label>
                  <input
                    className="input_freight_change"
                    type="number"
                    step="0.1"
                    placeholder="0"
                    onChange={handleFreightTransportMobility}
                    value={freightTransportMobility}
                    required
                  />
                </div>
              </Tooltip>
              <div className="column_u3"></div>
              <div className="column_u3"></div>
            </div>
            {/*  freight transport section end */}

            <br />

            {/* modal split-passenger transport section start */}
            <div className="row_u3">
              <div className="div2">
                <Alert severity="info">
                  Does the planning policy change the modal split of the
                  passenger transport within the area? Select the policy
                  implementation period and insert the target percentages to be
                  achieved by the end of the last year of policy implementation.
                </Alert>
              </div>
              <div className="column_u3">
                <div>
                  <label>
                    <b>Modal split: Passenger transport</b>
                  </label>
                </div>
                <div>
                  <label>Share for bus</label>
                </div>
                <div>
                  <label>Share for metro</label>
                </div>
                <div>
                  <label>Share for tram</label>
                </div>
                <div>
                  <label>Share for train</label>
                </div>
                <div>
                  <label>Share for car</label>
                </div>
                <Tooltip title="Start year is the first year during which the policy changes the modal share. The change is assumed permanent after the last year of implementation period.">
                  <div>
                    <label>Policy period</label>
                    <div className="divspace">
                      <select
                        className="select_u3"
                        name="start_year"
                        onChange={handleModalSplitPassengerYearStart}
                        value={modalSplitPassengerYearStart}
                        required
                      >
                        <option value="DefaultOption">Select start year</option>
                        {optionsNew.map((option) => (
                          <option key={option} value={option}>
                            {option}{" "}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="divspace">
                      <select
                        className="select_u3"
                        name="finish_year"
                        onChange={handleModalSplitPassengerYearEnd}
                        value={modalSplitPassengerYearEnd}
                        required
                      >
                        <option value="DefaultOption">Select end year</option>
                        {optionsNew.map((option) => (
                          <option key={option} value={option}>
                            {option}{" "}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </Tooltip>
              </div>
              <Tooltip title="This column shows You the modal shares according to the baseline scenario.">
                <div className="column_u3">
                  <div>
                    {" "}
                    <label><b>Without policy</b></label>
                  </div>
                  <div>
                    <label>{emission.bus}</label>
                  </div>
                  <div>
                    <label>{emission.metro}</label>
                  </div>
                  <div>
                    <label>{emission.tram}</label>
                  </div>
                  <div>
                    <label>{emission.train}</label>
                  </div>
                  <div>
                    <label>{emission.car}</label>
                  </div>
                </div>
              </Tooltip>
              <Tooltip title="Insert the target percentages for public transportation. The remaining share is allocated to passenger car transport.">
                <div className="column_u3">
                  <label><b>Policy target %</b></label>
                  {/*  bus */}
                  <div>
                    <input
                    className="input_u3_planner"
                    type="number"
                    step="0.1"
                    // id="pass_policy_target"
                    placeholder="0"
                    min="0"
                    max="100"
                    // onChange={handlePassTransPolicyTarget}
                    onChange={handleBus}
                    value={bus}
                    required
                  />
                  </div>
                  
                  {/*  metro */}
                  <div>
                    {" "}
                    <input
                      type="number"
                      step="0.1"
                      className="input_u3_planner"
                      placeholder="0"
                      min="0"
                      max="100"
                      onChange={handleMetro}
                      value={metro}
                      required
                    />
                  </div>

                  {/*   tram */}
                  <div>
                    {" "}
                    <input
                      type="number"
                      step="0.1"
                      id="inputspace"
                      placeholder="0"
                      min="0"
                      max="100"
                      onChange={handleTram}
                      value={tram}
                      required
                    />
                  </div>

                  {/*  train */}
                  <div>
                    {" "}
                    <input
                      type="number"
                      step="0.1"
                      className="input_u3_planner"
                      placeholder="0"
                      min="0"
                      max="100"
                      onChange={handleTrain}
                      value={train}
                      required
                    />
                  </div>

                  {/*    car */}
                  <div>
                    {" "}
                    <input
                      type="number"
                      step="0.1"
                      className="input_u3_planner"
                      placeholder="0"
                      min="0"
                      max="100"
                      onChange={handleCar}
                      value={car}
                      required
                    />
                  </div>
                  <div>This is calculated automatically</div>
                </div>
              </Tooltip>
              <Tooltip title="Insert a percentage of population expected to change the modal share due to the planning policy. This share applies to the passenger transport of both residents and non-residents within the assessment area.">
                <div className="column_u3">
                  <label><b>Population affected</b></label>
                  <input
                    type="number"
                    step="0.1"
                    className="input_u3_planner"
                    placeholder="0"
                    min="0"
                    max="100"
                    onChange={handleModalSplitPassengerPopulationAffected}
                    value={modalSplitPassengerPopulationAffected}
                    required
                  />
                </div>
              </Tooltip>
            </div>
            {/* modal split-passenger transport section end */}
            <br />
            {/* modal split-freight transport section start */}
            <div className="row_u3">
              <div className="div2">
                <Alert severity="info">
                  Does the planning policy change the modal split of the freight
                  transport within the area? Select the policy implementation
                  period and insert the target percentages to be achieved by the
                  end of the last year of policy implementation.
                </Alert>
              </div>
              <div className="column_u3">
                <div>
                  <label>
                    <b>Modal split: Freight transport</b>
                  </label>
                </div>
                <div>
                  <label>Share for rail</label>
                </div>
                <div>
                  <label>Share for inland waterways</label>
                </div>
                <div>
                  <label>Share for road freight</label>
                </div>
                <Tooltip title="Start year is the first year during which the policy changes the modal share. The change is assumed permanent after the last year of implementation period.">
                  <div>
                    <label>Policy period</label>
                    <div className="divspace">
                      <select
                        className="select_u3"
                        name="start_year"
                        onChange={handleModalSplitFreightYearStart}
                        value={modalSplitFreightYearStart}
                        required
                      >
                        <option value="DefaultOption">Select start year</option>
                        {optionsNew.map((option) => (
                          <option key={option} value={option}>
                            {option}{" "}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="divspace">
                      <select
                        className="select_u3"
                        name="finish_year"
                        onChange={handleModalSplitFreightYearEnd}
                        value={modalSplitFreightYearEnd}
                        required
                      >
                        <option value="DefaultOption">Select end year</option>
                        {optionsNew.map((option) => (
                          <option key={option} value={option}>
                            {option}{" "}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </Tooltip>
              </div>
              <Tooltip title="This column shows You the modal shares according to the baseline scenario.">
                <div className="column_u3">
                  <div>
                    {" "}
                    <label>Without policy</label>
                  </div>
                  <div>
                    <label>{emission.rail_transport}</label>
                  </div>
                  <div>
                    <label>{emission.waterways_transport}</label>
                  </div>
                  <div>
                    <label>{emission.road_transport}</label>
                  </div>
                </div>
              </Tooltip>
              <Tooltip title="Insert the target percentages for the freight transport on rails and on waterways. The remaining share is allocated to road freight.">
                <div className="column_u3">
                  <label><b>Policy target %</b></label>
                  {/*  rail */}
                  <div>
                    <input
                    className="input_u3_planner"
                    type="number"
                    step="0.1"
                    // id="pass_policy_target"
                    placeholder="0"
                    min="0"
                    max="100"
                    onChange={handleRailTransport}
                    value={railTransport}
                    required
                  />
                  </div>
                  
                  {/*  water */}
                  <div>
                    {" "}
                    <input
                      type="number"
                      step="0.1"
                      className="input_u3_planner"
                      placeholder="0"
                      min="0"
                      max="100"
                      onChange={handleWaterwaysTransport}
                      value={waterwaysTransport}
                      required
                    />
                  </div>
                  
                  {/*   road */}
                  <div>
                    {" "}
                    <input
                      type="number"
                      step="0.1"
                      className="input_u3_planner"
                      placeholder="0"
                      min="0"
                      max="100"
                      onChange={handleRoadTransport}
                      value={roadTransport}
                      required
                    />
                  </div>
                  <div>
                    {" "}
                    <label>This is calculated automatically</label>
                  </div>
                </div>
              </Tooltip>
              {/*
                <Tooltip title="Insert a percentage of the area affected by the planning policy.">
                <div className="column_u3">
                  <label>% of Population Affected</label>
                  <input
                    className="input_u3_planner "
                    type="number"
                    step="0.1"
                    placeholder="0"
                    onChange={handleAffectedPopulation}
                    value={affectedPopulation}
                    required
                  />
                </div>
              </Tooltip>
              */}
              
            </div>
            {/* modal split-freight transport section end */}
            <br />
            {/* fuel-bus transport section start*/}
            <div className="row_u3">
              <div className="div2">
                <Alert severity="info">
                  Does the planning policy increase the use of low-carbon fuels
                  in the bus fleet that operates in the assessment area? Select
                  the policy implementation period and insert the target
                  percentages to be achieved by the end of the last year of
                  policy implementation.
                </Alert>
              </div>
              <div className="column_u3">
                <div>
                  {" "}
                  <label>
                    <b>Shares of fuel types in bus transport</b>{" "}
                  </label>
                </div>
                <div>
                  {" "}
                  <label>Petroleum products</label>
                </div>
                <div>
                  {" "}
                  <label>Liquified Petroleum Gas (LPG)</label>
                </div>
                <div>
                  {" "}
                  <label>Natural Gas (CNG)</label>
                </div>
                <div>
                  <label>Electricity</label>
                </div>
                <div>
                  {" "}
                  <label>Diesel</label>
                </div>
                <Tooltip title="Start year is the first year during which the policy starts to change the fuel shares. The change is assumed permanent after the last year of implementation period.">
                  <div>
                    <label>Policy period</label>
                    <div className="divspace">
                      <select
                        className="select_u3"
                        name="start_year"
                        onChange={handleFuelSharesBusYearStart}
                        value={fuelSharesBusYearStart}
                        required
                      >
                        <option value="DefaultOption">Select start year</option>
                        {optionsNew.map((option) => (
                          <option key={option} value={option}>
                            {option}{" "}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="divspace">
                      <select
                        className="select_u3"
                        name="finish_year"
                        onChange={handleFuelSharesBusYearEnd}
                        value={fuelSharesBusYearEnd}
                        required
                      >
                        <option value="DefaultOption">Select end year</option>
                        {optionsNew.map((option) => (
                          <option key={option} value={option}>
                            {option}{" "}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </Tooltip>
              </div>
              <Tooltip title="This column shows You the fuel shares in the bus fleet as in the baseline scenario.">
                <div className="column_u3">
                  <div>
                    {" "}
                    <label><b>Without policy</b></label>
                  </div>
                  <div>
                    {" "}
                    <label></label>
                  </div>
                  <div>
                    {" "}
                    <label></label>
                  </div>
                  <div>
                    {" "}
                    <label></label>
                  </div>
                  <div>
                    {" "}
                    <label></label>
                  </div>
                  <div>
                    {" "}
                    <label></label>
                  </div>
                </div>
              </Tooltip>
              <Tooltip title="Insert the target percentages for the fuel types used in the bus fleet by the end of the policy implementation period. The remaining share is allocated to diesel engines.">
                <div className="column_u3">
                  <div>
                    <label><b>Policy target %</b></label>
                  </div>
                  <div>
                    {" "}
                    <input
                      className="input_u3_planner "
                      type="number"
                      step="0.1"
                      // id="fre_policy_target"
                      placeholder="0.0"
                      min="0"
                      max="100"
                      onChange={handlePetrol}
                      value={petrol}
                      required
                    />
                  </div>
                  <div>
                    {" "}
                    <input
                      type="number"
                      step="0.1"
                      className="input_u3_planner "
                      id="bus_fuel_policy_target"
                      placeholder="0.0"
                      min="0"
                      max="100"
                      onChange={handleLpg}
                      value={lpg}
                      required
                    />
                  </div>
                  <div>
                    {" "}
                    <input
                      className="input_u3_planner "
                      type="number"
                      step="0.1"
                      id="bus_fuel_policy_target"
                      placeholder="0.0"
                      min="0"
                      max="100"
                      onChange={handleCng}
                      
                      value={cng}
                      required
                    />
                  </div>
                  <div>
                    <input
                      className="input_u3_planner "
                      type="number"
                      step="0.1"
                      id="bus_fuel_policy_target"
                      placeholder="0.0"
                      min="0"
                      max="100"
                      onChange={handleElectricity}
                      value={electricity}
                      required
                    />
                  </div>
                  <div>
                    <input
                      className="input_u3_planner "
                      type="number"
                      step="0.1"
                      id="bus_fuel_policy_target"
                      placeholder="0.0"
                      min="0"
                      max="100"
                      onChange={handleDiesel}
                      value={diesel}
                      required
                    />
                  </div>
                </div>
              </Tooltip>
              <Tooltip title="Insert a percentage of bus transport in the area affected by the planning policy.">
                <div className="column_u3">
                  <label>% of the area affeccted</label>
                  <input
                    className="input_u3_planner "
                    type="number"
                    step="0.1"
                    placeholder="0"
                    onChange={handleFuelSharesBusPopulationAffected}
                    value={fuelSharesBusPopulationAffected}
                    required
                  />
                </div>
              </Tooltip>
            </div>
            {/* fuel-bus transport section end */}

            {/* fuel-car transport section start*/}
            <div className="row_u3">
              <div className="div2">
                <Alert severity="info">
                  Does the planning policy increase the use of low-carbon fuels
                  in the passenger cars in the assessment area? Select the
                  policy implementation period and insert the target percentages
                  to be achieved by the end of the last year of policy
                  implementation.
                </Alert>
              </div>
              <div className="column_u3">
                <div>
                  {" "}
                  <label>
                    <b>Shares of fuel types in car transport</b>{" "}
                  </label>
                </div>
                <div>
                  {" "}
                  <label>Liquified Petroleum Gas (LPG)</label>
                </div>
                <div>
                  {" "}
                  <label>Natural Gas (CNG)</label>
                </div>
                <div>
                  {" "}
                  <label>Alternative Energy/biomethane NGV</label>
                </div>
                <div>
                  {" "}
                  <label>Hybrid electric-petrol</label>
                </div>
                <div>
                  {" "}
                  <label>Plug-in hybrid petrol-electric PHEV</label>
                </div>
                <div>
                  {" "}
                  <label>Hydrogen and fuel cells</label>
                </div>
                <div>
                  {" "}
                  <label>Bioethanol</label>
                </div>
                <div>
                  {" "}
                  <label>Bio-diesel</label>
                </div>
                <div>
                  {" "}
                  <label>Bi-fuel</label>
                </div>
                <div>
                  {" "}
                  <label>Other (unknown)</label>
                </div>
                <div>
                  {" "}
                  <label>Electricity BEV</label>
                </div>
                <div>
                  {" "}
                  <label>Petrol, according to country selection</label>
                </div>
                <div>
                  {" "}
                  <label>Diesel, according to country selection</label>
                </div>
                <Tooltip title="Insert the target percentages for the fuel types of the passenger car fleet by the end of the policy implementation period. The remaining share is allocated to petrol and diesel engines.">
                  <div>
                    <label>Policy period</label>
                    <div className="divspace">
                      <select
                        className="select_u3"
                        name="start_year"
                        onChange={handleFuelSharesCarYearStart}
                        value={fuelSharesCarYearStart}
                        
                        required
                      >
                        <option value="DefaultOption">Select start year</option>
                        {optionsNew.map((option) => (
                          <option key={option} value={option}>
                            {option}{" "}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="divspace">
                      <select
                        className="select_u3"
                        name="finish_year"
                        onChange={handleFuelSharesCarYearStart}
                        value={fuelSharesCarYearEnd}
                        required
                      >
                        <option value="DefaultOption">Select end year</option>
                        {optionsNew.map((option) => (
                          <option key={option} value={option}>
                            {option}{" "}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </Tooltip>
              </div>
              <Tooltip title="This column shows You the fuel shares in the passenger car fleet as in the baseline scenario.">
                <div className="column_u3">
                  <div>
                    {" "}
                    <label>Without policy</label>
                  </div>
                  <div>
                    {" "}
                    <label></label>
                  </div>
                  <div>
                    {" "}
                    <label></label>
                  </div>
                  <div>
                    {" "}
                    <label></label>
                  </div>
                  <div>
                    {" "}
                    <label></label>
                  </div>
                  <div>
                    {" "}
                    <label></label>
                  </div>
                  <div>
                    {" "}
                    <label></label>
                  </div>
                  <div>
                    {" "}
                    <label></label>
                  </div>
                  <div>
                    {" "}
                    <label></label>
                  </div>
                  <div>
                    {" "}
                    <label></label>
                  </div>
                  <div>
                    {" "}
                    <label></label>
                  </div>
                  <div>
                    {" "}
                    <label></label>
                  </div>
                  <div>
                    {" "}
                    <label></label>
                  </div>
                  <div>
                    {" "}
                    <label></label>
                  </div>
                </div>
              </Tooltip>
              <Tooltip title="Insert the target percentages for the fuel types of the passenger car fleet by the end of the policy implementation period. The remaining share is allocated to petrol and diesel engines.">
                <div className="column_u3">
                  <div>
                    <label>Policy target %</label>
                  </div>
                  <div>
                    {" "}
                    <input
                      className="input_u3_planner "
                      /*   id="inputspace" */
                      type="number"
                      step="0.1"
                      // id="fre_policy_target"
                      placeholder="0.0"
                      min="0"
                      max="100"
                      onChange={handleCarLpg}
                      value={carLpg}
                      required
                    />
                  </div>
                  <div>
                    {" "}
                    <input
                      // id="inputspace"
                      type="number"
                      step="0.1"
                      className="input_u3_planner "
                      id="bus_fuel_policy_target"
                      placeholder="0.0"
                      min="0"
                      max="100"
                      onChange={handleCarCng}
                      value={carCng}
                      required
                    />
                  </div>
                  <div>
                    {" "}
                    <input
                      className="input_u3_planner "
                      type="number"
                      step="0.1"
                      id="bus_fuel_policy_target"
                      placeholder="0.0"
                      min="0"
                      max="100"
                      onChange={handleNgv}
                      value={ngv}
                      required
                    />
                  </div>
                  <div>
                    <input
                      className="input_u3_planner "
                      type="number"
                      step="0.1"
                      id="bus_fuel_policy_target"
                      placeholder="0.0"
                      min="0"
                      max="100"
                      onChange={handleHep}
                      value={hep}
                      required
                    />
                  </div>
                  <div>
                    <input
                      className="input_u3_planner "
                      type="number"
                      step="0.1"
                      id="bus_fuel_policy_target"
                      placeholder="0.0"
                      min="0"
                      max="100"
                      onChange={handlePhev}
                      value={phev}
                      required
                    />
                  </div>
                  <div>
                    {" "}
                    <input
                      className="input_u3_planner "
                      /*   id="inputspace" */
                      type="number"
                      step="0.1"
                      // id="fre_policy_target"
                      placeholder="0.0"
                      min="0"
                      max="100"
                      onChange={handleHydrogenfuel}
                      value={hydrogenfuel}
                      required
                    />
                  </div>
                  <div>
                    {" "}
                    <input
                      // id="inputspace"
                      type="number"
                      step="0.1"
                      className="input_u3_planner "
                      id="bus_fuel_policy_target"
                      placeholder="0.0"
                      min="0"
                      max="100"
                      onChange={handleBioethanol}
                      value={bioethanol}
                      required
                    />
                  </div>
                  <div>
                    {" "}
                    <input
                      className="input_u3_planner "
                      type="number"
                      step="0.1"
                      id="bus_fuel_policy_target"
                      placeholder="0.0"
                      min="0"
                      max="100"
                      onChange={handleBiodiesel}
                      value={biodiesel}
                      required
                    />
                  </div>
                  <div>
                    <input
                      className="input_u3_planner "
                      type="number"
                      step="0.1"
                      id="bus_fuel_policy_target"
                      placeholder="0.0"
                      min="0"
                      max="100"
                      onChange={handleBifuel}
                      value={bifuel}
                      required
                    />
                  </div>
                  <div>
                    <input
                      className="input_u3_planner "
                      type="number"
                      step="0.1"
                      id="bus_fuel_policy_target"
                      placeholder="0.0"
                      min="0"
                      max="100"
                      onChange={handleOther}
                      value={other}
                      required
                    />
                  </div>
                  <div>
                    {" "}
                    <input
                      className="input_u3_planner "
                      type="number"
                      step="0.1"
                      id="bus_fuel_policy_target"
                      placeholder="0.0"
                      min="0"
                      max="100"
                      onChange={handleCarElectricity}
                      value={carElectricity}
                      required
                    />
                  </div>
                  <div>
                    {" "}
                    <input
                      className="input_u3_planner "
                      type="number"
                      step="0.1"
                      id="bus_fuel_policy_target"
                      placeholder="0.0"
                      min="0"
                      max="100"
                      onChange={handleCarPetrol}
                      value={carPetrol}
                      required
                    />
                  </div>

                  <div>
                    {" "}
                    <input
                      className="input_u3_planner "
                      type="number"
                      step="0.1"
                      id="bus_fuel_policy_target"
                      placeholder="0.0"
                      min="0"
                      max="100"
                      onChange={handleCarDiesel}
                      value={carDiesel}
                      required
                    />
                  </div>
                  <div>
                    <label>This is calculated automatically</label>
                  </div>
                </div>
              </Tooltip>
              <Tooltip title="Insert a percentage of passenger car transport in the area affected by the planning policy.">
                <div className="column_u3">
                  <label>% of the area affeccted</label>
                  <input
                    className="input_u3_planner "
                    type="number"
                    step="0.1"
                    placeholder="0"
                    onChange={handleFuelSharesCarPopulationAffected}
                    value={fuelSharesCarPopulationAffected}
                    required
                  />
                </div>
              </Tooltip>
            </div>
            {/* fuel-car transport section end */}
            <br />
            {/*  electricity for transport start */}
            <div className="row_u3">
              <div className="div2">
                <Alert severity="info">
                  Does the planning policy increase the share of renewable
                  energies in the electricity that is used in transport? Insert
                  a percentage that shows the additional share of renewable
                  electricity in comparison to the average grid electricity.
                </Alert>
              </div>
              <div className="column_u3">
                <div>
                  <label>
                    <b>Electricity for transport</b>
                  </label>
                </div>
                <div>
                  <label>Increase in the share of renewables</label>
                </div>
                <Tooltip title="Start year is the first year during which the share of renewables in transport electricity starts to increase. The change is assumed permanent after the last year of implementation period.">
                  <div>
                    <label>Policy period</label>
                    <div className="divspace">
                      <select
                        className="select_u3"
                        id="start_year"
                        name="start_year"
                        onChange={handleElectricityTransportYearStart}
                        value={electricityTransportYearStart}
                        
                        required
                      >
                        <option value="DefaultOption">Select start year</option>
                        {optionsNew.map((option) => (
                          <option key={option} value={option}>
                            {option}{" "}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="divspace">
                      <select
                        className="select_u3"
                        id="finish_year"
                        name="finish_year"
                        onChange={handleElectricityTransportYearEnd}
                        value={electricityTransportYearEnd}
                        
                        required
                      >
                        <option value="DefaultOption">Select end year</option>
                        {optionsNew.map((option) => (
                          <option key={option} value={option}>
                            {option}{" "}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </Tooltip>
              </div>
              <div className="column_u3">
                <label>gCO2e/kWh without policy</label>
              </div>
              <Tooltip title="Insert the percentage of renewable energies that is produced locally for the transport electricity. Positive percentage improves the electricity mix and reduces the greenhouse gas emissions.">
                <div className="column_u3">
                  <label><b>Reduction</b></label>
                  <input
                    className="input_u3_planner"
                    type="number"
                    step="0.1"
                    // id="car_fuel_policy_target"
                    placeholder="0"
                    onChange={handleRenewables}
                    value={renewables}
                    required
                  />
                </div>
              </Tooltip>
              <Tooltip title="Insert a percentage of transport in the area affected by the policy.">
                <div className="column_u3">
                  <label>% of the area affected</label>
                  <input
                    type="number"
                    step="0.1"
                    id="electricity_trans_affected_area"
                    placeholder="0"
                    min="0"
                    max="100"
                    onChange={handleElectricityTransportPopulationAffected}
                    value={electricityTransportPopulationAffected}
                    required
                  />
                </div>
              </Tooltip>
            </div>
            {/*  electricity for transport end */}

            <br />
            <div className="backButtonNew">
              <Button
                size="small"
                value="backProjections"
                onClick={() =>
                  navigate("../u2planner", { replace: true })
                }
                label="&laquo; Previous"
                secondary="true"
              />
            </div>
            {/* here is button for submitting */}

            <div className="nextU3Button">
              <Button
                size="small"
                value="nextU3policies"
                onClick={gotoU3policies}
                label="Next &raquo;"
                primary
              />
            </div>
            <div className="">
              <Button
                size="small"
                // value="nextU3policies"
                onClick={createPolicyQuantification}
                label="Submit"
                type="Submit"
                primary
              />
            </div>
          </form>
        </section>
      </article>
      </Container>
    );
};
