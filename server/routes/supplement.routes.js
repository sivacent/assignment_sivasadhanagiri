import express from 'express'
 import supplementCtrl from '../controllers/supplement.controller.js' 
 const router = express.Router()
 router.route('/api/supplements').post(supplementCtrl.create)
 router.route('/api/supplements').get(supplementCtrl.list)
 //router.param('supplementId', supplementCtrl.userByID)
 router.route('/api/supplements/:supplementId').get(supplementCtrl.read)
 router.route('/api/supplements/:supplementId').put(supplementCtrl.update)
 router.route('/api/supplements/:supplementId').delete(supplementCtrl.remove)
 router.route('/api/supplements').delete(supplementCtrl.removeAll)
 export default router
