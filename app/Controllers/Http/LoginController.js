'use strict'

class LoginController {

  index ({ request, view }) {

    const guessedNumber = Number(request.input('number'))
    const randomNumber = Math.floor(Math.random() * 20) + 1
    //return 'Dummy response'+randomNumber;
    /** rendering view */
    return view.render('login', { guessedNumber, randomNumber })
  }

  show ({ request, view }) {
    const randomNumber = Math.floor(Math.random() * 20) + 1
    return 'Me gusta darle duro al code jajaj'+randomNumber;
  }


}

module.exports = LoginController
