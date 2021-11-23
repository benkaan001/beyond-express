const express = require("express");
// set up the router here
const router = express.Router();


const {
  getPeople,
  createPerson,
  createPersonPostman,
  updatePerson,
  deletePerson,
} = require("../controllers/people");
// we are gonna rename the app to router, since the router object will handle the routes

// since we set up the base in app.js app.use method, we need to remove the base, which is
// /api/people from our routes

router.get("/", getPeople);
router.post("/", createPerson);
router.post("/postman", createPersonPostman);
router.put("/:id", updatePerson);
router.delete("/:id", deletePerson);

// alternative way to set them up. This requires chaining 

// router.route('/').get(getPeople).post(createPerson);
// router.route('/postman').post(createPersonPostman);
// router.route('/:id').put(updatePerson).delete(deletePerson);

module.exports = router;
