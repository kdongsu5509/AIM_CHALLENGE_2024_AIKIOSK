package model;

import lombok.Data;

@Data
public class Coffee {

    private String name;
    private int count;
    private Temperature temperature;

    public Coffee(String name, int count, String temperature) {
        this.name = name;
        this.count = count;
        this.temperature = convertToTemperatrue(temperature);
    }

    private Temperature convertToTemperatrue(String a) {
        if (a.trim().equals("뜨거운")) {
            return Temperature.ICE;
        }

        return Temperature.ICE;
    }
}
