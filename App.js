import React from 'react';
import { Text, View, Button, StyleSheet, FlatList, Image } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation'; // Version can be specified in package.json

class openScreen extends React.Component {
  static navigationOptions = {
    header: null,
    tabBarVisible: false,
  };
  render() {
    return (
      <View style={{ marginTop : 30, flex: 1, alignItems: 'center', justifyContent: 'center' }}>

        <Text style = {{ fontSize: 24 }}>Data Prestasi Mahasiswa</Text>
        
        <Button
          title="Login"
          onPress={() => {
            this.props.navigation.navigate('Home');
          }}
        />
      </View>
    );
  }
}

class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      data: [],
      error: null,
      refreshing: false,
    };
}

  componentDidMount()  {
      const url = '';
       this.setState({ loading: true });
      fetch (url)
      .then((response) => response.json())
      .then((responseJson) => {
        console.log("comp");
        console.log(responseJson);
        this.setState({
          data: responseJson,
          error: responseJson.error || null,
          loading: false,
          refreshing: false
        });
      }
    );
  }
  render() {
    return (
      <View style={{marginTop: 30, justifyContent:'center'}}>
      <View style={styles.Header}>
          <Text style={styles.TextHeader}>Daftar Prestasi Mahasiswa</Text>
      </View>
        <FlatList
          data={this.state.data}
          renderItem={({item}) =>
            <View style={styles.ListItem}>
              <Text style={styles.ListFirst}>{item.nama}</Text>
              <Text>{item.nim}</Text>
              <Text>{item.kelas}</Text>
              <Text>{item.semester}</Text>
            </View>
        }
        />


      </View>
    );
  }
}

class SettingsScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
      </View>
    );
  }
}

class OptionScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Option!</Text>
      </View>
    );
  }
}

const Opening = StackNavigator({
  open: { screen: openScreen },
  Home: { screen: HomeScreen },

});
const Setting = StackNavigator({
  Settings: { screen: SettingsScreen },

});   
const Option = StackNavigator({
  Option: { screen: OptionScreen },

});


export default TabNavigator({
  Back: { screen: Opening },
  Mendaftarkan_Prestasi: { screen: Setting },
});

const styles = StyleSheet.create({
  Header: {
      marginTop: 5,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor:'#64B5F6',
  },
  TextHeader: {
      fontSize: 30
  },
  ListItem: {
      backgroundColor:'#BBDEFB',
      marginTop: 5,
      flex: 1
  },
  ListFirst: {
    fontSize: 20
  }

});

