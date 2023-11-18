document.addEventListener('DOMContentLoaded', function () {
    // Mock data for movies (replace with real data or fetch from a server)
    const moviesData = [
        'https://via.placeholder.com/300',
        'https://via.placeholder.com/300',
        'https://via.placeholder.com/300'
        // Add more movie URLs as needed
    ];

    const moviesContainer = document.getElementById('moviesContainer');

    // Populate movies
    moviesData.forEach(movieUrl => {
        const movieElement = document.createElement('div');
        movieElement.classList.add('movie');

        const imgElement = document.createElement('img');
        imgElement.src = movieUrl;
        imgElement.alt = 'Movie';

        movieElement.appendChild(imgElement);
        moviesContainer.appendChild(movieElement);
    });
});
