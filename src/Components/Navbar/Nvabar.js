import React from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  //CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <div className='fixed-top' style={{ marginLeft:'-30px',height: '80px', display: 'flex'}}>
      <CDBSidebar textColor="#fff" backgroundColor="#333" style={{ height: '100vh' }}>
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
            Portfolio
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <Link to="home" smooth={true} duration={500}>
              <CDBSidebarMenuItem icon="columns">Home</CDBSidebarMenuItem>
            </Link>
            <Link to="about" smooth={true} duration={500}>
              <CDBSidebarMenuItem icon="info-circle">About</CDBSidebarMenuItem>
            </Link>
            <Link to="skills" smooth={true} duration={500}>
              <CDBSidebarMenuItem icon="user">Skills</CDBSidebarMenuItem>
            </Link>
            <Link to="projects" smooth={true} duration={500}>
              <CDBSidebarMenuItem icon="chart-line">Projects</CDBSidebarMenuItem>
            </Link>
            <Link to="certification" smooth={true} duration={500}>
              <CDBSidebarMenuItem icon="certificate">Certification</CDBSidebarMenuItem>
            </Link>
            <Link to="contact" smooth={true} duration={500}>
              <CDBSidebarMenuItem icon="envelope">Contact</CDBSidebarMenuItem>
            </Link>
          </CDBSidebarMenu>
        </CDBSidebarContent>

        
      </CDBSidebar>
    </div>
  );
};

export default Navbar;
