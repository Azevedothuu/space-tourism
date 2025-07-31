function showPlanet(planetId, event) {
    const planets = document.querySelectorAll('.planet-content');
    planets.forEach(planet => {
        planet.style.display = 'none';
    });

    const selectedPlanet = document.getElementById(planetId);
    if (selectedPlanet) {
        selectedPlanet.style.removeProperty('display');
    }

    const navlinks = document.querySelectorAll('.nav-link');
    navlinks.forEach(link => {
        link.classList.remove('active');
    });

    event.target.classList.add('active');

    
}