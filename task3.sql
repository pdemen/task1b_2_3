CREATE VIEW count_flights (model, flights) AS
	SELECT model::json->'en', COUNT(flight_id)
	FROM aircrafts_data AS air JOIN flights AS fli ON air.aircraft_code=fli.aircraft_code
	GROUP BY model;