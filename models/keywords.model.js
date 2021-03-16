const mongoose =require('mongoose');
const {TE, to} =require('../services/util.service')

let KeywordsSchema = mongoose.Schema({
    keyword : {type: String},
    links: {type: String},
    status: {type: Number},
    type: {type: Number},
    writer: {type: String},
    dateCompleted: {type: Date},
    productDesign: {type: Number},
    pinterest: {type: Boolean},
    note: {type: String}
}, {timestamps: false});

KeywordsSchema.methods.toWeb = function(){
    let json = this.toJSON();
    json.id = this._id;
    return json;
}

let keywords = module.exports = mongoose.model('Keywords', KeywordsSchema);