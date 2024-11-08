package LoginPage;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.Date;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

public class HelloPageServlet extends HttpServlet {
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        PrintWriter out = response.getWriter();

        HttpSession session = request.getSession(false);
        if (session == null) {
            response.sendRedirect("index.html");
            return;
        }

        String uname = (String) session.getAttribute("username");
        Date loginTime = (Date) session.getAttribute("loginTime");
        Date currentTime = new Date();
        long durationInSeconds = (currentTime.getTime() - loginTime.getTime()) / 1000;

        out.println("<!DOCTYPE html>");
        out.println("<html>");
        out.println("<head>");
        out.println("<title>Welcome " + uname + "</title>");
        out.println("<style>");
        out.println("body {font-family: Arial, sans-serif; padding: 20px;}");
        
        // Style for the top-right corner (start time)
        out.println(".start-time {");
        out.println("    position: absolute;");
        out.println("    top: 10px;");
        out.println("    right: 10px;");
        out.println("    font-size: 12px;");
        out.println("    color: gray;");
        out.println("}");

        // Style for the logout button
        out.println(".logout-btn {");
        out.println("    position: absolute;");
        out.println("    top: 50px;");
        out.println("    right: 10px;");
        out.println("    padding: 10px 20px;");
        out.println("    background-color: #4CAF50;");
        out.println("    color: white;");
        out.println("    border: none;");
        out.println("    cursor: pointer;");
        out.println("    font-size: 16px;");
        out.println("}");

        out.println(".logout-btn:hover {");
        out.println("    background-color: #45a049;");
        out.println("}");
        out.println("</style>");
        out.println("</head>");
        out.println("<body>");
        out.println("<h1>Welcome, " + uname + "!</h1>");
      

        // Display the start time at the top right corner
        out.println("<div class='start-time'>Start Time: " + loginTime.toString() + "</div>");

        // Logout form with a logout button
        out.println("<form action='LogOut' method='post'>");
        out.println("<button class='logout-btn'>Logout</button>");
        out.println("</form>");
        out.println("</body>");
        out.println("</html>");
    }

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    @Override
    public String getServletInfo() {
        return "Hello Page Servlet";
    }
}
