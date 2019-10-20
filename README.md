# Credit Card System

Credit Card System application built on nodejs-express as rest api 
and react as the UI.

## NodeJS 10.16 and React 16.10

## Prerequisite

1. Make sure you have latest stable version of [node](https://nodejs.org/en/download/) installed.

## Usage
```
git clone
cd cc_system
```

### Rest API

```
cd rest
npm install
node_modules/.bin/sequelize db:migrate
npm start

curl -X POST http://localhost:3001/credit_card/add -H 'Content-Type: application/json' -d '{ "name" : "Alice", "card_number" : "1111 2222 3333 4444", "limit" : 2000 }'
curl -X GET http://localhost:3001/credit_card/get_all
```

### Rest API Test
```
npm test
```

### UI

```
cd ui
npm install
npm start

http://localhost:3000
```

### UI Test
```
npm test
```