<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    
<%@ page import="java.util.ArrayList" %>
<%@ page import="dto.Product" %>
<%@ page import="dto.ProductRepository" %>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>product detail description</title>

<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
</head>
<body>
	<jsp:include page="menu.jsp"></jsp:include>
	
	<div class="jumbotron">
		<div class="container">
			<h1 class="display-3">ProductsDetail</h1>
		</div>
	</div>
	
	<%
		String id = request.getParameter("id");
		ProductRepository pr = ProductRepository.getInstance();
		Product p = pr.getProductById(id);
	%>
	
	<div class="container">
		<div>
			<h3><%= p.getpName() %></h3>
			<p><%= p.getUnitPrice() %></p>
			<p><%= p.getDescription() %></p>
			<p><%= p.getManufacturer() %></p>
			<p><%= p.getUnitInStock() %></p>
		</div>
	</div>
</body>
</html>