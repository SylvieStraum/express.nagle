// 1st things first require express
const express = require('express')
const bodyParser = require('body-parser')
//create an instance of express
const app = express();

const port = 5000;


//express static file serving

app.use(express.static('server/public'))

//this is part of enabling bodyparser
//THIS WILL TRANSLATE REQ.BODY
app.use(bodyParser.urlencoded({ extended: true }))


let cohortNames = require('./modules/cohorts.js')



//when this /cohorts route is on local server run this
app.get('/cohorts', function(req, res){
    console.log('hello from the server siiiiiiiiiiide /cohorts')
    let nagle = findNagle(cohortNames);

    
    //res = response :   .send gives included info
    res.send(cohortNames)
})


app.post('/cohorts', (req, res)=>{
    console.log('req.body logged', req.body)
    
    
cohortNames.push(req.body.firstCohort)
cohortNames.push(req.body.secondCohort)


    console.log(cohortNames)
    //used postman localhost>> BODY>>urlencoded!!
    //this denotes sending back a status 
    res.sendStatus(200)
})


function findNagle(arrayParam){
    for(let array of arrayParam){
        if(array = "Nagle"){
            return array;
        }
    }
}


//start up our server
app.listen(port, () => {
    //functionality here
    console.log("listening on port: ", port)}
)