import * as React from 'react';
import { Container, createTheme, useMediaQuery } from '@mui/material';

const CustomContainer = (props) => {
    const theme = createTheme({
        breakpoints: {
            values: {
                xs: 361,
                sm: 1367,
                md: 1441,
                lg: 1537,
                xl: 1921,
            }
        }
    })

    const xl = useMediaQuery(theme.breakpoints.down('xl'));
    const lg = useMediaQuery(theme.breakpoints.down('lg'));
    const md = useMediaQuery(theme.breakpoints.down('md'));
    const sm = useMediaQuery(theme.breakpoints.down('sm'));
    const xs = useMediaQuery(theme.breakpoints.down('xs'));

    let { children, ...others } = props;

    const responsive = () => {

        if (xs) {
            return { width: '350px'}
        }

        if (sm) {
            return { width: '1300px'}
        }

        if (md) {
            return { width: '1350px'}
        }
        
        if (lg) {
            return { width: '1500px', padding: '0 30px'}
        }

        if (xl) {
            return { width: '1600px', padding: '0 30px'}
        }
        
    }
    const resp = responsive()
    console.log(resp)

    return (
        <Container maxWidth='false' style={resp} {...others}>
            {children}
        </Container>
    )
}

export { CustomContainer };