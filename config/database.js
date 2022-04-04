const mongoose = require('mongoose')

const conexao = async() => {
    var atlas = await mongoose.connect('mongodb+srv://userADM:ADM1976@fiaptecnico.n7tnr.mongodb.net/2emia1tri')
}

module.exports = conexao