// Web Speech API 관련 변수 선언
var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList;
var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent;

// DOM 요소 및 음성 합성 객체 선언
var diagnosticPara = document.querySelector('.output');
const tts = new SpeechSynthesisUtterance();

// 음성 목록을 생성하는 함수
function populateVoiceList() {
	if (typeof speechSynthesis === 'undefined') {
		return;
	}

	const voices = speechSynthesis.getVoices();

	// 영어 음성만 필터링하여 목록 생성
	const voiceList = voices
		.filter((voice) => {
			return voice.lang.includes('en');
		})
		.map((voice) => {
			return `${voice.name} (${voice.lang})`;
		});
	console.log(voices);
}

// 음성 목록 초기화 및 변경 이벤트 리스너 등록
populateVoiceList();
if (
	typeof speechSynthesis !== 'undefined' &&
	speechSynthesis.onvoiceschanged !== undefined
) {
	speechSynthesis.onvoiceschanged = populateVoiceList;
}

// 음성 인식 시작 함수
function sendSpeech() {
	var recognition = new SpeechRecognition();
	var speechRecognitionList = new SpeechGrammarList();
	recognition.grammars = speechRecognitionList;
	recognition.lang = 'ko-KR'; // 한국어 설정
	recognition.interimResults = false; // 최종 결과만 반환
	recognition.continious = false; // 음성 인식을 한 번만 수행
	recognition.maxAlternatives = 1;

	recognition.start();

	// 음성 인식 결과 처리
	recognition.onresult = function(event) {
		var speechResult = event.results[0][0].transcript.toLowerCase();
		console.log('Confidence: ' + event.results[0][0].confidence);
		console.log('Speech Result: ' + speechResult);

		diagnosticPara = $('.textBox');
		userText = $('.userText');
		userText.html(speechResult);

		// 서버에 음성 인식 결과 전송 및 응답 처리
		var aoo = ajax_object_options('POST', '/api/chatBot/chat', { message : speechResult});
		ajax(aoo, function (resp) {
			var text = resp.text;
			diagnosticPara.html(text);

			// 주문 처리 로직
			if (text.includes("주문하신") || text.includes("수정")) {
				$('.orderListBox').empty();
				var data = {
					content : '',
					coffeeKind : 0,
					coffeeCount : 0,
					price : 0
				}
				var menu = ["에스프레소", "아메리카노", "카푸치노", "카페라떼", "바닐라라떼", "카라멜마끼야또", "카페모카", "아포카토",
					"토마토주스", "키위주스", "망고스무디", "딸기스무디", "쿠키앤크림",
					"레몬에이드", "복숭아아이스티", "허브티", "말차라떼", "초콜릿라떼"];

				// 각 메뉴 항목에 대해 주문 검색 및 처리
				for (var i = 0; i < menu.length; i++) {
					data = searchCoffee(text, menu[i], data);
				}

				// 결제 처리
				if (text.includes('결제')) {
					// 결제 화면 전환 및 음성 안내
					setTimeout(() => {
						$('.contents').css('display', 'none');
						$('.payment').css('display', 'flex');

						setTimeout(() => {
							$('.payment').css('display', 'none');
							$('.paymentEnd').css('display', 'flex');
							setTimeout(() => {
								$('.paymentEnd').css('display', 'none');
								$('.contents').css('display', 'flex');
								$('.orderListBox').empty();
								$('#coffeeCount').text(0);
								$('#coffeePrice').text(0);
								userText.html('');
							}, 15000);
							window.speechSynthesis.cancel();
							diagnosticPara.html('안녕하세요. 서비스 지원을 위한 제니입니다.<br>원하시는 서비스를 말씀해 주세요.');
							tts.lang = 'ko-KR';
							tts.pitch = 1;
							tts.rate = 1;
							tts.text = '주문이 성공적으로 진행되었습니다. 카드를 회수해 주세요. 저희 매장을 이용해 주셔서 감사합니다. 주문번호를 확인 하신 후 안내된 번호에 맞춰 카운터로 오시면 됩니다.';
							tts.volume = 1;
							window.speechSynthesis.speak(tts);
						}, 7000);
					}, 1000);
				}

				// 주문 취소 처리
				if (text.includes('취소')) {
					$('.orderListBox').empty();
					$('#coffeeCount').text(0);
					$('#coffeePrice').text(0);
					userText.html('');
				}

				// 주문 내역 업데이트
				$('.orderListBox').html(data.content);
				$('#coffeeCount').text(data.coffeeCount);
				$('#coffeePrice').text(data.price.toLocaleString('ko-KR'));
			}

			// 음성 합성 설정 및 실행
			tts.lang = 'ko-KR';
			tts.pitch = 1;
			tts.rate = 1;
			tts.text = resp.text;
			tts.volume = 1;
			window.speechSynthesis.speak(tts);
		}, function (resp) {
			alert('에러 발생');
			console.log(resp);
		})
	}

	// 음성 인식 관련 이벤트 핸들러
	recognition.onaudiostart = function(event) {
		console.log('SpeechRecognition.onaudiostart');
	}

	recognition.onaudioend = function(event) {
		console.log('SpeechRecognition.onaudioend');
	}

	recognition.onend = function(event) {
		console.log('SpeechRecognition.onend');
	}

	recognition.onnomatch = function(event) {
		console.log('SpeechRecognition.onnomatch');
	}

	recognition.onsoundstart = function(event) {
		console.log('SpeechRecognition.onsoundstart');
	}

	recognition.onsoundend = function(event) {
		console.log('SpeechRecognition.onsoundend');
		const micSrc = $('.mic').children('img')
		micSrc.attr('src','/img/off.png');
		$('.mic').removeClass('on');
	}

	recognition.onspeechstart = function (event) {
		console.log('SpeechRecognition.onspeechstart');
	}

	recognition.onstart = function(event) {
		console.log('SpeechRecognition.onstart');
	}
}

// 음성 인식 결과에서 커피 주문 정보 추출 함수
function searchCoffee(text, coffee, data) {
	if (text.includes(coffee)) {
		var coffeeCount = 0;
		var textSplit = text.split(coffee);
		data.coffeeKind++;
		var coffeePrice = coffeeGetPrice(coffee);
		if (textSplit.length > 1) {
			var zanSplit = textSplit[1].split("잔")[0];
			// 주문 수량 파싱
			switch(zanSplit.trim()) {
				case "한": coffeeCount = coffeeCount + 1; break;
				case "두": coffeeCount = coffeeCount + 2; break;
				case "세": coffeeCount = coffeeCount + 3; break;
				case "네": coffeeCount = coffeeCount + 4; break;
				case "다섯": coffeeCount = coffeeCount + 5; break;
				case "여섯": coffeeCount = coffeeCount + 6; break;
				case "일곱": coffeeCount = coffeeCount + 7; break;
				case "여덟": coffeeCount = coffeeCount + 8; break;
				case "아홉": coffeeCount = coffeeCount + 9; break;
				case "열": coffeeCount = coffeeCount + 10; break;
				default: break;
			}
			// 주문 정보 업데이트
			data.coffeeCount = data.coffeeCount + coffeeCount
			data.price = data.price + coffeeCount * coffeePrice;
			data.content = data.content + '<div class="orderList">'
				+'<div class="number">'+data.coffeeKind+'</div>'
				+'<div class="menu">'+coffee+'</div>'
				+'<div class="menu">'+coffeeCount+'</div>'
				+'<div class="menu">'+(coffeeCount*coffeePrice).toLocaleString('ko-KR')+' <span>원</span></div>'
				+'</div>'
		}
	}
	return data;
}

// 커피 가격 조회 함수
function coffeeGetPrice(coffee) {
	var price = 0;
	switch(coffee.trim()) {
		case "에스프레소": price = 3800; break;
		case "아메리카노": price = 4300; break;
		case "카푸치노": price = 4500; break;
		case "카페라떼": price = 4500; break;
		case "바닐라라떼": price = 4800; break;
		case "카라멜마끼야또": price = 4800; break;
		case "카페모카": price = 4800; break;
		case "아포카토": price = 5000; break;
		case "토마토주스": price = 5500; break;
		case "키위주스": price = 5500; break;
		case "망고스무디": price = 5800; break;
		case "딸기스무디": price = 5800; break;
		case "쿠키앤크림": price = 5800; break;
		case "레몬에이드": price = 5500; break;
		case "복숭아아이스티": price = 5000; break;
		case "허브티": price = 5000; break;
		case "말차라떼": price = 5800; break;
		case "초콜릿라떼": price = 5800; break;
		default: break;
	}
	return price;
}