// link the javascript file to the html file via the script tag
// then we link the dom button to the build request function.
function build() {
  var formData = $('#request-form').serializeArray()
  var stringifyFormData = JSON.stringify(formData)
  $('.flex-item-requestBody').html(stringifyFormData)
}

function buildRequest() {
  var formData = $('#request-form').serializeArray()
  console.log(formData)
  $.ajax({
    url: '/getdata',
    method: 'POST',
    data: formData
  })
  .then(response => {
    console.log('first then: ',response);
    console.log('second then: ',response);
    const responseContainer = document.getElementsByClassName('flex-item-responseBody')
    responseContainer[0].innerText = JSON.stringify(response)
  })
  .catch(error => {
    console.log(error);
  })
}
