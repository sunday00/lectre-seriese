<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    
<%@ page import="dto.Product" %>
<%@ page import="dto.ProductRepository" %>
    
<%
	String productId;
	String pName;
	Integer unitPrice;
	String description;
	String manufacturer;
	String category;
	Long unitInStock;
	String condition;
	
	productId = request.getParameter("productId");
	pName = request.getParameter("pName");
	unitPrice = Integer.parseInt(request.getParameter("unitPrice"));
	description = request.getParameter("description");
	manufacturer = request.getParameter("manufacturer");
	category = request.getParameter("category");
	unitInStock = Long.parseLong(request.getParameter("unitInStock"));
	condition = request.getParameter("condition");
	
	if(productId.isEmpty()) productId = "No123";
	
	ProductRepository pr = ProductRepository.getInstance();
	Product newP = new Product();
	
	newP.setProductId(productId);
	newP.setpName(pName);
	newP.setUnitPrice(unitPrice);
	newP.setDescription(description);
	newP.setManufacturer(manufacturer);
	newP.setCategory(category);
	newP.setUnitInStock(unitInStock);
	newP.setCondition(condition);
	
	pr.addProduct(newP);
	
	System.out.println(pr);
	
	response.sendRedirect("product.jsp");
%>
    
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	
</body>
</html>