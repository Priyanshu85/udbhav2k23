import React from 'react';
import { motion } from 'framer-motion';
import { Link, NavLink, useLocation } from 'react-router-dom';

const MenuItem = ({ children, variant, to, ...props }) => {

    // menu item variants of framer motion
    const variants = {
        open: {
            y: 0,
            opacity: 1,
            transition: {
                y: { stiffness: 1000, velocity: -100 }
            }
        },
        closed: {
            y: 50,
            opacity: 0,
            transition: {
                y: { stiffness: 1000 }
            }
        }
    };

    return (
        <motion.li
            variants={variants}
        >
            {variant == 'link' ? <Link to={to} {...props}>{children}</Link> :
                variant == 'navLink' ?
                    <NavLink
                        to={to}
                        {...props}
                    >
                        {children}
                    </NavLink>
                    : children
            }
        </motion.li>
    );
}

export default MenuItem;