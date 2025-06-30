 function showLoader() {
            const loader = document.getElementById('loader');
            loader.style.display = 'flex';
            loader.classList.remove('hide');
        }

        function hideLoader() {
            const loader = document.getElementById('loader');
            loader.classList.add('hide');
            setTimeout(() => {
                loader.style.display = 'none';
            }, 300);
        }

    

        // Masquer le loader au chargement initial
        window.addEventListener('load', () => {
            setTimeout(hideLoader, 800);
        });

        // Exemple d'utilisation avec fetch/AJAX
     


  function ouvrirPopup() {
    document.getElementById("popup").style.display = "block";
  }

  function fermerPopup() {
    document.getElementById("popup").style.display = "none";
  }

  // Option : fermer le popup si on clique en dehors
//   const newLocal = window.onclick = function (event) {
//     let popup = document.getElementById("popup");
//     if (event.target == popup) {
//         popup.style.display = "none";
//     }
// };




      
  
  
  const toggleBtn = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('.nav-menu');

  toggleBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });

 