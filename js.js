const openMenu = () => {
    const menu = document.getElementById("menuButton");
    
    
    
    const gg = document.getElementById("menuMob");
    if (menuMob.style.display === "none" || menuMob.style.display === "") {
        menuMob.style.display = "block";
    menu.src = "sources/images/menu/close-menu.png";
   }
   else{
       menuMob.style.display = "none"; 
    menu.src = "sources/images/menu/icon-menu.png";

    }

}