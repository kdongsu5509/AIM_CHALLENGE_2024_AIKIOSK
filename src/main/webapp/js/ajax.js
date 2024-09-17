// 페이지가 완전히 로드된 후 실행되는 함수
// $(document).ready()는 jQuery에서 DOM(Document Object Model)이 로드되었을 때 실행됨
$(document).ready(function(){
	// 현재는 주석 처리된 코드로, 서버에 데이터를 POST 요청으로 보낼 때 사용 가능
	/* 
	const data = {page : 1, size : 10}; // 서버에 전송할 페이징 데이터 (page: 페이지 번호, size: 페이지당 항목 수)
	const aoo = ajax_object_options("POST", "/auth/callbackSample", data); // ajax_object_options 호출로 Ajax 요청 옵션 생성
	ajax(aoo, callback_function, callback_function); // ajax 함수 호출로 서버와 통신, 성공 및 실패 시 콜백 함수 실행
	*/
})

// 객체 형태 데이터를 서버로 전송할 때 사용하는 Ajax 옵션 생성 함수
// ApiController에서 @RequestBody로 데이터를 받는 경우에 사용됨
function ajax_object_options(type, url, data) {
	var options = {
		type: type, // HTTP 메서드 타입 ("POST", "GET" 등)
		url : url,  // 서버에 요청을 보낼 URL
		data : JSON.stringify(data), // data 객체를 JSON 문자열로 변환하여 서버에 전송
		contentType: "application/json; charset=utf-8", // 요청 본문이 JSON임을 명시
		dataType: "json" // 서버로부터의 응답이 JSON임을 명시
	}

	return options; // 생성된 옵션 객체 반환
}

// 폼 데이터를 서버로 전송할 때 사용하는 Ajax 옵션 생성 함수
// ApiController에서 @ModelAttribute로 데이터를 받는 경우에 사용됨
function ajax_formdata_options(type, url, formdata) {
	var options = {
		type: type, // HTTP 메서드 타입 ("POST", "GET" 등)
		enctype: 'multipart/form-data', // 파일 업로드가 가능하도록 폼 데이터 인코딩 설정
		url: url, // 서버에 요청을 보낼 URL
		data: formdata, // 폼 데이터 객체 (주로 파일과 함께 사용)
		processData: false, // jQuery가 데이터를 자동으로 처리하지 않도록 설정 (파일 전송 시 필요)
		contentType: false, // Content-Type을 자동 설정하지 않도록 함 (multipart/form-data로 처리)
		cache: false, // 캐싱을 방지하여 최신 데이터를 요청
		timeout: 600000, // 요청 제한 시간 (10분)
	}

	return options; // 생성된 옵션 객체 반환
}

// 실제로 Ajax 요청을 수행하는 함수
// options: ajax_object_options 또는 ajax_formdata_options로 생성된 옵션 객체
// doneCallback: 요청 성공 시 실행할 콜백 함수
// failCallback: 요청 실패 시 실행할 콜백 함수
function ajax(options, doneCallback, failCallback) {
	// jQuery의 $.ajax() 함수를 사용하여 Ajax 요청을 실행
	$.ajax(options).done(function(resp) {
		// 요청이 성공하면 doneCallback 함수 실행, resp는 서버로부터의 응답 데이터
		doneCallback(resp);
	}).fail(function(error){
		// 요청이 실패하면 failCallback 함수 실행, error는 에러 정보
		failCallback(error);
	})
}

// 서버 응답 데이터를 처리하는 예시 콜백 함수
// resp는 서버로부터 받은 응답 데이터
// 응답 데이터는 콘솔에 출력되어 디버깅에 도움을 줄 수 있음
function callback_function(resp) {
	console.log(resp); // 응답 데이터를 콘솔에 출력
}

// HTML 문자열에서 <script> 태그를 제거하여 XSS(크로스 사이트 스크립팅) 공격 방지
// str: 필터링할 문자열
function decodeHTMLEntities(str) {
	// 입력된 문자열이 undefined, null, 또는 빈 문자열이 아닌 경우에만 실행
	if (str !== undefined && str !== null && str !== '') {
		str = String(str); // 문자열로 변환
		// <script> 태그와 그 안의 내용을 제거하는 정규 표현식 적용
		str = str.replace(/<script[^>]*>([\S\s]*?)<\/script>/gmi, '');
		str = str.replace(/<script[^>]*>([\S\s]*?)<\/script>/gmi, ''); // 동일한 패턴을 반복 적용하여 완전히 제거
	}
}

// 페이지가 완전히 로드된 후 실행되는 함수 (중복된 함수 정의)
// $(document).ready()는 DOM(Document Object Model)이 완전히 로드되었을 때 실행됨
$(document).ready(function(){
	// 현재는 주석 처리된 코드로, 서버에 데이터를 POST 요청으로 보낼 때 사용 가능
	/*
	const data = {page : 1, size : 10}; // 서버에 전송할 페이징 데이터 (page: 페이지 번호, size: 페이지당 항목 수)
	const aoo = ajax_object_options("POST", "/auth/callbackSample", data); // ajax_object_options 호출로 Ajax 요청 옵션 생성
	ajax(aoo, callback_function, callback_function); // ajax 함수 호출로 서버와 통신, 성공 및 실패 시 콜백 함수 실행
	*/
})
