require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndDelete('6020c9e6161bd2261cc6bc31').then((task) => {
//     console.log(task)
//     return Task.countDocuments({ completed: false })
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({ completed: false })
    return count
}

deleteTaskAndCount('602112b1f38ca03a1c2b938b').then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})