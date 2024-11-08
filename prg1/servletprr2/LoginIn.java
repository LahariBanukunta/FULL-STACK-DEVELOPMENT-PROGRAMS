
package LoginPage;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.Date;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

public class LoginIn extends HttpServlet {
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        PrintWriter out = response.getWriter();

        // Get username and password from form
        String uname = request.getParameter("uname");
        String pwd = request.getParameter("pwd");

        // Here you can validate the password if required
        // For simplicity, we're skipping password validation

        // Store the name and time of login in the session
        HttpSession session = request.getSession();
        session.setAttribute("username", uname);
        session.setAttribute("loginTime", new Date());

        // Redirect to the HelloPageServlet (not just "hello")
        response.sendRedirect("HelloPage");
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
        return "LoginIn Servlet";
    }
}
