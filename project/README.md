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
Driver Error: [
    'DISREGARDING TRAFFIC SIGNALS',
    'FOLLOWING TOO CLOSELY',
    'OPERATING VEHICLE IN ERRATIC, RECKLESS, CARELESS, NEGLIGENT OR AGGRESSIVE MANNER',
    'IMPROPER OVERTAKING/PASSING', 
    'FAILING TO YIELD RIGHT-OF-WAY',
    'FAILING TO REDUCE SPEED TO AVOID CRASH',
    'DRIVING SKILLS/KNOWLEDGE/EXPERIENCE',
    'IMPROPER TURNING/NO SIGNAL',
    'IMPROPER LANE USAGE',
    'DRIVING ON WRONG SIDE/WRONG WAY',
    'DISREGARDING STOP SIGN',
    'PHYSICAL CONDITION OF DRIVER',
    'DISREGARDING OTHER TRAFFIC SIGNS',
    'IMPROPER BACKING',
    'DISREGARDING YIELD SIGN',
    'BICYCLE ADVANCING LEGALLY ON RED LIGHT',
    'TURNING RIGHT ON RED',
    'DISREGARDING ROAD MARKINGS',
    'EXCEEDING AUTHORIZED SPEED LIMIT',
    'EXCEEDING SAFE SPEED FOR CONDITIONS',
    'UNDER THE INFLUENCE OF ALCOHOL/DRUGS (USE WHEN ARREST IS EFFECTED)',
    'MOTORCYCLE ADVANCING LEGALLY ON RED LIGHT',
    'HAD BEEN DRINKING (USE WHEN ARREST IS NOT MADE)',
    'CELL PHONE USE OTHER THAN TEXTING',
    'DISTRACTION - FROM OUTSIDE VEHICLE',
    'DISTRACTION - FROM INSIDE VEHICLE',
    'TEXTING',
    'DISTRACTION - OTHER ELECTRONIC DEVICE (NAVIGATION DEVICE, DVD PLAYER, ETC.)'
]
Environmental: [
    'VISION OBSCURED (SIGNS, TREE LIMBS, BUILDINGS, ETC.)',
    'ROAD ENGINEERING/SURFACE/MARKING DEFECTS',
    'EVASIVE ACTION DUE TO ANIMAL, OBJECT, NONMOTORIST',
    'WEATHER',
    'EQUIPMENT - VEHICLE CONDITION',
    'OBSTRUCTED CROSSWALKS',
    'ROAD CONSTRUCTION/MAINTENANCE',
    'RELATED TO BUS STOP',
    'ANIMAL'
]
Undefined: [
    'UNABLE TO DETERMINE',
    'NOT APPLICABLE'
]

street_rings.js - A javascript file written primarily with the D3 package to create Broken Spokes: Chicago's Most Dangerous Streets.
