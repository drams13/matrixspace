const dropdowns = document.querySelectorAll('.nav-item.dropdown');

dropdowns.forEach(dropdown => {
    const menu = dropdown.querySelector('.dropdown-menu');
    if (!menu) return;

    dropdown.addEventListener('mouseenter', () => {
        // Optionnel : fermer les autres menus
        document.querySelectorAll('.dropdown-menu').forEach(m => {
            if (m !== menu) m.style.display = 'none';
        });
        
        // Utilise 'grid' si tu as gardé notre logique de colonnes, sinon 'block'
        menu.style.display = 'grid'; 
    });

    dropdown.addEventListener('mouseleave', () => {
        menu.style.display = 'none';
    });
});





// gsap.to(".radar", {
//   scale: 1.05,
//   duration: 2,
//   repeat: -1,
//   yoyo: true,
//   ease: "sine.inOut"
// });

// gsap.to(".radar-blip", {
//   opacity: 0.3,
//   duration: 1,
//   repeat: -1,
//   yoyo: true,
//   stagger: 0.2
// });

gsap.to(".ai-visual", {
  scale: 1.02,
  duration: 2,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut"
});












// console.log("Le fichier JS est bien chargé !");  

// const cardsColumn = document.querySelector('.software-cards-column');
// const cardsInner = document.querySelector('.software-cards-inner');
// let scrollTween = null;

// if (cardsColumn && cardsInner && window.gsap) {
//     const scrollState = { y: cardsColumn.scrollTop };

//     cardsColumn.addEventListener('wheel', (event) => {
//         event.preventDefault();

//         const maxScroll = cardsInner.scrollHeight - cardsColumn.clientHeight;
//         const destination = Math.max(0, Math.min(maxScroll, cardsColumn.scrollTop + event.deltaY));

//         if (scrollTween) {
//             scrollTween.kill();
//         }

//         scrollTween = gsap.to(scrollState, {
//             duration: 0.45,
//             y: destination,
//             ease: 'power3.out',
//             onUpdate: () => {
//                 cardsColumn.scrollTop = scrollState.y;
//             }
//         });
//     }, { passive: false });
// }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
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
