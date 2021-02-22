import {
    AppBar,
    Toolbar,
    Typography,
    makeStyles,
    Button,
    IconButton,
    Drawer,
    // Link,
    MenuItem,
  } from "@material-ui/core";
  import MenuIcon from "@material-ui/icons/Menu";
  import React, { useState, useEffect } from "react";
//   import { Link as RouterLink } from "react-router-dom";
import { Link, animateScroll as scroll } from "react-scroll";
// import { HashLink as Link } from 'react-router-hash-link';
import HomeIcon from '@material-ui/icons/Home';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const headersData = [
// {
//     label: "Home",
//     href: "welcome",
// },
{
    label: "Our Process",
    href: "process",
},
{
    label: "Your Product",
    href: "crossPlatform",
},
{
    label: "Your Business",
    href: "dataScience",
},
{
    label: "Contact us",
    href: "contact",
},
];

const useStyles = makeStyles(() => ({
header: {
    // backgroundColor: "#400CCC",
    backgroundColor: "rgba(9,76,91,0.7)",
    paddingRight: "79px",
    paddingLeft: "118px",
    // marginBotton: '50px',
    // marginTop: '60px',
    "@media (max-width: 900px)": {
    paddingLeft: 0,
    },
},
logo: {
    fontFamily: "Work Sans, sans-serif",
    fontWeight: 600,
    color: "#FFFEFE",
    textAlign: "left",
},
menuButton: {
    fontFamily: "Open Sans, sans-serif",
    fontWeight: 700,
    size: "18px",
    marginLeft: "38px",
},
toolbar: {
    display: "flex",
    justifyContent: "space-between",
},
drawerContainer: {
    padding: "20px 30px",
},

desktopLinkStyle: {
    display: 'inline-block', 
    // borderBottom: '2px solid white', borderRadius: '0' ,
    color: 'white', 
    margin: '20px' 
}

}));

export default function Header() {
    const { header, logo, menuButton, toolbar, desktopLinkStyle, drawerContainer } = useStyles();

    const [state, setState] = useState({
        mobileView: false,
        drawerOpen: false,
    });
    useEffect(() => {
        // code to run on component mount
        let headerLinks = document.querySelectorAll("header .MuiButtonBase-root")
        console.log(headerLinks)
        headerLinks.forEach(link => {
            link.addEventListener('click', (e)=>{
                // alert('clicked')
                headerLinks.forEach(li => {
                    // li.parentElement.classList.remove('active')
                    li.classList.remove('navItem-Active')
                    // console.log(li.parentElement())
                })
                // e.classList.add('active')
                link.classList.add('navItem-Active')
            })
        })
        //
      }, [])
    // componentDidMount(){
    //     let routeLinks = document.querySelectorAll('.nav-link')
    //     routeLinks.forEach(link => {
    //         link.addEventListener('click', (e)=>{
    //             // alert('clicked')
    //             routeLinks.forEach(li => {
    //                 li.parentElement.classList.remove('active')
    //                 // console.log(li.parentElement())
    //             })
    //             // e.classList.add('active')
    //             link.parentElement.classList.add('active')
    //         })
    //     })

    const { mobileView, drawerOpen } = state;

    // -------------- very important ------------------
    // scrollToTop = () => {
    //    scroll.scrollToTop();
    // };
    // -------------------------------------------------

    useEffect(() => {
        const setResponsiveness = () => {
        return window.innerWidth < 900
            ? setState((prevState) => ({ ...prevState, mobileView: true }))
            : setState((prevState) => ({ ...prevState, mobileView: false }));
        };

        setResponsiveness();

        window.addEventListener("resize", () => setResponsiveness());
    }, []);

    const displayDesktop = () => {
        return (
        <Toolbar className={toolbar}>
            {home}
            <div>{getMenuButtons()}</div>
        </Toolbar>
        );
    };

    const displayMobile = () => {
        const handleDrawerOpen = () =>
        setState((prevState) => ({ ...prevState, drawerOpen: true }));
        const handleDrawerClose = () =>
        setState((prevState) => ({ ...prevState, drawerOpen: false }));

        return (
            <Toolbar>
                <IconButton
                {...{
                    edge: "start",
                    color: "inherit",
                    "aria-label": "menu",
                    "aria-haspopup": "true",
                    onClick: handleDrawerOpen,
                }}
                >
                <MenuIcon />
                </IconButton>

                <Drawer
                {...{
                    anchor: "left",
                    open: drawerOpen,
                    onClose: handleDrawerClose,
                }}
                >
                <div className={drawerContainer}>{getDrawerChoices()}</div>
                </Drawer>

                <div>{home}</div>
            </Toolbar>
            );
    };

    const getDrawerChoices = () => {
        return headersData.map(({ label, href }) => {
        return (
        //   <Link
        // //     {...{
        // //       component: RouterLink,
        // //       to: href,
        // //       color: "inherit",
        // //       style: { textDecoration: "none" },
        // //       key: label,
        // //     }}
        //     href={href}
        //   >
        //     <MenuItem>{label}</MenuItem>
        //   </Link>
        
            <Link
                activeClass="active"
                to={href}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}

                // containerId="process" 
                // style={{ display: 'inline-block', margin: '20px' }}>
                // smooth to="#process"

              >
                <MenuItem>{label}</MenuItem>
            </Link>
        );
        });
    };

    const home = (
        <Link
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}>
                <Typography variant="h6" component="h1" className={logo}>
                    <HomeIcon/>
                </Typography>
        </Link>
    );

    const getMenuButtons = () => {
        return headersData.map(({ label, href }) => {
        return (
            // <Button
            // {...{
            //     key: label,
            //     color: "inherit",
            //     // to: `#${href}`,
            //     to: `#process`,
            // //   component: RouterLink,
            //     className: menuButton,
            // }}
            // >
            // {label}
            // </Button>
            <Link
                activeClass="active"
                to= {href}
                // to='process'
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                //
                // className={desktopLinkStyle}
                // containerId="process" 
                // style={{ display: 'inline-block', margin: '20px' }}>

              >
                {href === 'contact' ? 
                <Button 
                variant="outlined"
                // href='#process'
                
                    style={{ display: 'inline-block', color: 'white', border: '1px solid white', margin: '20px' }}
                >
                    
                    {label}
                </Button>
                :
                <Button 
                // variant="contained"
                className={desktopLinkStyle}
                // href='#process'
                    // style={{ display: 'inline-block', 
                    //     // borderBottom: '2px solid white', borderRadius: '0' ,
                    //     color: 'white', margin: '20px' }}
                >
                    
                    {label}
                </Button>
                }
            </Link>
        );
        });
    };

    return (
        <header>
        <AppBar className={header}>
            {mobileView ? displayMobile() : displayDesktop()}
        </AppBar>
        </header>
    );
}