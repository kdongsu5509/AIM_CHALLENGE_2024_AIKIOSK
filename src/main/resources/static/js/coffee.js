//아래 모든 것은 SpeechRecognition임.
	// SpeechRecognition은 음성 인식 서비스를 제공하는 API이다.
var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
	// SpeechGrammarList는 음성 인식 서비스에 사용되는 문법 목록을 제공하는 API이다.(뒤에 것은 구형 브라우저)
	var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList;
	// SpeechRecognitionEvent는 음성 인식 서비스에 사용되는 이벤트를 제공하는 API이다.(뒤에 것은 구형 브라우저)
	var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent;

	// diagnosticPara는 음성 인식 결과를 출력하는 엘리먼트를 찾아서 저장한다.
	var diagnosticPara = document.querySelector('.output');
	const tts = new SpeechSynthesisUtterance();
	
	function populateVoiceList() {

		//speechSynthesis는 TTS (Text-to-Speech) 기능을 구현하는 API
		  if (typeof speechSynthesis === 'undefined') {
		    return;
		  } // 브라우저에 speechSynthesis가 없으면 함수 종료

		// 현재 사용 가능한 음성 목록 가져오기.
		  const voices = speechSynthesis.getVoices();

		  // 가져온 음성 목록을 필터링하여 영어 음성만 가져오기
		  const voiceList = voices
		    .filter((voice) => {
		      return voice.lang.includes('en');
		    })
		    .map((voice) => {
		      return `${voice.name} (${voice.lang})`;
		    });
		  console.log(voices);
		}

		// 음성 목록 가져오기
		populateVoiceList();
		if ( // 만약 speechSynthesis가 정의되어 있고, onvoiceschanged가 정의되어 있다면
		  typeof speechSynthesis !== 'undefined' &&
		  speechSynthesis.onvoiceschanged !== undefined
		) {
			// 음성 목록이 변경되면 populateVoiceList 함수 실행
		  speechSynthesis.onvoiceschanged = populateVoiceList;
		}

	/*
	*text : 음성인식 결과
	* coffee : 커피 메뉴
	* data : 업데이트할 데이터 객체
	*  */
	function searchCoffee(text, coffee, data) {
		// text에 coffee가 포함되어 있다면
		if (text.includes(coffee)) {
			/*
			* coffeeCount: 커피 수량을 저장할 변수입니다.
			textSplit: 커피 종류를 기준으로 텍스트를 분리합니다.
			data.coffeeKind: 커피 종류의 개수를 증가시킵니다.
			coffeePrice: 커피 가격을 얻기 위해 coffeeGetPrice 함수를 호출합니다.
			* */
	    			var coffeeCount = 0;
	    			var textSplit = text.split(coffee);
	    			data.coffeeKind++;
	    			var coffeePrice = coffeeGetPrice(coffee);
	    			if (textSplit.length > 1) {
	    				var zanSplit = textSplit[1].split("잔")[0];
	    				switch(zanSplit.trim()) {
    					case "한":
    						coffeeCount = coffeeCount + 1;
    						break;
    					case "두":
    						coffeeCount = coffeeCount + 2;
    						break;
    					case "세":
    						coffeeCount = coffeeCount + 3;
    						break;
    					case "네":
    						coffeeCount = coffeeCount + 4;
    						break;
    					case "다섯":
    						coffeeCount = coffeeCount + 5;
    						break;
    					case "여섯":
    						coffeeCount = coffeeCount + 6;
    						break;
    					case "일곱":
    						coffeeCount = coffeeCount + 7;
    						break;
    					case "여덟":
    						coffeeCount = coffeeCount + 8;
    						break;
    					case "아홉":
    						coffeeCount = coffeeCount + 9;
    						break;
    					case "열":
    						coffeeCount = coffeeCount + 10;
    						break;
    					default:
    						break;
	    				}
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
	
	function coffeeGetPrice(coffee) {
		var price = 0;
		switch(coffee.trim()) {
    					case "에스프레소":
    						price = 3800
    						break;
    					case "아메리카노":
    						price = 4300
    						break;
    					case "카푸치노":
    						price = 4500
    						break;
    					case "카페라떼":
    						price = 4500
    						break;
    					case "바닐라라떼":
    						price = 4800
    						break;
    					case "카라멜마끼야또":
    						price = 4800
    						break;
    					case "카페모카":
    						price = 4800
    						break;
    					case "아포카토":
    						price = 5000
    						break;
    					case "토마토주스":
    						price = 5500
    						break;
    					case "키위주스":
    						price = 5500
    						break;
    					case "망고스무디":
    						price = 5800
    						break;
    					case "딸기스무디":
    						price = 5800
    						break;
    					case "쿠키앤크림":
    						price = 5800
    						break;
    					case "레몬에이드":
    						price = 5500
    						break;
    					case "복숭아아이스티":
    						price = 5000
    						break;
    					case "허브티":
    						price = 5000
    						break;
    					case "말차라떼":
    						price = 5800
    						break;
    					case "초콜릿라떼":
    						price = 5800
    						break;
    					default:
    						break;
		}
		return price;
	}

	//dom이 다 로드되면 함수 실행
	$(document).ready(function(){

	//SpeechRecognition 객체 생성 ; 해당 객체는 음석 인식 기능 제공
	  var recognition = new SpeechRecognition();

	  //SpeechGrammarList 객체 생성 ; 해당 객체는 음성 인식 서비스에 사용되는 문법 목록을 제공(인식할 수 있는 음성 명령)
	  var speechRecognitionList = new SpeechGrammarList();
	  recognition.grammars = speechRecognitionList; // 문법 설정
	  recognition.lang = 'ko-KR'; // 언어 설정
	  recognition.interimResults = false; // true: 중간 결과를 반환, false: 최종 결과만 반환
	  recognition.continious = false; // true: 음성인식을 계속해서 수행, false: 음성인식을 한번만 수행
	  recognition.maxAlternatives = 1; // 최대 인식 결과 수 = 1
	
	  recognition.start(); // 음성 인식 시작.

	  recognition.onresult = function(event) {
		  // 음성 인식 결과를 가져옵니다.
		  var speechResult = event.results[0][0].transcript.toLowerCase();
		  console.log('Confidence: ' + event.results[0][0].confidence);
		  console.log('Speech Result: ' + speechResult);
			// 음성 인식 결과를 표시할 요소를 선택합니다.
		  diagnosticPara = $('.textBox');
		  userText = $('.menu_order');

			// 음성 인식 결과가 비어있거나 null일 경우, 처리를 중지합니다.
		  if(speechResult == null || speechResult == "") {
			  return;
		  }

			// 음성 인식 결과를 화면에 표시합니다.
		  var content = `<div class="talk">
                    <div class="people_talk">
                    <p>${speechResult}</p>
                    <div class="people_de"></div>
                    </div>
                    </div>`;
		  userText.append(content);

			// 스크롤을 최신 내용으로 이동시킵니다.
		  var offset = userText.offset();
		  userText.scrollTop(userText[0].scrollHeight);

			// 서버에 음성 인식 결과를 전송하고 응답을 처리합니다.
		  var aoo = ajax_object_options('POST', '/api/chatBot/chat', { message : speechResult });
			ajax(aoo, function (resp) {
				console.log(resp.recipient_id);
				console.log(resp.text);
				var text = `<div class="talk">
                    <div class="ask_talk">
                    <p>${resp.text}</p>
                    <div class="asks_de"></div>
                    </div>
                    </div>`;
				userText.append(text);

				// 스크롤을 최신 내용으로 이동시킵니다.
				offset = userText.offset();
				userText.scrollTop(userText[0].scrollHeight);

				// 음성 인식 결과에 따라 주문, 결제, 취소 등을 처리합니다.
				if (text.includes("주문하신") || text.includes("수정")) {
					$('.orderListBox').empty();
					var data = { //declartion of data object
						content : '',
						coffeeKind : 0,
						coffeeCount : 0,
						price : 0
					};
					var menu = ["에스프레소", "아메리카노", "카푸치노", "카페라떼", "바닐라라떼", "카라멜마끼야또", "카페모카", "아포카토",
						"토마토주스", "키위주스", "망고스무디", "딸기스무디", "쿠키앤크림",
						"레몬에이드", "복숭아아이스티", "허브티", "말차라떼", "초콜릿라떼"];
					for (var i = 0; i < menu.length; i++) {
						data = searchCoffee(text, menu[i], data);
					}
					if (text.includes('결제')) {
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

					if (text.includes('취소')) {
						$('.orderListBox').empty();
						$('#coffeeCount').text(0);
						$('#coffeePrice').text(0);
						userText.html('');
					}
					$('.orderListBox').html(data.content);
					$('#coffeeCount').text(data.coffeeCount);
					$('#coffeePrice').text(data.price.toLocaleString('ko-KR'));
				}
				// 음성으로 서버 응답을 읽어줍니다.
				tts.lang = 'ko-KR';
				tts.pitch = 1;
				tts.rate = 1;
				tts.text = resp.text;
				tts.volume = 1;
				window.speechSynthesis.speak(tts);
			}, function (resp) {
				alert('에러 발생');
				console.log(resp);
			});
		};



		recognition.onaudiostart = function(event) {
	      //Fired when the user agent has started to capture audio.
	      console.log('SpeechRecognition.onaudiostart');
	  }
	
	  recognition.onaudioend = function(event) {
	      //Fired when the user agent has finished capturing audio.
	      console.log('SpeechRecognition.onaudioend');
	  }
	
	  recognition.onend = function(event) {
	      //Fired when the speech recognition service has disconnected.
	      console.log('SpeechRecognition.onend');
	      recognition.start();
	  }
	
	  recognition.onnomatch = function(event) {
	      //Fired when the speech recognition service returns a final result with no significant recognition. This may involve some degree of recognition, which doesn't meet or exceed the confidence threshold.
	      console.log('SpeechRecognition.onnomatch');
	  }
	
	  recognition.onsoundstart = function(event) {
	      //Fired when any sound — recognisable speech or not — has been detected.
	      console.log('SpeechRecognition.onsoundstart');
	  }
	
	  recognition.onsoundend = function(event) {
	      //Fired when any sound — recognisable speech or not — has stopped being detected.
	      console.log('SpeechRecognition.onsoundend');
	  }
	
	  recognition.onspeechstart = function (event) {
	      //Fired when sound that is recognised by the speech recognition service as speech has been detected.
	      console.log('SpeechRecognition.onspeechstart');
	  }
	  recognition.onstart = function(event) {
	      //Fired when the speech recognition service has begun listening to incoming audio with intent to recognize grammars associated with the current SpeechRecognition.
	      console.log('SpeechRecognition.onstart');
	  }
	})