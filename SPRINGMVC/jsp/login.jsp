<%-- 
    Document   : login
    Created on : 28 Nov, 2024, 10:40:13 AM
    Author     : Admin
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JSP Page</title>
    </head>
    <body>
        <h1>Please Enter your details!</h1>
        <form action ="hello.htm" method ="GET">
            Enter Username<input type ="text" name ="myname"/>
            <br>
            Enter Password<input type ="password" name ="pass"/>
            <br>
            <input type ="submit" value ="LOGIN"/>
        </form>
    </body>
</html>
