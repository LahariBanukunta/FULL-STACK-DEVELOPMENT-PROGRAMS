<%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
    <title>Factorial Calculation</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f4f4f9;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh; /* Full viewport height */
        }

        .container {
            width: 50%;
            padding: 20px;
            background-color: white;
            border-radius: 10px;
            box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
            text-align: center;
        }

        h2 {
            color: #333;
            margin-top: 0;
        }

        label {
            font-size: 18px;
            color: #555;
        }

        input[type="text"] {
            width: 50%;
            padding: 10px;
            margin: 10px 0;
            border-radius: 5px;
            border: 1px solid #ccc;
            font-size: 16px;
        }

        input[type="submit"] {
            padding: 10px 20px;
            font-size: 18px;
            color: white;
            background-color: #4CAF50;
            border: none;
            cursor: pointer;
            border-radius: 5px;
        }

        input[type="submit"]:hover {
            background-color: #45a049;
        }

        .result {
            margin-top: 20px;
            font-size: 20px;
        }

        .error {
            color: red;
            font-size: 18px;
        }
    </style>
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
