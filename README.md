# Netflix Top 10 Movies and TV Shows Tracker

This project aims to provide a user-friendly platform that allows users to explore the top 10 Netflix movies and TV shows. The data presented in this platform is obtained through **web scraping, ensuring that the top picks are always up to date.** This project is built using a powerful combination of Express, Sequelize (MySQL), and React.
![home](/images/image.png)
![home](/images/image(1).png)
![home](/images/image (2).png)
![home](/images/image (3).png)
![home](/images/image (4).png)
![home](/images/image (5).png)
![home](/images/image (6).png)

## Features
* **Top 10 Movies & TV Shows:** Our platform presents two distinct pages to list the top 10 movies and TV shows, giving our users a quick overview of what's trending on Netflix.

* **Interactive Details:** We strive to provide our users with more than just a list. By clicking on a specific movie or TV show, users are directed to a new page that presents detailed information about that selection. Details include the movie's title, cast, director, duration, ratings, and a brief overview of the plot, providing a comprehensive understanding of the content.

By utilizing this project, users can stay updated on the most popular Netflix content and make informed decisions on what to watch next, making their Netflix experience even better!

## Technical Details
This application is composed of three main technologies:

* **Express.js** for backend logic, handling routing, server setup, and database operations.
* **Sequelize (with MySQL)** for the database layer, managing the data related to the top 10 lists.
* **React** for building the frontend of the application, providing interactive and dynamic user interfaces.

<hr> 

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
