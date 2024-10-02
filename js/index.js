window.onload = function() {
    if (!localStorage.getItem('loggedIn')) {
        window.location.href = "login.html"; // Redireciona para a tela de login
    } else {
        const userName = localStorage.getItem('userName');
        document.getElementById('userName').textContent = userName || "Usuário";
        document.getElementById('welcomeMessage').textContent = `Boas-vindas, ${userName || "Usuário"}`;
    }
};

// Simulação de gráfico de vendas
const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul'],
        datasets: [{
            label: 'Vendas',
            data: [12, 19, 3, 5, 2, 3, 7],
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 2
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
