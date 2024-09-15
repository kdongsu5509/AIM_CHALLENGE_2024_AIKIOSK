<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DREAM COFFEE</title>
    <link rel="stylesheet" href="${pageContext.request.contextPath}/css/common.css">
    <link rel="stylesheet" href="${pageContext.request.contextPath}/css/main.css">
</head>
<body>
<!-- main 첫 페이지 -->
<main class="main_main">
    <!-- 상단 -->
    <header>
        <p>
            DREAM COFFEE
        </p>
    </header>

    <!-- STEP -->
    <article class="step">
        <ul>
            <li>
                <div>
                    <div class="step_box">
                        <span>STEP 1.</span>
                    </div>
                    <p class="step_tit">메뉴주문</p>
                    <p class="step_txt">
                        아이스 아메리카노<br/>
                        한 잔 주세요.
                    </p>
                </div>
            </li>
            <li>
                <div>
                    <div class="step_box">
                        <span>STEP 2.</span>
                    </div>
                    <p class="step_tit">옵션추가</p>
                    <p class="step_txt">
                        아이스 아메리카노에<br/>
                        샷 추가 해주세요.
                    </p>
                </div>
            </li>
            <li>
                <div>
                    <div class="step_box">
                        <span>STEP 3.</span>
                    </div>
                    <p class="step_tit">메뉴보기</p>
                    <p class="step_txt">
                        메뉴판을 보여주세요!
                    </p>
                </div>
            </li>
        </ul>
    </article>

    <!-- 주문&메뉴 영역 -->
    <article class="order_menu">
        <!-- 여기에 동적으로 추가할 내용이 있다면 자바 코드를 추가할 수 있습니다 -->
    </article>

    <!-- 하단 영역 -->
    <article class="bottom">
        <div class="txtbar">
            <p>
                음성인식중입니다. 음성으로 메뉴를 주문해 보세요.
            </p>
        </div>
        <div class="moneybar">
            <ul>
                <li>
                    <div>
                        <p>주문 수량</p>
                        <p><%= request.getAttribute("orderCount") != null ? request.getAttribute("orderCount") : "3" %></p>
                    </div>
                </li>
                <li>
                    <div>
                        <p>Total</p>
                        <p>₩ &nbsp; <span><%= request.getAttribute("totalPrice") != null ? request.getAttribute("totalPrice") : "100,400" %></span></p>
                    </div>
                </li>
            </ul>
        </div>
    </article>
</main>
</body>
</html>
