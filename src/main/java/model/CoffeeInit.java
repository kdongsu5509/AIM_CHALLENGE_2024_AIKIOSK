package model;

import java.util.HashMap;
import java.util.Map;

public class CoffeeInit {
    public Map<String, Integer> init() {
        // 커피 이름과 가격을 저장하는 Map 생성
        Map<String, Integer> coffeePriceMap = new HashMap<>();

        // 데이터 삽입
        coffeePriceMap.put("에스프레소", 3800);
        coffeePriceMap.put("아메리카노", 4300);
        coffeePriceMap.put("카푸치노", 4500);
        coffeePriceMap.put("카페라떼", 4500);
        coffeePriceMap.put("바닐라라떼", 4800);
        coffeePriceMap.put("카라멜마끼야또", 4800);
        coffeePriceMap.put("카페모카", 4800);
        coffeePriceMap.put("아포카토", 5000);
        coffeePriceMap.put("토마토주스", 5500);
        coffeePriceMap.put("키위주스", 5500);
        coffeePriceMap.put("망고스무디", 5800);
        coffeePriceMap.put("딸기스무디", 5800);
        coffeePriceMap.put("쿠키앤크림", 5800);
        coffeePriceMap.put("레몬에이드", 5500);
        coffeePriceMap.put("복숭아아이스티", 5000);
        coffeePriceMap.put("허브티", 5000);
        coffeePriceMap.put("말차라떼", 5800);
        coffeePriceMap.put("초콜릿라떼", 5800);

        return coffeePriceMap;
    }
}
