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
    <div class="menu_list menu_one">
      <ul>
        <!-- 메뉴 항목 start -->
        <li>
          <div class="menu_img">
            <div class="temp_hot">
              <span class="temp">HOT</span>
            </div>
            <img src="${pageContext.request.contextPath}/img/menu_1.png" alt="menu">
          </div>
          <div class="menu_txt menu_one_txt">
            <!-- 메뉴 & 가격 영역 -->
            <div>
              <div>
                <span class="menu">아메리카노</span>
              </div>
              <div>
                ₩<span class="money">7,000</span>
              </div>
            </div>

            <!-- 옵션 영역 -->
            <div>
              <!-- 개별 옵션 : 옵션 추가 시 option_box가 추가 -->
              <div class="option_box">
                <!-- 옵션명 -->
                <div>
                  <span class="option">샷 추가</span>
                </div>

                <!-- 추가금액 -->
                <div>
                  + <span class="option_money">500</span>
                </div>

                <!-- X 버튼 -->
                <div>
                  <span>×</span>
                </div>
              </div>

              <div class="option_box">
                <div>
                  <span class="option">얼음 조금</span>
                </div>
                <div>
                  + <span class="option_money">500</span>
                </div>
                <div>
                  <span>×</span>
                </div>
              </div>
            </div>

            <!-- 버튼 영역 -->
            <div>
              <!-- 삭제 버튼 -->
              <div class="button_del">
                <img src="${pageContext.request.contextPath}/img/icon_delete.png" alt="삭제 버튼">
              </div>

              <!-- 갯수 버튼 -->
              <div class="button_num">
                <button><span>-</span></button>
                <div><span>1</span></div>
                <button><span>+</span></button>
              </div>
            </div>
          </div>
        </li>
        <!-- 메뉴 항목 end -->
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
            <p>₩ &nbsp; <span class="total_money">100,400</span></p>
          </div>
        </li>
      </ul>
    </div>
  </article>
</main>
</body>
</html>
