function myfunction(){
    const token = ''
    const userid = 0
    const mail_token = ''
    
    var response =UrlFetchApp.fetch(`http://e-learning.hcmut.edu.vn/webservice/rest/server.php?wsfunction=core_message_get_messages&wstoken=${token}&newestfirst=1&useridto=${userid}&read=0&type=conversations`)
    const subjectRegex = /<KEY name="subject">.*/g;
    const messageRegex = /<KEY name="fullmessage">(.*?)EY>/gs;
    const idRegex = /<KEY name="id">.*>/g;
    var subjects = response.getContentText().match(subjectRegex)
    var messages = response.toString().match(messageRegex)
    var messageIds = response.toString().match(idRegex)

    //sending mail
    if(subjects){
      for(i=0;i<subjects.length;i++){
        var formData = {
        access_token: mail_token,
        subject: subjects[i].substring(27,subjects[i].length-8),
        text: decodeHTMLEntities(messages[i].substring(31,messages[i].length-15))
        };
        var options = {
        'method' : 'post',
        'contentType': 'application/json',
        'payload' : JSON.stringify(formData)
        };
        UrlFetchApp.fetch('https://postmail.invotes.com/send', options);
          //mark message as read
        
        var time = Date.now()
        var messageid = parseInt(messageIds[i].substring(22,messageIds[i].length-8));
        var options = {
            'method' : 'POST',
            };
        UrlFetchApp.fetch(`http://e-learning.hcmut.edu.vn/webservice/rest/server.php?wsfunction=core_message_mark_message_read&wstoken=${token}&messageid=${messageid}&timeread=${time}`,options)
        
      }
    }
  }
  function decodeHTMLEntities(text) {
      var entities = [
          ['amp', '&'],
          ['apos', '\''],
          ['#x27', '\''],
          ['#x2F', '/'],
          ['#39', '\''],
          ['#47', '/'],
          ['lt', '<'],
          ['gt', '>'],
          ['nbsp', ' '],
          ['quot', '"']
      ];
  
      for (var i = 0, max = entities.length; i < max; ++i) 
          text = text.replace(new RegExp('&'+entities[i][0]+';', 'g'), entities[i][1]);
  
      return text;
  }
  
  
  