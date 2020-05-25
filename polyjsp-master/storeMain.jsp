<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    
<%@ page import="java.sql.*" %>
<% request.setCharacterEncoding("utf-8"); %>
    
<%
	Connection conn = null;
	Statement stmt = null;
	ResultSet rset = null;
	
	String jdbcUrl = "jdbc:mysql://localhost:3306/mydb";
	String dbid = "root";
	String pswd = "1234";
	String sqlStr = "";
	
	try{
		Class.forName("com.mysql.jdbc.Driver");
		conn = DriverManager.getConnection(jdbcUrl, dbid, pswd);
		
		sqlStr = "SELECT * FROM book";
		stmt = conn.createStatement();
		rset = stmt.executeQuery(sqlStr);
	
%>
    
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>BookStore</title>

<style type="text/css">
	th, td{
		border : 1px solid tomato;
		pading : 5px;
	}
</style>

</head>
<body>
	<h1>Internet Programmer BookStore</h1>
	<form action="orderPro.jsp" method="POST">
		<label>title : </label> <input type="text" name="title"><br />
		<!--  input type="submit" value="search!" -->
	
	
		<table>
			<thead>
				<tr>
					<th>ORDER</th>
					<th>title</th>
					<th>author</th>
					<th>price</th>
					<th>stock</th>
				</tr>
			</thead>
			<tbody>

<% 	
	int id=0, order=0;
	while(rset.next()){
		id = rset.getInt("id");
		order = rset.getInt("orders");
%>	
				<tr> 
					<td><input type="checkbox" name="id" value="<%= id %>" /></td>
					<td><%= rset.getString("title") %></td>
					<td><%= rset.getString("author") %></td>
					<td><%= rset.getInt("price") %></td>
					<td><%= rset.getInt("stock") %></td>
				</tr>
<%	}	%>			
				
			</tbody>
		</table>
		<input type="submit"/>
	</form>
<% } catch(Exception e){
	e.printStackTrace();
	rset.close();
	stmt.close();
	conn.close();
} %>
	
</body>
</html>