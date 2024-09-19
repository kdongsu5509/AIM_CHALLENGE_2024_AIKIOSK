package com.sample.www.controller;

import lombok.extern.slf4j.Slf4j;
import org.springframework.web.servlet.HandlerInterceptor;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

@Slf4j
public class MyInterceptor implements HandlerInterceptor {
    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        response.setContentType("text/html; charset=UTF-8");
        response.setCharacterEncoding("UTF-8");
        log.info(String.valueOf(request.getRequestURL()));
        log.info(response.getCharacterEncoding());
        log.info("preHandler is running on Spring boot");
        return true;
    }
    //차후에 jsp header, footer 설정해야함.
}
