$(document).ready(function() {
  $('.submit').click(function(event) {
    var first_name = $('.first-name').val()
    var last_name = $('.last-name').val()
    var email = $('.email').val()
    var message = $('.message').val()
    var verdict = $('.status')
    verdict.empty()
    verdict.append('<ul> </ul>')

    if (first_name.length < 2) {
      event.preventDefault()
      verdict.append('<li>Invalid name</li>')
    }
    else if (last_name.length < 2) {
      event.preventDefault()
      verdict.append('<li>Invalid name</li>')
    }
    if (email.length > 5 && email.includes('@') && email.includes('.')) {
      console.log('Email is valid')
    } else {
      event.preventDefault()
      verdict.append('<li>Invalid email</li>')
    }

    if (message.length < 11) {
      event.preventDefault()
      verdict.append('<li>Invalid message</li>')
    }
  })
})
