// Простой скрипт для добавления интерактивности
document.addEventListener('DOMContentLoaded', function() {
    // Делаем альбомы кликабельными
    const albums = document.querySelectorAll('.album');
    
    albums.forEach(album => {
        album.addEventListener('click', function() {
            this.style.backgroundColor = this.style.backgroundColor === 'rgb(230, 242, 255)' ? '#f9f9f9' : '#e6f2ff';
        });
    });
    
    // Добавляем информацию в консоль
    console.log('Дискография Linkin Park - упрощенная версия');
    console.log('Всего альбомов: ' + albums.length);
    
    // Простое приветствие
    alert('Добро пожаловать на сайт с дискографией Linkin Park!');
});