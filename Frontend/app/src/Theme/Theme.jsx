import { darken, createTheme } from "@mui/material";

const theme = createTheme({
    components: {
        
        MuiButton: {
            styleOverrides: {
                root: {
                    
                        backgroundColor: "var(--main_color)",
                        fontFamily: "Astra, Inter, sans",
                        textTransform: "none",
                        borderRadius: "10px",
                        padding: "0 25px",
                        color: "var(--bg_color)",
                        boxShadow: "7px 7px 5px -5px rgba(34, 60, 80, 0.6)",

                        "&:hover": {
                            backgroundColor: darken('#163E6C', 0.2),
                        }
                    
                }
            },
        }
    }
})

export { theme };