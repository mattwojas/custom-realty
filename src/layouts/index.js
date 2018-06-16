import React from "react"
import Link from 'gatsby-link'
import '../scss/styles.scss'

const ListLink = props =>
    <li style={{ display: 'inline-block', marginRight: '1rem'}}>
        <Link to={props.to} activeClassName={'active'}>
            {props.children}
        </Link>
    </li>

export default ({children}) => 
    <div style={{ margin: `0 auto`, maxWidth: 1200, padding: `1.25rem 1rem` }}>
        <header style={{ marginBottom: `1.5rem` }}>
        <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
            {/* <h3 style={{ display: `inline` }}>Custom Realty</h3> */}
            <img src="http://www.customrealty.ca/images/crs_logo.gif" style={{marginLeft:-5 + 'px'}} alt="Custom Realty Services"/>
        </Link>
        <ul style={{ listStyle: `none`, float: `none`, marginLeft: 0 }}>
            <ListLink to="/">Home</ListLink>
            <ListLink to="/company-profile/">Company Profile</ListLink>
            <ListLink to="/our-team/">Our Team</ListLink>
            <ListLink to="/our-services/">Our Services</ListLink>
            <ListLink to="/client-testimonials/">Client Testimonials</ListLink>
            <ListLink to="/the-difference/">The Difference</ListLink>
            <ListLink to="/property-search/">Property Search</ListLink>
            <ListLink to="/contact-us/">Contact Us</ListLink>
        </ul>
        </header>
        
        {children()}

        
        <footer>
            <p>Call <a href="tel:+1-905-624-1700">(905) 624-1700</a></p>
            <ul style={{ listStyle: `none`, float: `right` }}>
            <ListLink to="/">Home</ListLink>
            <ListLink to="/company-profile/">Company Profile</ListLink>
            <ListLink to="/our-team/">Our Team</ListLink>
            <ListLink to="/client-testimonials/">Client Testimonials</ListLink>
            <ListLink to="/the-difference/">The Difference</ListLink>
            <ListLink to="/property-search/">Property Search</ListLink>
            <ListLink to="/contact-us/">Contact Us</ListLink>
            </ul>
        </footer>
       
    </div>
