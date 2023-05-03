document.addEventListener('DOMContentLoaded', function () { // Загружаем DOM дерево
    document.querySelectorAll('.how-work__btn').forEach(function (tabsBtn) { // Выбираем все кнопки
        tabsBtn.addEventListener('click', function (event) { // Вешаем слушатель 
            const tab = event.currentTarget.dataset.path; // Обращаемся по Path
            document.querySelectorAll('.how-work__content-wrap').forEach(function (tabContent) { // Выбираем класс Табов
                tabContent.classList.remove('tab-active') // Удаляем Актив класс у табов
                document.querySelector(`[data-target='${tab}']`).classList.add('tab-active'); // Добавляем Актив класс табам
            });
        });

        tabsBtn.addEventListener('click', function (event) { // Обращаемся к кнопкам табов
            const tabDefault = event.currentTarget.dataset.default; // Обращаемся по Default
            document.querySelectorAll('.how-work__btn').forEach(function (BtnHover) { // Выбираем класс кнопок
                BtnHover.classList.remove('tab-btn-active') // Удаляем Актив класс у кнопок
                document.querySelector(`[data-path='${tabDefault}']`).classList.add('tab-btn-active'); // Добавляем Актив класс кнопкам
            })
        })
    });
});

