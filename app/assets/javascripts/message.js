$(function(){

  function buildHTML(message){
    var imageHTML = message.image ? `<img class='lower-message__image' src="${message.image}"></img>` : ""

    var html = `<div class="message">
                  <div class="upper-message">
                    <div class="upper-message__user-name">
                      ${message.user_name}
                    </div>
                    <div class="upper-message__date">
                      ${message.created_at}
                    </div>
                  </div>
                    <div class="lower-message">
                      <p class="lower-message__content">
                        ${message.content}
                      </p>
                      ${imageHTML}
                    </div>
                  </div>`
    return html;

  }
  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = window.location.href + '';
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.messages').append(html)
      $('#message_content').val('')
      $('#message_image').val('')
      $('.messages').animate({scrollTop:$('.messages')[0].scrollHeight});
      $('.form__submit').removeAttr('disabled');
    })
    .fail(function(){
      alert('エラー');
      $('.form__submit').removeAttr('disabled');
    })
  })
});