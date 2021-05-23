const jsonfile = require('jsonfile')
// const moment = require('moment')
const simpleGit = require('simple-git')
const FILE_PATH = './data.json'

// const date = moment().format()
// format --> YYYY-MM-DD
const dates = [
    "2021-04-03T18:44:38+05:30",
    "2021-04-04T18:44:38+05:30",
    "2021-04-05T18:44:38+05:30",
    "2021-04-06T18:44:38+05:30",
    "2021-04-07T18:44:38+05:30",
    "2021-04-08T18:44:38+05:30",
    //and so on....
]

dates.map((date) =>{ 
    
    const payload = {
        date
    }
    
    jsonfile.writeFile(FILE_PATH, payload, () => {
        console.log(date)
        simpleGit().add(FILE_PATH).commit('bot69 working', {'--date':date})
    })
})
   
simpleGit().push()
//simpleGit().add('./index.js').commit('index.js commit', {'--date':date}).push()

