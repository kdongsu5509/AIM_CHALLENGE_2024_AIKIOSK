package com.sample.www.controller;

import java.util.List;
import model.Coffee;
import model.TempStorage;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
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
            new TempStorage().setConvertedString(convertedText);
            return convertedText;
        } catch (Exception e) {
            e.printStackTrace();
            return "failToRunSTT";
        }
    }

    @GetMapping("/result")
    public List<Coffee> returnAnalyze() {
        //변경된 convertedText를 받아와서 그것을 분석기에 넣습니다.
        List<Coffee> result = new AnalyzeText().analyze(new TempStorage().getConvertedString());

        //TODO : 반환된 커피 리스트를 프론트에서 어떻게 보이도록 할 지 JS 와 JSP 조작
        return result;
    }
}
