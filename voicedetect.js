window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
var stopRecog = new SpeechRecognition();
var str;
var finalString = '';

function startRecord() {
    try {
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
                acceptString(transcript);
                finalString  = finalString + transcript + '\n';
                document.getElementById('myinput').value = finalString;
                recognition.stop();
            }
        });
        //recognition.addEventListener('end', recognition.start);
        recognition.start();
    } catch (e) {
        console.error(e);
        $('.no-browser-support').show();
        $('.app').hide();
    }
}