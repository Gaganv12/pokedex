import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    rootContainer: {
        backgroundColor: '#DC0A2D',
        flex:1,
    },
    BackgroundContainer: {
        margin: 4,
    },
    ForegroundContainer: {
        backgroundColor: 'white',
        margin: 4,
        borderRadius: 10,
        flex:1,
    },
    nameContainer:{
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal:12,
        paddingTop:12,
        marginBottom:8,
    },
    SearchContainer: {
        padding: 5,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal:12, 
    },
    searchBox: {
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 30,
        flex: 4,
        paddingHorizontal: 10,
    },
    filter: {
        backgroundColor: 'white',
        width: 44,
        height: 44,
        borderRadius: 44 / 2,
        justifyContent:'center',
        alignItems:'center',
        marginLeft:'5%',
    }
});

export default styles;