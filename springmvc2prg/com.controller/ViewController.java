/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.controllers;

import com.beans.EmpDao;
import com.beans.Employee;
import java.util.List;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.mvc.AbstractController;

/**
 *
 * @author ADMIN
 */
public class ViewController extends AbstractController {
    
    public ViewController() {
    }
    
    /**
     *
     * @param request
     * @param response
     * @return
     * @throws Exception
     */
    @Override
    protected ModelAndView handleRequestInternal(
            HttpServletRequest request,
            HttpServletResponse response) throws Exception {
       ModelAndView mav=new ModelAndView();
       List<Employee> empList=new EmpDao().getEmployeeList();
       mav.addObject("empList",empList);
       mav.setViewName("viewEmp");
       return mav;
    }
    
}
