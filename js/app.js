const themeMap = {
    light: "dark",
    dark: "sun",
    sun: "light"
};

const theme = localStorage.getItem('theme');
if (theme !== 'undefined') {
    document.body.classList.replace(document.body.classList, theme);
    document.getElementById('About').className='bg-'+theme;
    document.getElementById('Theme-changer').innerHTML = 'Toggle ' + themeMap[theme];
    console.log(theme)
}
else {
    document.body.classList.add('light');
    document.getElementById('Theme-changer').innerHTML= 'Toggle ' + themeMap['light'];
    document.getElementById('About').classList.replace();

}

document.getElementById('themeButton').onclick = () => {
    const currTheme = document.body.classList[0];
    const nextTheme = themeMap[currTheme];

    document.body.classList.replace(currTheme, nextTheme);
    document.getElementById('Theme-changer').innerHTML= 'Toggle ' + themeMap[nextTheme];
    document.getElementById('About').classList.replace(('bg-'+currTheme),('bg-'+nextTheme))
    localStorage.setItem('theme', nextTheme);
};

console.log("It's working");