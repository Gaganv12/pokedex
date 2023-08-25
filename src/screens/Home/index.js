import React from "react";
import { View, Text, SafeAreaView, TextInput , KeyboardAvoidingView, KeyboardAvoidingViewBase, FlatList} from 'react-native';
import styles from "./style";
import { Search } from "react-native-feather";
import SvgUri from "react-native-svg-uri";


const Home = () => {
    return (
        <View style={styles.rootContainer}>
            <View style={styles.BackgroundContainer}>
                <View style={styles.nameContainer}>

                    <SvgUri
                        width="32"
                        height="32"
                        source={require('../../assets/images/pokeball.svg')}
                    />
                    <Text style={{ fontSize: 24, color: 'white', marginLeft: 16, }}>Pokédex</Text>

                </View>
                <View style={styles.SearchContainer}>
                    <View style={styles.searchBox}>
                        <Search stroke="red" style={{ marginRight: 5 }} />
                        <TextInput style={{ padding: 8, }} placeholder="Search" />
                    </View>
                    <View style={styles.filter}>
                        <SvgUri
                            width="16"
                            height="16"
                            source={require('../../assets/images/tag.svg')}
                        />
                    </View>
                </View>
            </View>
            <View style={styles.ForegroundContainer}>
                <View><Text>HELLOO</Text></View>
                <View><Text style={{color:'black'}}>Hello</Text></View>
            </View>
        </View>
    );
}
export default Home;