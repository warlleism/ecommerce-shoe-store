import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import axios from 'axios';
import Icon from 'react-native-vector-icons/AntDesign';

class LocaleScreen extends Component {
    state = {
        latitude: null,
        longitude: null,
        city: '',
        state: '',
        neighborhood: '',
        error: null,
    };

    componentDidMount() {
        this.getCurrentLocation();
    }

    getCurrentLocation = () => {
        Geolocation.getCurrentPosition(
            this.handleSuccess,
            this.handleError,
            { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
        );
    };

    handleSuccess = (position: any) => {
        const { latitude, longitude } = position.coords;
        this.setState(
            {
                latitude,
                longitude,
                error: null,
            },
            this.reverseGeocode
        );
    };

    handleError = (error: any) => {
        this.setState({ error: error.message });
    };

    reverseGeocode = () => {
        const { latitude, longitude } = this.state;
        const apiKey = '2f575e99e6de451883b2047ebcc519c7'; // Coloque sua chave de API do OpenCage Geocoder aqui
        const geocodingUrl = `https://api.opencagedata.com/geocode/v1/json?q=${latitude},${longitude}&key=${apiKey}`;

        axios
            .get(geocodingUrl)
            .then(response => {
                const { results } = response.data;
                if (results.length > 0) {
                    const { city, state, neighbourhood } = results[0].components; // Corrigido o nome para "neighbourhood"
                    this.setState({
                        city,
                        state,
                        neighborhood: neighbourhood, // Corrigido para "neighborhood"
                    });
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
    };

    renderError() {
        const { error } = this.state;
        return <Text>Error: {error}</Text>;
    }

    renderLoading() {
        return <Text>Loading...</Text>;
    }

    renderLocation() {
        const { latitude, longitude, city, state, neighborhood } = this.state;
        return (
            <View style={{ display: 'flex', flexDirection: "row", alignItems: 'center', marginBottom: 16 }}>
                <Icon name="enviroment" size={23} color={"#27875D"} style={{ marginRight: 5 }} />
                <Text>{city}, <Text style={{ fontWeight: '600', color: "#000" }}>{state}</Text></Text>
            </View>
        );
    }

    render() {
        const { error, latitude, longitude } = this.state;

        if (error) {
            return this.renderError();
        }

        if (latitude === null || longitude === null) {
            return this.renderLoading();
        }

        return this.renderLocation();
    }
}

export default LocaleScreen;
