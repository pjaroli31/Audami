
function startRecord(){
    try {
        var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        var recognition = new SpeechRecognition();
        console.log("Hello world");
        recognition.interimResults = true;
        recognition.addEventListener("result",e => {
       
        const transcript = Array.from(e.results)
      		.map(result => result[0])
      		.map(result => result.transcript)
              .join('');
        console.log(transcript);      
    });
        recognition.start();
    }
    catch(e) {
        console.error(e);
        $('.no-browser-support').show();
        $('.app').hide();
    }
}    

function stopRecord(){
    console.log("end");
;}
