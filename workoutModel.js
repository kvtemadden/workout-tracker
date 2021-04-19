const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema(
    {
        day: {
            type: Date,
            default: Date.now,
        },
        exercises: [
            {
                type: {
                    type: String,
                    trim: true,
                    required: "Enter the type of workout",
                },
                name: {
                    type: String,
                    trim: true,
                    required: "Enter the name of your workout",
                },
                duration: {
                    type: Number,
                    required: "How long is your workout going to last?",
                },
                weight: {
                    type: Number
                },
                reps: {
                    type: Number
                },
                sets: {
                    type: Number,
                },
                distance: {
                    type: Number
                },
            },
        ],
    }
);

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;