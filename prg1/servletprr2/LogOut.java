package LoginPage;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.Date;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

public class LogOut extends HttpServlet {
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        PrintWriter out = response.getWriter();

        HttpSession session = request.getSession(false);
        if (session != null) {
            String uname = (String) session.getAttribute("username");
            Date loginTime = (Date) session.getAttribute("loginTime");
            Date logoutTime = new Date();

            // Calculate the session duration in milliseconds
            long durationInMillis = logoutTime.getTime() - loginTime.getTime();
            
            // Convert the duration to hours, minutes, seconds
            long hours = (durationInMillis / (1000 * 60 * 60)) % 24;
            long minutes = (durationInMillis / (1000 * 60)) % 60;
            long seconds = (durationInMillis / 1000) % 60;

            // Invalidate the session
            session.invalidate();

            // Display the thank you message with formatted duration
            out.println("<!DOCTYPE html>");
            out.println("<html>");
            out.println("<head>");
            out.println("<title>Logout</title>");
            out.println("</head>");
            out.println("<body>");
            out.println("<h1>Thank You, " + uname + "!</h1>");
            out.println("<p>Your session lasted for: " + hours + " hours: " + minutes + " minutes: " + seconds + " seconds.</p>");
            out.println("</body>");
            out.println("</html>");
        } else {
            response.sendRedirect("index.html");
        }
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
        return "Logout Servlet";
    }
}
