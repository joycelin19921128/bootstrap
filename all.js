//google map api //
var map;

            function initMap() {
                map = new google.maps.Map(document.getElementById('map'), {
                    center: {
                        lat: 25.008714,
                        lng: 121.5060279
                    },
                    zoom: 14,
                    mapTypeControlOptions: {
                        mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'terrain',
                            'styled_map'
                        ]
                    }

                });


                var marker = new google.maps.Marker({
                    position: {
                        lat: 25.008714,
                        lng: 121.5060279
                    },
                    map: map
                });
            };