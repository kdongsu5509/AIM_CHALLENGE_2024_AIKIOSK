package com.sample.www.config;

import com.sample.www.controller.MyInterceptor;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebMvcConfig implements WebMvcConfigurer {

	// 이미지 업로드 경로.
	public static final String uploadImagesPath = "/home/ubuntu/tomcat/webapps/";
	// true 로컬 false 운영.
	public static final boolean isLocal = true;

	//자원을 왜 추가하지...?
	@Override
	public void addResourceHandlers(ResourceHandlerRegistry registry) {
		// registry.addResourceHandler("/js/**").addResourceLocations("classpath:/static/js/").setCachePeriod(2_592_000);
		// registry.addResourceHandler("/img/**").addResourceLocations("classpath:/static/img/").setCachePeriod(2_592_000);
		// registry.addResourceHandler("/font/**").addResourceLocations("classpath:/static/font/").setCachePeriod(2_592_000);
		// registry.addResourceHandler("/css/**").addResourceLocations("classpath:/static/css/").setCachePeriod(2_592_000);
		// registry.addResourceHandler("/media/**").addResourceLocations("classpath:/static/media/").setCachePeriod(2_592_000);
		if (!isLocal) {
			registry.addResourceHandler("/image/**").addResourceLocations("file:///" + uploadImagesPath)
					.setCachePeriod(604_800);
			registry.addResourceHandler("/video/**").addResourceLocations("file:///" + uploadImagesPath + "video/")
					.setCachePeriod(604_800);
			registry.addResourceHandler("/upload/**").addResourceLocations("file:///" + uploadImagesPath + "upload/")
					.setCachePeriod(604_800);
		}
	}

	@Override
	public void addInterceptors(InterceptorRegistry registry) {
		registry.addInterceptor(new MyInterceptor()).addPathPatterns("/**").excludePathPatterns("/css/**", "/img/**",
				"/js/**", "/font/**", "/media/**", "/image/**", "/video/**", "/upload/**");
	}
	/*전체 경로에 인터셉터 설정 완료.*/
	/*단, 몇 개 큰 분류에는 적용 안되도록 예외 처리*/
}