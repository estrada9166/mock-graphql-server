'use strict'

const express = require('express')
const { buildSchema } = require('graphql')
const graphqlHTTP = require('express-graphql')
const bodyParser = require('body-parser')
const fs = require('fs')
const path = require('path')
const mocker = require('easygraphql-mock')

const app = express()

app.set('port', 8000)
app.use(bodyParser.json({limit: '10mb'}))
app.use(bodyParser.urlencoded({ extended: true }))

const schemaCode = fs.readFileSync(path.join(__dirname, 'schema.gql'), 'utf8')
const schema = buildSchema(schemaCode)
const mock = mocker(schemaCode)

const resolver = Object.assign({}, mock.Query, mock.Mutation)

app.use('/', (req, res) => {
  graphqlHTTP({
    schema,
    rootValue: resolver,
    graphiql: true
  })(req, res)
})

const server = app.listen(app.get('port'), () => {
  console.log(`Server running -> PORT ${server.address().port}`)
})

module.exports = app
