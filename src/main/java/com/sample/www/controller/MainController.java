package com.sample.www.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class MainController {

	//화면으로 연결. 최초 127.0.0.1:8091. 포트 별도 연결 없음.
	@GetMapping({ "", "/" })
	public String Main(Model model) {
		return "ksk1_index";
	}

	//메인 화면 연결
	@GetMapping({ "", "/two" }) //127.0.0.1/8080
	public String two(Model model) {
		return "ksk2_main";
	}

	@GetMapping("/three")
	public String three() {
		return "footer.jsp";
	}

	@GetMapping("/four")
	public String four() {
		return "header.jsp";
	}

	@GetMapping("/five")
	public String five() {
		return "index.jsp";
	}
}