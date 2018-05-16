const express = require('express')
const app = express()

app.get('/', (req, res) => res.json({"message": "from second service"}))

app.listen(3001, () => console.log('Example app listening on port 3000!'))