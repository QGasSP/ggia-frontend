import React, { useState, useEffect } from "react";
import { Button } from "./Button";
import "../css/u3planner.css";
import "../css/u1planner.css";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";
import axios from "axios";
import urlPrefix from "../Config";
import Alert from "@mui/material/Alert";
import Tooltip from "@mui/material/Tooltip";
import {useNavigate} from "react-router-dom";
import { useStorageFloat, useStorageInt, useStorageString } from "../reducers/useStorage";
import { Container, CircularProgress } from "@mui/material";

/**
 * U3 planner component for user inputs for policy quantification
 * @return {}
 */

// let isMounted = true

export const U3planner = () => {
  const navigate = useNavigate();

  // get items 
  const base= JSON.parse(localStorage.getItem("baseline"));
  const year = JSON.parse(localStorage.getItem("year"))
  const baseline = base.baseline;
  const newDevelopment = JSON.parse(localStorage.getItem("newDevelopment"));
  const modalSplitPercentage = JSON.parse(localStorage.getItem("modalSplitPercentage"));
  const busPropulsionShare = JSON.parse(localStorage.getItem("busPropulsionShare"));
  const carPropulsionShare = JSON.parse(localStorage.getItem("carPropulsionShare"));
  const transportElectricityConsumption = JSON.parse(localStorage.getItem("transportElectricityConsumption"));

  // policy quantification response / request
  const [policyQuantification, setPolicyQuantification] = useStorageString("policyQuantification","");
  const [policyQuantificationTransportResponse, setPolicyQuantificationTransportResponse] = useState(() => {
    const savedBasline = localStorage.getItem("policyQuantificationTransportResponse");
    const initialValue = JSON.parse(savedBasline);
    return initialValue || {};
  });

  const [absolutePolicyQuantification, setAbsolutePolicyQuantification] = useState(() => {
    const savedBasline = localStorage.getItem("absolutePolicyQuantification");
    const initialValue = JSON.parse(savedBasline);
    return initialValue || {};
  });
  const [policyQuantificationTransportRequest, setPolicyQuantificationTransportRequest] = useState({});

  const [errorU3, setU3Error] = useState("");
  const [loadingStyles, setLoadingStyle] = useState({
    display: "none",
  });

  // passenger mobility
  const [passengerMobility, setPassengerMobility] =  useStorageString("passengerMobility","");
  const [populationAffectedPassengerMobility, setPopulationAffectedPassengerMobility] = useStorageInt("populationAffectedPassengerMobility",0);
  const [passengerMobilityYearStart, setPassengerMobilityYearStart]= useStorageInt("passengerMobilityYearStart", year);
  const [passengerMobilityYearEnd, setPassengerMobilityYearEnd]= useStorageInt("passengerMobilityYearEnd", 2050);
  const [passengerMobilityExpectedChange, setPassengerMobilityExpectedChange] = useStorageInt("passengerMobilityExpectedChange", 0)
  // passenger mobility end

  // freight transport start
  const [freightTransport, setFreightTransport] = useStorageString("freightTransport","");
  const [freightTransportMobility, setFreightTransportMobility] = useStorageInt("freightTransportMobility", 0)
  const [freightTransportYearStart, setFreightTransportYearStart] = useStorageInt("freightTransportYearStart", year)
  const [freightTransportYearEnd, setFreightTransportYearEnd] = useStorageInt("freightTransportYearEnd", 2050)
  // freight transport end

  // modal split-passanger section starts
  const [modalPassShares, setModalPassShares] = useStorageString("modalPassShares","");
  const [modalSplitPassenger, setModalSplitPassenger] = useStorageString("modalSplitPassenger","");
  const [bus, setBus] = useStorageFloat("buses", 0);
  const [metro, setMetro] = useStorageFloat("metros", 0);
  const [tram, setTram] = useStorageFloat("trams", 0);
  const [train, setTrain] = useStorageFloat("trains", 0);
  const [car, setCar] = useStorageFloat("cars", 0);
  const [totalPassengerTransport, setTotalPassengerTransport] = useStorageFloat("totalPassengerTransport", 0)
  const [modalSplitPassengerPopulationAffected, setModalSplitPassengerPopulationAffected] = useStorageInt("modalSplitPassengerPopulationAffected", 0)
  const [modalSplitPassengerYearStart, setModalSplitPassengerYearStart] = useStorageInt("modalSplitPassengerYearStart", year)
  const [modalSplitPassengerYearEnd, setModalSplitPassengerYearEnd] = useStorageInt("modalSplitPassengerYearEnd", 2050)
  // modal split-passanger section end


  // modal split freight transport start
  const [railTransport, setRailTransport] = useStorageFloat("railTransport", 0);
  const [waterwaysTransport, setWaterwaysTransport] = useStorageFloat("waterwaysTransport", 0);
  const [roadTransport, setRoadTransport] = useStorageFloat("roadTransport", 0);
  const [totalFreightTransport, setTotalFreightTransport] = useStorageFloat("totalFreightTransport", 0)
  const [modalFreShares, setModalFreightShares] = useStorageString("modalFreShares","");
  const [modalSplitFreight, setModalSplitFreight] = useStorageString("modalSplitFreight","");
  const [modalSplitFreightYearStart, setModalSplitFreightYearStart] = useStorageInt("modalSplitFreightYearStart", year)
  const [modalSplitFreightYearEnd, setModalSplitFreightYearEnd] = useStorageInt("modalSplitFreightYearEnd", 2050)
  // modal split freight transport end

  
  // Shares of fuel types in bus transport start
  const [lpg, setLpg] = useStorageFloat("lpg",0);
  const [cng, setCng] = useStorageFloat("cng",0);
  const [electricity, setElectricity] = useStorageFloat("electricity",0);
  const [petrol, setPetrol] = useStorageFloat("petrol",0);
  const [diesel, setDiesel] = useStorageFloat("diesel",0);
  const [totalFuelBus, setTotalFuelBus] = useStorageFloat("totalFuelBus", 0)
  const [fuelSharesBusTypes, setFuelSharesBusTypes] = useStorageString("fuelSharesBusTypes","");
  const [fuelSharesBus, setFuelSharesBus] = useStorageString("fuelShareBus","");
  const [fuelSharesBusYearStart, setFuelSharesBusYearStart] = useStorageInt("fuelSharesBusYearStart", year)
  const [fuelSharesBusYearEnd, setFuelSharesBusYearEnd] = useStorageInt("fuelSharesBusYearEnd", 2050)
  const [fuelSharesBusPopulationAffected, setFuelSharesBusPopulationAffected] = useStorageInt("fuelSharesBusPopulationAffected", 0)
  // fuel shares bus end


  // shares of fuel types in car transport start
  const [fuelSharesCarTypes, setFuelSharesCarTypes] = useStorageString("fuelSharesCarTypes","");
  const [fuelSharesCar, setFuelSharesCar] = useStorageString("fuelSharesCar","");
  const [fuelSharesCarYearStart, setFuelSharesCarYearStart] = useStorageInt("fuelSharesCarYearStart", year);
  const [fuelSharesCarYearEnd, setFuelSharesCarYearEnd] = useStorageInt("fuelSharesCarYearEnd", 2050);
  const [fuelSharesCarPopulationAffected, setFuelSharesCarPopulationAffected] = useStorageInt("fuelSharesCarPopulationAffected", 0);
  const [carLpg, setCarLpg] = useStorageFloat("carLpg", 0)
  const [carCng, setCarCng] = useStorageFloat("carCng", 0)
  const [carElectricity, setCarElectricity] = useStorageFloat("carElectricity", 0)
  const [carPetrol, setCarPetrol] = useStorageFloat("carPetrol",0);
  const [carDiesel, setCarDiesel] = useStorageFloat("carDiesel",0);
  const [ngv, setNgv] = useStorageFloat("ngv",0);
  const [hep, setHep] = useStorageFloat("hep",0);
  const [phev, setPhev] = useStorageFloat("phev",0);
  const [hydrogenfuel, setHydrogenfuel] = useStorageFloat("hydrogenfuel",0);
  const [bioethanol, setBioethanol] = useStorageFloat("bioethanol",0);
  const [biodiesel, setBiodiesel] = useStorageFloat("biodiesel",0);
  const [bifuel, setBifuel] = useStorageFloat("bifuel",0);
  const [other, setOther] = useStorageFloat("other",0);
  const [dEhybrid, setDeHybrid] = useStorageFloat("dEhybrid", 0)
  const [dEphev, setDePhev] = useStorageFloat("dEphev", 0)
  const [totalCarFuelShares, setTotalCarFuelShares] = useStorageFloat("totalCarFuelShares", 0)                                              
  
  // shares of fuel types in car transport end
  
  // electricity transportation renewables start
  const [renewables, setRenewables] = useStorageInt("renewables",0);
  const [electricityTransTypes, setElectricityTransTypes] = useStorageString("electricityTransTypes","");
  const [electricityTransport, setElectricityTransport] = useStorageString("electricityTransport","");
  const [electricityTransportYearStart, setElectricityTransportYearStart] = useStorageInt("electricityTransportYearStart", year)
  const [electricityTransportYearEnd, setElectricityTransportYearEnd] = useStorageInt("electricityTransportYearEnd", 2050)
  const [electricityTransportPopulationAffected, setElectricityTransportPopulationAffected] = useStorageInt("electricityTransportPopulationAffected", 0)

  const optionsNew = [];
  for (let i = year; i < 2051; i++) optionsNew.push(i);

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
    const totalWithoutCarPassenger = bus + train + metro + tram
    e.preventDefault();
    setCar(100.00 - totalWithoutCarPassenger);
  };

  const getCurrentTotalPassenger = () => {
    setTotalPassengerTransport(bus + metro + train + tram + car) 
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
    const totalWithoutRoad = railTransport + waterwaysTransport
    setRoadTransport(100.00 - totalWithoutRoad);
  };

  const handleModalSplitFreightYearStart = (e) => {
    e.preventDefault();
    setModalSplitFreightYearStart(Number(e.target.value))
  }

  const handleModalSplitFreightYearEnd = (e) => {
    e.preventDefault();
    setModalSplitFreightYearEnd(Number(e.target.value))
  }

  const getCurrentTotalFreightTransport = () => {
    setTotalFreightTransport(roadTransport + waterwaysTransport + railTransport)
  };


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
    const totalNoDiesel = petrol + lpg + cng + electricity
    setDiesel(100 - totalNoDiesel);
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

  const getFuelBusTotal = () => {
    setTotalFuelBus(petrol+lpg+cng+electricity+diesel)
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
   if (carPropulsionShare[fuelSharesCarYearEnd].petrol === undefined &&
      carPropulsionShare[fuelSharesCarYearEnd].diesel === undefined ){
        setCarPetrol(0)
      } else {
      const fuelCarTotal = carLpg + carCng + ngv + hep + phev + dEhybrid + dEphev + hydrogenfuel + biodiesel + bioethanol + bifuel + other + carElectricity
      const getCarPetrol = carPropulsionShare[fuelSharesCarYearEnd].petrol / (carPropulsionShare[fuelSharesCarYearEnd].petrol + carPropulsionShare[fuelSharesCarYearEnd].diesel) * ( 100 - fuelCarTotal)
      setCarPetrol(getCarPetrol);
      }
};

const handleCarDiesel = e => {
  e.preventDefault();
   if (carPropulsionShare[fuelSharesCarYearEnd].petrol === undefined &&
      carPropulsionShare[fuelSharesCarYearEnd].diesel === undefined ){
        setCarDiesel(0)
      } else {
      const fuelCarTotal = carLpg + carCng + ngv + hep + phev + dEhybrid + dEphev + hydrogenfuel + biodiesel + bioethanol + bifuel + other + carElectricity
      const getCarPetrol = carPropulsionShare[fuelSharesCarYearEnd].petrol / (carPropulsionShare[fuelSharesCarYearEnd].petrol + carPropulsionShare[fuelSharesCarYearEnd].diesel) * ( 100 - fuelCarTotal)
      const getCarDiesel = ( 100 - (fuelCarTotal + getCarPetrol))
      setCarDiesel(getCarDiesel);
      }
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

const handleDeHybrid = (e) => {
  e.preventDefault();
  setDeHybrid(Number(e.target.value))
}

const handleDePhev = (e) => {
  e.preventDefault();
  setDePhev(Number(e.target.value));
}

const getCarFuelTotal = () => {

  setTotalCarFuelShares(carLpg + carCng + ngv + hep + phev + dEhybrid + dEphev + hydrogenfuel + biodiesel + bioethanol + bifuel + other + carElectricity + carDiesel + carPetrol)
}

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


  const createPolicyQuantification = () => {

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
      "lpg": carLpg,
      "cng": carCng,
      "ngv": ngv,
      "p_e_hybrid": hep,
      "p_e_phev": phev,
      "d_e_hybrid": dEhybrid,
      "d_e_phev": dEphev,
      "hydrogen_fuel": hydrogenfuel,
      "bioethanol": bioethanol,
      "biodiesel": biodiesel,
      "bifuel": bifuel,
      "other": other,
      "electricity_bev": carElectricity
      // petrol,
      // diesel,
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


     setLoadingStyle({
        display: "block",
      })

      axios
      .post(
        urlPrefix + "/api/v1/calculate/transport",
        raw,
        headers)
      .then((response) => {
        setPolicyQuantificationTransportResponse(response.data.data.policy_quantification)
        setAbsolutePolicyQuantification(response.data.data.absolute_policy_quantification)
      })
      .then(() => {
      setLoadingStyle({
        display: "none",
      });
    })
      .catch((error) => {
        setU3Error({ errorMessage: error.message });
        // eslint-disable-next-line no-console
        console.error("There was an error!", errorU3);
      });
  }

   useEffect(async () => {
    createPolicyQuantification();
  }, []);

  useEffect(async () => {
   localStorage.setItem("policyQuantificationTransportResponse", JSON.stringify(policyQuantificationTransportResponse)) 
   localStorage.setItem("absolutePolicyQuantification", JSON.stringify(absolutePolicyQuantification));
   localStorage.setItem("policyQuantificationTransportRequest", JSON.stringify(policyQuantificationTransportRequest)); 
  }, [policyQuantificationTransportResponse, absolutePolicyQuantification, policyQuantificationTransportRequest]);

   const gotoU3policies = () => {
    navigate("/u3policies", {
      replace: true,
    }); 
  };

  const handleSubmit = async (e) => {
    await createPolicyQuantification(e.preventDefault());
    await gotoU3policies();
  }

    return (
      <Container maxWidth="xl">
      <article>
           <br/>
        <div className="heading" style={{marginBottom: "15px"}}>
          <h2>Policy quantification input</h2>
          <br/>
         </div>
          <Alert severity="info">
            This section estimates the impact of a planning policy on the
            transport-related greenhouse gas emissions.
          </Alert>
        <br/>
        <section className="section-u3">
          <form onSubmit={createPolicyQuantification}>
            
              <div className="div2">
                <Alert severity="info">
                  Does the planning policy reduce the need for motorized
                  passenger transport within the assessment area? Estimate the
                  change and the population affected below.
                </Alert>
              </div>
             {/*  passenger mobility section start */}
              
            <div>
              <table style={{width:"100%", margin:"20px"}}>
                <thead>
                  <tr>
                  <th>Passenger mobility</th>
                  <Tooltip title="A reduction is inserted as a positive percentage.">
                  <th>Decrease in mobility</th>
                  </Tooltip>
                  <Tooltip title="Estimate the percentage of the population that is affected by the policy.">
                  <th>% Population affected</th>
                  </Tooltip>
                  <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Change in passenger mobility %</td>
                    <td><input
                      className="input-u3"
                      type="number"
                      step="0.1"
                      placeholder={passengerMobilityExpectedChange}
                      value={passengerMobilityExpectedChange}
                      onChange={handlePassengerMobilityExpectedChange}
                      required
                    /></td>
                    <td>
                       <input
                    className="input-u3"
                    type="number"
                    step="0.1"
                    placeholder={populationAffectedPassengerMobility}
                    min="0.00"
                    max="100"
                    onChange={handlePopulationAffectedPassengerMobility}
                    value={populationAffectedPassengerMobility}
                    required
                  />
                    </td>
                  </tr>
                   <Tooltip title="Start year is the first year during which the policy changes the need for motorized passenger transport within the area. The change is assumed permanent after the last year of implementation.">
                  <tr>
                    <td><b>Policy period</b></td>
                    <td><b>Start year{" "}</b>{" "}
                        <select
                        className="select_u3"
                        name="start_year"
                        onChange={handlePassengerMobilityYearStart}
                        defaultValue={passengerMobilityYearStart}
                        required
                      >
                        <option value="DefaultOption">{year}</option>
                        {optionsNew.map((option) => (
                          <option key={option} value={option}>
                            {option}{" "}
                          </option>
                        ))}
                      </select>
                      <b>End year{" "}</b>{" "}<select
                      className="select_u3"
                      name="finish_year"
                      onChange={handlePassengerMobilityYearEnd}
                      defaultValue={passengerMobilityYearEnd}
                      
                      required
                    >
                      <option value="DefaultOption">{passengerMobilityYearEnd}</option>
                      {optionsNew.map((option) => (
                        <option key={option} value={option}>
                          {option}{" "}
                        </option>
                      ))}
                    </select></td>
                  </tr>
                  </Tooltip>
                </tbody>
              </table>
            </div>
            

           
            {/*  passenger mobility section end*/}

            {/*  freight transport section */}
            
              <div className="div2">
                <Alert severity="info">
                  Does the planning policy reduce the freight transport within
                  the assessment area? Estimate the total change in the
                  assessment area below.
                </Alert>
              </div>
              <br/>
              <div>
                <table style={{width:"100%", margin:"20px"}}>
                  <thead>
                    <tr>
                      <th>Freight transport</th>
                      <Tooltip title="A reduction is inserted as a positive percentage.">
                      <th>Decrease in mobility</th>
                      </Tooltip>
                      <th></th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Change in freight transport %</td>
                       <td><input
                      className="input-u3"
                      type="number"
                      step="0.1"
                      placeholder="0"
                      onChange={handleFreightTransportMobility}
                      value={freightTransportMobility}
                      required
                    /></td>
                    </tr>
                   
                    <Tooltip title="Start year is the first year during which the policy changes the volume of freight transport within the area. The change is assumed permanent after the last year of implementation.">
                    <tr>
                      <td><b>Policy period</b></td>
                      <td><b>Start year{" "}</b>{" "}<select
                          className="select_u3"
                          id="start_year"
                          name="start_year"
                          onChange={handleFreightTransportYearStart}
                          defaultValue={freightTransportYearStart}
                          required
                        >
                          <option value="DefaultOption">{year}</option>
                          {optionsNew.map((option) => (
                            <option key={option} value={option}>
                              {option}{" "}
                            </option>
                          ))}
                        </select>
                        
                          <b>End year {" "}</b>{" "}
                          <select
                          className="select_u3"
                          id="finish_year"
                          name="finish_year"
                          onChange={handleFreightTransportYearEnd}
                          defaultValue={freightTransportYearEnd}
                          required
                        >
                          <option value="DefaultOption">{freightTransportYearEnd}</option>
                          {optionsNew.map((option) => (
                            <option key={option} value={option}>
                              {option}{" "}
                            </option>
                          ))}
                        </select>
                        </td>
                    </tr>
                    </Tooltip>
                    <tr>
                      <td></td>
                      <td>
                        
                        </td>
                    </tr>
                    
                  </tbody>
                </table>
              </div>
            {/*  freight transport section end */}

            <br />

            {/* modal split-passenger transport section start */}
            
              <div className="div2">
                <Alert severity="info">
                  Does the planning policy change the modal split of the
                  passenger transport within the area? Select the policy
                  implementation period and insert the target percentages to be
                  achieved by the end of the last year of policy implementation.
                </Alert>
              </div>
              <div>
              <table style={{width:"100%", margin:"20px"}} >
                <thead>
                  <tr>
                    <th>Modal split: Passenger transport</th>
                    <Tooltip title="This column shows You the modal shares according to the baseline scenario.">
                    {modalSplitPassengerYearEnd === 0 ? <th>% Without policy </th> : <th>% Without policy in {modalSplitPassengerYearEnd}</th>}
                    </Tooltip>
                    <Tooltip title="Insert the target percentages for public transportation. The remaining share is allocated to passenger car transport.">
                    <th>Policy target %</th>
                    </Tooltip>
                    <Tooltip title="Insert a percentage of population expected to change the modal share due to the planning policy. This share applies to the passenger transport of both residents and non-residents within the assessment area.">
                    <th>Population affected %</th>
                    </Tooltip>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Share for bus</td>
                    <td>{modalSplitPercentage.passenger_transport[modalSplitPassengerYearEnd] === undefined ?
                     "" : modalSplitPercentage.passenger_transport[modalSplitPassengerYearEnd].bus.toFixed(2)}</td>
                    <td> <input
                    className="input-u3"
                    type="number"
                    step="0.1"
                    // id="pass_policy_target"
                    placeholder="0"
                    min="0.00"
                    max="100"
                    onChange={handleBus}
                    onMouseLeave={getCurrentTotalPassenger}
                    onMouseOver={handleCar}
                    value={bus}
                    required
                  /></td>
                  <td><input
                    type="number"
                    step="0.1"
                    className="input-u3"
                    placeholder="0"
                    min="0.00"
                    max="100"
                    onChange={handleModalSplitPassengerPopulationAffected}
                    value={modalSplitPassengerPopulationAffected}
                    onMouseOver={handleCar}
                    required
                  /></td>
                  </tr>
                  <tr>
                    <td>Share for metro</td>
                    <td>{modalSplitPercentage.passenger_transport[modalSplitPassengerYearEnd] === undefined ?
                     "" : modalSplitPercentage.passenger_transport[modalSplitPassengerYearEnd].metro.toFixed(2)}</td>
                    <td><input
                      type="number"
                      step="0.1"
                      className="input-u3"
                      placeholder="0"
                      min="0.00"
                      max="100"
                      onChange={handleMetro}
                      onMouseLeave={getCurrentTotalPassenger}
                      onMouseOver={handleCar}
                      value={metro}
                      required
                    /></td>
                  </tr>
                  <tr>
                    <td>Share for tram</td>
                    <td>{modalSplitPercentage.passenger_transport[modalSplitPassengerYearEnd] === undefined ?
                     "" : modalSplitPercentage.passenger_transport[modalSplitPassengerYearEnd].tram.toFixed(2)}</td>
                    <td> <input
                      type="number"
                      step="0.1"
                      className="input-u3"
                      placeholder="0"
                      min="0.00"
                      max="100"
                      onChange={handleTram}
                      onMouseLeave={getCurrentTotalPassenger}
                      onMouseOver={handleCar}
                      value={tram}
                      required
                    /></td>
                  </tr>
                  <tr>
                    <td>Share for train</td>
                    <td>{modalSplitPercentage.passenger_transport[modalSplitPassengerYearEnd] === undefined ?
                     "" : modalSplitPercentage.passenger_transport[modalSplitPassengerYearEnd].train.toFixed(2)}</td>
                    <td><input
                      type="number"
                      className="input-u3"
                      placeholder="0"
                      step="0.1"
                      min="0.00"
                      onChange={handleTrain}
                      onMouseLeave={getCurrentTotalPassenger}
                      onMouseOver={handleCar}
                      value={train}
                      required
                    /></td>
                  </tr>
                  <tr>
                    <td>Share for car</td>
                    <td>{modalSplitPercentage.passenger_transport[modalSplitPassengerYearEnd] === undefined ?
                     "" : modalSplitPercentage.passenger_transport[modalSplitPassengerYearEnd].car.toFixed(2)}</td>
                    <td><input
                      type="number"
                      className="input-u3"
                      placeholder="0"
                      onMouseOver={handleCar}
                      value={car <= 100 && car >= 0 ? car : 0}
                      disabled
                    /></td>
                  </tr>
                  <tr>
                    <td>Total</td>
                    <td></td>
                    {totalPassengerTransport === 100 ? <td>{totalPassengerTransport}%</td> : <td>Error: Total value needs to equal to 100%</td>} 
                  </tr>
                  <Tooltip title="Start year is the first year during which the policy changes the modal share. The change is assumed permanent after the last year of implementation period.">
                  <tr>
                    <td><b>Policy period</b></td>
                    <td><b>Start year{" "}</b>{" "}<select
                        className="select_u3"
                        name="start_year"
                        onChange={handleModalSplitPassengerYearStart}
                        defaultValue={modalSplitPassengerYearStart}
                        required
                      >
                        <option value="DefaultOption">{year}</option>
                        {optionsNew.map((option) => (
                          <option key={option} value={option}>
                            {option}{" "}
                          </option>
                        ))}
                      </select>
                    <b>End year{" "}</b>{" "}<select
                        className="select_u3"
                        name="finish_year"
                        onChange={handleModalSplitPassengerYearEnd}
                        defaultValue={modalSplitPassengerYearEnd}
                        required
                      >
                        <option value="DefaultOption">{modalSplitPassengerYearEnd}</option>
                        {optionsNew.map((option) => (
                          <option key={option} value={option}>
                            {option}{" "}
                          </option>
                        ))}
                      </select></td>
                  </tr>
                  </Tooltip>
                </tbody>
              </table>
              </div>
            {/* modal split-passenger transport section end */}
            <br />
            {/* modal split-freight transport section start */}
              <div className="div2">
                <Alert severity="info">
                  Does the planning policy change the modal split of the freight
                  transport within the area? Select the policy implementation
                  period and insert the target percentages to be achieved by the
                  end of the last year of policy implementation.
                </Alert>
              </div>
            <div>
              <table style={{width:"100%", margin:"20px"}} onMouseOver={handleRoadTransport} onMouseDown={getCurrentTotalFreightTransport}>
                <thead>
                  <tr>
                    <th>Modal split: Freight transport</th>
                    <Tooltip title="This column shows You the modal shares according to the baseline scenario.">
                    {modalSplitFreightYearEnd === 0 ? <th>% Without policy</th> : <th>% Without policy in {modalSplitFreightYearEnd}</th>}
                    </Tooltip>
                    <Tooltip title="Insert the target percentages for the freight transport on rails and on waterways. The remaining share is allocated to road freight.">
                    <th>Policy target %</th>
                    </Tooltip>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Share for rail</td>
                    <td>{modalSplitPercentage.freight_transport[freightTransportYearEnd] === undefined ?
                     "" : modalSplitPercentage.freight_transport[freightTransportYearEnd].rail_transport.toFixed(2)}</td>
                    <td><input
                    className="input-u3"
                    type="number"
                    step="0.01"
                    placeholder="0"
                    min="0.00"
                    max="100"
                    onChange={handleRailTransport}
                    onMouseOver={handleRoadTransport}
                    value={railTransport}
                    required
                  /></td>
                  </tr>
                  <tr>
                    <td>Share for inland waterways</td>
                    <td>{modalSplitPercentage.freight_transport[freightTransportYearEnd] === undefined ?
                     "" : modalSplitPercentage.freight_transport[freightTransportYearEnd].waterways_transport.toFixed(2)}</td>
                    <td><input
                      type="number"
                      step="0.1"
                      className="input-u3"
                      placeholder="0"
                      min="0.00"
                      max="100"
                      onChange={handleWaterwaysTransport}
                      onMouseOver={handleRoadTransport}
                      onMouseLeave={getCurrentTotalFreightTransport}
                      value={waterwaysTransport}
                      required
                    /></td>
                  </tr>
                  <tr>
                    <td>Share for road freight</td>
                    <td>{modalSplitPercentage.freight_transport[freightTransportYearEnd] === undefined ?
                     "" : modalSplitPercentage.freight_transport[freightTransportYearEnd].road_transport.toFixed(2)}</td>
                    <td><input
                      type="number"
                      step="0.1"
                      className="input-u3"
                      placeholder="0"
                      min="0.00"
                      max="100"
                      onMouseOver={handleRoadTransport}
                      onMouseLeave={getCurrentTotalFreightTransport}
                      value={roadTransport <= 100 && roadTransport >= 0 ? roadTransport : 0}
                      disabled
                    /></td>
                  </tr>
                  <tr>
                    <td>Total</td>
                    <td></td>
                    {totalFreightTransport === 100 ? <td>{totalFreightTransport}%</td> : <td>Error: Total value needs to equal to 100%</td>}
                  </tr>
                  <Tooltip title="Start year is the first year during which the policy changes the modal share. The change is assumed permanent after the last year of implementation period.">
                  <tr>
                    <td><b>Policy period</b></td>
                    <td><b>Start year{" "}</b>{" "}<select
                        className="select_u3"
                        name="start_year"
                        onChange={handleModalSplitFreightYearStart}
                        defaultValue={modalSplitFreightYearStart}
                        required
                      >
                        <option value="DefaultOption">{year}</option>
                        {optionsNew.map((option) => (
                          <option key={option} value={option}>
                            {option}{" "}
                          </option>
                        ))}
                      </select>
                    <b>End year{" "}</b>{" "}<select
                        className="select_u3"
                        name="finish_year"
                        onChange={handleModalSplitFreightYearEnd}
                        defaultValue={modalSplitFreightYearEnd}
                        required
                      >
                        <option value="DefaultOption">{modalSplitFreightYearEnd}</option>
                        {optionsNew.map((option) => (
                          <option key={option} value={option}>
                            {option}{" "}
                          </option>
                        ))}
                      </select></td>
                  </tr>
                  </Tooltip>
                </tbody>
              </table>
            </div>
            {/* modal split-freight transport section end */}
            <br />
            {/* fuel-bus transport section start*/}
              <div>
              <div className="div2">
                <Alert severity="info">
                  Does the planning policy increase the use of low-carbon fuels
                  in the bus fleet that operates in the assessment area? Select
                  the policy implementation period and insert the target
                  percentages to be achieved by the end of the last year of
                  policy implementation.
                </Alert>
              </div>
              <br/>
              <div>
              <table  style={{width:"100%", margin:"20px"}}>
                <thead>
                  <tr>
                    <th>Shares of fuel types in bus transport</th>
                    <Tooltip title="This column shows You the fuel shares in the bus fleet as in the baseline scenario.">
                    {fuelSharesBusYearEnd === 0 ? <th>% Without policy</th> : <th>% Without policy in {fuelSharesBusYearEnd}</th>}
                    </Tooltip>
                    <Tooltip title="Insert the target percentages for the fuel types used in the bus fleet by the end of the policy implementation period. The remaining share is allocated to diesel engines.">
                    <th>Policy target %</th>
                    </Tooltip>
                    <Tooltip title="Insert a percentage of bus transport in the area affected by the planning policy.">
                    <th>% of the area affected</th>
                    </Tooltip>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Petroleum products</td>
                    <td>{busPropulsionShare[fuelSharesBusYearEnd] === undefined ?
                     "" : busPropulsionShare[fuelSharesBusYearEnd].petrol.toFixed(2)}</td>
                    <td><input
                      className="input-u3"
                      type="number"
                      step="0.1"
                      placeholder="0.0"
                      min="0.00"
                      max="100"
                      onMouseLeave={getFuelBusTotal}
                      onChange={handlePetrol}
                      onMouseOver={handleDiesel}
                      value={petrol}
                      required
                    /></td>
                    <td><input
                    className="input-u3"
                    type="number"
                    step="0.1"
                    placeholder="0"
                    onChange={handleFuelSharesBusPopulationAffected}
                    value={fuelSharesBusPopulationAffected}
                    required
                  /></td>
                  </tr>

                  <tr>
                    <td>Liquified Petroleum Gas (LPG)</td>
                    <td>{busPropulsionShare[fuelSharesBusYearEnd] === undefined ?
                     "" : busPropulsionShare[fuelSharesBusYearEnd].lpg.toFixed(2)}</td>
                    <td><input
                      type="number"
                      step="0.1"
                      className="input-u3"
                      id="bus_fuel_policy_target"
                      placeholder="0.0"
                      min="0.00"
                      max="100"
                      onMouseLeave={getFuelBusTotal}
                      onChange={handleLpg}
                      onMouseOver={handleDiesel}
                      value={lpg}
                      required
                    /></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>Natural Gas (CNG)</td>
                    <td>{busPropulsionShare[fuelSharesBusYearEnd] === undefined ?
                     "" : busPropulsionShare[fuelSharesBusYearEnd].cng.toFixed(2)}</td>
                    <td><input
                      className="input-u3"
                      type="number"
                      step="0.1"
                      id="bus_fuel_policy_target"
                      placeholder="0.0"
                      min="0.00"
                      max="100"
                      onMouseLeave={getFuelBusTotal}
                      onChange={handleCng}
                      onMouseOver={handleDiesel}
                      value={cng}
                      required
                    /></td>
                  </tr>

                  <tr>
                    <td>Electricity</td>
                    <td>{busPropulsionShare[fuelSharesBusYearEnd] === undefined ?
                     "" : busPropulsionShare[fuelSharesBusYearEnd].electricity.toFixed(2)}</td>
                    <td><input
                      className="input-u3"
                      type="number"
                      step="0.1"
                      id="bus_fuel_policy_target"
                      placeholder="0.0"
                      min="0.00"
                      max="100"
                      onMouseLeave={getFuelBusTotal}
                      onChange={handleElectricity}
                      onMouseOver={handleDiesel}
                      value={electricity}
                      required
                    /></td>
                  </tr>

                  <tr>
                    <td>Diesel</td>
                    <td>{busPropulsionShare[fuelSharesBusYearEnd] === undefined ?
                     "" : busPropulsionShare[fuelSharesBusYearEnd].diesel.toFixed(2)}</td>
                    <td><input
                      className="input-u3"
                      type="number"
                      step="0.1"
                      id="bus_fuel_policy_target"
                      placeholder="0.0"
                      min="0.00"
                      max="100"
                      onMouseLeave={getFuelBusTotal}
                      onMouseOver={handleDiesel}
                      value={diesel <= 100 && diesel >= 0 ? diesel : 0}
                      disabled
                    /></td>
                  </tr>
                  <tr>
                    <td>Total</td>
                    <td></td>
                    {totalFuelBus === 100 ? <td>{totalFuelBus} %</td> : <td>Error: Total value needs to equal to 100%</td>}
                  </tr>
                  
                  <Tooltip title="Start year is the first year during which the policy starts to change the fuel shares. The change is assumed permanent after the last year of implementation period.">
                  <tr>
                     <td>
                      <b>Policy period</b>
                    </td>

                    <td><b>Start year{" "}</b>{" "}
                      <select
                        className="select_u3"
                        name="finish_year"
                        onChange={handleFuelSharesBusYearStart}
                        defaultValue={fuelSharesBusYearStart}
                        required
                      >
                        <option value="DefaultOption">{year}</option>
                        {optionsNew.map((option) => (
                          <option key={option} value={option}>
                            {option}{" "}
                          </option>
                        ))}
                      </select>
                    <b>End year{" "}</b>{" "}   
                      <select
                        className="select_u3"
                        name="finish_year"
                        onChange={handleFuelSharesBusYearEnd}
                        defaultValue={fuelSharesBusYearEnd}
                        required
                      >
                        <option value="DefaultOption">{fuelSharesBusYearEnd}</option>
                        {optionsNew.map((option) => (
                          <option key={option} value={option}>
                            {option}{" "}
                          </option>
                        ))}
                      </select>
                    </td>
                  </tr>
                  </Tooltip>
                </tbody>
              </table>
              </div>
              </div>
              <br/>
            {/* fuel-bus transport section end */}

            {/* fuel-car transport section start*/}
            
              <div className="div2">
                <Alert severity="info">
                  Does the planning policy increase the use of low-carbon fuels
                  in the passenger cars in the assessment area? Select the
                  policy implementation period and insert the target percentages
                  to be achieved by the end of the last year of policy
                  implementation.
                </Alert>
              </div>
              <div>
                <table  style={{width:"100%", margin:"20px"}}>
                  <thead>
                    <tr>
                      <th>Shares of fuel types in car transport</th>
                      <Tooltip title="This column shows You the fuel shares in the passenger car fleet as in the baseline scenario.">
                      {fuelSharesCarYearEnd === 0 ? <th>% Without policy</th> : <th>% Without policy in {fuelSharesCarYearEnd}</th>}
                      </Tooltip>
                      <Tooltip title="Insert the target percentages for the fuel types of the passenger car fleet by the end of the policy implementation period. The remaining share is allocated to petrol and diesel engines.">
                      <th>Policy target %</th>
                      </Tooltip>

                      <th>% of the area affected</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Liquified Petroleum Gas (LPG)</td>
                      <td>{carPropulsionShare[fuelSharesCarYearEnd] === undefined ?
                       "" : carPropulsionShare[fuelSharesCarYearEnd].lpg.toFixed(2)}</td>
                      <td> <input
                      className="input-u3"
                      type="number"
                      step="0.1"
                      placeholder="0.0"
                      min="0.00"
                      max="100"
                      onMouseLeave={getCarFuelTotal}
                      onChange={handleCarLpg}
                      value={carLpg}
                      required
                      /></td>
                      <td>
                        <Tooltip title="Insert a percentage of passenger car transport in the area affected by the planning policy.">
                
                      <input
                        className="input-u3"
                        type="number"
                        step="0.1"
                        placeholder="0"
                        onChange={handleFuelSharesCarPopulationAffected}
                        value={fuelSharesCarPopulationAffected}
                        required
                      />
                      </Tooltip></td>
                    </tr>

                    <tr>
                      <td>Natural Gas (CNG)</td>
                      <td>{carPropulsionShare[fuelSharesCarYearEnd] === undefined ?
                       "" : carPropulsionShare[fuelSharesCarYearEnd].cng.toFixed(2)}</td>
                      <td><input
                      type="number"
                      step="0.1"
                      className="input-u3"
                      id="bus_fuel_policy_target"
                      placeholder="0.0"
                      min="0.00"
                      max="100"
                      onMouseLeave={getCarFuelTotal}
                      onChange={handleCarCng}
                      value={carCng}
                      required
                    /></td>
                    </tr>

                    <tr>
                      <td>Alternative Energy/biomethane NGV</td>
                      <td>{carPropulsionShare[fuelSharesCarYearEnd] === undefined ?
                       "" : carPropulsionShare[fuelSharesCarYearEnd].ngv.toFixed(2)}</td>
                      <td><input
                      className="input-u3"
                      type="number"
                      step="0.1"
                      placeholder="0.0"
                      min="0.00"
                      max="100"
                      onMouseLeave={getCarFuelTotal}
                      onChange={handleNgv}
                      value={ngv}
                      required
                    /></td>
                    </tr>

                    <tr>
                      <td>Petrol-electric hybrid</td>
                      <td>{carPropulsionShare[fuelSharesCarYearEnd] === undefined ?
                       "" : carPropulsionShare[fuelSharesCarYearEnd].p_e_hybrid.toFixed(2)}</td>
                      <td> <input
                      className="input-u3"
                      type="number"
                      step="0.1"
                      placeholder="0.0"
                      min="0.00"
                      max="100"
                      onMouseLeave={getCarFuelTotal}
                      onChange={handleHep}
                      value={hep}
                      required
                    /></td>
                    </tr>

                    <tr>
                      <td>Petrol-electric plug-in hybrid (PHEV)</td>
                      <td>{carPropulsionShare[fuelSharesCarYearEnd] === undefined ?
                       "" : carPropulsionShare[fuelSharesCarYearEnd].p_e_phev.toFixed(2)}</td>
                      <td><input
                      className="input-u3"
                      type="number"
                      step="0.1"
                      placeholder="0.0"
                      min="0.00"
                      max="100"
                      onMouseLeave={getCarFuelTotal}
                      onChange={handlePhev}
                      value={phev}
                      required
                    /></td>
                    </tr>

                    <tr>
                      <td>Diesel-electric hybrid</td>
                      <td>{carPropulsionShare[fuelSharesCarYearEnd] === undefined ?
                       "" : carPropulsionShare[fuelSharesCarYearEnd].d_e_hybrid.toFixed(2)}</td>
                      <td><input
                      className="input-u3"
                      type="number"
                      step="0.1"
                      placeholder="0.0"
                      min="0.00"
                      max="100"
                      onMouseLeave={getCarFuelTotal}
                      onChange={handleDeHybrid}
                      value={dEhybrid}
                      required
                    /></td>
                    </tr>

                     <tr>
                      <td>Diesel-electric plug-in hybrid (PHEV)</td>
                      <td>{carPropulsionShare[fuelSharesCarYearEnd] === undefined ?
                       "" : carPropulsionShare[fuelSharesCarYearEnd].d_e_phev.toFixed(2)}</td>
                      <td><input
                      className="input-u3"
                      type="number"
                      step="0.1"
                      placeholder="0.0"
                      min="0.00"
                      max="100"
                      onMouseLeave={getCarFuelTotal}
                      onChange={handleDePhev}
                      value={dEphev}
                      required
                    /></td>
                    </tr>

                    <tr>
                      <td>Hydrogen and fuel cells</td>
                      <td>{carPropulsionShare[fuelSharesCarYearEnd] === undefined ?
                       "" : carPropulsionShare[fuelSharesCarYearEnd].hydrogen_fuel.toFixed(2)}</td>
                      <td><input
                      className="input-u3"
                      type="number"
                      step="0.1"
                      placeholder="0.0"
                      min="0.00"
                      max="100"
                      onMouseLeave={getCarFuelTotal}
                      onChange={handleHydrogenfuel}
                      value={hydrogenfuel}
                      required
                    /></td>
                    </tr>

                    <tr>
                      <td>Bioethanol</td>
                      <td>{carPropulsionShare[fuelSharesCarYearEnd] === undefined ?
                       "" : carPropulsionShare[fuelSharesCarYearEnd].bioethanol.toFixed(2)}</td>
                      <td><input
                      type="number"
                      step="0.1"
                      className="input-u3"
                      placeholder="0.0"
                      min="0.00"
                      max="100"
                      onMouseLeave={getCarFuelTotal}
                      onChange={handleBioethanol}
                      value={bioethanol}
                      required
                    /></td>
                    </tr>

                    <tr>
                      <td>Bio-diesel</td>
                      <td>{carPropulsionShare[fuelSharesCarYearEnd] === undefined ?
                       "" : carPropulsionShare[fuelSharesCarYearEnd].biodiesel.toFixed(2)}</td>
                      <td><input
                      className="input-u3"
                      type="number"
                      step="0.1"
                      placeholder="0.0"
                      min="0.00"
                      max="100"
                      onMouseLeave={getCarFuelTotal}
                      onChange={handleBiodiesel}
                      value={biodiesel}
                      required
                    /></td>
                    </tr>

                    <tr>
                      <td>Bi-fuel</td>
                      <td>{carPropulsionShare[fuelSharesCarYearEnd] === undefined ?
                       "" : carPropulsionShare[fuelSharesCarYearEnd].bifuel.toFixed(2)}</td>
                      <td><input
                      className="input-u3"
                      type="number"
                      step="0.1"
                      placeholder="0.0"
                      min="0.00"
                      max="100"
                      onMouseLeave={getCarFuelTotal}
                      onChange={handleBifuel}
                      value={bifuel}
                      required
                    /></td>
                    </tr>

                    <tr>
                      <td>Other (unknown)</td>
                      <td>{carPropulsionShare[fuelSharesCarYearEnd] === undefined ?
                       "" : carPropulsionShare[fuelSharesCarYearEnd].other.toFixed(2)}</td>
                      <td> <input
                      className="input-u3"
                      type="number"
                      step="0.1"
                      placeholder="0.0"
                      min="0.00"
                      max="100"
                      onMouseLeave={getCarFuelTotal}
                      onChange={handleOther}
                      value={other}
                      required
                      />
                      </td>
                    </tr>

                    <tr>
                      <td>Electricity BEV</td>
                      <td>{carPropulsionShare[fuelSharesCarYearEnd] === undefined ?
                       "" : carPropulsionShare[fuelSharesCarYearEnd].electricity_bev.toFixed(2)}</td>
                      <td><input
                      className="input-u3"
                      type="number"
                      step="0.1"
                      placeholder="0.0"
                      min="0.00"
                      max="100"
                      onMouseLeave={getCarFuelTotal}
                      onChange={handleCarElectricity}
                      value={carElectricity}
                      required
                      /></td>
                    </tr>

                   <tr>
                      <td>Petrol, according to country selection</td>
                      <td>{carPropulsionShare[fuelSharesCarYearEnd] === undefined ?
                       "" : carPropulsionShare[fuelSharesCarYearEnd].petrol.toFixed(2)}</td>
                      <td><input
                      className="input-u3"
                      type="number"
                      step="0.1"
                      placeholder="0.0"
                      min="0.00"
                      max="100"
                      onMouseLeave={getCarFuelTotal}
                      onMouseOver={handleCarPetrol}
                      value={carPetrol <= 100 && carPetrol >= 0 ? carPetrol.toFixed(2) : 0}
                      disabled
                      /></td>
                    </tr>

                    <tr>
                      <td>Diesel, according to country selection</td>
                      <td>{carPropulsionShare[fuelSharesCarYearEnd] === undefined ?
                       "" : carPropulsionShare[fuelSharesCarYearEnd].diesel.toFixed(2)}</td>
                      <td><input
                      className="input-u3"
                      type="number"
                      step="0.1"
                      placeholder="0.0"
                      min="0.00"
                      max="100"
                      onMouseLeave={getCarFuelTotal}
                      onMouseOver={handleCarDiesel}
                      value={carDiesel <= 100 && carDiesel >= 0 ? carDiesel.toFixed(2) : 0}
                      disabled
                    /></td>
                    </tr>

                    <tr>
                      <td>Total</td>
                      <td></td>
                      {totalPassengerTransport === 100 ? <td>{totalPassengerTransport}%</td> : <td>Error: Total value needs to equal to 100%</td>} 
                    </tr> 

                    <tr>
                      <td><b>Policy period</b></td>
                      <td><b>Start year {" "}</b>{" "}<select
                        className="select_u3"
                        name="start_year"
                        onChange={handleFuelSharesCarYearStart}
                        defaultValue={fuelSharesCarYearStart}
                        type="year"
                        required
                      >
                        <option value="DefaultOption">{year}</option>
                        {optionsNew.map((option) => (
                          <option key={option} value={option}>
                            {option}{" "}
                          </option>
                        ))}
                      </select>
                      <b>End year{" "}</b>{" "}<select
                        className="select_u3"
                        name="finish_year"
                        type="year"
                        onChange={handleFuelSharesCarYearEnd}
                        defaultValue={fuelSharesCarYearEnd}
                        required
                      >
                        <option value="DefaultOption">{fuelSharesCarYearEnd}</option>
                        {optionsNew.map((option) => (
                          <option key={option} value={option}>
                            {option}{" "}
                          </option>
                        ))}
                      </select></td>
                    </tr>

                  </tbody>
                </table>
              </div>
      
            {/* fuel-car transport section end */}
            <br />
            {/*  electricity for transport start */}
              <div className="div2">
                <Alert severity="info">
                  Does the planning policy increase the share of renewable
                  energies in the electricity that is used in transport? Insert
                  a percentage that shows the additional share of renewable
                  electricity in comparison to the average grid electricity.
                </Alert>
              </div>
            <div>
              <table style={{width:"100%", margin:"20px"}}>
                <thead>
                  <tr>
                    <th>Electricity for transport</th>
                    {electricityTransportYearEnd === 0 ? <th>gCO2e/kWh without policy</th> : <th>gCO2e/kWh without policy in {electricityTransportYearEnd}</th>}
                    <Tooltip title="Insert the percentage of renewable energies that is produced locally for the transport electricity. Positive percentage improves the electricity mix and reduces the greenhouse gas emissions.">
                    <th>Renewables %</th>
                    </Tooltip>
                     <Tooltip title="Insert a percentage of transport in the area affected by the policy.">
                    <th>% of the area affected</th>
                    </Tooltip>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>Increase in renewables in transport electricty</td>
                    <td>{transportElectricityConsumption[electricityTransportYearEnd] === undefined ?
                     "" :transportElectricityConsumption[electricityTransportYearEnd]}</td>
                    <td><input
                    className="input-u3"
                    type="number"
                    step="0.1"
                    min="0.00"
                    placeholder="0"
                    onChange={handleRenewables}
                    value={renewables}
                    required
                  /></td>
                  <td><input
                    type="number"
                    step="0.1"
                    className="input-u3"
                    placeholder="0"
                    min="0.00"
                    max="100"
                    onChange={handleElectricityTransportPopulationAffected}
                    value={electricityTransportPopulationAffected}
                    required
                  /></td>
                  </tr>
                  <Tooltip title="Start year is the first year during which the share of renewables in transport electricity starts to increase. The change is assumed permanent after the last year of implementation period.">
                  <tr>
                    <td><b>Policy period</b></td>
                    <td><b>Start year{" "}</b>{" "}<select
                        className="select_u3"
                        id="start_year"
                        name="start_year"
                        onChange={handleElectricityTransportYearStart}
                        defaultValue={electricityTransportYearStart}
                        required
                      >
                        <option value="DefaultOption">{year}</option>
                        {optionsNew.map((option) => (
                          <option key={option} value={option}>
                            {option}{" "}
                          </option>
                        ))}
                      </select>
                      <b>End year{" "}</b>{" "}<select
                        className="select_u3"
                        id="finish_year"
                        name="finish_year"
                        onChange={handleElectricityTransportYearEnd}
                        defaultValue={electricityTransportYearEnd}
                        required
                      >
                        <option value="DefaultOption">{electricityTransportYearEnd}</option>
                        {optionsNew.map((option) => (
                          <option key={option} value={option}>
                            {option}{" "}
                          </option>
                        ))}
                      </select></td>
                  </tr>
                  </Tooltip>
                </tbody>
              </table>
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
            
          </form>

          {Object.keys(policyQuantificationTransportResponse).length !== 0 &&
                        (
                <div className="nextU3Button">
                <Button
                  size="small"
                  value="nextU3policies"
                  onClick={handleSubmit}
                  label="Next &raquo;"
                  type="Submit"
                  primary
                />
            </div>
                )}
        </section>
      </article>
      </Container>
    );
};
