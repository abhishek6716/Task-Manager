require('../src/db/mongoose')
const { updateOne } = require('../src/models/user')
const User = require('../src/models/user')

// User.findByIdAndUpdate('60211e9972d8df3f702a7627', { age: 22 }).then((user) => {
//     console.log(user)
//     return User.countDocuments({ age: 22 })
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, { age })
    const count = await User.countDocuments({ age })
    return count
}

updateAgeAndCount('60211e9972d8df3f702a7627', 27).then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})