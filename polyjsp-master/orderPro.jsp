<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    
<%@ page import="java.sql.*" %>
<% request.setCharacterEncoding("utf-8"); %>

<%
	Connection conn = null;
	PreparedStatement pstmt = null;
	ResultSet rset = null;
	
	String jdbcUrl = "jdbc:mysql://localhost:3306/mydb";
	String dbid = "root";
	String pswd = "1234";
	String sqlStr = "";
	
	String ids[] = request.getParameterValues("id");
	
%>  

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>BookStore</title>
</head>
<body>
	<h3>Thank you for your purchasing.</h3>

	<table>
		<thead>
			<tr>
				<th>title</th>
				<th>author</th>
				<th>price</th>
				<th>stock</th>
			</tr>
		</thead>
		<tbody>
<%

if (ids != null){
	try{
		Class.forName("com.mysql.jdbc.Driver");
		conn = DriverManager.getConnection(jdbcUrl, dbid, pswd);
		
		for(int i=0; i<ids.length; i++){
			sqlStr = "Update book SET set stock=stock-1, orders=orders+1 WHERE id=?";
			pstmt = conn.prepareStatement(sqlStr);
			pstmt.setInt(1, Integer.parseInt(ids[i]));
			pstmt.executeUpdate();
						
			sqlStr = "SELECT * FROM book WHERE id=?";
			pstmt = conn.prepareStatement(sqlStr);
			pstmt.setInt(1, Integer.parseInt(ids[i]));
			rset = pstmt.executeQuery();
			
			while(rset.next()){

%>
			<tr>
				<td><%= rset.getString("title") %></td>
				<td><%= rset.getString("author") %></td>
				<td><%= rset.getInt("price") %></td>
				<td><%= rset.getInt("stock") %></td>
			</tr>
<%
			}
			
			rset.close();
			
		}

		
%>					
		</tbody>
	</table>	
	
</body>
</html>
<%
	} catch (Exception e){
		e.printStackTrace();
		
		rset.close();
		pstmt.close();
		conn.close();
	} finally {
		rset.close();
		pstmt.close();
		conn.close();
	}
}
%>