import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableHighlight,
  Modal,
  TextInput,
  NativeModules,
  NativeAppEventEmitter
} from 'react-native';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import CheckBox from 'react-native-checkbox';

import Button from '../common/button';

var radio_props = [
  {label: 'Cilantro Cream', value: 0 },
  {label: 'House Peanut', value: 1 },
  {label: 'Honey Mustard', value: 2}
];

class Item extends Component {
  constructor(props) {
    super(props)
    this.state = {
      modalVisible: false,
      value: 0,
      text: ''
    };
  }

  render() {
    return (
      <View style={styles.wrapper}>
        <Modal
          animationType={'slide'}
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => {this._setModalVisible(false)}}
          >
          <View style={styles.modal}>
            <View style={{flex: 1}}>
              <Text style={styles.itemLabel}>{this.props.item.label} - ${this.props.item.price/100.0}</Text>
              <Text style={styles.itemModificationLabel}>Sauce Selection</Text>
              <RadioForm
                radio_props={radio_props}
                initial={0}
                onPress={(value) => {this.setState({value:value})}}/>

              <Text style={styles.itemModificationLabel}>Check boxes</Text>
              <CheckBox
                label='Option 1'
                checked={true}
                onChange={(checked) => console.log('I am checked', checked)}
              />
              <CheckBox
                label='Option 2'
                checked={true}
                onChange={(checked) => console.log('I am checked', checked)}
              />
              <CheckBox
                label='Option 3'
                checked={true}
                onChange={(checked) => console.log('I am checked', checked)}
              />

              <TextInput
                style={{height: 80, borderColor: 'gray', borderWidth: 1, backgroundColor: 'white'}}
                onChangeText={(text) => this.setState({text})}
                value={this.state.text}
                placeholder={'Special Instructions (Optional)'}
              />

              <Button text={'Pay'} onPress={() => {this._pay()}} />
              <Button text={'Cancel'} onPress={this._setModalVisible.bind(this, false)} />
            </View>
          </View>
        </Modal>

        <View style={styles.container}>
          <TouchableHighlight
            style={styles.button}
            underlayColor='coral'
            onPress={ () => this._onSelectItem() }>
            <Image source={{uri: this.props.item.image}} style={styles.itemImage}/>
          </TouchableHighlight>
          <Text style={styles.itemLabel}>{this.props.item.label} - ${this.props.item.price/100.0}</Text>
          <Text style={styles.itemDescription}>{this.props.item.description}</Text>
        </View>
      </View>
    );
  }

  _onSelectItem() {
    console.log('_onSelectItem');
    this._setModalVisible(true);
  }

  _pay() {
    console.log('>>> BB8 - RCT: _pay or setupSimpleInvoice');
    this._setModalVisible(false);

    // NativeModules.PayPalHereSDKBridge.clearAnyExistingInfo();
    NativeModules.PayPalHereSDKBridge.setupSimpleInvoice();
  }

  _setModalVisible = (visible) => {
    this.setState({modalVisible: visible});
  };
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // borderWidth: 2,
    borderColor: 'green'
  },

  modal: {
    padding: 20,
    position: 'absolute',
    top: 150,
    left: 300,
    width: 1000,
    height: 800,
    backgroundColor: 'lightskyblue'
  },

  button: {
    width: 500,
    height: 500
  },

  itemImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  itemLabel: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 30
  },

  itemDescription: {
    fontSize: 15,
    paddingTop: 10
  },

  itemModificationLabel: {
    marginTop: 10,
    fontSize: 25,
    fontWeight: 'bold'
  }
});

module.exports = Item;
