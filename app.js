const body = document.body;

const themeMap = {
    dark: "light",
    light: "solar",
    solar: "dark"
};



document.getElementById('themeButton').onclick = () => {
    const currTheme = body.classList;
    const nextTheme = themeMap[currTheme];

    body.classList.replace(currTheme, nextTheme);
};