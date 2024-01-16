document.addEventListener('DOMContentLoaded', function () {
    const titles = document.querySelectorAll('.title');

    titles.forEach(title => {
        title.addEventListener('mouseover', function () {
            const infoContainer = document.createElement('div');
            infoContainer.className = 'info-container';
            infoContainer.textContent = this.getAttribute('data-info');

            // Remove contêiner de informações anterior, se existir
            const existingInfoContainer = document.querySelector('.info-container');
            if (existingInfoContainer) {
                existingInfoContainer.remove();
            }

            // Adiciona o novo contêiner de informações ao corpo do documento
            document.body.appendChild(infoContainer);
        });

        title.addEventListener('mouseout', function () {
            const infoContainer = document.querySelector('.info-container');
            if (infoContainer) {
                infoContainer.remove();
            }
        });
    });
});
