THE DAILY BLACK DIAMOND: BIKE TRANSIT DANGERS IN CHICAGO
by: Cole von Glahn
MSCAPP - Data Visualization Autumn 2022


This repo contains the JS code and data underlying the final_charts.html presentation file. Individual descriptions follow.

chicago.json - A json file containing the Chicago polygon data for creating the map framework in map.js, entitled Severe Incidents on Chicago's Spoke and Wheel.

community_agg.csv - A csv file containing the aggregated severity by neighborhood for providing the choropleth effect in Severe Incidents on Chicago's Spoke and Wheel.

d3-color-legend.js - Observables d3 color legend, modified by Tiffany France for use in this course. Provides the backend to produce the legend for Severe Incidents on Chicago's Spoke and Wheel.

final_charts.html - The html file for web presentation of the underlying javascript and data files.

map_data.json - A json file containing the complete set of car-on-bike incidents by latitude and longitude, including the severity of the accident from 2017-2022. Used to provide the incident points on Severe Incidents on Chicago's Spoke and Wheel.

map.js - A javascript file written primarily with the D3 package to create Severe Incidents on Chicago's Spoke and Wheel.

multiline_data_v2.csv - A csv file containing the underlying data for Hits or Headers: Comparing Accident Counts to Damage Done, an analysis of car-on-car vs car-on-human incidents and their relative severity ratings.

multiline.js - A javascript file written primarily with the D3 package to create Hits or Headers: Comparing Accident Counts to Damage Done.

rings_binned.json - A json file containing information on Chicago's six most dangerous streets for bikers. Organized by street name, it bins several dozen causal categories as determined by reporting officers into "Driver Error", "Undetermined", and "Environmental". Provides the underlying data for Broken Spokes: Chicago's Most Dangerous Streets.

street_rings.js - A javascript file written primarily with the D3 package to create Broken Spokes: Chicago's Most Dangerous Streets.
