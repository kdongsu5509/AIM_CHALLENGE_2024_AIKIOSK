<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DREAM COFFEE</title>
    <link rel="stylesheet" href="../css/common.css">
    <link rel="stylesheet" href="../css/main.css">
    <link rel="stylesheet" href="../css/order.css">
</head>
<body>
<!-- order 주문페이지_2개 버전 -->
<main class="order_main">
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
                <!-- Menu items populated dynamically using JSP -->
                <%
                    // Sample data for menu items. In a real application, this could be populated from a database.
                    String[] menuNames = {"아메리카노", "카라멜 마키야또", "카페라떼"};
                    String[] menuTypes = {"ICE", "HOT", "ICE"};
                    int[] prices = {7000, 7500, 8000};
                    String[] options = {"샷 추가", "얼음 조금", "텀블러 사용"};

                    for(int i = 0; i < menuNames.length; i++) {
                %>
                <li>
                    <div class="menu_img">
                        <div class="temp_<%=menuTypes[i].toLowerCase()%>">
                            <span class="temp"><%=menuTypes[i]%></span>
                        </div>
                        <img src="../../../webapp/img/menu_<%=i+1%>.png" alt="menu">
                    </div>
                    <div class="menu_txt">
                        <!-- 메뉴 & 가격 영역 -->
                        <div>
                            <div>
                                <span class="menu"><%=menuNames[i]%></span>
                            </div>
                            <div>
                                ₩<span class="money"><%=prices[i]%></span>
                            </div>
                        </div>

                        <!-- 옵션 영역 -->
                        <div>
                            <!-- Dynamically generated options -->
                            <div class="option_box">
                                <div>
                                    <span class="option"><%=options[0]%></span>
                                </div>
                                <div>+<span class="option_money">500</span></div>
                                <div><span>×</span></div>
                            </div>
                        </div>

                        <!-- 버튼 영역 -->
                        <div class="button_num">
                            <button><span>-</span></button>
                            <div><span>1</span></div>
                            <button><span>+</span></button>
                        </div>
                    </div>
                </li>
                <% } %>
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
                        <p><%= menuNames.length %></p>
                    </div>
                </li>
                <li>
                    <div>
                        <p>Total</p>
                        <p>₩ &nbsp; <span>
                  <%
                      int total = 0;
                      for (int price : prices) {
                          total += price;
                      }
                      out.print(total);
                  %>
                </span></p>
                    </div>
                </li>
            </ul>
        </div>
    </article>
</main>
</body>
</html>
