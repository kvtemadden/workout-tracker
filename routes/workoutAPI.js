const router = require("express").Router();
const db = require("../models");

router.get("/api/workouts", (req, res) => {
  db.Workout.find()
    .then(workouts => res.json(workouts))
    .catch(err => res.json(err));
});

router.post("/api/workouts", (req, res) => {

  db.Workout.create({})
  .then((dbWorkout) => {
      res.json(dbWorkout);
  })
  .catch((err) => {
      res.json(err);
  });
});

router.put("/api/workouts/:id", (req, res) => {
    db.Workout.findByIdAndUpdate(
      req.params.id,
      { $push: { exercises: req.body } },
      { new: true }
    )
      .then(workout => res.json(workout))
      .catch(err => res.json(err));
  });

router.get("/api/workouts/range", (req, res) => {
  db.Workout.find({})
    .then(workouts => {
      res.json(workouts);
    })
    .catch(err => res.json(err));
});


totalDurationSum = () => {
  const calcTotalDuration = db.Workout.exercises.aggregate([{
    $group: {
        _id: null,
        totalDuration: {
            $sum: "$exercises.duration"
        }
    }
}]);

console.log(calcTotalDuration);
return calcTotalDuration;
}

module.exports = router;
