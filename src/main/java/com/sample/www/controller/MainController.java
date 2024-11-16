package com.sample.www.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

@RequestMapping
@Controller
public class MainController {
    String convertedText;

    @PostMapping("/audio")
    public String uploadAudio(@RequestParam("file") MultipartFile file) {
        try {
            convertedText = new AudioToText().audioToText(file);
            return "redirect:/ksk3_1";
        } catch (Exception e) {
            e.printStackTrace();
            return "redirect:/ksk1";
        }
    }
}
