const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT || 3000

// app.use((req, res, next) => {
//     if (req.method === 'GET') {
//         res.send('GET requests are disabled')
//     } else {
//         next()
//     }
// })

// app.use((req, res, next) => {
//     res.status(503).send('Site is currently down. Check back soon!')
// })

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

// const router = new express.Router()
// router.get('/test', (req, res) => {
//     res.send('This is from other router')
// })
// app.use(router)

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})



// const bcrypt = require('bcryptjs')

// const myfxn = async () => {
//     const password = 'ab67162285'
//     const hashedPassword = await bcrypt.hash(password, 8)

//     console.log(password)
//     console.log(hashedPassword)

//     const isMatched = await bcrypt.compare('ab67162285', hashedPassword)
//     console.log(isMatched)
// }

// myfxn()


// const jwt = require('jsonwebtoken')

// const myfxn = async () => {
//     const token = jwt.sign({ _id: 'abcd123' }, 'mynameisabhishek', { expiresIn: '7 days' })
//     console.log(token)

//     const data = jwt.verify(token, 'mynameisabhishek')
//     console.log(data)
// }

// myfxn()

// const pet = {
//     name: 'n1'
// }
// pet.toJSON = function () {
//     return {}
// }
// console.log(JSON.stringify(pet))

// const Task = require('./models/task')
// const User = require('./models/user')

// const main = async () => {
//     // const task = await Task.findById('6027e2a8cb58372b20e8d25e')
//     // await task.populate('owner').execPopulate()
//     // console.log(task.owner)

//     const user = await User.findById('6027dcd681ac4a33fc982476')
//     await user.populate('tasks').execPopulate()
//     console.log(user.tasks)
// }

// main()
