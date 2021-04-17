const express = require('express')
const router = express.Router()
const Publication = require('../models/publications')

// Getting all publications
router.get('/', async (req, res) => {
  try {
    const publications = await Publication.find()
    res.json(publications)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

// Creating one publication
router.post('/', async (req, res) => {
  const publication = new Publication(req.body)

  try {
    const newPublication = await publication.save()
    res.status(201).json(newPublication)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
})

// Getting one publication
router.get('/:id', getPublication, (req, res) => {
  res.json(res.publication)
})

// Updating one publication
router.patch('/:id', getPublication, async (req, res) => {
  if (req.body.name != null) {
    res.publication.name = req.body.name
  }

  if (req.body.subscribedChannel != null) {
    res.publication.subscribedChannel = req.body.subscribedChannel
  }
  try {
    const updatedPublication = await res.publication.save()
    res.json(updatedPublication)
  } catch (err){
    res.status(400).json({ message: err.message })
  }

})
// Deleting one publication
router.delete('/:id', getPublication, async (req, res) => {
  try {
    await res.publication.remove()
    res.json({ message: 'Deleted This Publication' })
  } catch(err) {
    res.status(500).json({ message: err.message })
  }
})

// Middleware function for gettig publication object by ID
async function getPublication(req, res, next) {
  try {
    publication = await Publication.findById(req.params.id)
    if (publication == null) {
      return res.status(404).json({ message: 'Cant find publication'})
    }
  } catch(err){
    return res.status(500).json({ message: err.message })
  }
  
  res.publication = publication
  next()
}

module.exports = router 