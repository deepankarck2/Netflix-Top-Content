## Netflix Trending 

## Installation
1. Install git
2. Install NodeJS

### Install Dependencies Automatically
1. Set your terminal to Bash
2. Give execute permission to `inp.sh`
```bash
chmod +x inp.sh
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
2. Follow the instruction below to configure the environment file. Add all the .env variables condentially shared with you.
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

2. Run Frontend:
```
cd frontend
npm start
```