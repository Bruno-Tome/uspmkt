import React from 'react';
import { Text, View, StyleSheet } from "react-native";
import { TouchableOpacity } from 'react-native-gesture-handler';
import { iOSUIKit } from 'react-native-typography';
import { withNavigation } from 'react-navigation';
class Banner2 extends React.Component {
    state = {
        imagesrc: "image-url",
    }

    navigator = () => {
        this.props.navigation.navigate('Loja', {})
    }

    render() {
        return (
            <TouchableOpacity onPress={this.navigator}>
                <View style={{ width: 150, height: 150 }}>
                    <Text style={/*iOSUIKit.bodyEmphasized*/styles.textBanner}>{this.props.text}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    textBanner: {
        fontSize: 30,
        // fontFamily: "sans-serif",
    }
});

export default withNavigation(Banner2);

