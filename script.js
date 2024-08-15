function menuShow(){
    let menuMobile = document.querySelector('.menu-mobile');
    if (menuMobile.classList.contains('open')){
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "https://img.icons8.com/ios-filled/30/ffffff/menu--v6.png";
    } else{
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "https://img.icons8.com/ios-glyphs/30/ffffff/delete-sign.png";
    }
}