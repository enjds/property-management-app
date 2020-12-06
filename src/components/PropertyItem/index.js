import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';

import { styles } from './style';
import { amenities, icons, properties, statuses } from '../../constants/assets';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

const PropertyItem = ({ property, onPressIn, activeIndex }) => {
    const {
        id,
        price,
        address,
        imageUrl,
        bed,
        toilet,
        isDue,
        floorArea } = property;

    const isActive = activeIndex == id;

    return (
        <View style={isActive ? styles.card : {}}>
            <TouchableWithoutFeedback onPressIn={() => onPressIn()} style={[ { padding: 15 }, styles.rowItem]}>
                <View>
                    <Image source={properties[imageUrl]} style={styles.thumbnail} />
                    <View style={[styles.statusIcon, isDue ? styles.isDue : styles.isNotDue]}>
                        {isDue ? (<Image source={statuses.due} style={{height: 17, width: 17}} /> ) : <Text style={{color: 'white', fontSize: 15}}>$</Text>}
                    </View>
                </View>
                
                <View style={styles.detailSection}>
                    <Description style={{ marginBottom: 10 }} props={{ price, address }}></Description>
                    <Amenities props={{ bed, floorArea, toilet }}></Amenities>
                </View>
            </TouchableWithoutFeedback>
            {isActive ? (< ExpandedDetail style={styles.expandDetail}></ExpandedDetail>) : <></>}
        </View>
    );
};

const Description = ({ props }) => {
    return (
        <View>
            <Text style={styles.title}>{props.price}</Text>
            <Text style={styles.description}>{props.address}</Text>
        </View>
    );
};

const Amenities = ({ props }) => {
    return (
        <View style={styles.amenities}>
            <IconText props={props.bed} name='bed'></IconText>
            <IconText props={props.toilet} name='toilet'></IconText>
            <IconText props={props.floorArea} name='floorArea'></IconText>
        </View>
    );
};

const IconText = ({ props, name }) => {
    console.log(name);
    return (
        <View style={styles.iconText}>
            <Image source={amenities[name]} style={styles.icon} />
            <Text style={{ color: '#888EA5'}}>{props}</Text>
        </View>
    );
};

const ExpandedDetail = () => {
    return(
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-evenly', backgroundColor: '#F1F2F5', paddingTop: 25, paddingBottom:25, borderRadius: 25 }}>
            <View>
                <Text style={{ color: '#1D215A', fontSize: 15, fontWeight: 'bold' }}>$15,322,500</Text>
                <Text style={{ color: '#9197AC', fontSize: 10, textAlign: 'center' }}>BALANCE DUE</Text>
            </View>
            <View>
                <Text style={{ color: '#1D215A', fontSize: 15, fontWeight: 'bold' }}>30.21.2020</Text>
                <Text style={{ color: '#9197AC', fontSize: 10, textAlign: 'center' }}>RENT DUE ON</Text>
            </View>
            <View>
                <Text style={{ color: '#1D215A', fontSize: 15, fontWeight: 'bold' }}>03-21-2020</Text>
                <Text style={{ color: '#9197AC', fontSize: 10, textAlign: 'center' }}>LEASE EXPIRES</Text>
            </View>
        </View>
    );
};

export default PropertyItem;