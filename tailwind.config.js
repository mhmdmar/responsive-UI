module.exports = {
    purge: {content: ["./public/**/*.html", "./src/**/*.vue"]},
    darkMode: false,
    theme: {
        extend: {
            colors: {
                separator: "#2c2c2c"
            }
        }
    },
    variants: {
        extend: {}
    },
    plugins: [require("@tailwindcss/line-clamp")]
};
