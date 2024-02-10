var router = require('express').Router();
const { isAuthenticated, isAdmin, renewToken } = require('../middleware/verify');

//Import the controller(s)
const accountsController = require('../controllers/accounts');

router.post('/',  accountsController.createNewAccount);
router.post('/login', accountsController.login);
router.post('/mailingList', accountsController.joinMailingList);

//Manage Accounts
router.get('/own',  [isAuthenticated, renewToken], accountsController.accountOwn); //Returns account info
router.post('/own/delete',  [isAuthenticated], accountsController.accountOwnDelete); //Deletes account

//Manage Data
router.post('/own/data/download',  [isAuthenticated, renewToken], accountsController.accountOwnDataDownload);
router.post('/own/data/upload',  [isAuthenticated, renewToken], accountsController.accountOwnDataUpload);
router.post('/own/data/delete',  [isAuthenticated, renewToken], accountsController.accountOwnDataDelete);


//Admin functions
// router.get('/allInfo',  [isAuthenticated, isAdmin, renewToken], accountsController.allAccountInfo);
//  router.post('/deleteAccounts',  [isAuthenticated, isAdmin, renewToken], accountsController.deleteAccounts);

//export the router back to the index.js page
module.exports = router;