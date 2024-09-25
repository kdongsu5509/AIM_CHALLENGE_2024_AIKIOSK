package com.sample.www.controller.api;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.ProtocolException;
import java.net.URL;
import java.util.HashMap;
import java.util.Map;

import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;

@Slf4j
@RestController
@RequestMapping("/api/chatBot/")
public class SendRasaController {

	@PostMapping("chat") //  api/chatBot/chat
	@Operation(summary = "챗봇 채팅") // Swagger에서 이 API가 제공하는 기능에 대한 설명을 추가합니다.
	@ApiResponse(responseCode = "200", content = @Content(schema = @Schema(example = "")),
			description = "status = true/false <br> code = 1 : 성공/-1 : 실패"
					+ "bot1 :  아이돌말투 / bot2 : 유지원 교사말투 / bot3 : 도도, 차가운 여자 말투"
					+ "message = 반환 받은 텍스트<br>") // Swagger 응답에 대한 설명을 추가합니다.
	public Map<String, Object> sendRASA(@RequestBody Map<String, String> map) {
		// API 결과를 담을 Map을 초기화합니다.
		Map<String, Object> result = new HashMap<>();
		String date[];
		String message = "";
		String url = "http://localhost:5005/webhooks/rest/webhook"; // Rasa 서버 URL을 정의합니다.

		String unicodeString = ""; // 유니코드 처리된 문자열을 저장할 변수입니다.

		try {
			// Rasa 서버와의 연결을 설정합니다.
			URL obj = new URL(url);
			HttpURLConnection connection = (HttpURLConnection) obj.openConnection();
			connection.setRequestMethod("POST"); // POST 요청을 설정합니다.
			connection.setRequestProperty("Content-Type", "application/json; charset=utf-8"); // 요청 콘텐츠 타입을 설정합니다.

			log.info("message : {}", map.get("message"));
			// 요청 바디를 JSON 형식으로 작성하여 전송할 메시지를 추가합니다.
			String body = "{\"message\": \"" + map.get("message") + "\"}";

			// 서버로 데이터를 전송하는 OutputStreamWriter를 사용하여 요청 바디를 전송합니다.
			connection.setDoOutput(true);
			OutputStreamWriter writer = new OutputStreamWriter(connection.getOutputStream());
			writer.write(body);
			writer.flush();
			writer.close();

			// Rasa 서버로부터 받은 응답을 읽기 위한 BufferedReader를 설정합니다.
			BufferedReader br = new BufferedReader(new InputStreamReader(connection.getInputStream()));
			String line;
			StringBuffer response = new StringBuffer();

			// 서버 응답을 한 줄씩 읽어 response에 저장합니다.
			while ((line = br.readLine()) != null) {
				response.append(line);
			}
			br.close();

			// 챗봇 응답에서 "text" 필드 값을 추출합니다.
			String re[] = response.toString().split("\"text\":\"");
			for (int i = 1; i < re.length; i++) {
				date = re[i].split("\"}");
				// 유니코드 문자열을 변환하고 결과를 unicodeString에 저장합니다.
				unicodeString = unicodeString.equals("") ? convertString(date[0]) : unicodeString + "\n" + convertString(date[0]);
				unicodeString = unicodeString.replaceAll("\\\\/", "/"); // 경로의 이스케이프된 슬래시를 일반 슬래시로 변환합니다.
			}

			// 응답에 변환된 메시지가 없으면 실패 처리
			if (unicodeString.equals("")) {
				result.put("status", false);
				result.put("message", "에러가 발생했습니다.");
				return result;
			}

			// 서버 응답과 변환된 유니코드 문자열을 출력합니다 (디버깅용).
			System.out.println(response.toString());
			System.out.println(unicodeString);

		} catch (ProtocolException e) {
			throw new RuntimeException(e); // ProtocolException 처리
		} catch (MalformedURLException e) {
			throw new RuntimeException(e); // URL이 잘못된 경우 처리
		} catch (IOException e) {
			throw new RuntimeException(e); // 입출력 에러 처리
		}

		// 최종 결과를 응답합니다.
		try {
			result.put("status", true); // 성공 상태
			result.put("text", unicodeString); // 변환된 텍스트를 반환합니다.
		} catch (Exception e) {
			System.out.println(e); // 에러 발생 시 출력
			result.put("status", false); // 실패 상태
			result.put("message", "에러가 발생했습니다.");
			return result;
		}
		return result; // 최종 결과를 반환합니다.
	}

	// 유니코드에서 일반 문자열로 변환하는 메소드입니다.
	public static String convertString(String val) {
		// 변환할 문자열을 담을 StringBuffer를 생성합니다.
		StringBuffer sb = new StringBuffer();

		// 문자열을 하나씩 탐색하며 유니코드 형식일 경우 변환합니다.
		for (int i = 0; i < val.length(); i++) {

			// \\u로 시작하는 유니코드 문자일 경우 6글자를 변환합니다.
			if ('\\' == val.charAt(i) && 'u' == val.charAt(i + 1)) {
				// 유니코드를 16진수로 변환하고 해당하는 문자로 변환하여 추가합니다.
				Character r = (char) Integer.parseInt(val.substring(i + 2, i + 6), 16);
				sb.append(r);
				// 유니코드 문자 6글자를 건너뛰고 탐색을 계속합니다.
				i += 5;
			} else {
				// 일반 문자는 그대로 추가합니다.
				sb.append(val.charAt(i));
			}
		}
		// 변환된 문자열을 반환합니다.
		return sb.toString();
	}
}
