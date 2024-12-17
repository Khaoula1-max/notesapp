const express = require('express');
const router = express.Router();
const { addTags,getTags } = require('../controllers/NoteController');
const {validations,handleValidationErrors}= require ('../utils/validator')

outer.post('/tags', validations.tagValidation, handleValidationErrors, addTags);
router.get('/tags', getTags);
router.get('/tags/:id', getTagById);
router.put('/tags/:id', validations.tagValidation, handleValidationErrors, updateTag);
router.delete('/tags/:tagId', deleteTag);

module.exports = router;
