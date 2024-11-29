/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.mvc.AbstractController;

/**
 *
 * @author Admin
 */
public class HelloController extends AbstractController {
    
    public HelloController() {
    }
    
    protected ModelAndView handleRequestInternal(
            HttpServletRequest request,
            HttpServletResponse response) throws Exception {
           ModelAndView mav = new ModelAndView();
           String name=request.getParameter("myname");
           mav.addObject("message",name);
      mav.setViewName("hello");
      return mav;
    
    }
    
}
