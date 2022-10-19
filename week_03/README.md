Cole von Glahn
Data Visualization - Fall 2022
This repo contains work for the third week of Data Viz. Information on each assignment can be found in this readme.

# Miscellaneous
script.js - a practice javascript file
index.html - a practice html document

# Library Data Bar Chart Exercise

FILES:
    homework.html - The html index for the library data exercise.
    homework.js - The D3 style sheet for the library data exercise
    library_visits_jan22.csv - The data for the library data exercise.


# Final Project Data Source Submission

The datasets are too large for Github. They can be accessed via box at this link: https://uchicago.box.com/s/a7gtgwu36ushtjdojgskffl73j9tyn2x

This directory contains open city data from Chicago and New York pertaining to bicycle use and collisions involving bicyclists. These data will be used to create visualizations summarizing safety outcomes between the two cities.

SOURCES:
    - All nyc_ labeled files come from NYC OpenData available at
        https://data.cityofnewyork.us/
    - All chi_ labeled files come from Chicago Data Portal available at
        https://data.cityofchicago.org/

DESCRIPTION:
    - chi_bikeshare: Trips taken using the Divvy bikeshare system in    Chicago through June 2021. Contains location, user, and time data per trip.
    - chi_crashes: All auto collisions in Chicago including injury information and whether the collision was with a bicyclist
    - chi_people: Injury information for individuals involved in auto collisions in Chicago.
    - nyc_bikeshare: Trips taken using the Citi bikeshare system in    New York through June 2021. Contains location, user, and time data per trip.
    - nyc_crashes: All auto collisions in New York including injury information and whether the collision was with a bicyclist
    - nyc_people: Injury information for individuals involved in auto collisions in New York.

INTEREST: 
Transitioning cities to be less car reliant is a necessity in the face of climate change. We must improve many factors surrounding alternative transit methods, but my favorite one is bikeability. Cities that rely more heavily on bikes can simultaneously invest in more green spaces, reduce infrastructural maintenance costs, and improve citizen health. However, it's dangerous. I am a relatively experienced city bike rider and was recently hit by a car while commuting. I certainly feel more fear now and am less likely to bike in situations that I was previously likely to bike in. Understanding the risks is a first step to addressing them and improving bikeability in cities.

GOALS:
I would like to present visualizations comparing bike safety outcomes in Chicago and New York. They are two major cities, with many bicyclists, but are not known as particularly "bike-friendly" cities. The bikeshare data serves as a proxy for bike popularity in the cities. The other datasets allow an examination of the number and severity of accidents involving bicyclists in the two cities. 

DATA POINTS:
In each paired set I will be most involved with the following
    - Bikeshares: Length, duration, count, location
    - Crashes: Count, injuries, involved parties, location
    - People: Count, severity, location, category

CONCERNS:
This would be a more powerful analysis if I could also compare the total mileage of bike routes to total mileage of roadways in the two cities. Within that comparison, I would like to present information on type of bike route and how those differences may impact the proportion of bike accidents and their severity. However, neither city makes that data available, though they do seem to have it, as there are GIS visualizations showing and categorizing all the routes in the city.

All datasets are primary sources.