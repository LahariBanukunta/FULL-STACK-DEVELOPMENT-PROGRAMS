<%@ page contentType="text/html; charset=ISO-8859-1" %>
<%@ page import="Bean.FactorialBean" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Factorial Calculation</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f9;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
        }

        .container {
            width: 60%;
            padding: 20px;
            background-color: white;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            text-align: center;
        }

        h2 {
            color: #333;
            margin-bottom: 20px;
        }

        .result {
            margin-top: 20px;
            font-size: 20px;
            color: #333;
        }

        .error {
            margin-top: 20px;
            font-size: 20px;
            color: red;
        }
    </style>
</head>
<body>
    <div class="container">
        <h2>Factorial Calculation</h2>

        <!-- UseBean to instantiate the FactorialBean -->
        <jsp:useBean id="factorialBean" class="Bean.FactorialBean" scope="page" />

        <!-- Manually parse the number parameter and set it in the FactorialBean -->
        <%
            String numStr = request.getParameter("number");
            if (numStr != null && !numStr.isEmpty()) {
                try {
                    long number = Long.parseLong(numStr);
                    factorialBean.setNumber(number);
                } catch (NumberFormatException e) {
                    out.println("<p class='error'>Invalid number format. Please enter a valid number.</p>");
                }
            }
        %>

        <!-- Display the factorial result -->
        <%
            if (numStr != null && !numStr.isEmpty()) {
                long factorial = factorialBean.getNumber();
                out.println("<p class='result'>The factorial of " + numStr + " is: " + factorial + "</p>");
            }
        %>

    </div>
</body>
</html>
