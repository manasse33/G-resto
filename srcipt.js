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
     

let selectedDish = "";
let selectedPrice = 0;



function selectPayment(method) {
  selectedPayment = method;
  document.getElementById("selectedMethod").innerText = `Méthode sélectionnée : ${method}`;
}
function openModal(dishName, price) {
  selectedDish = dishName;
  selectedPrice = price;

  document.getElementById("selectedDish").innerText = `${dishName} - ${price} FCFA`;
  document.getElementById("paymentModal").style.display = "flex";
}

function closeModal() {
  document.getElementById("paymentModal").style.display = "none";
  selectedPayment = "";
  selectedDish = "";
  document.getElementById("selectedMethod").innerText = "";
  document.getElementById("tableNumber").value = "";
  document.getElementById("selectedDish").innerText = "";
}

function confirmOrder() {
  const tableNumber = document.getElementById("tableNumber").value;

  if (!selectedDish || !tableNumber || !selectedPayment) {
    alert("Remplissez tous les champs.");
    return;
  }

  const heure = new Date().toLocaleTimeString();

  const commande = {
    plat: selectedDish,
    prix: selectedPrice,
    table: tableNumber,
    paiement: selectedPayment,
    heure: heure
  };

  // Sauvegarde dans localStorage
  const commandes = JSON.parse(localStorage.getItem("commandes") || "[]");
  commandes.push(commande);
  localStorage.setItem("commandes", JSON.stringify(commandes));

  // Affichage dans l'alerte
  alert(`Commande confirmée !\nPlat : ${selectedDish}\nPrix : ${selectedPrice} FCFA\nTable : ${tableNumber}\nPaiement : ${selectedPayment}`);


  closeModal();
}






      
  
  
  const toggleBtn = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('.nav-menu');

  toggleBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });

 