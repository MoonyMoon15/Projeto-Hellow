function initMap() {
    function initMap() {
        // Coordenadas de Blumenau
        var blumenau = { lat: -26.9194, lng: -49.0661 };
    
        // Locais dos hotéis
        var locaisHoteis = [
            { lat: -26.91208377066663, lng: -49.067117877934756, titulo: 'Hotel Blumenhof', descricao: 'mmm' },
            { lat: -26.804463392895563, lng: -49.151371024349814, titulo: 'Hotel 10', descricao: 'fffff' },
            { lat: -26.91856008108319, lng: -49.069966603069105, titulo: 'Himmelblau Palace Hotel', descricao: 'ffff' },
            { lat: -26.916895444524744, lng: -49.06793993190486, titulo: 'Hotel Pousada XV', descricao: 'fffff' },
            { lat: -26.92309506684589, lng: -49.063861047981696, titulo: 'Hotel Herman', descricao: 'fffff' },
            { lat: -26.900774708362746, lng: -49.08491888587597, titulo: 'Pousada Casa da Pedra', descricao: 'gggg' }
        ];
        
        // Criação do mapa
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 14,
            center: blumenau
        });
    
        // Adicionando marcadores no mapa
        locaisHoteis.forEach(function (hoteis) {
            var marker = new google.maps.Marker({
                position: { lat: hoteis.lat, lng: hoteis.lng },
                map: map,
                title: hoteis.titulo
            });
            var infowindow = new google.maps.InfoWindow({
                content: '<h5>' + hoteis.titulo + '</h5><p>' + hoteis.descricao + '</p>'
            });
            marker.addListener('click', function () {
                infowindow.open(map, marker);
            });
        });
    } 