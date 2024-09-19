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
          <!-- <div class="talk">
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
          </div> -->
        </div>
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
   </main>
</body>
</html>