package com.sample.www.controller;

import java.util.HashMap;
import java.util.Map;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController  // Use @RestController instead of @Controller for handling REST requests
@Slf4j
public class MainController {

    @PostMapping("/analyze")
    public ResponseEntity<Map<String, String>> getText(@RequestBody Map<String, String> payload) {
        String text = payload.get("text");
        log.info("text = {}", text);

        Map<String, String> response = new HashMap<>();
        response.put("text", text);
        // You can perform any processing on the text here

        return ResponseEntity.ok(response);  // Return processed text as response
    }
}
