import React, {Component} from 'react';
import {View, Text, Image, TextInput,AsyncStorage, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { Actions } from 'react-native-router-flux';
import {myFetch} from '../utils';
import Icon3 from 'react-native-vector-icons/MaterialCommunityIcons';
export default class Login extends Component {
    constructor(){
        super();
        this.state={
            username:'',
            pwd:'',
            isloading:false
        }
    }
    userhandle = (text)=>{
        this.setState({username:text})
    }
    pwdhandle = (text)=>{
        this.setState({pwd:text})
    }
    login = ()=>{
      this.setState({isloading:true})
      myFetch.post('/login',{
        username:this.state.username,
        pwd:this.state.pwd}
       ).then(res=>{
             AsyncStorage.setItem('user',JSON.stringify(res.data))
        .then(()=>{
          this.setState({isloading:false})
          Actions.root();
      })  
       })
    }
  render() {
    return (
      <View style={{flex: 1,justifyContent: 'center'}}>
        <View
          style={{ alignItems: 'center'}}>
          <View
            style={{
              width: '80%',
              marginRight: 10,
              borderBottomColor: '#ccc',
              borderBottomWidth: 1,
              flexDirection: 'row',
              alignItems: 'center',
              paddingLeft: 20,
            }}>
            <Icon name="user" color="red" size={20}/>
            <TextInput placeholder="用户名" 
                onChangeText={this.userhandle}
            />
          </View>
          <View
            style={{
              width: '80%',
              marginRight: 10,
              borderBottomColor: '#ccc',
              borderBottomWidth: 1,
              flexDirection: 'row',
              alignItems: 'center',
              paddingLeft: 20,
            }}>
            <Icon3 name="textbox-password" color="red" size={20}/>
            <TextInput 
                onChangeText={this.pwdhandle}
                placeholder="密码" 
                secureTextEntry={true}
            />
          </View>
            <TouchableOpacity 
                style={{
                    width: '80%',
                    height: 40,
                    backgroundColor: '#ccc',
                    marginTop: 30,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
                onPress={this.login}>
                <Text>登录</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={{
                    width: '80%',
                    height: 20,
                    marginTop: 10,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
                onPress={()=>{Actions.register()}}>
                <Text style={{color:'gray',fontSize:16}}>还没有账户？点击前往注册</Text>
            </TouchableOpacity>
        </View>

        
        {
          this.state.isloading?<View style={{alignItems:'center',marginTop:20}}><Text style={{fontSize:18,color:'gray'}}>正在登陆...</Text></View>:null
        }
      </View>
    );
  }
}