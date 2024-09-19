<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<jsp:include page="layout/header.jsp" />

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
    <!-- 주문 채팅 영역 -->
    <div class="menu_order">
      <div class="talk">
        <div class="ask_talk">
          <p>주문을 해주세요. ^^</p>
          <div class="ask_de"></div>
        </div>
      </div>
      <div class="talk">
        <div class="people_talk">
          <p>
            <span class="temp">아이스</span>
            <span class="menu">아메리카노</span>
            <span class="number">한</span> 잔에
            <span class="option">샷 추가</span>해 주세요.</p>
          <div class="people_de"></div>
        </div>
      </div>
      <div class="talk">
        <div class="ask_talk">
          <p>입력된 주문을 확인해 주세요.</p>
          <div class="ask_de"></div>
        </div>
      </div>
    </div>

    <!-- 메뉴 리스트 영역 -->
    <div class="menu_list">
      <ul>
        <!-- Menu items... -->
        <%-- You can use JSP to dynamically generate menu items here --%>
      </ul>
    </div>
  </article>

  <!-- 하단 영역 -->
  <article class="bottom">
    <div class="txtbar">
      <p>
        중단하시려면, <span class="txtbar_point">"사용종료"</span> 또는 <span class="txtbar_point">"전체삭제"</span>를 말씀해 주세요.
      </p>
    </div>
    <div class="moneybar">
      <ul>
        <li>
          <div>
            <p>주문 수량</p>
            <p>3</p>
          </div>
        </li>
        <li>
          <div>
            <p>Total</p>
            <p>₩ &nbsp; <span>100,400</span></p>
          </div>
        </li>
      </ul>
    </div>
  </article>

  <!-- 영수증 출력 모달창 -->
  <!-- 모달 배경 -->
  <div class="modal_bg"></div>

  <!-- 영수증 모달 -->
  <article class="modal_shop_out">
    <div class="modal_shop_out_tit">
      <p>매장에서 드시고 가실건가요?</p>
    </div>

    <div class="modal_shop_out_div">
      <!-- 매장 -->
      <button>
        <img src="../../../webapp/img/icon_in.png" alt="매장">
        <p>매장</p>
      </button>

      <!-- 포장 -->
      <button>
        <img src="../../../webapp/img/icon_out.png" alt="포장">
        <p>포장</p>
      </button>
    </div>

  </article>

</main>
</body>
</html>