This file attempts to document all user inputs on the USER INPUTS tab in Kimmo's Excel sheet.

There are three sections in the USER INPUTS tab:
- U1 BASELINE
- U2 NEW DEVELOPMENT
- U3 POLICY QUANTIFICATION

### U1 BASELINE

| variable group | variable | input type | variable type | validation | default | notes |
|---|---|---|---|---|---|---|
|| year | dropdown | integer | 2021 <= year <= 2050 | 2021 | |
|| country | dropdown | string | in list of 32 EU countries | | |
|| population | text input | integer | >= 0 | | |
| U1.1 Settlement type | baseline_settlement_type_metropolitan_center | text input | float | 0 <= val <= 100 | 0 | total must sum to 100% |
| U1.1 Settlement type | baseline_settlement_type_urban | text input | float | 0 <= val <= 100 | 0 | total must sum to 100% |
| U1.1 Settlement type | baseline_settlement_type_suburban | text input | float | 0 <= val <= 100 | 0 | total must sum to 100% |
| U1.1 Settlement type | baseline_settlement_type_town | text input | float | 0 <= val <= 100 | 0 | total must sum to 100% |
| U1.1 Settlement type | baseline_settlement_type_rural | text input | float | 0 <= val <= 100 | 0 | total must sum to 100% |
| U1.2 Area | settlement_area_width | text input | integer | >= 0 | 0 | |
| U1.2 Area | settlement_area_length | text input | integer | >= 0 | 0 | |
| U1.3 Non-residential and freight | non_residential_road_transport_intensity | dropdown | float | very limited = 0.25; national average intensity = 1.00; or very intensive = 2.50 | 1 | |
| U1.3 Non-residential and freight | freight_transport_road_intensity | dropdown | float | very limited = 0.25; national average intensity = 1.00; or very intensive = 2.50 | 1 | |
| U1.3 Non-residential and freight | freight_transport_rail_intensity | dropdown | float | very limited = 0.25; national average intensity	= 1.00; or very intensive = 2.50 | 1 | |
| U1.3 Non-residential and freight | freight_transport_inland_waterways_intensity | dropdown | float | very limited = 0.25; national average intensity	= 1.00; or very intensive = 2.50 | 1 | |
| U1.4 Metro | metro | text input | float | 0 <= val <= 100 | 0 | total must sum to 100%; dynamically load list of cities from somewhere |
| U1.5 Tram | tram | text input | float | 0 <= val <= 100 | 0 | total must sum to 100%; dynamically load list of cities from somewhere |


### U2 NEW DEVELOPMENT

| variable group | variable | input type | variable type | validation | default | notes |
|---|---|---|---|---|---|---|
| U2.1 New residents | number_new_residents | text input | integer | >= 0 | 0 | |
| U2.1 New residents | new_residents_start_year | dropdown | integer | 2021 <= year <= 2050 | 2025 | |
| U2.1 New residents | new_residents_end_year | dropdown | integer | 2021 <= year <= 2050 | 2030 | |
| U2.2 Settlement type | new_settlement_type_city | text input | float | 0 <= val <= 100 | 0 | total must sum to 100% |
| U2.2 Settlement type | new_settlement_type_town | text input | float | 0 <= val <= 100 | 0 | total must sum to 100% |
| U2.2 Settlement type | new_settlement_type_suburban | text input | float | 0 <= val <= 100 | 0 | total must sum to 100% |
| U2.2 Settlement type | new_settlement_type_rural | text input | float | 0 <= val <= 100 | 0 | total must sum to 100% |


### U3 POLICY QUANTIFICATION

| variable group | variable | input type | variable type | validation | default | notes |
|---|---|---|---|---|---|---|
| U3.1 PASSENGER MOBILITY (RESIDENTIAL AND NON-RESIDENTIAL) | change_in_mobility | text input | integer | negative values allowed | -5 | |
| U3.1 PASSENGER MOBILITY (RESIDENTIAL AND NON-RESIDENTIAL) | passenger_mobility_area_affected_percentage | text input | integer | 0 <= val <= 100 | 0 | |
| U3.1 PASSENGER MOBILITY (RESIDENTIAL AND NON-RESIDENTIAL) | new_residents_start_year | dropdown | integer | 2021 <= year <= 2050 | 2025 | |
| U3.1 PASSENGER MOBILITY (RESIDENTIAL AND NON-RESIDENTIAL) | new_residents_end_year | dropdown | integer | 2021 <= year <= 2050 | 2030 | |
| U3.2 FREIGHT TRANSPORT | change_in_freight_transport | text input | integer | negative values allowed | -5 | |
| U3.2 FREIGHT TRANSPORT | freight_change_start_year | dropdown | integer | 2021 <= year <= 2050 | 2025 | |
| U3.2 FREIGHT TRANSPORT | freight_end_year | dropdown | integer | 2021 <= year <= 2050 | 2030 | |
| U3.3 MODAL SPLIT / PASSENGER TRANSPORT | passenger_transport_bus_percentage | text input | integer | 0 <= val <= 100 |  | total <= 100 %; passenger_transport_car_percentage = 1 - total |
| U3.3 MODAL SPLIT / PASSENGER TRANSPORT | passenger_transport_tram_metro_percentage | text input | integer | 0 <= val <= 100 |  | total <= 100 %; passenger_transport_car_percentage = 1 - total |
| U3.3 MODAL SPLIT / PASSENGER TRANSPORT | passenger_transport_train_percentage | text input | integer | 0 <= val <= 100 |  | total <= 100 %; passenger_transport_car_percentage = 1 - total |
| U3.3 MODAL SPLIT / PASSENGER TRANSPORT | passenger_transport_area_affected_percentage | text input | integer | 0 <= val <= 100 | 15 | |
| U3.3 MODAL SPLIT / PASSENGER TRANSPORT | passenger_transport_start_year | dropdown | integer | 2021 <= year <= 2050 | 2025 | |
| U3.3 MODAL SPLIT / PASSENGER TRANSPORT | passenger_transport_end_year | dropdown | integer | 2021 <= year <= 2050 | 2030 | |
| U3.4 MODAL SPLIT / FREIGHT TRANSPORT | freight_transport_rail_percentage | text input | integer | 0 <= val <= 100 |  | total <= 100 %; freight_transport_road_percentage = 1 - total |
| U3.4 MODAL SPLIT / FREIGHT TRANSPORT | freight_transport_inland_waterway_percentage | text input | integer | 0 <= val <= 100 |  | total <= 100 %; freight_transport_road_percentage = 1 - total |
| U3.4 MODAL SPLIT / FREIGHT TRANSPORT | freight_change_start_year | dropdown | integer | 2021 <= year <= 2050 | 2025 | |
| U3.4 MODAL SPLIT / FREIGHT TRANSPORT | freight_end_year | dropdown | integer | 2021 <= year <= 2050 | 2030 | |
| U3.5 SHARES OF FUEL TYPES / BUS TRANSPORT | bus_transport_petrol_percentage | text input | integer | 0 <= val <= 100 |  | total <= 100 %; bus_transport_diesel_percentage = 1 - total |
| U3.5 SHARES OF FUEL TYPES / BUS TRANSPORT | bus_transport_lpg_percentage | text input | integer | 0 <= val <= 100 |  | total <= 100 %; bus_transport_diesel_percentage = 1 - total |
| U3.5 SHARES OF FUEL TYPES / BUS TRANSPORT | bus_transport_cng_percentage | text input | integer | 0 <= val <= 100 |  | total <= 100 %; bus_transport_diesel_percentage = 1 - total |
| U3.5 SHARES OF FUEL TYPES / BUS TRANSPORT | bus_transport_electricity_percentage | text input | integer | 0 <= val <= 100 |  | total <= 100 %; bus_transport_diesel_percentage = 1 - total |
| U3.5 SHARES OF FUEL TYPES / BUS TRANSPORT | bus_transport_area_affected_percentage | text input | integer | 0 <= val <= 100 | 0 | |
| U3.5 SHARES OF FUEL TYPES / BUS TRANSPORT | bus_transport_start_year | dropdown | integer | 2021 <= year <= 2050 | 2025 | |
| U3.5 SHARES OF FUEL TYPES / BUS TRANSPORT | bus_transport_end_year | dropdown | integer | 2021 <= year <= 2050 | 2030 | |
| U3.6 SHARES OF FUEL TYPES / CARS | car_fuel_lpg_percentage | text input | integer | 0 <= val <= 100 |  | total <= 100 % |
| U3.6 SHARES OF FUEL TYPES / CARS | car_fuel_cng_percentage | text input | integer | 0 <= val <= 100 |  | total <= 100 % |
| U3.6 SHARES OF FUEL TYPES / CARS | car_fuel_alt_energy_biomethane_percentage | text input | integer | 0 <= val <= 100 |  | total <= 100 % |
| U3.6 SHARES OF FUEL TYPES / CARS | car_fuel_hybrid_elec_petrol_percentage | text input | integer | 0 <= val <= 100 |  | total <= 100 % |
| U3.6 SHARES OF FUEL TYPES / CARS | car_fuel_plug_in_hybrid_petrol_electric_percentage | text input | integer | 0 <= val <= 100 |  | total <= 100 % |
| U3.6 SHARES OF FUEL TYPES / CARS | car_fuel_hybrid_diesel_electric_percentage | text input | integer | 0 <= val <= 100 |  | total <= 100 % |
| U3.6 SHARES OF FUEL TYPES / CARS | car_fuel_plug_in_hybrid_diesel_electric_percentage | text input | integer | 0 <= val <= 100 |  | total <= 100 % |
| U3.6 SHARES OF FUEL TYPES / CARS | car_fuel_hydrogen_fuel_cells_percentage | text input | integer | 0 <= val <= 100 |  | total <= 100 % |
| U3.6 SHARES OF FUEL TYPES / CARS | car_fuel_bioethanol_percentage | text input | integer | 0 <= val <= 100 |  | total <= 100 % |
| U3.6 SHARES OF FUEL TYPES / CARS | car_fuel_bio_diesel_percentage | text input | integer | 0 <= val <= 100 |  | total <= 100 % |
| U3.6 SHARES OF FUEL TYPES / CARS | car_fuel_bi_fuel_percentage | text input | integer | 0 <= val <= 100 |  | total <= 100 % |
| U3.6 SHARES OF FUEL TYPES / CARS | car_fuel_other_unknown_percentage | text input | integer | 0 <= val <= 100 |  | total <= 100 % |
| U3.7 ELECTRICITY FOR TRANSPORT | increase_renewables | text input | integer | negative values allowed |  | total <= 100 % |
| U3.7 ELECTRICITY FOR TRANSPORT | increase_renewables_area_affected_percentage | text input | integer | 0 <= val <= 100 | 0 | |
| U3.7 ELECTRICITY FOR TRANSPORT | increase_renewables_start_year | dropdown | integer | 2021 <= year <= 2050 | 2025 | |
| U3.7 ELECTRICITY FOR TRANSPORT | increase_renewables_end_year | dropdown | integer | 2021 <= year <= 2050 | 2030 | |


EU COUNTRIES<br>
Austria<br>
Belgium<br>
Bulgaria<br>
Croatia<br>
Cyprus<br>
Czechia<br>
Denmark<br>
Estonia<br>
Finland<br>
France<br>
Germany<br>
Greece<br>
Hungary<br>
Iceland<br>
Ireland<br>
Italy<br>
Latvia<br>
Liechtenstein<br>
Lithuania<br>
Luxembourg<br>
Malta<br>
Netherlands<br>
Norway<br>
Poland<br>
Portugal<br>
Romania<br>
Slovakia<br>
Slovenia<br>
Spain<br>
Sweden<br>
Switzerland<br>
UK<br>
