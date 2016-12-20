import { StyleSheet, Dimensions, Platform } from 'react-native';
import { colors } from './index.style';

const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

function wp (percentage) {
    const value = (percentage * viewportWidth) / 100;
    return Math.round(value);
}

const slideHeight = viewportHeight * 0.6;
const slideWidth = wp(50);

export const sliderWidth = viewportWidth;
export const itemHorizontalMargin = wp(2);
export const itemWidth = slideWidth + itemHorizontalMargin * 2;

const entryBorderRadius = 6;

export default StyleSheet.create({
    slideInnerContainer: {
        height: slideHeight
    },
    imageContainer: {
        flex: 1,
        backgroundColor: colors.gray,
        borderTopLeftRadius: entryBorderRadius,
        borderTopRightRadius: entryBorderRadius
    },
    image: {
        ...StyleSheet.absoluteFillObject,
        resizeMode: 'cover',
        borderRadius: Platform.OS === 'ios' ? entryBorderRadius : 0,
        borderTopLeftRadius: entryBorderRadius,
        borderTopRightRadius: entryBorderRadius,
        width: null, height: null
    },
    textContainer: {
        justifyContent: 'center',
        paddingVertical: 20,
        paddingHorizontal: 16,
        backgroundColor: 'white',
        borderBottomLeftRadius: entryBorderRadius,
        borderBottomRightRadius: entryBorderRadius
    },
    title: {
        color: colors.black,
        fontSize: 30,
        fontWeight: 'bold',
        letterSpacing: 0.5
    },
    subtitle: {
        marginTop: 6,
        color: colors.gray,
        fontSize: 20,
        fontStyle: 'italic'
    }
});
