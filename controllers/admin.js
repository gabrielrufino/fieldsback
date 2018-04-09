const mongoose = require('mongoose')
const Feedback = mongoose.model('Feedback')

module.exports = (req, res) => {
  Feedback.find((err, feedbacks) => {
    if (!err) {
      res.render('admin', { feedbacks })
    } else {
      res.send('Erro na captação dos feedbacks')
    }
  })
}
