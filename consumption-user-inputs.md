This file attempts to document all user inputs on the USER INPUTS tab in Kimmo's Excel sheet.

There are three sections for USER INPUTS:
- Area type and population
- House energy
- Transportation

### Area type and population
| variable group | variable | input type | variable type | validation | default | notes |
|---|---|---|---|---|---|---|
|| year | dropdown | integer | 2022 <= year <= 2050 | 2021 | |
|| country | dropdown | string | in list of 32 EU countries | | |
|| population | text input | integer | >= 0 | | |
| U9.2 Planned area type | area_type | dropdown | string | 0 | rural | 0 |
| U9.3 Average house occupancy level | house_size | number input | int | > 0 | 0 | picks default when undefined |
| U9.4 Average income level households | income_choice | dropdown | string | 0 | 0 |  |
| U9.5 Global decarbonization | eff_scaler_initial | number input | int | > 0| 0 | |


### House energy

| variable group | variable | input type | variable type | validation | default | notes |
|---|---|---|---|---|---|---|
| U10.1 New residents | number_new_residents | text input | integer | >= 0 | 0 | |
| U10.2 New residents | new_residents_start_year | dropdown | integer | 2021 <= year <= 2050 | 2025 | |
| U10.3 New residents | new_residents_end_year | dropdown | integer | 2021 <= year <= 2050 | 2030 | |

| U10.1 New residents | number_new_residents | text input | integer | >= 0 | 0 | |
| U10.2 New residents | new_residents_start_year | dropdown | integer | 2021 <= year <= 2050 | 2025 | |
| U10.3 New residents | new_residents_end_year | dropdown | integer | 2021 <= year <= 2050 | 2030 | |
| U10.1 New residents | number_new_residents | text input | integer | >= 0 | 0 | |
| U10.2 New residents | new_residents_start_year | dropdown | integer | 2021 <= year <= 2050 | 2025 | |
| U10.3 New residents | new_residents_end_year | dropdown | integer | 2021 <= year <= 2050 | 2030 | |


### Transport

| variable group | variable | input type | variable type | validation | default | notes |
|---|---|---|---|---|---|---|
| U2.1 New residents | number_new_residents | text input | integer | >= 0 | 0 | |
| U2.1 New residents | new_residents_start_year | dropdown | integer | 2021 <= year <= 2050 | 2025 | |
| U2.1 New residents | new_residents_end_year | dropdown | integer | 2021 <= year <= 2050 | 2030 | |
| U2.2 Settlement type | new_settlement_type_city | text input | float | 0 <= val <= 100 | 0 | total must sum to 100% |
| U2.2 Settlement type | new_settlement_type_town | text input | float | 0 <= val <= 100 | 0 | total must sum to 100% |
| U2.2 Settlement type | new_settlement_type_suburban | text input | float | 0 <= val <= 100 | 0 | total must sum to 100% |
| U2.2 Settlement type | new_settlement_type_rural | text input | float | 0 <= val <= 100 | 0 | total must sum to 100% |