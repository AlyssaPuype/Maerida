const left_dropdown_menu = document.querySelector('.left_dropdown_menu');
        const dropdown = document.querySelector('.dropdown');

        left_dropdown_menu.addEventListener('mouseover', () => {
            dropdown.style.display = 'block';
        });

        dropdown.addEventListener('mouseleave', () => {
            dropdown.style.display = 'none';
        });