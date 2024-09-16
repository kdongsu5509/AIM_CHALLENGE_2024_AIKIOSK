<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>DREAM COFFEE</title>
  <link rel="stylesheet" href="../css/common.css">
  <link rel="stylesheet" href="../css/pay_info.css">
  <link rel="stylesheet" href="../css/receipt_up.css">
</head>
<body>
<!-- 영수증 모달 페이지 -->
<main class="main_main">
  <!-- 상단 -->
  <header>
    <p>
      DREAM COFFEE
    </p>
  </header>

  <!-- 결제 안내 -->
  <article class="pay_info">
    <div>
      <p class="pay_txt">신용카드를 투입구 끝까지 넣어주세요.</p>
      <p class="pay_txt_org">(카드결제만 가능합니다. 현금결제는 카운터에서 해 주세요.)</p>
    </div>
    <div>
      <img src="../../../webapp/img/card_img.png" alt="카드결제">
    </div>
    <div>
      <p class="pay_txt">카드 인식 대기중</p>
      <div class="wait">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  </article>

  <!-- 영수증 출력 모달창 -->
  <!-- 모달 배경 -->
  <div class="modal_bg"></div>

  <!-- 영수증 모달 -->
  <article class="modal_receipt">
    <div class="modal_receipt_tit">
      <p>영수증을 출력하시겠습니까?</p>
    </div>

    <!-- 주문번호 -->
    <div class="modal_receipt_num">
      <img src="../../../webapp/img/icon_receipt.png" alt="영수증">
      <p>주문번호</p>
      <p>
        <span><%= request.getAttribute("orderNumber") != null ? request.getAttribute("orderNumber") : "123" %></span>
      </p>
    </div>

    <!-- 버튼 영역 -->
    <div class="modal_receipt_button">
      <button class="button_yes">
        <span>네</span>
      </button>
      <button class="button_no">
        <span>아니요</span>
      </button>
    </div>

    <!-- 문구 -->
    <p class="modal_receipt_txt">
      <span><%= request.getAttribute("countdown") != null ? request.getAttribute("countdown") : "3" %></span>초 뒤 자동으로 닫힙니다.(영수증 출력)
    </p>
  </article>

</main>
</body>
</html>