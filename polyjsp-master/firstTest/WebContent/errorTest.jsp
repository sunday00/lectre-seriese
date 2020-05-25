<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

<%@ page import="java.util.Date, java.text.SimpleDateFormat" %>
<%@ page errorPage="error.jsp" %>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	<%
		Date date = new Date();
		SimpleDateFormat simpleDate = new SimpleDateFormat("yyyy-mm-dd");
		String strdate = simpleDate.format(date);
	%>
	
	today is <%= strdat %>.
</body>
</html>