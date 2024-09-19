<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<jsp:include page="layout/header.jsp" />

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

</main>
</body>
</html>