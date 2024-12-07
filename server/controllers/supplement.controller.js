import Supplement from '../models/supplement.model.js'
import extend from 'lodash/extend.js'
import errorHandler from './error.controller.js'
const create = async (req, res) => { 
const supplement = new Supplement(req.body) 
try {
await supplement.save()
return res.status(200).json({ 
message: "Successfully signed up!"
})
} catch (err) {
return res.status(400).json({
error: errorHandler.getErrorMessage(err) 
})
} 
}
const list = async (req, res) => { 
try {
let supplements = await Supplement.find().select('name description updated created') 
res.json(supplements)
} catch (err) {
return res.status(400).json({
error: errorHandler.getErrorMessage(err) 
})
} 
}
const supplementByID = async (req, res, next, id) => { 
try {
let supplement = await Supplement.findById(id) 
if (!supplement)
return res.status('400').json({ 
error: "Supplement not found"
})
req.profile = supplement 
next()
} catch (err) {
return res.status('400').json({ 
error: "Could not retrieve supplement"
}) 
}
}
const read = (req, res) => {
req.profile.hashed_password = undefined 
req.profile.salt = undefined
return res.json(req.profile) 
}
const update = async (req, res) => { 
try {
let supplement = req.profile
supplement = extend(supplement, req.body) 
supplement.updated = Date.now() 
await supplement.save()
supplement.hashed_password = undefined 
supplement.salt = undefined
res.json(supplement) 
} catch (err) {
return res.status(400).json({
error: errorHandler.getErrorMessage(err) 
})
} 
}
const remove = async (req, res,next,id) => { 
try {
let supplement = req.profile
let deletedSupplement = await supplement.deleteOne() 
deletedSupplement.hashed_password = undefined 
deletedSupplement.salt = undefined
res.json(deletedSupplement) 
} catch (err) {
return res.status(400).json({
error: errorHandler.getErrorMessage(err) 
})
} 
}
const removeAll = async (req, res) => { 
    try {
        let supplement = req.profile
        let deletedSupplement = await supplement.deleteMany() 
        deletedSupplement.hashed_password = undefined 
        deletedSupplement.salt = undefined
        res.status(200).json({
            message: 'All supplements deleted successfully!' 
            }) 
        } catch (err) {
        return res.status(400).json({
        error: errorHandler.getErrorMessage(err) 
        })
        } 
}
export default { create, supplementByID, read, list, remove, update, removeAll }

