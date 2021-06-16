const themeMap = {
    dark: "light",
    light: "sun",
    sun: "dark"
};

const theme = localStorage.getItem('theme');
if (theme !== 'undefined') {
    document.body.classList.replace(document.body.classList, theme);
    console.log(theme)
}
else {
    document.body.classList.add('light');
}

document.getElementById('themeButton').onclick = () => {
    const currTheme = document.body.classList[0];
    const nextTheme = themeMap[currTheme];

    document.body.classList.replace(currTheme, nextTheme);
    localStorage.setItem('theme', nextTheme);
};

console.log("It's working");