<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<jsp:include page="/WEB-INF/views/layout/header.jsp" />
  <!-- 주문 완료 -->
  <article class="order_clear">
    <div>
      <div>
        <p class="clear_txt">주문이 성공적으로 진행되었습니다.</p>
        <p class="clear_txt_org">카드를 회수해 주세요.</p>
      </div>
      <div>
        <img src="../../../webapp/img/icon_shop.png" alt="매장이용">
        <p class="clear_txt">저희 매장을 이용해 주셔서 감사합니다.</p>
        <p class="clear_txt_small">
          주문번호를 확인 하신 후,<br/>
          안내된 번호에 맞춰 카운터로 오시면 됩니다.
        </p>
      </div>
    </div>
    <!-- 버튼 영역 -->
    <div class="order_clear_button">
      <button class="order_clear_button_more" onclick="location.href='<%= request.getContextPath() %>/order';">
        <span>추가 주문하기</span>
      </button>
      <button class="order_clear_button_end" onclick="location.href='<%= request.getContextPath() %>/home';">
        <span>종료하기</span>
      </button>
    </div>
  </article>

</main>
</body>
</html>