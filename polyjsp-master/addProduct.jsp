<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    
<%@ page import="java.util.ArrayList" %>
<%@ page import="dto.Product" %>
<%@ page import="dto.ProductRepository" %>
    
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>product regist</title>
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
<style>
	input[type="radio"]{
		margin-right: 10px;
	}
	.btn-primary{
		display : block;
		margin : 0 auto;
	}
</style>
</head>
<body>
	<jsp:include page="menu.jsp"></jsp:include>
	
	<div class="jumbotron">
		<div class="container">
			<h1 class="display-3">Products Regist</h1>
		</div>
	</div>
	
	<div class="container">
		<form action="processProduct.jsp" method="POST" name="newProduct" class="form-horizontal">
			<div class="form-group row">
				<label class="col-sm-2">product Code</label>
				<div class="col=sm-4">
					<input type="text" name="productId" class="form-control" />
				</div>
			</div>				
			<div class="form-group row">
				<label class="col-sm-2">product name</label>
				<div class="col=sm-4">
					<input type="text" name="pName" class="form-control" />
				</div>
			</div>
			<div class="form-group row">
				<label class="col-sm-2">product price</label>
				<div class="col=sm-4">
					<input type="text" name="unitPrice" class="form-control" />
				</div>
			</div>
			<div class="form-group row">
				<label class="col-sm-2">product description</label>
				<div class="col=sm-4">
					<input type="text" name="description" class="form-control" />
				</div>
			</div>
			<div class="form-group row">
				<label class="col-sm-2">product manufacturer</label>
				<div class="col=sm-4">
					<input type="text" name="manufacturer" class="form-control" />
				</div>
			</div>			
			<div class="form-group row">
				<label class="col-sm-2">product type</label>
				<div class="col=sm-4">
					<input type="text" name="category" class="form-control" />
				</div>
			</div>
			<div class="form-group row">
				<label class="col-sm-2">product stock</label>
				<div class="col=sm-4">
					<input type="text" name="unitInStock" class="form-control" />
				</div>
			</div>
			<div class="form-group row">
				<label class="col-sm-2">product condition</label>
				<div class="col=sm-6">
					<input type="radio" name="condition" value="new" />new
					<input type="radio" name="condition" value="old" />used
					<input type="radio" name="condition" value="renew" />repaired
				</div>
			</div>
			<div class="form-group row">
				<input type="submit" value="regist" class="btn btn-primary" />
			</div>
		</form>
	</div>
	
</body>
</html>