# Create GraphQL server on the go!

If you want to create a GraphQL server with your schema to test your front-end, just follow the next steps:

### Clone the repo
```bash
$ git clone git@github.com:estrada9166/mock-graphql-server.git

or 

$ git clone https://github.com/estrada9166/mock-graphql-server.git
```

### Add your schema to `src/schema`
``` GraphQL
type Student {
  id: ID!
  email: String!
  username: String!
  career: Career!
}

type Career {
  id: ID!
  name: String!
  students: [Student]
}

# MUTATIONS
input StudentInput {
  email: String!
  username: String!
  careerId: ID!
}

input CareerInput {
  name: String!
}

type Query {
  geAllStudents: [Student]
  getStudentById(studentId: ID!): Student
  getAllCareers: [Career]
  getCareerById(careerID: ID!): Career
}

type Mutation {
  createStudent(input: StudentInput!): Student
  createCareer(input: CareerInput!): Career
}
```

### Run locally
```bash
$ npm start
```

### Deploy
You can deploy it using [now](https://zeit.co/now); install now, setup your account and
```bash
$ now
```

**Now you have a GraphQL server runnning with a mock of your schema**

This package is usign [`easygraphql-mock`](https://github.com/EasyGraphQL/easygraphql-mock) to mock your schema.

Also, you can try [`easygraphql-tester`](https://github.com/EasyGraphQL/easygraphql-tester) to make tests of your schema, query, and mutations

### The MIT License

Copyright (c) 2018 Alejandro Estrada

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.