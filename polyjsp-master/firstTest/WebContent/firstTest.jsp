<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!-- extends, import, copyright, session 등이 존재 -->
<%-- @taglib, declation, scriptlet, expression% %  --%>
<!-- jqva comment -->

<%-- <% request.setCharacterEncoding("utf8"); %> --%>
<%-- <% server.xml, tomcat의 server.xml 모두 수정 필요;  %> --%>
<%-- <% 아무튼 get과 post 의 한글 처리 방식이 다르므로 알아둘 것.  %> --%>


<!-- 내장 객체 : 리퀘스트, 리스판스, 아웃(콘솔로그, ,dd), 세션, 페이지 컨텍스트, 어플리케이션 , 콘피그  -->
<!-- 예외객체, .....  -->

<!-- page 영역. 뷰 단. JSP 페이지를 뜻함. -->
<!-- request 영역. 요청 공유 영역 -->
<!-- session 영역. 한 브라우져 내 요청 공유 페이지. -->
<!-- app 영역. 한 브라우져 내 요청 공유 페이지. -->
<!-- response 영역. 요청 공유 영역 -->

<!--    jsp:include ... jsp:foward  -->

<!-- 액션 태그로 인클루드 된 리퀘스트 객체는 부모와 자식 jsp가 같은 리퀘스트 객체를 공유한다.  -->
<!-- 이클루드간 키밸류는 파람 액션태그에 네임/밸류  -->

<!-- jsp:포워드 page"ㅇㅇㄴ"  -->
<!-- 버퍼를 비우고 페이지를 리다리렉트 -->

<!-- error-page -->
	<!-- error-code -->
		<!-- location -->...




<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<title>Insert title here</title>
</head>
<body>
	<h1> Hello World </h1>
	
</body>
</html>