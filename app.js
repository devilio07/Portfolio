const body = document.body;

const themeMap = {
    dark: "light",
    light: "sun",
    sun: "dark"
};

body.className="";
const theme = localStorage.getItem('theme');
body.classList.add(theme);


document.getElementById('themeButton').onclick = () => {
    const currTheme = body.classList[0];
    const nextTheme = themeMap[currTheme];

    body.classList.replace(currTheme, nextTheme);
    localStorage.setItem('theme', nextTheme);
};