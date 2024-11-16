package model;

import java.util.ArrayList;
import java.util.List;

public class CoffeeStorage {
    private List<Coffee> coffeeList = new ArrayList<>();

    public List<Coffee> getCoffeeList() {
        return coffeeList;
    }

    public void addCoffee(Coffee coffee) {
        coffeeList.add(coffee);
    }

    public void removeCoffee(String coffeeName) {
        Coffee coffee = coffeeList.stream()
                .filter(c -> c.getName().equals(coffeeName))
                .findFirst()
                .orElse(null);
        coffeeList.remove(coffee);
    }

    public void removeAllCoffee() {
        coffeeList.clear();
    }

    public void updateCoffee(String coffeeName, Coffee coffee) {
        Coffee targetCoffee = coffeeList.stream()
                .filter(c -> c.getName().equals(coffeeName))
                .findFirst()
                .orElse(null);
        targetCoffee.setName(coffee.getName());
        targetCoffee.setPrice(coffee.getPrice());
        targetCoffee.setCount(coffee.getCount());
    }
}