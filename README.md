# Netflix Top 10 Movies and TV Shows Tracker

This project aims to provide a user-friendly platform that allows users to explore the top 10 Netflix movies and TV shows. The data presented in this platform is obtained through **web scraping, ensuring that the top picks are always up to date.** This project is built using a powerful combination of Express, Sequelize (MySQL), and React.

![home](/images/image.png)
![home](/images/image2.png)
![home](/images/image3.png)
![home](/images/image6.png)
![home](/images/image9.png)

## Creators
* **[Deepankar Chakraborty](https://www.linkedin.com/in/deepankar-chakraborty-327691101/) -** Established the react web app and helped to maintain the aws database.
* **[Hyemin Shin](https://www.linkedin.com/in/hyemin-shin/) -** Designed the layout of the react web app using tailwind.
* **[Stephen Williams](https://www.linkedin.com/in/stephen-williams-7843271a3/) -** Created programs to scrape data from different websites using selenium.
## Features
* **Real-Time Data:** Our automated scraping programs enable us to offer weekly data
* **Top 10 Movies & TV Shows:** Our platform presents two distinct pages to list the top 10 movies and TV shows, giving our users a quick overview of what's trending on Netflix.

* **Interactive Details:** We strive to provide our users with more than just a list. By clicking on a specific movie or TV show, users are directed to a new page that presents detailed information about that selection. Details include the movie's title, cast, director, duration, ratings, and a brief overview of the plot, providing a comprehensive understanding of the content. Lastly we used gpt-3.5-turbo to summarize users opinions, specify the target audience for this content and provide a list of similar shows/movies.

By utilizing this project, users can stay updated on the most popular Netflix content and make informed decisions on what to watch next, making their Netflix experience even better!

## Technical Details
This application is composed of a few technologies:

* **Express.js** for backend logic, handling routing, server setup, and database operations.
* **Sequelize (with MySQL)** for the database layer, managing the data related to the top 10 lists.
* **React** for building the frontend of the application, providing interactive and dynamic user interfaces.
* **Selenium** for scrapping [netflix top 10](https://top10.netflix.com/films), [rottentomatoes](https://www.rottentomatoes.com/) and [imdb](https://www.imdb.com/).
* **GPT-3.5** used to generate responses that give user opinions, type of viewer and list of similar shows/movies
<hr> 

## How to use the scrapping files:
The sequence for executing the scraping programs is as follows.
1. First, run both **netflixMovie.py and netflixTvshows.py**. These files scraps data from netflix top 10 global english shows and movies and inserts them into a database.Every other scrapping depends on these two files
2. Run **rtMovieReviews.py and rtTvReviews.py**. Based on what shows/movies are in the database(from step 1), these files search for these media on rottentomatoes and collect their ratings (tomatometer and audience score). Inserts this data into a database
3. Run **imdbMovie.py and imdbTv.py**. similar to step 2 but instead of rotten tomatoes, these files scrape various data from imdb. Data include genres,imgurl,summary,and rating.
4. Run **audienceReviewsMovie.py and audienceReviewsTv.py**. Based on shows/movies in database, collect user written reviews, of at least 80 words, from rotten tomatoes.
5. Next comes the enjoyable part. Execute **gptTv.py and gptMovie.py** scripts. These files utilize user-written reviews (from a database) as input for gpt-3.5 turbo. The prompt includes requests for user opinions, the target audience for the content, a list of similar shows or movies, and a rating out of 10. The generated responses are then stored in a database and can be accessed through the website
## Whats next?
Improve the scraping process for rtMovieReviews.py and rtTvReviews.py. Sometimes the shows or movies cannot be found by creating a rottentomatoes url. Instead, scrapping rotten tomatoe should be like imdb files where
the search engine is utilized.

Increase the input of written reviews into gpt. Due to the token limitations of the free version of the open API key, we could only provide 15 user reviews. Maybe we can consider upgrading the API key to accommodate a greater number of reviews for improved results with gpt 3.5. Or use gpt 4
## Installation Instruction: 
1. Install git
2. Install NodeJS

### Install Dependencies Automatically
1. Set your terminal to Bash
2. Give execute permission to `install_dependencies.sh`
```bash
chmod +x install_dependencies.sh
```
3. Run the script
```bash
# Do this
./install_dependencies.sh

# OR

# This
bash install_dependencies.sh
```

## Set up Environment Variables: 
1. Add a environment file `.env` into the root directory of the project
```bash
touch .env
```
2. Follow the instruction below to configure the environment file. Add all the .env variables that has been confidentiality shared.
```
# database
MYSQL_HOST=
MYSQL_USERNAME=
MYSQL_PASSWORD=
MYSQL_PORT=
MYSQL_DATABASE=
MYSQL_DIALECT=

# Backend port
BACKEND_PORT = 

# Backend HOST
BACKEND_HOST=
```
##  Running the development build
1. Run backend:
```
cd backend
npm start
```
Note: backend runs on localhost:4000

2. Run Frontend:
```
cd frontend
npm start
```
Note: backend runs on localhost:4000
