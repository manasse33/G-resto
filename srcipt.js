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

        // Simulation de chargement avec durée
        function simulateLoading(duration = 2000) {
            showLoader();
            setTimeout(hideLoader, duration);
        }

        // Exemple d'intégration avec AOS
        function simulateAOSLoading() {
            showLoader();
            
            // Simuler le chargement d'AOS
            setTimeout(() => {
                // Ici vous initialiseriez AOS
                console.log('AOS initialisé !');
                hideLoader();
            }, 1500);
        }

        // Masquer le loader au chargement initial
        window.addEventListener('load', () => {
            setTimeout(hideLoader, 800);
        });

        // Exemple d'utilisation avec fetch/AJAX
        async function loadData(url) {
            showLoader();
            try {
                const response = await fetch(url);
                const data = await response.json();
                // Traiter les données
                return data;
            } catch (error) {
                console.error('Erreur:', error);
            } finally {
                hideLoader();
            }
        }

        // Fonctions globales pour intégration facile
        window.showLoader = showLoader;
        window.hideLoader = hideLoader;
        window.simulateLoading = simulateLoading; 
  
  
  const toggleBtn = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('.nav-menu');

  toggleBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });