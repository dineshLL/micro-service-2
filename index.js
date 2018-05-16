const express = require('express')
const app = express()

app.get('/', (req, res) => res.json({"message": "from second service"}))

app.listen(8080, () => console.log('Server is running!!!'))
