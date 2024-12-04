<%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
    <title>Factorial Calculation</title>
   
            
</head>
<body>

    <div class="container">
        <h2>Factorial Calculation</h2>
        
        <!-- Form to take input from user -->
        <form action="factorial.jsp" method="post">
            <label for="number">Enter a number:</label>
            <input type="text" id="number" name="number" required>
            <input type="submit" value="Calculate">
        </form>

        <%
            // Check if the form was submitted
            String numberStr = request.getParameter("number");
            if (numberStr != null && !numberStr.isEmpty()) {
                try {
                    int number = Integer.parseInt(numberStr);
                    long factorial = 1;

                    // Calculate factorial
                    if (number < 0) {
                        out.println("<p class='error'>Factorial is not defined for negative numbers.</p>");
                    } else {
                        for (int i = 1; i <= number; i++) {
                            factorial *= i;
                        }
                        out.println("<p class='result'>The factorial of " + number + " is " + factorial + ".</p>");
                    }
                } catch (NumberFormatException e) {
                    out.println("<p class='error'>Please enter a valid integer number.</p>");
                }
            }
        %>
    </div>

</body>
</html>
