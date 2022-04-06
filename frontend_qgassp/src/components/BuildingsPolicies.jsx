import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button } from "./Button";
import "../css/u2planner.css";
import "../css/newbuildings.css";
import { BuildingsPoliciesCharts } from "./BuildingsPoliciesCharts";
import Chip from "@mui/material/Chip";
import Divider from "@mui/material/Divider";

/**
 * BuildingsPolicies user input form
 * @return {}
 */

 export const BuildingsPolicies = ({
   country,
    year,
  }) => {
     
  // RESIDENTIAL units

  // firstResidentSelector
  // #region 
    const [firstResidentSelectorResidentialUnit, setFirstResidentSelectorResidentialUnit] = useState('');
    const [firstResidentSelectorUnits, setFirstResidentSelectorUnits] = useState(parseInt(0));
    const [firstResidentSelectorIndicativeBefore, setFirstResidentSelectorIndicativeBefore] = useState('');
    const [firstResidentSelectorIndicativeAfter, setFirstResidentSelectorIndicativeAfter] = useState('');
    const [firstResidentSelectorStartYear, setFirstResidentSelectorStartYear] = useState(Number(year));
    const [firstResidentSelectorEndYear, setFirstResidentSelectorEndYear] = useState(Number(year));
    const [firstResidentSelectorEnergy, setFirstResidentSelectorEnergy] = useState(parseInt(0));
  // #endregion

  // secondResidentSelector
  // #region 
    const [secondResidentSelectorResidentialUnit, setSecondResidentSelectorResidentialUnit] = useState('');
    const [secondResidentSelectorUnits, setSecondResidentSelectorUnits] = useState(parseInt(0));
    const [secondResidentSelectorIndicativeBefore, setSecondResidentSelectorIndicativeBefore] = useState('');
    const [secondResidentSelectorIndicativeAfter, setSecondResidentSelectorIndicativeAfter] = useState('');
    const [secondResidentSelectorStartYear, setSecondResidentSelectorStartYear] = useState(Number(year));
    const [secondResidentSelectorEndYear, setSecondResidentSelectorEndYear] = useState(Number(year));
    const [secondResidentSelectorEnergy, setSecondResidentSelectorEnergy] = useState(parseInt(0));
  // #endregion

  // thirdResidentSelector
  // #region 
    const [thirdResidentSelectorResidentialUnit, setThirdResidentSelectorResidentialUnit] = useState('');
    const [thirdResidentSelectorUnits, setThirdResidentSelectorUnits] = useState(parseInt(0));
    const [thirdResidentSelectorIndicativeBefore, setThirdResidentSelectorIndicativeBefore] = useState('');
    const [thirdResidentSelectorIndicativeAfter, setThirdResidentSelectorIndicativeAfter] = useState('');
    const [thirdResidentSelectorStartYear, setThirdResidentSelectorStartYear] = useState(Number(year));
    const [thirdResidentSelectorEndYear, setThirdResidentSelectorEndYear] = useState(Number(year));
    const [thirdResidentSelectorEnergy, setThirdResidentSelectorEnergy] = useState(parseInt(0));
  // #endregion

  // fourthResidentSelector
  // #region 
    const [fourthResidentSelectorResidentialUnit, setFourthResidentSelectorResidentialUnit] = useState('');
    const [fourthResidentSelectorUnits, setFourthResidentSelectorUnits] = useState(parseInt(0));
    const [fourthResidentSelectorIndicativeBefore, setFourthResidentSelectorIndicativeBefore] = useState('');
    const [fourthResidentSelectorIndicativeAfter, setFourthResidentSelectorIndicativeAfter] = useState('');
    const [fourthResidentSelectorStartYear, setFourthResidentSelectorStartYear] = useState(Number(year));
    const [fourthResidentSelectorEndYear, setFourthResidentSelectorEndYear] = useState(Number(year));
    const [fourthResidentSelectorEnergy, setFourthResidentSelectorEnergy] = useState(parseInt(0));
  // #endregion

  // fifthResidentSelector
  // #region 
    const [fifthResidentSelectorResidentialUnit, setFifthResidentSelectorResidentialUnit] = useState('');
    const [fifthResidentSelectorUnits, setFifthResidentSelectorUnits] = useState(parseInt(0));
    const [fifthResidentSelectorIndicativeBefore, setFifthResidentSelectorIndicativeBefore] = useState('');
    const [fifthResidentSelectorIndicativeAfter, setFifthResidentSelectorIndicativeAfter] = useState('');
    const [fifthResidentSelectorStartYear, setFifthResidentSelectorStartYear] = useState(Number(year));
    const [fifthResidentSelectorEndYear, setFifthResidentSelectorEndYear] = useState(Number(year));
    const [fifthResidentSelectorEnergy, setFifthResidentSelectorEnergy] = useState(parseInt(0));
  // #endregion

  // sixthResidentSelector
  // #region 
    const [sixthResidentSelectorResidentialUnit, setSixthResidentSelectorResidentialUnit] = useState('');
    const [sixthResidentSelectorUnits, setSixthResidentSelectorUnits] = useState(parseInt(0));
    const [sixthResidentSelectorIndicativeBefore, setSixthResidentSelectorIndicativeBefore] = useState('');
    const [sixthResidentSelectorIndicativeAfter, setSixthResidentSelectorIndicativeAfter] = useState('');
    const [sixthResidentSelectorStartYear, setSixthResidentSelectorStartYear] = useState(Number(year));
    const [sixthResidentSelectorEndYear, setSixthResidentSelectorEndYear] = useState(Number(year));
    const [sixthResidentSelectorEnergy, setSixthResidentSelectorEnergy] = useState(parseInt(0));
  // #endregion
  
    // FirstResidentSelector handlers
    // #region 
    const handleFirstResidentSelectorResidentialUnit = (e) => {
      setFirstResidentSelectorResidentialUnit(e.target.value);
    };
    const handleFirstResidentSelectorUnits = (e) => {
      setFirstResidentSelectorUnits(parseInt(e.target.value));
    };
    const handleFirstResidentSelectorIndicativeBefore = (e) => {
      setFirstResidentSelectorIndicativeBefore(e.target.value);
    };
    const handleFirstResidentSelectorIndicativeAfter = (e) => {
      setFirstResidentSelectorIndicativeAfter(e.target.value);
    };
    const handleFirstResidentSelectorStartYear = (e) => {
      setFirstResidentSelectorStartYear(Number(e.target.value));
    };
    const handleFirstResidentSelectorEndYear = (e) => {
      setFirstResidentSelectorEndYear(Number(e.target.value));
    };
    const handleFirstResidentSelectorEnergy = (e) => {
      setFirstResidentSelectorEnergy(parseInt(e.target.value));
    };
    // #endregion
    
    // SecondResidentSelector handlers
    // #region 
    const handleSecondResidentSelectorResidentialUnit = (e) => {
      setSecondResidentSelectorResidentialUnit(e.target.value);
    };
    const handleSecondResidentSelectorUnits = (e) => {
      setSecondResidentSelectorUnits(parseInt(e.target.value));
    };
    const handleSecondResidentSelectorIndicativeBefore = (e) => {
      setSecondResidentSelectorIndicativeBefore(e.target.value);
    };
    const handleSecondResidentSelectorIndicativeAfter = (e) => {
      setSecondResidentSelectorIndicativeAfter(e.target.value);
    };
    const handleSecondResidentSelectorStartYear = (e) => {
      setSecondResidentSelectorStartYear(Number(e.target.value));
    };
    const handleSecondResidentSelectorEndYear = (e) => {
      setSecondResidentSelectorEndYear(Number(e.target.value));
    };
    const handleSecondResidentSelectorEnergy = (e) => {
      setSecondResidentSelectorEnergy(parseInt(e.target.value));
    };
    // #endregion
  
    // ThirdResidentSelector handlers
    // #region 
    const handleThirdResidentSelectorResidentialUnit = (e) => {
      setThirdResidentSelectorResidentialUnit(e.target.value);
    };
    const handleThirdResidentSelectorUnits = (e) => {
      setThirdResidentSelectorUnits(parseInt(e.target.value));
    };
    const handleThirdResidentSelectorIndicativeBefore = (e) => {
      setThirdResidentSelectorIndicativeBefore(e.target.value);
    };
    const handleThirdResidentSelectorIndicativeAfter = (e) => {
      setThirdResidentSelectorIndicativeAfter(e.target.value);
    };
    const handleThirdResidentSelectorStartYear = (e) => {
      setThirdResidentSelectorStartYear(Number(e.target.value));
    };
    const handleThirdResidentSelectorEndYear = (e) => {
      setThirdResidentSelectorEndYear(Number(e.target.value));
    };
    const handleThirdResidentSelectorEnergy = (e) => {
      setThirdResidentSelectorEnergy(parseInt(e.target.value));
    };
    // #endregion

    // FourthResidentSelector handlers
    // #region 
    const handleFourthResidentSelectorResidentialUnit = (e) => {
      setFourthResidentSelectorResidentialUnit(e.target.value);
    };
    const handleFourthResidentSelectorUnits = (e) => {
      setFourthResidentSelectorUnits(parseInt(e.target.value));
    };
    const handleFourthResidentSelectorIndicativeBefore = (e) => {
      setFourthResidentSelectorIndicativeBefore(e.target.value);
    };
    const handleFourthResidentSelectorIndicativeAfter = (e) => {
      setFourthResidentSelectorIndicativeAfter(e.target.value);
    };
    const handleFourthResidentSelectorStartYear = (e) => {
      setFourthResidentSelectorStartYear(Number(e.target.value));
    };
    const handleFourthResidentSelectorEndYear = (e) => {
      setFourthResidentSelectorEndYear(Number(e.target.value));
    };
    const handleFourthResidentSelectorEnergy = (e) => {
      setFourthResidentSelectorEnergy(parseInt(e.target.value));
    };
    // #endregion

    // FifthResidentSelector handlers
    // #region 
    const handleFifthResidentSelectorResidentialUnit = (e) => {
      setFifthResidentSelectorResidentialUnit(e.target.value);
    };
    const handleFifthResidentSelectorUnits = (e) => {
      setFifthResidentSelectorUnits(parseInt(e.target.value));
    };
    const handleFifthResidentSelectorIndicativeBefore = (e) => {
      setFifthResidentSelectorIndicativeBefore(e.target.value);
    };
    const handleFifthResidentSelectorIndicativeAfter = (e) => {
      setFifthResidentSelectorIndicativeAfter(e.target.value);
    };
    const handleFifthResidentSelectorStartYear = (e) => {
      setFifthResidentSelectorStartYear(Number(e.target.value));
    };
    const handleFifthResidentSelectorEndYear = (e) => {
      setFifthResidentSelectorEndYear(Number(e.target.value));
    };
    const handleFifthResidentSelectorEnergy = (e) => {
      setFifthResidentSelectorEnergy(parseInt(e.target.value));
    };
    // #endregion

    // SixthResidentSelector handlers
    // #region 
    const handleSixthResidentSelectorResidentialUnit = (e) => {
      setSixthResidentSelectorResidentialUnit(e.target.value);
    };
    const handleSixthResidentSelectorUnits = (e) => {
      setSixthResidentSelectorUnits(parseInt(e.target.value));
    };
    const handleSixthResidentSelectorIndicativeBefore = (e) => {
      setSixthResidentSelectorIndicativeBefore(e.target.value);
    };
    const handleSixthResidentSelectorIndicativeAfter = (e) => {
      setSixthResidentSelectorIndicativeAfter(e.target.value);
    };
    const handleSixthResidentSelectorStartYear = (e) => {
      setSixthResidentSelectorStartYear(Number(e.target.value));
    };
    const handleSixthResidentSelectorEndYear = (e) => {
      setSixthResidentSelectorEndYear(Number(e.target.value));
    };
    const handleSixthResidentSelectorEnergy = (e) => {
      setSixthResidentSelectorEnergy(parseInt(e.target.value));
    };
    // #endregion

    // COMMERCIAL buildings

    // firstCommercialSelector
    // #region 
    const [firstCommercialSelectorBuildingType, setFirstCommercialSelectorBuildingType] = useState('');
    const [firstCommercialSelectorArea, setFirstCommercialSelectorArea] = useState(parseInt(0));
    const [firstCommercialSelectorReduction, setFirstCommercialSelectorReduction] = useState(parseInt(0));
    const [firstCommercialSelectorStartYear, setFirstCommercialSelectorStartYear] = useState(Number(year));
    const [firstCommercialSelectorEndYear, setFirstCommercialSelectorEndYear] = useState(Number(year));
    const [firstCommercialSelectorEnergy, setFirstCommercialSelectorEnergy] = useState(parseInt(0));
  // #endregion

    // secondCommercialSelector
    // #region 
      const [secondCommercialSelectorBuildingType, setSecondCommercialSelectorBuildingType] = useState('');
      const [secondCommercialSelectorArea, setSecondCommercialSelectorArea] = useState(parseInt(0));
      const [secondCommercialSelectorReduction, setSecondCommercialSelectorReduction] = useState(parseInt(0));
      const [secondCommercialSelectorStartYear, setSecondCommercialSelectorStartYear] = useState(Number(year));
      const [secondCommercialSelectorEndYear, setSecondCommercialSelectorEndYear] = useState(Number(year));
      const [secondCommercialSelectorEnergy, setSecondCommercialSelectorEnergy] = useState(parseInt(0));
    // #endregion

    // thirdCommercialSelector
    // #region 
      const [thirdCommercialSelectorBuildingType, setThirdCommercialSelectorBuildingType] = useState('');
      const [thirdCommercialSelectorArea, setThirdCommercialSelectorArea] = useState(parseInt(0));
      const [thirdCommercialSelectorReduction, setThirdCommercialSelectorReduction] = useState(parseInt(0));
      const [thirdCommercialSelectorStartYear, setThirdCommercialSelectorStartYear] = useState(Number(year));
      const [thirdCommercialSelectorEndYear, setThirdCommercialSelectorEndYear] = useState(Number(year));
      const [thirdCommercialSelectorEnergy, setThirdCommercialSelectorEnergy] = useState(parseInt(0));
    // #endregion

    // fourthCommercialSelector
    // #region 
      const [fourthCommercialSelectorBuildingType, setFourthCommercialSelectorBuildingType] = useState('');
      const [fourthCommercialSelectorArea, setFourthCommercialSelectorArea] = useState(parseInt(0));
      const [fourthCommercialSelectorReduction, setFourthCommercialSelectorReduction] = useState(parseInt(0));
      const [fourthCommercialSelectorStartYear, setFourthCommercialSelectorStartYear] = useState(Number(year));
      const [fourthCommercialSelectorEndYear, setFourthCommercialSelectorEndYear] = useState(Number(year));
      const [fourthCommercialSelectorEnergy, setFourthCommercialSelectorEnergy] = useState(parseInt(0));
    // #endregion

    // fifthCommercialSelector
    // #region 
      const [fifthCommercialSelectorBuildingType, setFifthCommercialSelectorBuildingType] = useState('');
      const [fifthCommercialSelectorArea, setFifthCommercialSelectorArea] = useState(parseInt(0));
      const [fifthCommercialSelectorReduction, setFifthCommercialSelectorReduction] = useState(parseInt(0));
      const [fifthCommercialSelectorStartYear, setFifthCommercialSelectorStartYear] = useState(Number(year));
      const [fifthCommercialSelectorEndYear, setFifthCommercialSelectorEndYear] = useState(Number(year));
      const [fifthCommercialSelectorEnergy, setFifthCommercialSelectorEnergy] = useState(parseInt(0));
    // #endregion

    // sixthCommercialSelector
    // #region 
      const [sixthCommercialSelectorBuildingType, setSixthCommercialSelectorBuildingType] = useState('');
      const [sixthCommercialSelectorArea, setSixthCommercialSelectorArea] = useState(parseInt(0));
      const [sixthCommercialSelectorReduction, setSixthCommercialSelectorReduction] = useState(parseInt(0));
      const [sixthCommercialSelectorStartYear, setSixthCommercialSelectorStartYear] = useState(Number(year));
      const [sixthCommercialSelectorEndYear, setSixthCommercialSelectorEndYear] = useState(Number(year));
      const [sixthCommercialSelectorEnergy, setSixthCommercialSelectorEnergy] = useState(parseInt(0));
    // #endregion

      // FirstCommercialSelector handlers
      // #region 
      const handleFirstCommercialSelectorBuildingType = (e) => {
        setFirstCommercialSelectorBuildingType(e.target.value);
      };
      const handleFirstCommercialSelectorArea = (e) => {
        setFirstCommercialSelectorArea(parseInt(e.target.value));
      };
      const handleFirstCommercialSelectorReduction = (e) => {
        setFirstCommercialSelectorReduction(parseInt(e.target.value));
      };
      const handleFirstCommercialSelectorStartYear = (e) => {
        setFirstCommercialSelectorStartYear(Number(e.target.value));
      };
      const handleFirstCommercialSelectorEndYear = (e) => {
        setFirstCommercialSelectorEndYear(Number(e.target.value));
      };
      const handleFirstCommercialSelectorEnergy = (e) => {
        setFirstCommercialSelectorEnergy(parseInt(e.target.value));
      };
      // #endregion
      
      // SecondCommercialSelector handlers
      // #region 
      const handleSecondCommercialSelectorBuildingType = (e) => {
        setSecondCommercialSelectorBuildingType(e.target.value);
      };
      const handleSecondCommercialSelectorArea = (e) => {
        setSecondCommercialSelectorArea(parseInt(e.target.value));
      };
      const handleSecondCommercialSelectorReduction = (e) => {
        setSecondCommercialSelectorReduction(parseInt(e.target.value));
      };
      const handleSecondCommercialSelectorStartYear = (e) => {
        setSecondCommercialSelectorStartYear(Number(e.target.value));
      };
      const handleSecondCommercialSelectorEndYear = (e) => {
        setSecondCommercialSelectorEndYear(Number(e.target.value));
      };
      const handleSecondCommercialSelectorEnergy = (e) => {
        setSecondCommercialSelectorEnergy(parseInt(e.target.value));
      };
      // #endregion

      // ThirdCommercialSelector handlers
      // #region 
      const handleThirdCommercialSelectorBuildingType = (e) => {
        setThirdCommercialSelectorBuildingType(e.target.value);
      };
      const handleThirdCommercialSelectorArea = (e) => {
        setThirdCommercialSelectorArea(parseInt(e.target.value));
      };
      const handleThirdCommercialSelectorReduction = (e) => {
        setThirdCommercialSelectorReduction(parseInt(e.target.value));
      };
      const handleThirdCommercialSelectorStartYear = (e) => {
        setThirdCommercialSelectorStartYear(Number(e.target.value));
      };
      const handleThirdCommercialSelectorEndYear = (e) => {
        setThirdCommercialSelectorEndYear(Number(e.target.value));
      };
      const handleThirdCommercialSelectorEnergy = (e) => {
        setThirdCommercialSelectorEnergy(parseInt(e.target.value));
      };
      // #endregion

      // FourthCommercialSelector handlers
      // #region 
      const handleFourthCommercialSelectorBuildingType = (e) => {
        setFourthCommercialSelectorBuildingType(e.target.value);
      };
      const handleFourthCommercialSelectorArea = (e) => {
        setFourthCommercialSelectorArea(parseInt(e.target.value));
      };
      const handleFourthCommercialSelectorReduction = (e) => {
        setFourthCommercialSelectorReduction(parseInt(e.target.value));
      };
      const handleFourthCommercialSelectorStartYear = (e) => {
        setFourthCommercialSelectorStartYear(Number(e.target.value));
      };
      const handleFourthCommercialSelectorEndYear = (e) => {
        setFourthCommercialSelectorEndYear(Number(e.target.value));
      };
      const handleFourthCommercialSelectorEnergy = (e) => {
        setFourthCommercialSelectorEnergy(parseInt(e.target.value));
      };
      // #endregion

      // FifthCommercialSelector handlers
      // #region 
      const handleFifthCommercialSelectorBuildingType = (e) => {
        setFifthCommercialSelectorBuildingType(e.target.value);
      };
      const handleFifthCommercialSelectorArea = (e) => {
        setFifthCommercialSelectorArea(parseInt(e.target.value));
      };
      const handleFifthCommercialSelectorReduction = (e) => {
        setFifthCommercialSelectorReduction(parseInt(e.target.value));
      };
      const handleFifthCommercialSelectorStartYear = (e) => {
        setFifthCommercialSelectorStartYear(Number(e.target.value));
      };
      const handleFifthCommercialSelectorEndYear = (e) => {
        setFifthCommercialSelectorEndYear(Number(e.target.value));
      };
      const handleFifthCommercialSelectorEnergy = (e) => {
        setFifthCommercialSelectorEnergy(parseInt(e.target.value));
      };
      // #endregion

      // SixthCommercialSelector handlers
      // #region 
      const handleSixthCommercialSelectorBuildingType = (e) => {
        setSixthCommercialSelectorBuildingType(e.target.value);
      };
      const handleSixthCommercialSelectorArea = (e) => {
        setSixthCommercialSelectorArea(parseInt(e.target.value));
      };
      const handleSixthCommercialSelectorReduction = (e) => {
        setSixthCommercialSelectorReduction(parseInt(e.target.value));
      };
      const handleSixthCommercialSelectorStartYear = (e) => {
        setSixthCommercialSelectorStartYear(Number(e.target.value));
      };
      const handleSixthCommercialSelectorEndYear = (e) => {
        setSixthCommercialSelectorEndYear(Number(e.target.value));
      };
      const handleSixthCommercialSelectorEnergy = (e) => {
        setSixthCommercialSelectorEnergy(parseInt(e.target.value));
      };
    // #endregion

    const [updateU2charts, setU2charts] = useState(false);
  
    const optionsIndicators = ['A', 'B','C','D','E','F','G'];
    const optionsYear = [];
    for (let i = year; i < 2051; i++) optionsYear.push(i);
  
    const optionsResidents = ['Apartment', 'Terraced', 'Semi-detached', 'Detached'];
    const optionsBuildings = ['Retail', 'Health', 'Hospitality', 'Offices', 'Industrail', 'Warehouses'];

    const setPoliciesResults = () => {
      
      setU2charts(true);
    };
  
    if (updateU2charts === false) {
      return (
        <article>
          <div className="headerSettlement">
            <Divider textAlign="left" flexItem>
              {" "}
              <Chip label="U8 POLICY QUANTIFICATION" />
            </Divider>
          </div>
            <section>
                <section>
                  <Divider textAlign="left" flexItem>
                      {" "}
                      <b>U8.1 Retrofits of residental buildings</b>
                  </Divider>
                </section>
                <div className="newResidentDiv">
                  <form>
                    <table className="buildings-policy-tbl buildings-tbl">
                      <thead>
                        <tr>
                          <th className="row-title">Select residential unit</th>
                          <th>Number of units</th>
                          <th colSpan={2}>
                            Indicative energy use
                          <th>before</th>
                          <th>after</th>
                          </th>
                          <th>% of energy from renewables</th>
                          <th colSpan={2}>
                            Retrofits completed between
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <select
                                className="table-cell first-cell"
                                id="firstResidentSelectorResidentialUnit"
                                name="firstResidentSelectorResidentialUnit"
                                onChange={handleFirstResidentSelectorResidentialUnit}
                                defaultValue="Select unit type"
                                required
                                >
                                {optionsResidents.map((option) => (
                                <option key={option} value={option}>
                                    {option}{" "}
                                </option>
                                ))}
                            </select>
                          </td>
                          <td>
                            <input
                              className="table-cell"
                              type="number"
                              step="1"
                              id="firstResidentSelectorUnits"
                              name="firstResidentSelectorUnits"
                              min="0"
                              value={firstResidentSelectorUnits}
                              onChange={handleFirstResidentSelectorUnits}
                              required
                            />
                          </td>
                          <td>
                              <select
                                className="table-cell"
                                id="firstResidentSelectorIndicativeBefore"
                                name="firstResidentSelectorIndicativeBefore"
                                onChange={handleFirstResidentSelectorIndicativeBefore}
                                defaultValue="Select indicator"
                                required
                              >
                                {optionsIndicators.map((option) => (
                                  <option key={option} value={option}>
                                      {option}{" "}
                                  </option>
                                  ))}
                              </select>
                          </td>
                          <td>
                              <select
                                  className="table-cell"
                                  id="firstResidentSelectorIndicativeAfter"
                                  name="firstResidentSelectorIndicativeAfter"
                                  onChange={handleFirstResidentSelectorIndicativeAfter}
                                  defaultValue="Select indicator"
                                  required
                              >
                                  {optionsIndicators.map((option) => (
                                  <option key={option} value={option}>
                                      {option}{" "}
                                  </option>
                                  ))}
                              </select>
                          </td>
                          <td>
                            <input
                              className="table-cell"
                              type="number"
                              step="1"
                              id="firstResidentSelectorEnergy"
                              name="firstResidentSelectorEnergy"
                              min="0"
                              value={firstResidentSelectorEnergy}
                              onChange={handleFirstResidentSelectorEnergy}
                              required
                            />
                          </td>
                          <td>
                              <select
                                className="table-cell"
                                id="firstResidentSelectorStartYear"
                                name="firstResidentSelectorStartYear"
                                onChange={handleFirstResidentSelectorStartYear}
                                defaultValue="Select indicator"
                                required
                              >
                                {optionsYear.map((option) => (
                                  <option key={option} value={option}>
                                      {option}{" "}
                                  </option>
                                  ))}
                              </select>
                          </td>
                          <td>
                              <select
                                className="table-cell"
                                id="firstResidentSelectorEndYear"
                                name="firstResidentSelectorEndYear"
                                onChange={handleFirstResidentSelectorEndYear}
                                defaultValue="Select indicator"
                                required
                              >
                                {optionsYear.map((option) => (
                                  <option key={option} value={option}>
                                      {option}{" "}
                                  </option>
                                  ))}
                              </select>
                          </td>
                        </tr>
                        <tr>
                            <td>
                                <select
                                    className="table-cell first-cell"
                                    id="secondResidentSelectorResidentialUnit"
                                    name="secondResidentSelectorResidentialUnit"
                                    onChange={handleSecondResidentSelectorResidentialUnit}
                                    defaultValue="Select unit type"
                                    required
                                    >
                                    {optionsResidents.map((option) => (
                                    <option key={option} value={option}>
                                        {option}{" "}
                                    </option>
                                    ))}
                                </select>
                              </td>
                              <td>
                                <input
                                  className="table-cell"
                                  type="number"
                                  step="1"
                                  id="secondResidentSelectorUnits"
                                  name="secondResidentSelectorUnits"
                                  min="0"
                                  value={secondResidentSelectorUnits}
                                  onChange={handleSecondResidentSelectorUnits}
                                  required
                                />
                              </td>
                              <td>
                                  <select
                                    className="table-cell"
                                    id="secondResidentSelectorIndicativeBefore"
                                    name="secondResidentSelectorIndicativeBefore"
                                    onChange={handleSecondResidentSelectorIndicativeBefore}
                                    defaultValue="Select indicator"
                                    required
                                  >
                                    {optionsIndicators.map((option) => (
                                      <option key={option} value={option}>
                                          {option}{" "}
                                      </option>
                                      ))}
                                  </select>
                              </td>
                              <td>
                                  <select
                                      className="table-cell"
                                      id="secondResidentSelectorIndicativeAfter"
                                      name="secondResidentSelectorIndicativeAfter"
                                      onChange={handleSecondResidentSelectorIndicativeAfter}
                                      defaultValue="Select indicator"
                                      required
                                  >
                                      {optionsIndicators.map((option) => (
                                      <option key={option} value={option}>
                                          {option}{" "}
                                      </option>
                                      ))}
                                  </select>
                              </td>
                              <td>
                                <input
                                  className="table-cell"
                                  type="number"
                                  step="1"
                                  id="secondResidentSelectorEnergy"
                                  name="secondResidentSelectorEnergy"
                                  min="0"
                                  value={secondResidentSelectorEnergy}
                                  onChange={handleSecondResidentSelectorEnergy}
                                  required
                                />
                              </td>
                              <td>
                                  <select
                                    className="table-cell"
                                    id="secondResidentSelectorStartYear"
                                    name="secondResidentSelectorStartYear"
                                    onChange={handleSecondResidentSelectorStartYear}
                                    defaultValue="Select indicator"
                                    required
                                  >
                                    {optionsYear.map((option) => (
                                      <option key={option} value={option}>
                                          {option}{" "}
                                      </option>
                                      ))}
                                  </select>
                              </td>
                              <td>
                                  <select
                                    className="table-cell"
                                    id="secondResidentSelectorEndYear"
                                    name="secondResidentSelectorEndYear"
                                    onChange={handleSecondResidentSelectorEndYear}
                                    defaultValue="Select indicator"
                                    required
                                  >
                                    {optionsYear.map((option) => (
                                      <option key={option} value={option}>
                                          {option}{" "}
                                      </option>
                                      ))}
                                  </select>
                              </td>
                        </tr>
                        <tr>
                            <td>
                                <select
                                    className="table-cell first-cell"
                                    id="thirdResidentSelectorResidentialUnit"
                                    name="thirdResidentSelectorResidentialUnit"
                                    onChange={handleThirdResidentSelectorResidentialUnit}
                                    defaultValue="Select unit type"
                                    required
                                    >
                                    {optionsResidents.map((option) => (
                                    <option key={option} value={option}>
                                        {option}{" "}
                                    </option>
                                    ))}
                                </select>
                              </td>
                              <td>
                                <input
                                  className="table-cell"
                                  type="number"
                                  step="1"
                                  id="thirdResidentSelectorUnits"
                                  name="thirdResidentSelectorUnits"
                                  min="0"
                                  value={thirdResidentSelectorUnits}
                                  onChange={handleThirdResidentSelectorUnits}
                                  required
                                />
                              </td>
                              <td>
                                  <select
                                    className="table-cell"
                                    id="thirdResidentSelectorIndicativeBefore"
                                    name="thirdResidentSelectorIndicativeBefore"
                                    onChange={handleThirdResidentSelectorIndicativeBefore}
                                    defaultValue="Select indicator"
                                    required
                                  >
                                    {optionsIndicators.map((option) => (
                                      <option key={option} value={option}>
                                          {option}{" "}
                                      </option>
                                      ))}
                                  </select>
                              </td>
                              <td>
                                  <select
                                      className="table-cell"
                                      id="thirdResidentSelectorIndicativeAfter"
                                      name="thirdResidentSelectorIndicativeAfter"
                                      onChange={handleThirdResidentSelectorIndicativeAfter}
                                      defaultValue="Select indicator"
                                      required
                                  >
                                      {optionsIndicators.map((option) => (
                                      <option key={option} value={option}>
                                          {option}{" "}
                                      </option>
                                      ))}
                                  </select>
                              </td>
                              <td>
                                <input
                                  className="table-cell"
                                  type="number"
                                  step="1"
                                  id="thirdResidentSelectorEnergy"
                                  name="thirdResidentSelectorEnergy"
                                  min="0"
                                  value={thirdResidentSelectorEnergy}
                                  onChange={handleThirdResidentSelectorEnergy}
                                  required
                                />
                              </td>
                              <td>
                                  <select
                                    className="table-cell"
                                    id="thirdResidentSelectorStartYear"
                                    name="thirdResidentSelectorStartYear"
                                    onChange={handleThirdResidentSelectorStartYear}
                                    defaultValue="Select indicator"
                                    required
                                  >
                                    {optionsYear.map((option) => (
                                      <option key={option} value={option}>
                                          {option}{" "}
                                      </option>
                                      ))}
                                  </select>
                              </td>
                              <td>
                                  <select
                                    className="table-cell"
                                    id="thirdResidentSelectorEndYear"
                                    name="thirdResidentSelectorEndYear"
                                    onChange={handleThirdResidentSelectorEndYear}
                                    defaultValue="Select indicator"
                                    required
                                  >
                                    {optionsYear.map((option) => (
                                      <option key={option} value={option}>
                                          {option}{" "}
                                      </option>
                                      ))}
                                  </select>
                              </td>
                        </tr>
                        <tr>
                            <td>
                                <select
                                    className="table-cell first-cell"
                                    id="fourthResidentSelectorResidentialUnit"
                                    name="fourthResidentSelectorResidentialUnit"
                                    onChange={handleFourthResidentSelectorResidentialUnit}
                                    defaultValue="Select unit type"
                                    required
                                    >
                                    {optionsResidents.map((option) => (
                                    <option key={option} value={option}>
                                        {option}{" "}
                                    </option>
                                    ))}
                                </select>
                              </td>
                              <td>
                                <input
                                  className="table-cell"
                                  type="number"
                                  step="1"
                                  id="fourthResidentSelectorUnits"
                                  name="fourthResidentSelectorUnits"
                                  min="0"
                                  value={fourthResidentSelectorUnits}
                                  onChange={handleFourthResidentSelectorUnits}
                                  required
                                />
                              </td>
                              <td>
                                  <select
                                    className="table-cell"
                                    id="fourthResidentSelectorIndicativeBefore"
                                    name="fourthResidentSelectorIndicativeBefore"
                                    onChange={handleFourthResidentSelectorIndicativeBefore}
                                    defaultValue="Select indicator"
                                    required
                                  >
                                    {optionsIndicators.map((option) => (
                                      <option key={option} value={option}>
                                          {option}{" "}
                                      </option>
                                      ))}
                                  </select>
                              </td>
                              <td>
                                  <select
                                      className="table-cell"
                                      id="fourthResidentSelectorIndicativeAfter"
                                      name="fourthResidentSelectorIndicativeAfter"
                                      onChange={handleFourthResidentSelectorIndicativeAfter}
                                      defaultValue="Select indicator"
                                      required
                                  >
                                      {optionsIndicators.map((option) => (
                                      <option key={option} value={option}>
                                          {option}{" "}
                                      </option>
                                      ))}
                                  </select>
                              </td>
                              <td>
                                <input
                                  className="table-cell"
                                  type="number"
                                  step="1"
                                  id="fourthResidentSelectorEnergy"
                                  name="fourthResidentSelectorEnergy"
                                  min="0"
                                  value={fourthResidentSelectorEnergy}
                                  onChange={handleFourthResidentSelectorEnergy}
                                  required
                                />
                              </td>
                              <td>
                                  <select
                                    className="table-cell"
                                    id="fourthResidentSelectorStartYear"
                                    name="fourthResidentSelectorStartYear"
                                    onChange={handleFourthResidentSelectorStartYear}
                                    defaultValue="Select indicator"
                                    required
                                  >
                                    {optionsYear.map((option) => (
                                      <option key={option} value={option}>
                                          {option}{" "}
                                      </option>
                                      ))}
                                  </select>
                              </td>
                              <td>
                                  <select
                                    className="table-cell"
                                    id="fourthResidentSelectorEndYear"
                                    name="fourthResidentSelectorEndYear"
                                    onChange={handleFourthResidentSelectorEndYear}
                                    defaultValue="Select indicator"
                                    required
                                  >
                                    {optionsYear.map((option) => (
                                      <option key={option} value={option}>
                                          {option}{" "}
                                      </option>
                                      ))}
                                  </select>
                              </td>
                        </tr>
                        <tr>
                            <td>
                                <select
                                    className="table-cell first-cell"
                                    id="fifthResidentSelectorResidentialUnit"
                                    name="fifthResidentSelectorResidentialUnit"
                                    onChange={handleFifthResidentSelectorResidentialUnit}
                                    defaultValue="Select unit type"
                                    required
                                    >
                                    {optionsResidents.map((option) => (
                                    <option key={option} value={option}>
                                        {option}{" "}
                                    </option>
                                    ))}
                                </select>
                              </td>
                              <td>
                                <input
                                  className="table-cell"
                                  type="number"
                                  step="1"
                                  id="fifthResidentSelectorUnits"
                                  name="fifthResidentSelectorUnits"
                                  min="0"
                                  value={fifthResidentSelectorUnits}
                                  onChange={handleFifthResidentSelectorUnits}
                                  required
                                />
                              </td>
                              <td>
                                  <select
                                    className="table-cell"
                                    id="fifthResidentSelectorIndicativeBefore"
                                    name="fifthResidentSelectorIndicativeBefore"
                                    onChange={handleFifthResidentSelectorIndicativeBefore}
                                    defaultValue="Select indicator"
                                    required
                                  >
                                    {optionsIndicators.map((option) => (
                                      <option key={option} value={option}>
                                          {option}{" "}
                                      </option>
                                      ))}
                                  </select>
                              </td>
                              <td>
                                  <select
                                      className="table-cell"
                                      id="fifthResidentSelectorIndicativeAfter"
                                      name="fifthResidentSelectorIndicativeAfter"
                                      onChange={handleFifthResidentSelectorIndicativeAfter}
                                      defaultValue="Select indicator"
                                      required
                                  >
                                      {optionsIndicators.map((option) => (
                                      <option key={option} value={option}>
                                          {option}{" "}
                                      </option>
                                      ))}
                                  </select>
                              </td>
                              <td>
                                <input
                                  className="table-cell"
                                  type="number"
                                  step="1"
                                  id="fifthResidentSelectorEnergy"
                                  name="fifthResidentSelectorEnergy"
                                  min="0"
                                  value={fifthResidentSelectorEnergy}
                                  onChange={handleFifthResidentSelectorEnergy}
                                  required
                                />
                              </td>
                              <td>
                                  <select
                                    className="table-cell"
                                    id="fifthResidentSelectorStartYear"
                                    name="fifthResidentSelectorStartYear"
                                    onChange={handleFifthResidentSelectorStartYear}
                                    defaultValue="Select indicator"
                                    required
                                  >
                                    {optionsYear.map((option) => (
                                      <option key={option} value={option}>
                                          {option}{" "}
                                      </option>
                                      ))}
                                  </select>
                              </td>
                              <td>
                                  <select
                                    className="table-cell"
                                    id="fifthResidentSelectorEndYear"
                                    name="fifthResidentSelectorEndYear"
                                    onChange={handleFifthResidentSelectorEndYear}
                                    defaultValue="Select indicator"
                                    required
                                  >
                                    {optionsYear.map((option) => (
                                      <option key={option} value={option}>
                                          {option}{" "}
                                      </option>
                                      ))}
                                  </select>
                              </td>
                        </tr>
                        <tr>
                            <td>
                                <select
                                    className="table-cell first-cell"
                                    id="sixthResidentSelectorResidentialUnit"
                                    name="sixthResidentSelectorResidentialUnit"
                                    onChange={handleSixthResidentSelectorResidentialUnit}
                                    defaultValue="Select unit type"
                                    required
                                    >
                                    {optionsResidents.map((option) => (
                                    <option key={option} value={option}>
                                        {option}{" "}
                                    </option>
                                    ))}
                                </select>
                              </td>
                              <td>
                                <input
                                  className="table-cell"
                                  type="number"
                                  step="1"
                                  id="sixthResidentSelectorUnits"
                                  name="sixthResidentSelectorUnits"
                                  min="0"
                                  value={sixthResidentSelectorUnits}
                                  onChange={handleSixthResidentSelectorUnits}
                                  required
                                />
                              </td>
                              <td>
                                  <select
                                    className="table-cell"
                                    id="sixthResidentSelectorIndicativeBefore"
                                    name="sixthResidentSelectorIndicativeBefore"
                                    onChange={handleSixthResidentSelectorIndicativeBefore}
                                    defaultValue="Select indicator"
                                    required
                                  >
                                    {optionsIndicators.map((option) => (
                                      <option key={option} value={option}>
                                          {option}{" "}
                                      </option>
                                      ))}
                                  </select>
                              </td>
                              <td>
                                  <select
                                      className="table-cell"
                                      id="sixthResidentSelectorIndicativeAfter"
                                      name="sixthResidentSelectorIndicativeAfter"
                                      onChange={handleSixthResidentSelectorIndicativeAfter}
                                      defaultValue="Select indicator"
                                      required
                                  >
                                      {optionsIndicators.map((option) => (
                                      <option key={option} value={option}>
                                          {option}{" "}
                                      </option>
                                      ))}
                                  </select>
                              </td>
                              <td>
                                <input
                                  className="table-cell"
                                  type="number"
                                  step="1"
                                  id="sixthResidentSelectorEnergy"
                                  name="sixthResidentSelectorEnergy"
                                  min="0"
                                  value={sixthResidentSelectorEnergy}
                                  onChange={handleSixthResidentSelectorEnergy}
                                  required
                                />
                              </td>
                              <td>
                                  <select
                                    className="table-cell"
                                    id="sixthResidentSelectorStartYear"
                                    name="sixthResidentSelectorStartYear"
                                    onChange={handleSixthResidentSelectorStartYear}
                                    defaultValue="Select indicator"
                                    required
                                  >
                                    {optionsYear.map((option) => (
                                      <option key={option} value={option}>
                                          {option}{" "}
                                      </option>
                                      ))}
                                  </select>
                              </td>
                              <td>
                                  <select
                                    className="table-cell"
                                    id="sixthResidentSelectorEndYear"
                                    name="sixthResidentSelectorEndYear"
                                    onChange={handleSixthResidentSelectorEndYear}
                                    defaultValue="Select indicator"
                                    required
                                  >
                                    {optionsYear.map((option) => (
                                      <option key={option} value={option}>
                                          {option}{" "}
                                      </option>
                                      ))}
                                  </select>
                              </td>
                        </tr>
                      </tbody>
                    </table>
                  </form>
                </div>
            </section>
            <section>
                <section>
                  <Divider textAlign="left" flexItem>
                      {" "}
                      <b>U8.2 Retrofits of commercial buildings</b>
                  </Divider>
                </section>
                <div className="newResidentDiv">
                  <form>
                    <table className="buildings-policy-tbl buildings-tbl">
                        <thead>
                          <tr>
                            <th className="row-title">Select building type</th>
                            <th>Total floor area</th>
                            <th>
                              Expected reduction in energy demand (%)
                            </th>
                            <th>% of electricty from renewables</th>
                            <th colSpan={2}>
                              Retrofits completed between
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <select
                                  className="table-cell first-cell"
                                  id="firstCommercialSelectorBuildingType"
                                  name="firstCommercialSelectorBuildingType"
                                  onChange={handleFirstCommercialSelectorBuildingType}
                                  defaultValue="Select building type"
                                  required
                                  >
                                  {optionsBuildings.map((option) => (
                                  <option key={option} value={option}>
                                      {option}{" "}
                                  </option>
                                  ))}
                              </select>
                            </td>
                            <td>
                              <input
                                className="table-cell"
                                type="number"
                                step="1"
                                id="firstCommercialSelectorArea"
                                name="firstCommercialSelectorArea"
                                min="0"
                                value={firstCommercialSelectorArea}
                                onChange={handleFirstCommercialSelectorArea}
                                required
                              />
                            </td>
                            <td>
                              <input
                                className="table-cell"
                                type="number"
                                step="1"
                                id="firstCommercialSelectorReduction"
                                name="firstCommercialSelectorReduction"
                                min="0"
                                max="100"
                                value={firstCommercialSelectorReduction}
                                onChange={handleFirstCommercialSelectorReduction}
                                required
                              />
                            </td>
                            <td>
                              <input
                                className="table-cell"
                                type="number"
                                step="1"
                                id="firstCommercialSelectorEnergy"
                                name="firstCommercialSelectorEnergy"
                                min="0"
                                value={firstCommercialSelectorEnergy}
                                onChange={handleFirstCommercialSelectorEnergy}
                                required
                              />
                            </td>
                            <td>
                              <select
                                className="table-cell"
                                id="firstCommercialSelectorStartYear"
                                name="firstCommercialSelectorStartYear"
                                onChange={handleFirstCommercialSelectorStartYear}
                                defaultValue="Select indicator"
                                required
                              >
                                {optionsYear.map((option) => (
                                  <option key={option} value={option}>
                                      {option}{" "}
                                  </option>
                                  ))}
                              </select>
                            </td>
                            <td>
                                <select
                                  className="table-cell"
                                  id="firstCommercialSelectorEndYear"
                                  name="firstCommercialSelectorEndYear"
                                  onChange={handleFirstCommercialSelectorEndYear}
                                  defaultValue="Select indicator"
                                  required
                                >
                                  {optionsYear.map((option) => (
                                    <option key={option} value={option}>
                                        {option}{" "}
                                    </option>
                                    ))}
                                </select>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <select
                                  className="table-cell first-cell"
                                  id="secondCommercialSelectorBuildingType"
                                  name="secondCommercialSelectorBuildingType"
                                  onChange={handleSecondCommercialSelectorBuildingType}
                                  defaultValue="Select building type"
                                  required
                                  >
                                  {optionsBuildings.map((option) => (
                                  <option key={option} value={option}>
                                      {option}{" "}
                                  </option>
                                  ))}
                              </select>
                            </td>
                            <td>
                              <input
                                className="table-cell"
                                type="number"
                                step="1"
                                id="secondCommercialSelectorArea"
                                name="secondCommercialSelectorArea"
                                min="0"
                                value={secondCommercialSelectorArea}
                                onChange={handleSecondCommercialSelectorArea}
                                required
                              />
                            </td>
                            <td>
                              <input
                                className="table-cell"
                                type="number"
                                step="1"
                                id="secondCommercialSelectorReduction"
                                name="secondCommercialSelectorReduction"
                                min="0"
                                max="100"
                                value={secondCommercialSelectorReduction}
                                onChange={handleSecondCommercialSelectorReduction}
                                required
                              />
                            </td>
                            <td>
                              <input
                                className="table-cell"
                                type="number"
                                step="1"
                                id="secondCommercialSelectorEnergy"
                                name="secondCommercialSelectorEnergy"
                                min="0"
                                value={secondCommercialSelectorEnergy}
                                onChange={handleSecondCommercialSelectorEnergy}
                                required
                              />
                            </td>
                            <td>
                              <select
                                className="table-cell"
                                id="secondCommercialSelectorStartYear"
                                name="secondCommercialSelectorStartYear"
                                onChange={handleSecondCommercialSelectorStartYear}
                                defaultValue="Select indicator"
                                required
                              >
                                {optionsYear.map((option) => (
                                  <option key={option} value={option}>
                                      {option}{" "}
                                  </option>
                                  ))}
                              </select>
                            </td>
                            <td>
                                <select
                                  className="table-cell"
                                  id="secondCommercialSelectorEndYear"
                                  name="secondCommercialSelectorEndYear"
                                  onChange={handleSecondCommercialSelectorEndYear}
                                  defaultValue="Select indicator"
                                  required
                                >
                                  {optionsYear.map((option) => (
                                    <option key={option} value={option}>
                                        {option}{" "}
                                    </option>
                                    ))}
                                </select>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <select
                                  className="table-cell first-cell"
                                  id="thirdCommercialSelectorBuildingType"
                                  name="thirdCommercialSelectorBuildingType"
                                  onChange={handleThirdCommercialSelectorBuildingType}
                                  defaultValue="Select building type"
                                  required
                                  >
                                  {optionsBuildings.map((option) => (
                                  <option key={option} value={option}>
                                      {option}{" "}
                                  </option>
                                  ))}
                              </select>
                            </td>
                            <td>
                              <input
                                className="table-cell"
                                type="number"
                                step="1"
                                id="thirdCommercialSelectorArea"
                                name="thirdCommercialSelectorArea"
                                min="0"
                                value={thirdCommercialSelectorArea}
                                onChange={handleThirdCommercialSelectorArea}
                                required
                              />
                            </td>
                            <td>
                              <input
                                className="table-cell"
                                type="number"
                                step="1"
                                id="thirdCommercialSelectorReduction"
                                name="thirdCommercialSelectorReduction"
                                min="0"
                                max="100"
                                value={thirdCommercialSelectorReduction}
                                onChange={handleThirdCommercialSelectorReduction}
                                required
                              />
                            </td>
                            <td>
                              <input
                                className="table-cell"
                                type="number"
                                step="1"
                                id="thirdCommercialSelectorEnergy"
                                name="thirdCommercialSelectorEnergy"
                                min="0"
                                value={thirdCommercialSelectorEnergy}
                                onChange={handleThirdCommercialSelectorEnergy}
                                required
                              />
                            </td>
                            <td>
                              <select
                                className="table-cell"
                                id="thirdCommercialSelectorStartYear"
                                name="thirdCommercialSelectorStartYear"
                                onChange={handleThirdCommercialSelectorStartYear}
                                defaultValue="Select indicator"
                                required
                              >
                                {optionsYear.map((option) => (
                                  <option key={option} value={option}>
                                      {option}{" "}
                                  </option>
                                  ))}
                              </select>
                            </td>
                            <td>
                                <select
                                  className="table-cell"
                                  id="thirdCommercialSelectorEndYear"
                                  name="thirdCommercialSelectorEndYear"
                                  onChange={handleThirdCommercialSelectorEndYear}
                                  defaultValue="Select indicator"
                                  required
                                >
                                  {optionsYear.map((option) => (
                                    <option key={option} value={option}>
                                        {option}{" "}
                                    </option>
                                    ))}
                                </select>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <select
                                  className="table-cell first-cell"
                                  id="fourthCommercialSelectorBuildingType"
                                  name="fourthCommercialSelectorBuildingType"
                                  onChange={handleFourthCommercialSelectorBuildingType}
                                  defaultValue="Select building type"
                                  required
                                  >
                                  {optionsBuildings.map((option) => (
                                  <option key={option} value={option}>
                                      {option}{" "}
                                  </option>
                                  ))}
                              </select>
                            </td>
                            <td>
                              <input
                                className="table-cell"
                                type="number"
                                step="1"
                                id="fourthCommercialSelectorArea"
                                name="fourthCommercialSelectorArea"
                                min="0"
                                value={fourthCommercialSelectorArea}
                                onChange={handleFourthCommercialSelectorArea}
                                required
                              />
                            </td>
                            <td>
                              <input
                                className="table-cell"
                                type="number"
                                step="1"
                                id="fourthCommercialSelectorReduction"
                                name="fourthCommercialSelectorReduction"
                                min="0"
                                max="100"
                                value={fourthCommercialSelectorReduction}
                                onChange={handleFourthCommercialSelectorReduction}
                                required
                              />
                            </td>
                            <td>
                              <input
                                className="table-cell"
                                type="number"
                                step="1"
                                id="fourthCommercialSelectorEnergy"
                                name="fourthCommercialSelectorEnergy"
                                min="0"
                                value={fourthCommercialSelectorEnergy}
                                onChange={handleFourthCommercialSelectorEnergy}
                                required
                              />
                            </td>
                            <td>
                              <select
                                className="table-cell"
                                id="fourthCommercialSelectorStartYear"
                                name="fourthCommercialSelectorStartYear"
                                onChange={handleFourthCommercialSelectorStartYear}
                                defaultValue="Select indicator"
                                required
                              >
                                {optionsYear.map((option) => (
                                  <option key={option} value={option}>
                                      {option}{" "}
                                  </option>
                                  ))}
                              </select>
                            </td>
                            <td>
                                <select
                                  className="table-cell"
                                  id="fourthCommercialSelectorEndYear"
                                  name="fourthCommercialSelectorEndYear"
                                  onChange={handleFourthCommercialSelectorEndYear}
                                  defaultValue="Select indicator"
                                  required
                                >
                                  {optionsYear.map((option) => (
                                    <option key={option} value={option}>
                                        {option}{" "}
                                    </option>
                                    ))}
                                </select>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <select
                                  className="table-cell first-cell"
                                  id="fifthCommercialSelectorBuildingType"
                                  name="fifthCommercialSelectorBuildingType"
                                  onChange={handleFifthCommercialSelectorBuildingType}
                                  defaultValue="Select building type"
                                  required
                                  >
                                  {optionsBuildings.map((option) => (
                                  <option key={option} value={option}>
                                      {option}{" "}
                                  </option>
                                  ))}
                              </select>
                            </td>
                            <td>
                              <input
                                className="table-cell"
                                type="number"
                                step="1"
                                id="fifthCommercialSelectorArea"
                                name="fifthCommercialSelectorArea"
                                min="0"
                                value={fifthCommercialSelectorArea}
                                onChange={handleFifthCommercialSelectorArea}
                                required
                              />
                            </td>
                            <td>
                              <input
                                className="table-cell"
                                type="number"
                                step="1"
                                id="fifthCommercialSelectorReduction"
                                name="fifthCommercialSelectorReduction"
                                min="0"
                                max="100"
                                value={fifthCommercialSelectorReduction}
                                onChange={handleFifthCommercialSelectorReduction}
                                required
                              />
                            </td>
                            <td>
                              <input
                                className="table-cell"
                                type="number"
                                step="1"
                                id="fifthCommercialSelectorEnergy"
                                name="fifthCommercialSelectorEnergy"
                                min="0"
                                value={fifthCommercialSelectorEnergy}
                                onChange={handleFifthCommercialSelectorEnergy}
                                required
                              />
                            </td>
                            <td>
                              <select
                                className="table-cell"
                                id="fifthCommercialSelectorStartYear"
                                name="fifthCommercialSelectorStartYear"
                                onChange={handleFifthCommercialSelectorStartYear}
                                defaultValue="Select indicator"
                                required
                              >
                                {optionsYear.map((option) => (
                                  <option key={option} value={option}>
                                      {option}{" "}
                                  </option>
                                  ))}
                              </select>
                            </td>
                            <td>
                                <select
                                  className="table-cell"
                                  id="fifthCommercialSelectorEndYear"
                                  name="fifthCommercialSelectorEndYear"
                                  onChange={handleFifthCommercialSelectorEndYear}
                                  defaultValue="Select indicator"
                                  required
                                >
                                  {optionsYear.map((option) => (
                                    <option key={option} value={option}>
                                        {option}{" "}
                                    </option>
                                    ))}
                                </select>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <select
                                  className="table-cell first-cell"
                                  id="sixthCommercialSelectorBuildingType"
                                  name="sixthCommercialSelectorBuildingType"
                                  onChange={handleSixthCommercialSelectorBuildingType}
                                  defaultValue="Select building type"
                                  required
                                  >
                                  {optionsBuildings.map((option) => (
                                  <option key={option} value={option}>
                                      {option}{" "}
                                  </option>
                                  ))}
                              </select>
                            </td>
                            <td>
                              <input
                                className="table-cell"
                                type="number"
                                step="1"
                                id="sixthCommercialSelectorArea"
                                name="sixthCommercialSelectorArea"
                                min="0"
                                value={sixthCommercialSelectorArea}
                                onChange={handleSixthCommercialSelectorArea}
                                required
                              />
                            </td>
                            <td>
                              <input
                                className="table-cell"
                                type="number"
                                step="1"
                                id="sixthCommercialSelectorReduction"
                                name="sixthCommercialSelectorReduction"
                                min="0"
                                max="100"
                                value={sixthCommercialSelectorReduction}
                                onChange={handleSixthCommercialSelectorReduction}
                                required
                              />
                            </td>
                            <td>
                              <input
                                className="table-cell"
                                type="number"
                                step="1"
                                id="sixthCommercialSelectorEnergy"
                                name="sixthCommercialSelectorEnergy"
                                min="0"
                                value={sixthCommercialSelectorEnergy}
                                onChange={handleSixthCommercialSelectorEnergy}
                                required
                              />
                            </td>
                            <td>
                              <select
                                className="table-cell"
                                id="sixthCommercialSelectorStartYear"
                                name="sixthCommercialSelectorStartYear"
                                onChange={handleSixthCommercialSelectorStartYear}
                                defaultValue="Select indicator"
                                required
                              >
                                {optionsYear.map((option) => (
                                  <option key={option} value={option}>
                                      {option}{" "}
                                  </option>
                                  ))}
                              </select>
                            </td>
                            <td>
                                <select
                                  className="table-cell"
                                  id="sixthCommercialSelectorEndYear"
                                  name="sixthCommercialSelectorEndYear"
                                  onChange={handleSixthCommercialSelectorEndYear}
                                  defaultValue="Select indicator"
                                  required
                                >
                                  {optionsYear.map((option) => (
                                    <option key={option} value={option}>
                                        {option}{" "}
                                    </option>
                                    ))}
                                </select>
                            </td>
                          </tr>
                        </tbody>
                    </table>
                  </form>
                </div>
            </section>
          <section>
                {(
                <div className="nextU2Button">
                    <Button
                    size="small"
                    value="charts"
                    onClick={setPoliciesResults}
                    label="Next &raquo;"
                    primary
                    />
                </div>
                )}
            </section>
        </article>
      );
    } else {
      return (
        <BuildingsPoliciesCharts
          year={year}
          country={country}
          // baseline={baseline.baseline}
          // newDevelopment={newDevelopment}
          // settlementDistribution={settlementDistribution}
          // emission={emission}
          // projections={projections}
        />
      );
    }
  };
  
  BuildingsPolicies.propTypes = {
    year: PropTypes.number.isRequired,
    country: PropTypes.string.isRequired,
    // settlementDistribution: PropTypes.object.isRequired,
    // emission: PropTypes.object.isRequired,
    // projections: PropTypes.object.isRequired
  };
  
  BuildingsPolicies.defaultProps = {
    year: 2030,
    country: "Estonia",
  };
  