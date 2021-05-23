const jsonfile = require('jsonfile')
const moment = require('moment')
const simpleGit = require('simple-git')
const FILE_PATH = './data.json'

const date = moment().format()

const payload = {
    date
}

jsonfile.writeFile(FILE_PATH, payload, () => {
    //simpleGit().add(FILE_PATH).commit('bot69 working', {'--date':date}).push()
})

simpleGit().add('./index.js').commit('index.js commit', {'--date':date}).push()

