// Search wallpaper function
function searchWallpaper() {
    let input = document.getElementById('search-bar').value.toLowerCase();
    let wallpaperItems = document.getElementsByClassName('wallpaper-item');
    
    for (let i = 0; i < wallpaperItems.length; i++) {
        let wallpaperName = wallpaperItems[i].getAttribute('data-name').toLowerCase();
        
        if (wallpaperName.includes(input)) {
            wallpaperItems[i].style.display = "";
        } else {
            wallpaperItems[i].style.display = "none";
        }
    }
}

// Show search guide
function showGuide() {
    let guide = document.getElementById('guide');
    guide.classList.toggle('hidden');
}

// Preview wallpaper in modal
function previewWallpaper(src) {
    let modal = document.getElementById('previewModal');
    let modalImg = document.getElementById('modal-img');
    modal.style.display = "flex";
    modalImg.src = src;
}

// Close preview modal
function closePreview() {
    let modal = document.getElementById('previewModal');
    modal.style.display = "none";
}
