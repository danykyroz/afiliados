'use strict'

class HomeController {

  index ({ request, view }) {

    return view.render('index')

  }
  portafolio ({ request, view }) {

    return view.render('portfolio')

  }

}

module.exports = HomeController
