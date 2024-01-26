4,7 +4,6 @@ const cors = require('cors')
const express = require('express')	const express = require('express')
const app = express()	const app = express()


const apiRouter = require('./routes/api')	
const indexRouter = require('./routes/index')	const indexRouter = require('./routes/index')


const PORT = process.env.PORT || 5000	const PORT = process.env.PORT || 5000
@@ -17,14 +16,13 @@ app.get('/test', (req, res) => {
// Enable CORS for all origins	// Enable CORS for all origins
app.use(cors())	app.use(cors())
app.use(express.json())	app.use(express.json())
app.use('/api', apiRouter)	
app.use('/', indexRouter)	app.use('/', indexRouter)


mongoose.connect(process.env.DATABASE_URL, {	mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true, useUnifiedTopology: true	    useNewUrlParser: true, useUnifiedTopology: true
})	})
    .then(() => console.log('Database connection successfull'))	.then(() => console.log('Database connection successfull'))
    .catch((err) => console.log('error in db connection', err));	.catch((err) => console.log('error in db connection', err));




app.listen(PORT, () => { console.log(`Server running on ${PORT}`) })	app.listen(PORT, () => { console.log(`Server running on ${PORT}`) })
