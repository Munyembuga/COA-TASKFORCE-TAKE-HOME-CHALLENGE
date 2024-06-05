// script.js

const animals = [
    {
        id: 1,
        name: "FENNEC",
        nameB: "FOX",
        location: "India",
        imageUrl: "image/fennec-fox.jpg",
        kn: "Know more"
    },
    {
        id: 2,
        name: "HUMPBACK",
        nameB: "WHALE",
        location: "South Africa",
        imageUrl: "image/humpback-whale.jpg",
        kn: "Know more",
        hasLink: true
    },
    {
        id: 3,
        name: "COMMON BROWN",
        nameB: "BABOON",
        location: "South Africa",
        imageUrl: "image/brown-baboon.jpg",
        kn: "Know more"
    },
    {
        id: 4,
        name: "SPOTTED",
        nameB: "DEER",
        location: "Amazon",
        imageUrl: "image/spotted-deer.jpg",
        kn: "Know more"
    }
];

const gallery = document.querySelector('.gallery');
window.addEventListener("DOMContentLoaded", function () {
    displayGalleryPhoto(animals);
});

function displayGalleryPhoto(galleryPhoto) {
    let displayGallery = galleryPhoto.map(function (item) {
        return `<div class="card">
            <img src="${item.imageUrl}" alt="${item.name} ${item.nameB}">
            <div class="info">
                <h1>${item.name}</h1>
                <h1>${item.nameB}</h1>
                <p>${item.location}</p>
                <a href="#" class="know-more">${item.kn} &rarr;</a>
            </div>
        </div>`;
    });
    displayGallery = displayGallery.join("");
    gallery.innerHTML = displayGallery;
}
