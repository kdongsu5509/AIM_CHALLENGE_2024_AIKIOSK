    <%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
        <!--
        JSTL (JSP Standard Tag Library)의 Core 태그 라이브러리 사용 선언
        - "c"는 JSTL Core 태그를 사용하기 위한 접두사로 사용
        - JSTL Core 태그는 흐름 제어, 조건문, 반복문, URL 관리 등에서 사용됨
        -->

        <%@ taglib prefix="sec" uri="http://www.springframework.org/security/tags" %>
        <!--
        Spring Security 태그 라이브러리 사용 선언
        - "sec"는 Spring Security와 관련된 태그를 사용하기 위한 접두사
        - 보안 관련 태그를 통해 인증, 권한 제어 등의 기능을 제공
        -->

        <%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
        <!--
        JSTL의 Formatting (fmt) 태그 라이브러리 사용 선언
        - "fmt"는 데이터 형식 변환 및 국제화(i18n) 지원을 위한 접두사
        - 날짜 및 숫자 형식 지정, 지역화된 메시지 표시 등에 사용됨
        -->

        <%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
        <!--
        JSTL Functions (fn) 태그 라이브러리 사용 선언
        - "fn"은 문자열 처리 관련 유틸리티 함수 사용을 위한 접두사
        - 문자열 길이 계산, 포함 여부 확인, 부분 문자열 추출 등에서 사용됨
        -->

        <sec:authorize access="isAuthenticated()">
            <sec:authentication property="principal" var="principal"/>
        </sec:authorize>
        <!DOCTYPE html>
        <html>
        <head>
        <meta charset="UTF-8">
        <link rel="stylesheet" href="../css/common.css">
        <link rel="stylesheet" href="../css/main.css">
        <link rel="stylesheet" href="../css/order.css">
        <link rel="stylesheet" href="../css/order_clear.css">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Sample Site Project</title>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"
        integrity="sha512-894YE6QWD5I59HgZOGReFYm4dnWc1Qt5NtvYSaNcOP+u1T9qYdvdihz0PPSiiqn/+/3e7Jo4EaG7TubfWGUrMQ=="
        crossorigin="anonymous" referrerpolicy="no-referrer"></script>
        <script src="/js/ajax.js"></script>

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