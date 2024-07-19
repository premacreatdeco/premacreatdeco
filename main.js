document.addEventListener('DOMContentLoaded', function() {
    // Carousel functionality
    let slides = document.querySelector('.slides');
    let index = 0;

    setInterval(() => {
        index = (index + 1) % 3;
        slides.style.transform = `translateX(-${index * 100}%)`;
    }, 4000);

    // Lista de correos electrónicos autorizados
    const authorizedEmails = [
        'giulianaepizarro@gmail.com', 
        'prema.creat.deco@gmail.com', 
        'nuevoUsuario@example.com'  // Agrega los correos electrónicos que quieras autorizar
    ];

    const blurBackground = document.getElementById('blur-background');
    const loginFormContainer = document.createElement('div');
    loginFormContainer.id = 'login-form-container';
    loginFormContainer.innerHTML = `
        <form id="login-form">
            <h2>Acceso Privado</h2>
            <label for="user-name">Nombre:</label>
            <input type="text" id="user-name" name="user-name" required>
            <label for="user-email">Correo electrónico:</label>
            <input type="email" id="user-email" name="user-email" required>
            <button type="submit">Acceder</button>
        </form>
    `;
    document.body.appendChild(loginFormContainer);

    const form = document.getElementById('login-form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const email = document.getElementById('user-email').value;

        if (authorizedEmails.includes(email)) {
            alert('Acceso concedido');
            loginFormContainer.style.display = 'none';
            blurBackground.classList.add('active');
        } else {
            alert('Acceso denegado');
        }
    });

    // Initial check for access
    blurBackground.classList.remove('active');
    loginFormContainer.style.position = 'fixed';
    loginFormContainer.style.top = '50%';
    loginFormContainer.style.left = '50%';
    loginFormContainer.style.transform = 'translate(-50%, -50%)';
    loginFormContainer.style.padding = '20px';
    loginFormContainer.style.backgroundColor = 'white';
    loginFormContainer.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.1)';
    loginFormContainer.style.zIndex = '1000';
});
