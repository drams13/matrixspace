const dropdowns = document.querySelectorAll('.nav-item.dropdown');

dropdowns.forEach(dropdown => {
    const trigger = dropdown.querySelector('.nav-link-trigger');
    const menu = dropdown.querySelector('.dropdown-menu');

    if (!menu) return;

    // Quand la souris entre sur le LI (qui contient le lien ET le menu)
    dropdown.addEventListener('mouseenter', () => {
        // On ferme d'abord tous les autres menus ouverts pour être propre
        document.querySelectorAll('.dropdown-menu').forEach(m => m.style.display = 'none');
        
        menu.style.display = 'block';
    });

    // Quand la souris quitte la zone du LI
    dropdown.addEventListener('mouseleave', () => {
        menu.style.display = 'none';
    });
});   
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    // // 1. On récupère le bouton et le menu
    // const trigger = document.querySelector('.nav-link-trigger');
    // const menu = document.getElementById('products-dropdown');

    // // 2. On écoute le clic sur le bouton
    // trigger.addEventListener('click', function(event) {
    //     event.preventDefault(); // Empêche le lien de recharger la page
        
    //     // 3. On bascule l'affichage (Toggle)
    //     if (menu.style.display === 'block') {
    //         menu.style.display = 'none';
    //     } else {
    //         menu.style.display = 'block';
    //     }
    // });

    // // Optionnel : Fermer le menu si on clique n'importe où ailleurs sur la page
    // window.addEventListener('click', function(e) {
    //     if (!trigger.contains(e.target)) {
    //         menu.style.display = 'none';
    //     }
    // });



























// console.log("Le fichier JS est bien chargé !");  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  // // 1. On récupère le bouton et le menu
    // const trigger = document.querySelector('.nav-link-trigger');
    // const menu = document.getElementById('products-menu');

    // // 2. On écoute le clic sur le bouton
    // trigger.addEventListener('click', function(event) {
    //     event.preventDefault(); // Empêche le lien de recharger la page
        
    //     // 3. On bascule l'affichage (Toggle)
    //     if (menu.style.display === 'block') {
    //         menu.style.display = 'none';
    //     } else {
    //         menu.style.display = 'block';
    //     }
    // });

    // // Optionnel : Fermer le menu si on clique n'importe où ailleurs sur la page
    // window.addEventListener('click', function(e) {
    //     if (!trigger.contains(e.target)) {
    //         menu.style.display = 'none';
    //     }
    // });
