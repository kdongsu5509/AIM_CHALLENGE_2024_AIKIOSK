package com.sample.www.controller;

import java.io.IOException;
import org.apache.http.HttpResponse;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.HttpClientBuilder;
import org.springframework.web.multipart.MultipartFile;

public class AudioToText {

    final String WHISPER_API = "https://api.whisper.ai/v1/speech-to-text"; // 차후 실제 사용할 API 주소로 변경

    public String audioToText(MultipartFile file) throws IOException {
        HttpClient client = HttpClientBuilder.create().build();
        HttpGet getRequest = new HttpGet(WHISPER_API);

        HttpResponse response = client.execute(getRequest);

        if (response.getStatusLine().getStatusCode() == 200) {
            String convertedText = response.getEntity().getContent().toString();
            return convertedText;
        } else {
            return "redirect:/ksk1";
        }
    }
}
