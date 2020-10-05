$(document).ready(function() {
  $('.submit').click(function(event) {
    var name = $('.name').val()
    var email = $('.email').val()
    var phone = $('.phone').val()
    var message = $('.message').val()
    var verdict = $('.status')
    verdict.empty()
    verdict.append('<ul> </ul>')

    if (name.length < 3) {
      event.preventDefault()
      verdict.append('<li>Name is invalid</li>')
    }

    if (email.length > 5 && email.includes('@') && email.includes('.')) {
      console.log('Email is valid')
    } else {
      event.preventDefault()
      verdict.append('<li>Email is invalid</li>')
    }

    if (phone.length < 11) {
      event.preventDefault()
      verdict.append('<li>Phone number is invalid</li>')
    }

    if (message.length < 11) {
      event.preventDefault()
      verdict.append('<li>Message is invalid</li>')
    }
  })
})
