import React, {useEffect} from 'react';
import {makeStyles, useTheme, withStyles} from '@material-ui/core/styles';
import SwipeableViews from "react-swipeable-views/src";
import AppBar from "@material-ui/core/AppBar";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PoliciesDetails from "./Policies-Details/policies-details";
import debounce from "../../utils/debounce";

function a11yProps(index) {
    return {
        id: `scrollable-auto-tab-${index}`,
        'aria-controls': `scrollable-auto-tabpanel-${index}`,
    };
}

const StyledTabs = withStyles({
    indicator: {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'transparent',
        '& > span': {
            maxWidth: 60,
            width: '100%',
            backgroundColor: 'white',
        },
    },
})((props) => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />);

const StyledTab = withStyles((theme) => ({
    root: {
        textTransform: 'none',
        color: '#fff',
        fontWeight: theme.typography.fontWeightRegular,
        fontSize: theme.typography.pxToRem(15),
        marginRight: theme.spacing(1),
        '&:focus': {
            opacity: 1,
        },
    },
}))((props) => <Tab disableRipple {...props} />);

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        margin: 0,
        paddingBottom: '15px',
    },
    appBar: {
        backgroundColor: 'rgb(44, 66, 44)',
    },
    details: {
        backgroundColor: 'white',
        flexGrow: 1,
    },
    tabsRoot: {
        paddingBottom: '15px',
    },
}));

export default function CustomizedTabs() {
    const classes = useStyles();
    const theme = useTheme();
    const [screenWidth, setScreenWidth] = React.useState({width: window.innerWidth});
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };

    useEffect(() => {
        const debouncedHandleResize = debounce(function handleResize() {
            setScreenWidth({
                width: window.innerWidth
            })
        }, 500)

        window.addEventListener('resize', debouncedHandleResize)

        return _ => {
            window.removeEventListener('resize', debouncedHandleResize)

        }
    })

    return (
            <div>
                <AppBar position="static" className={classes.appBar} id="app-bar">
                    <StyledTabs
                        className={classes.root}
                        value={value}
                        onChange={handleChange}
                        aria-label="styled tabs scrollable force"
                        variant={screenWidth.width > "993" ? "standard" : "scrollable"}
                        scrollButtons={screenWidth.width < "993" ? "on" : "off"}
                        centered={screenWidth.width > "993"}
                        >
                        <StyledTab label="Calendar" {...a11yProps(0)} />
                        <StyledTab label="Lessons" {...a11yProps(1)} />
                        <StyledTab label="Equipment" {...a11yProps(2)} />
                        <StyledTab label="Tuition" {...a11yProps(3)} />
                        <StyledTab label="Summer" {...a11yProps(4)} />
                        <StyledTab label="Registration" {...a11yProps(5)} />
                    </StyledTabs>
                </AppBar>
                <SwipeableViews axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                                index={value}
                                onChangeIndex={handleChangeIndex}>
                    <PoliciesDetails className={classes.details} value={value} index={0} componentname='calendar' />
                    <PoliciesDetails className={classes.details} value={value} index={1} componentname='lesson'  />
                    <PoliciesDetails className={classes.details} value={value} index={2} componentname='tools'  />
                    <PoliciesDetails className={classes.details} value={value} index={3} componentname='fees'  />
                    <PoliciesDetails className={classes.details} value={value} index={4} componentname='summer'  />
                    <PoliciesDetails className={classes.details} value={value} index={5} componentname='registration'  />
                </SwipeableViews>
            </div>
    );
}

