import React, { useEffect, useRef, useState } from 'react';
import './header.css'
import logo from '../../../assets/loadimage.png';
import { motion, useCycle } from 'framer-motion';
import MenuItem from './MenuItem';
// import JoinUsModal from '../../JoinUsModal/JoinUsModal';
// import Music from '../Music/Music';
import { LazyLoadImage } from 'react-lazy-load-image-component';


const headerVariant = {
    open: {
        height: 'auto'
    },

    closed: {
        height: '0px'
    }
}


const sidebar = {
    open: (height = 1000) => ({
        backgroundColor: '#222831',
        clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
        transition: {
            type: "spring",
            stiffness: 20,
            restDelta: 2
        }
    }),
    closed: {
        backgroundColor: '#9d9d9d',
        clipPath: "circle(25px at 40px 40px)",
        transition: {
            delay: 0.5,
            type: "spring",
            stiffness: 400,
            damping: 40
        }
    }
};

const Path = props => (
    <motion.path
        strokeWidth="2.5"
        stroke="#eeeeee"
        strokeLinecap="round"
        {...props}
    />
);

const ulVariants = {
    open: {
        transition: { staggerChildren: 0.07, delayChildren: 0.2 },
        display: 'block'
    },
    closed: {
        transition: { staggerChildren: 0.05, staggerDirection: -1 },
        display: 'none'
    }
};


const buttonVariant = {
    open: {
        backgroundColor: '#222831'
    },
    closed: {
        backgroundColor: '#9d9d9d'
    }
}

const Header = () => {

    const [modalOpen, setModalOpen] = useState(false);
    const [height, setHeight] = useState(0);
    const [isOpen, toggleOpen] = useCycle(false, true);
    const containerRef = useRef();

    useEffect(() => {

        // set header height
        const containerHeight = containerRef.current.offsetHeight;
        setHeight(containerHeight);

    }, []);

    return (
        <>
            <motion.header initial={false} variants={headerVariant} animate={isOpen ? 'open' : 'closed'} custom={height} ref={containerRef} className='header'>
                <motion.div className='headerBG' variants={sidebar}></motion.div>
                {/* navigation menu */}
                <motion.ul variants={ulVariants} className='nav_menu'>
                    <MenuItem onClick={() => toggleOpen()} variant='link' to='/' className='logo'>
                        <LazyLoadImage src={logo} alt='logo' />
                    </MenuItem>
                    <MenuItem onClick={() => toggleOpen()} variant='navLink' className='nav_link' data-hover-text="Home" to='/'>Home</MenuItem>
                    <MenuItem onClick={() => toggleOpen()} variant='navLink' className='nav_link' data-hover-text="Events" to='/events'>Events</MenuItem>
                    <MenuItem onClick={() => toggleOpen()} variant='navLink' className='nav_link' data-hover-text="About Us" to='/'>About Us</MenuItem>
                    <MenuItem onClick={() => toggleOpen()} variant='navLink' className='nav_link' data-hover-text="Team" to='/'>Team</MenuItem>
                </motion.ul>
                {/* toggle button */}
                <motion.button  onClick={() => toggleOpen()} className='menu_btn'>
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="style=doutone"> <g id="arrow-short-right"> <path id="vector (Stroke)" fill-rule="evenodd" clip-rule="evenodd" d="M8.20554 4.48413C7.92066 4.78483 7.93349 5.25953 8.23419 5.54441L14.0905 11.0925C14.6109 11.5855 14.6109 12.4143 14.0905 12.9074L8.2342 18.4555C7.9335 18.7403 7.92067 19.215 8.20554 19.5157C8.49041 19.8164 8.96511 19.8293 9.26581 19.5444L15.1221 13.9963C16.2671 12.9116 16.2671 11.0882 15.1221 10.0036L9.26581 4.45548C8.96511 4.1706 8.49041 4.18343 8.20554 4.48413Z" fill="#910094"></path> <path id="vector (Stroke)_2" fill-rule="evenodd" clip-rule="evenodd" d="M8.20554 19.5157C8.49041 19.8164 8.96511 19.8293 9.26581 19.5444L15.1221 13.9963C15.6944 13.4541 15.9808 12.7256 15.9808 11.9999C15.9808 11.5857 15.645 11.2499 15.2308 11.2499C14.8166 11.2499 14.4808 11.5857 14.4808 11.9999C14.4808 12.3318 14.3509 12.6607 14.0905 12.9074L8.23419 18.4555C7.93349 18.7403 7.92067 19.215 8.20554 19.5157Z" fill="#e600c7"></path> </g> </g> </g></svg>
                </motion.button>
            </motion.header>
        </>
    );
}

export default Header;


