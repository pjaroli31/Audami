window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
var stopRecog = new SpeechRecognition();
var str;
function startRecord() {
    const recognition = new SpeechRecognition();
    stopRecog = recognition;
    recognition.interimResults = true;
    
    
    recognition.addEventListener('result', e => {
        const transcript = Array.from(e.results)
            .map(result => result[0])
            .map(result => result.transcript)
            .join('');
      
        if (e.results[0].isFinal) {
            console.log(transcript);
            acceptString('Move C1 right by 2');
            recognition.stop();
        }
    });
    //recognition.addEventListener('end', recognition.start);
    recognition.start();
}
