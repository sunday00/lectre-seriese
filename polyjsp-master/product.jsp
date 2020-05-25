<%@page import="dto.ProductRepository"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ page import="java.util.ArrayList" %>
<%@ page import="dto.Product" %>
<%@ page import="dto.ProductRepository" %>
    
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>상품목록</title>
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
</head>
<body>
	
	<jsp:include page="menu.jsp"></jsp:include>
	
	<div class="jumbotron">
		<div class="container">
			<h1 class="display-3">ProductsList</h1>
		</div>
	</div>
	
	<div>
		<%
			ProductRepository product = ProductRepository.getInstance();
			ArrayList<Product> list = product.getProductList(); 
		%>
		<div class="container">
			<div class="row" align="center">
				<%
					for(int i=0; i<list.size(); i++){
						Product p = list.get(i);
				%>
						<div class="col-md-4">
							<h3><%= p.getpName() %></h3>
							<p><%= p.getDescription() %></p>
							<p><%= p.getUnitPrice() %></p>
							<p><a href="products.jsp?id=<%= p.getProductId() %>" class="btn btn-secondary">Detail</a></p>
						</div>
				<%
					}
				%>
			</div>
		</div>
	</div>
	
	<jsp:include page="footer.jsp"></jsp:include>
	
</body>
</html>