import { StyleSheet } from 'react-native';
import { COLOR_WHITE, COLOR_BLACK, COLOR_FONT_PURPLE, COLOR_GREY } from '../../styles';
import { scale, moderateScale } from '../../utils/scaling';
import METRICS from '../../constants/metrics';

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLOR_WHITE
    },
    buttonLogin: {
        textAlign: 'center',
        justifyContent: 'center',
        marginTop: scale(10)
    },
    Judul: {
        fontSize: 30,
        // fontWeight: "bold",
        color: COLOR_WHITE,
        top: scale(35),
        left: scale(8),
        position: 'absolute',
        fontStyle: 'normal',
        fontFamily: 'Playfair Display'
        // ...FONT_HEADLINE2_PRIMARY
    },
    textscore: {
        marginTop: scale(-10)
    },
    gambar: {
        marginTop: scale(30)

    },
    Kuis: {
        color: COLOR_FONT_PURPLE,
        fontSize: 30,
        fontWeight: '800',
        fontStyle: 'normal',
        marginTop: scale(30),
        textAlign: 'center'
        // padding: scale(15)
    },
    hsl: {
        color: COLOR_FONT_PURPLE,
        fontSize: 30,
        fontWeight: '800',
        fontStyle: 'normal',
        // marginTop: scale(20),
        textAlign: 'center'

    },
    Juduldec: {
        fontSize: 15,
        // fontWeight: "bold",
        color: COLOR_WHITE,
        top: scale(75),
        left: scale(15),
        position: 'absolute'
        // ...FONT_HEADLINE2_PRIMARY
    },
    logoContainer: { width: scale(100), height: scale(100), alignSelf: 'center', marginTop: scale(200) },
    logo: {
        width: 120,
        height: 200,
        alignSelf: 'center',
        padding: scale(10)
    },
    halsoal: {
        marginTop: scale(10)
    },
    appTitle: { fontSize: 18, color: COLOR_BLACK },
    button: {
        alignItems: 'center',
        marginTop: scale(20),
        marginBottom: scale(10),
        elevation: 10,
        padding: scale(8),
        shadowColor: COLOR_GREY,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6
    },
    button1: {
        alignItems: 'center',
        marginTop: scale(30),
        marginBottom: scale(10),
        elevation: 10,
        shadowColor: COLOR_GREY,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6
    },
    soal: {
        color: COLOR_FONT_PURPLE,
        marginLeft: scale(20),
        marginRight: scale(10),
        paddingTop: scale(5),
        fontSize: 17,
        fontFamily: 'Nunito Sans',
        fontStyle: 'normal',
        fontWeight: 'normal',
        lineHeight: 23
    },
    tombol: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: scale(20)
    },
    number: {
        paddingTop: scale(30),
        marginLeft: scale(10),
        alignSelf: 'flex-start',
        color: COLOR_FONT_PURPLE,
        fontSize: 20
    },
    box: {
        alignSelf: 'center',
        // backgroundColor: COLOR_WHITE,
        borderRadius: moderateScale(30),
        borderWidth: 0,
        elevation: 10,
        // height: scale(50),
        shadowColor: COLOR_GREY,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        height: scale(42),
        marginTop: scale(20),
        width: scale(280)
    },
    container: {
        display: 'flex',
        height: '100%'
    },
    loadingQuestions: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    appVersion: { fontSize: 14 }
});

export default styles;
