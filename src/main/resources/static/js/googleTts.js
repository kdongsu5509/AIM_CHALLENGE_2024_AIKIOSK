var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList;
var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent;

// 음성 인식 결과를 출력할 요소 (콘솔에 결과를 출력)
const tts = new SpeechSynthesisUtterance();

function populateVoiceList() {
    if (typeof speechSynthesis === 'undefined') {
        return;
    }

    const voices = speechSynthesis.getVoices();
    const voiceList = voices
        .filter((voice) => voice.lang.includes('en'))
        .map((voice) => `${voice.name} (${voice.lang})`);
    console.log(voices);
}

// 음성 목록 가져오기
populateVoiceList();
if (typeof speechSynthesis !== 'undefined' && speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
}

//dom이 다 로드되면 함수 실행
$(document).ready(function () {

    //SpeechRecognition 객체 생성 ; 해당 객체는 음석 인식 기능 제공
    var recognition = new SpeechRecognition();

    //SpeechGrammarList 객체 생성 ; 해당 객체는 음성 인식 서비스에 사용되는 문법 목록을 제공(인식할 수 있는 음성 명령)
    var speechRecognitionList = new SpeechGrammarList();
    recognition.grammars = speechRecognitionList; // 문법 설정
    recognition.lang = 'ko-KR'; // 언어 설정
    recognition.interimResults = false; // true: 중간 결과를 반환, false: 최종 결과만 반환
    recognition.continuous = false; // true: 음성인식을 계속해서 수행, false: 음성인식을 한번만 수행
    recognition.maxAlternatives = 1; // 최대 인식 결과 수 = 1

    recognition.start(); // 음성 인식 시작.

    recognition.onresult = function (event) {
        // 음성 인식 결과를 가져옵니다.
        var speechResult = event.results[0][0].transcript.toLowerCase();
        console.log('Confidence: ' + event.results[0][0].confidence);
        console.log('Speech Result: ' + speechResult);

        // 음성 인식 결과를 표시할 요소를 선택합니다.

        async function fetchData() {
            try {
                const response = await fetch('/analyze', {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify({text: speechResult}) // 서버에 'text'로 보냄
                });

                const data = await response.json();  // 서버 응답을 JSON으로 파싱
                console.log(data.text);  // 서버에서 반환한 text 값 출력
            } catch (error) {
                console.error('Error:', error);  // 오류 처리
            }
        }

        fetchData();  // 호출하여 데이터 처리


        fetchData();  // Calling the async function


        // 음성 인식 결과가 비어있거나 null일 경우, 처리를 중지합니다.
        if (speechResult == null || speechResult == "") {
            return;
        }

        // // 음성 인식 결과를 화면에 표시합니다.
        // var content = `<div class="talk">
        //             <div class="people_talk">
        //             <p>${speechResult}</p>
        //             <div class="people_de"></div>
        //             </div>
        //             </div>`;
        // userText.append(content);
        //
        // // 스크롤을 최신 내용으로 이동시킵니다.
        // var offset = userText.offset();
        // userText.scrollTop(userText[0].scrollHeight);

        // 서버에 음성 인식 결과를 전송하고 응답을 처리합니다.
        // var aoo = ajax_object_options('POST', '/api/chatBot/chat', {message: speechResult});
        // ajax(aoo, function (resp) {
        //     console.log(resp.recipient_id);
        //     console.log(resp.text);
        //     var text = `<div class="talk">
        //             <div class="ask_talk">
        //             <p>${resp.text}</p>
        //             <div class="asks_de"></div>
        //             </div>
        //             </div>`;
        //     userText.append(text);

        // 스크롤을 최신 내용으로 이동시킵니다.
        // offset = userText.offset();
        // userText.scrollTop(userText[0].scrollHeight);

        // 음성으로 서버 응답을 읽어줍니다.
        // tts.lang = 'ko-KR';
        // tts.pitch = 1;
        // tts.rate = 1;
        // tts.text = resp.text;
        // tts.volume = 1;
        // window.speechSynthesis.speak(tts);
    };


    recognition.onaudiostart = function (event) {
        //Fired when the user agent has started to capture audio.
        console.log('SpeechRecognition.onaudiostart');
    }

    recognition.onaudioend = function (event) {
        //Fired when the user agent has finished capturing audio.
        console.log('SpeechRecognition.onaudioend');
    }

    recognition.onend = function (event) {
        //Fired when the speech recognition service has disconnected.
        console.log('SpeechRecognition.onend');
        recognition.start();
    }

    recognition.onnomatch = function (event) {
        //Fired when the speech recognition service returns a final result with no significant recognition. This may involve some degree of recognition, which doesn't meet or exceed the confidence threshold.
        console.log('SpeechRecognition.onnomatch');
    }

    recognition.onsoundstart = function (event) {
        //Fired when any sound — recognisable speech or not — has been detected.
        console.log('SpeechRecognition.onsoundstart');
    }

    recognition.onsoundend = function (event) {
        //Fired when any sound — recognisable speech or not — has stopped being detected.
        console.log('SpeechRecognition.onsoundend');
    }

    recognition.onspeechstart = function (event) {
        //Fired when sound that is recognised by the speech recognition service as speech has been detected.
        console.log('SpeechRecognition.onspeechstart');
    }
    recognition.onstart = function (event) {
        //Fired when the speech recognition service has begun listening to incoming audio with intent to recognize grammars associated with the current SpeechRecognition.
        console.log('SpeechRecognition.onstart');
    }
})