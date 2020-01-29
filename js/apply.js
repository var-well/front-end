
var global_ = ''

$(document).ready(function() {

  $(".apply-btn").on('click', (e) => {
    var parent_phone_1 = $('#parent-phone-1').val()
    var parent_phone_2 = $('#parent-phone-2').val()
    var resident_number_1 = $('#resident-number-1').val()
    var resident_number_2 = $('#resident-number-2').val()

    var correctCheck = false

    correctCheck = false

    if (parent_phone_1 == '' || parent_phone_2 == '') {
      correctCheck = true
      $('.warning-parent-phone').css('display', 'block')
    }
    else {
      $('.warning-parent-phone').css('display', 'none')
    }

    if ((parent_phone_1.length != 4 || parent_phone_2.length != 4) && parent_phone_1 != '' && parent_phone_2 != '') {
      correctCheck = true
      $('.warning-parent-phone-width').css('display', 'block')
    }
    else {
      $('.warning-parent-phone-width').css('display', 'none')
    }

    if (resident_number_1 == '' || resident_number_2 == '') {
      correctCheck = true
      $('.warning-resident-number').css('display', 'block')
    }
    else {
      $('.warning-resident-number').css('display', 'none')
    }

    if ((resident_number_1.length != 6 || resident_number_2.length != 7) && resident_number_1 != '' && resident_number_2 != '') {
      correctCheck = true
      $('.warning-resident-number-width').css('display', 'block')
    }
    else {
      $('.warning-resident-number-width').css('display', 'none')
    }

    if (correctCheck) {
      $('.warning-check').css('display', 'block')
    }
    else {
      $(location).attr('href', 'confirm.html')
    }

  })

  $(".isNumber").keypress( (e) => {
      if(e.keyCode<48 || e.keyCode>57){
        return false
      }
  })

  $(".numMax").on("input", (e) => {
    var element = e.target

    if(element.value.length > element.maxLength) {
      element.value = element.value.slice(0, element.maxLength)
    }
  })

  $(".back-btn").on('click', (e) => {

    $(location).attr('href', 'private.html')

  })


})
