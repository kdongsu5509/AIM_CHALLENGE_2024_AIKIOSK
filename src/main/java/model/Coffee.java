package model;

import lombok.Data;

@Data
public class Coffee {
    private String name;
    private int price;
    private int count;

    public Coffee(String name, int price, int count) {
        this.name = name;
        this.price = price;
        this.count = count;
    }
}
