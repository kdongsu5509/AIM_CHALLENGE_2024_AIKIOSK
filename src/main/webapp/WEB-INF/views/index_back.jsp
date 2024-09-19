<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="sec" uri="http://www.springframework.org/security/tags" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<sec:authorize access="isAuthenticated()">
	<sec:authentication property="principal" var="principal" />
</sec:authorize>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
	    <link rel="stylesheet" href="/css/common.css">
	    <link rel="stylesheet" href="/css/font.css">
	    <link rel="stylesheet" href="/css/index.css">
		<meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, user-scalable=0, minimum-scale=1.0, maximum-scale=1.0">
		<title>Sample Site Project</title>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"
	    integrity="sha512-894YE6QWD5I59HgZOGReFYm4dnWc1Qt5NtvYSaNcOP+u1T9qYdvdihz0PPSiiqn/+/3e7Jo4EaG7TubfWGUrMQ=="
	    crossorigin="anonymous" referrerpolicy="no-referrer"></script>
	    <script src="/js/index.js"></script>
        <script src="/js/ajax.js"></script>
        <script src="/js/coffee.js"></script>
	</head>
<body>
    <div class="wrap">
        <div class="frame">
            <div class="header">EGG COFFEE</div>
            <div class="contents step1">
                <div class="order">
                    <div class="orderTitle">주문목록</div>
                    <div class="orderListTitle orderList">
                        <div class="number">번호</div>
                        <div class="menu">메뉴</div>
                        <div class="menu">수량</div>
                        <div class="menu">가격</div>
                    </div>
                    <div class="orderListBox">
                        <!-- <div class="orderList">
                            <div class="number">1</div>
                            <div class="menu">아메리카노</div>
                            <div class="menu">13</div>
                            <div class="menu">73,000 <span>원</span></div>
                        </div>
                        <div class="orderList bgW">
                            <div class="number">2</div>
                            <div class="menu">카페라떼</div>
                            <div class="menu">13</div>
                            <div class="menu">73,000 <span>원</span></div>
                        </div>
                        <div class="orderList">
                            <div class="number">3</div>
                            <div class="menu">아이스아메리카노</div>
                            <div class="menu">13</div>
                            <div class="menu">73,000 <span>원</span></div>
                        </div>
                        <div class="orderList bgW">
                            <div class="number">4</div>
                            <div class="menu">아메리카노</div>
                            <div class="menu">13</div>
                            <div class="menu">73,000 <span>원</span></div>
                        </div> -->
                    </div>
                    <div class="orderEnd">
                        <div class="orderQuantity">주문수량 : <span id="coffeeCount">0</span>잔</div>
                        <div class="orderAmount">주문금액 : <span id="coffeePrice">0</span>원</div>
                    </div>
                </div>
                <div class="textBox">
                    안녕하세요. 서비스 지원을 위한 제니입니다.<br>
                    원하시는 서비스를 말씀해 주세요.
                </div>
                <div class="human">
                    <img src="/img/human.png" alt="">
                </div>
                <div class="functionBox">
                    <div class="userText"></div>
                    <div class="mic">
                        <img src="/img/off.png" alt="" onclick="sendSpeech();">
                    </div>
                </div>
            </div>
            <div class="payment step2">
                <div class="sk-circle">
                    <div class="sk-circle1 sk-child ck1"></div>
                    <div class="sk-circle2 sk-child ck2"></div>
                    <div class="sk-circle3 sk-child ck3"></div>
                    <div class="sk-circle4 sk-child ck4"></div>
                    <div class="sk-circle5 sk-child ck5"></div>
                    <div class="sk-circle6 sk-child ck6"></div>
                    <div class="sk-circle7 sk-child ck7"></div>
                    <div class="sk-circle8 sk-child ck8"></div>
                    <div class="sk-circle9 sk-child ck9"></div>
                    <div class="sk-circle10 sk-child ck10"></div>
                    <div class="sk-circle11 sk-child ck11"></div>
                    <div class="sk-circle12 sk-child ck12"></div>
                </div>
                <div class="">신용카드를 투입구 끝까지 넣어주세요.</div>
                <div class=""><img src="/img/payment.png" alt=""></div>
                <div class="textOr">카드결제만 가능합니다. <br> 현금결제는 카운터에서 해주세요.</div>
                <div class="">카드인식대기중 . . .</div>
            </div>
            <div class="paymentEnd">
                <div class="">주문이 성공적으로 진행되었습니다.</div>
                <div class="textOr">카드를 회수해 주세요.</div>
                <div class="img"><img src="/img/shop.png" alt=""></div>
                <div class="">저희 매장을 이용해 주셔서 감사합니다.</div>
                <div class="">주문번호를 확인 하신 후, 안내된 번호에 맞춰 카운터로 오시면 됩니다.</div>
            </div>
        </div>
    </div>
</body>
</html>