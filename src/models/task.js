const mongoose = require('mongoose')
const validator = require('validator')

const Task = mongoose.model('Task', {
    description: {
        type: String,
        required: true,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }
})

module.exports = Task






// const T1 = new Task({
//     description: '  GYM',
// })

// T1.save().then(() => {
//     console.log(T1)
// }).catch((error) => {
//     console.log('Error', error)
// })