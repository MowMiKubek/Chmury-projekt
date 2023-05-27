import mongoose from 'mongoose'
import dotenv from 'dotenv'

const dbURL = dotenv.config().parsed.DB_URL
// const dbURL = 'mongodb+srv://admin:2RJdBHYIRZpKANQH@cluster0.8dmbmph.mongodb.net/Student'

export default () => {
    mongoose.connect(dbURL, {useNewUrlParser: true})
    .then((result) => {
        console.log("Połączono z baza")
    })
    .catch((err) => {
        console.log("Nie można połączyć się z bazą " + err)
})
}
