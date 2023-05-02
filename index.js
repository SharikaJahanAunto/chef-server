const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 5000

app.use(cors())

app.get('/', (req, res) =>{
    res.send('chefs are running')
})

app.get('')

app.listen(port, () => {
    console.log(`chef API is running on port: ${port}`);
})