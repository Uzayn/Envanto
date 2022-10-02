/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,jsx}"],
    mode: "jit",
    theme: {
        extend: {
            colors: {
                grey: "#A6A6A6",
                dimBlack: "#404040"

            },
            fontFamily: {
                poppins: ["Poppins", "sans-serif"],
                Lato: ["Lato", "sans-serif"]
            },
        },
        screens: {
            xs: "480px",
            ss: "620px",
            sm: "768px",
            md: "1060px",
            lg: "1200px",
            xl: "1700px",
        },
    },
    plugins: [],
};