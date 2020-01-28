
var global_ = ''

var isToggle = true



$(document).ready(function() {

  $(".signup-btn").on('click', (e) => {
    var id = $('#id').val()
    var password = $('#password').val()
    var password_check = $('#password-check').val()
    var name = $('#name').val()
    var gender = $('#gender').val()
    var student_number = $('#student-number').val()
    var major_selector = $('#major-selector').val()
    var major_detail = $('#major-detail').val()
    var email_1 = $('#email-1').val()
    var email_2 = $('#email-2').val()
    var phone_1 = $('#phone-number-1').val()
    var phone_2 = $('#phone-number-2').val()
    var phone_3 = $('#phone-number-3').val()

    var correctCheck = false

    correctCheck = false

    if (id == '') {
      correctCheck = true
      $('.warning-id').css('display', 'block')
    }
    else {
      $('.warning-id').css('display', 'none')
    }

    if (password == '') {
      correctCheck = true
      $('.warning-password').css('display', 'block')
    }
    else {
      $('.warning-password').css('display', 'none')
    }

    if (password_check == '') {
      correctCheck = true
      $('.warning-password-check').css('display', 'block')
    }
    else {
      $('.warning-password-check').css('display', 'none')
    }

    if (password != '' && password != password_check) {
      correctCheck = true
      $('.warning-password-differ').css('display', 'block')
    }
    else {
      $('.warning-password-differ').css('display', 'none')
    }

    if (name == '') {
      correctCheck = true
      $('.warning-name').css('display', 'block')
    }
    else {
      $('.warning-name').css('display', 'none')
    }

    if (gender == '성별') {
      correctCheck = true
      $('.warning-gender').css('display', 'block')
    }
    else {
      $('.warning-gender').css('display', 'none')
    }

    if (!isToggle) {
      if (student_number == '') {
        correctCheck = true
        $('.warning-student-number-length').css('display', 'none')
        $('.warning-student-number').css('display', 'block')
      }
      else {
        $('.warning-student-number').css('display', 'none')

      }

      if (student_number.length != 10 && student_number != '') {
        correctCheck = true
        $('.warning-student-number').css('display', 'none')
        $('.warning-student-number-length').css('display', 'block')
      }
      else {
        $('.warning-student-number-length').css('display', 'none')
      }
    }


    if (major_selector == '단과대학을 선택해주세요.' || major_detail == '과를 선택해주세요.') {
      correctCheck = true
      $('.warning-major').css('display', 'block')
    }
    else {
      $('.warning-major').css('display', 'none')
    }

    if (email_1 == '' || email_2 == '') {
      correctCheck = true
      $('.warning-email').css('display', 'block')
    }
    else {
      $('.warning-email').css('display', 'none')
    }

    if (phone_2 == '' || phone_3 == '') {
      correctCheck = true
      $('.warning-phone').css('display', 'block')
    }
    else {
      $('.warning-phone').css('display', 'none')
    }

    if ((phone_2.length != 4 || phone_3.length != 4 ) && phone_2.length != 0 && phone_2.length != 0) {
      correctCheck = true
      $('.warning-length').css('display', 'block')
    }
    else {
      $('.warning-length').css('display', 'none')
    }

    if (correctCheck) {
      $('.warning-check').css('display', 'block')
    }
    else {
      $('.warning-check').css('display', 'none')
    }

  })

  var check = $("input[type='checkbox']");

  check.click(function(){
  	$("p").toggle()
    $('.student-number').toggle()

    if (isToggle) {
      isToggle = false
    }
    else {
      isToggle = true
    }
  });

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

  /* selector change */
  $("#major-selector").change(function() {
    var sel = document.getElementById("major-selector")

    $("#major-detail").empty().data('options')

    switch (sel.selectedIndex) {
      case 1:
        $('#major-detail').append("<option>과를 선택해주세요.</option>")
        $('#major-detail').append("<option>경영학부</option>")
        $('#major-detail').append("<option>국제통상학부</option>")
        break
      case 2:
        $('#major-detail').append("<option>과를 선택해주세요.</option>")
        $('#major-detail').append("<option>건축공학과</option>")
        $('#major-detail').append("<option>건축학과</option>")
        $('#major-detail').append("<option>화학공학과</option>")
        $('#major-detail').append("<option>환경공학과</option>")
        break
      case 3:
        $('#major-detail').append("<option>과를 선택해주세요.</option>")
        $('#major-detail').append("<option>소프트웨어학부</option>")
        $('#major-detail').append("<option>정보융합학부</option>")
        $('#major-detail').append("<option>컴퓨터정보공학부</option>")
        break
      case 4:
        $('#major-detail').append("<option>과를 선택해주세요.</option>")
        $('#major-detail').append("<option>국어국문학과</option>")
        $('#major-detail').append("<option>동북아문화산업학부</option>")
        $('#major-detail').append("<option>미디어커뮤니케이션학부</option>")
        $('#major-detail').append("<option>산업심리학과</option>")
        $('#major-detail').append("<option>영어산업학과</option>")
        break
      case 5:
        $('#major-detail').append("<option>과를 선택해주세요.</option>")
        $('#major-detail').append("<option>수학과</option>")
        $('#major-detail').append("<option>생활체육학과</option>")
        $('#major-detail').append("<option>전자바이오물리학과</option>")
        $('#major-detail').append("<option>화학과</option>")
        break
      case 6:
        $('#major-detail').append("<option>과를 선택해주세요.</option>")
        $('#major-detail').append("<option>로봇학부</option>")
        $('#major-detail').append("<option>전기공학과</option>")
        $('#major-detail').append("<option>전자공학과</option>")
        $('#major-detail').append("<option>전자융합공학과</option>")
        $('#major-detail').append("<option>전자재료공학과</option>")
        $('#major-detail').append("<option>전자통신공학과</option>")
        break
      case 7:
        $('#major-detail').append("<option>과를 선택해주세요.</option>")
        $('#major-detail').append("<option>국제학부</option>")
        $('#major-detail').append("<option>법학부</option>")
        $('#major-detail').append("<option>행정학과</option>")
        break
      default:

    }

  })
})
