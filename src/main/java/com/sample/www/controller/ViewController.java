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

	@GetMapping("/ksk1")
	public String ksk1(Model model) {
		return "ksk1_index";
	}

	@GetMapping("/ksk2")
	public String ksk2(Model model) {
		return "ksk2_main";
	}

	@GetMapping("/ksk3_1")
	public String ksk3(Model model) {
		return "ksk3_1_order_1";
	}

	@GetMapping("/ksk3_2")
	public String ksk3_2(Model model) {
		return "ksk3_2_order_2";
	}

	@GetMapping("/ksk4")
	public String ksk4(Model model) {
		return "ksk4_order_up";
	}

	@GetMapping("/ksk5")
	public String ksk5(Model model) {
		return "ksk5_shop_out_up";
	}

	@GetMapping("/ksk6")
	public String ksk6(Model model) {
		return "ksk6_pay_info";
	}

	@GetMapping("/ksk7")
	public String ksk7(Model model) {
		return "ksk7_receipt_up";
	}

	@GetMapping("/ksk8")
	public String ksk8(Model model) {
		return "ksk8_order_clear";
	}
}