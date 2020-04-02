import React,{Component} from 'react';
import {View,Text,StyleSheet, Button,StatusBar,Image, TouchableOpacity, AsyncStorage,ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import ImagePicker from 'react-native-image-picker';
import { Actions } from 'react-native-router-flux';

const options = {
    title: 'Select Avatar',
    customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };

export default class People extends Component{
    constructor(){
        super();
        this.state = {
            imageUrl:require('../../assets/fruit.png')
        }
    }
    takephoto = ()=>{
        ImagePicker.launchCamera(options, (response) => {
            if (response.didCancel) {
              return;
            } else if (response.error) {
              console.log('Error:', response.error);
            } else if (response.customButton) {
              console.log('custom:', response.customButton);
            } else {
                
              const source = { uri: response.uri };
            //   console.log(source.uri);
              this.setState({
                imageUrl: source,
              });
            }
          });
          AsyncStorage.setItem('images',this.state.imageUrl,()=>{console.log('111')});
          AsyncStorage.getItem('images').then((res)=>{this.setState({imageUrl:res})});
    }
     render(){
         return(
             <ScrollView>
             <View>
                <StatusBar backgroundColor="red"/>
                <View style={{backgroundColor:"red",height:250,alignItems:'center',justifyContent:'center'}}>
                    <TouchableOpacity onPress={()=>{this.takephoto()}}>
                    <Image source={this.state.imageUrl}  style={{height:100,width:100,borderWidth:3,borderColor:'white',borderRadius:50}}/>
                    </TouchableOpacity>
                    <Text style={{color:'white',marginTop:15,fontSize:18}}>BINNU DHILLON</Text>
                </View>
                <View style={{backgroundColor:'white',flexDirection:'row',alignItems:'center',height:50}}>
                    <Image source={require('../../assets/3-1_03.png')} style={{marginLeft:15,height:40,width:40}}/>
                    <Text style={styles.word}>我的个人中心</Text>
                </View>
                <View style={{marginTop:1,backgroundColor:'white',flexDirection:'row',justifyContent:'space-around',flexWrap:'wrap'}}>
                    <View style={styles.center}>
                        <Image source={require('../../assets/3-2_03.png')} style={styles.Image}/>
                        <Text style={styles.word}>账户管理</Text>
                    </View>
                    <View style={styles.center}>
                        <Image source={require('../../assets/3-3_03.png')} style={styles.Image}/>
                        <Text style={styles.word}>收货地址</Text>
                    </View>
                    <View style={styles.center}>
                        <Image source={require('../../assets/3-4_03.png')} style={styles.Image}/>
                        <Text style={styles.word}>我的信息</Text>
                    </View>
                    <View style={styles.center}>
                        <Image source={require('../../assets/3-2_03.png')} style={styles.Image}/>
                        <Text style={styles.word}>我的订单</Text>
                    </View>
                    <View style={styles.center}>
                        <Image source={require('../../assets/3-3_03.png')} style={styles.Image}/>
                        <Text style={styles.word}>我的二维码</Text>
                    </View>
                    <View style={styles.center}>
                        <Image source={require('../../assets/3-4_03.png')} style={styles.Image}/>
                        <Text style={styles.word}>我的积分</Text>
                    </View>
                    <View style={styles.center}>
                        <Image source={require('../../assets/3-2_03.png')} style={styles.Image}/>
                        <Text style={styles.word}>我的收藏</Text>
                    </View>
                    <View style={styles.center}></View>
                    <View style={styles.center}></View>
                </View>
                <View style={{backgroundColor:'white',flexDirection:'row',alignItems:'center',height:50,marginTop:5}}>
                    <Image source={require('../../assets/3-5_03.png')} style={{marginLeft:15,height:24,width:26,marginRight:12}}/>
                    <Text style={styles.word}>E族活动</Text>
                </View>
                <View style={{marginTop:1,backgroundColor:'white',flexDirection:'row',justifyContent:'space-around',flexWrap:'wrap'}}>
                    <View style={styles.center}>
                        <Image source={require('../../assets/3-6_03.png')} style={styles.Image}/>
                        <Text style={styles.word}>居家维修保养</Text>
                    </View>
                    <View style={styles.center}>
                        <Image source={require('../../assets/3-7_03.png')} style={styles.Image}/>
                        <Text style={styles.word}>出行接送</Text>
                    </View>
                    <View style={styles.center}>
                        <Image source={require('../../assets/3-8_03.png')} style={styles.Image}/>
                        <Text style={styles.word}>我的受赠人</Text>
                    </View>
                    <View style={styles.center}>
                        <Image source={require('../../assets/3-6_03.png')} style={styles.Image}/>
                        <Text style={styles.word}>我的住宿优惠</Text>
                    </View>
                    <View style={styles.center}>
                        <Image source={require('../../assets/3-7_03.png')} style={styles.Image}/>
                        <Text style={styles.word}>我的活动</Text>
                    </View>
                    <View style={styles.center}>
                        <TouchableOpacity onPress={()=>{Actions.center()}}>
                        <Image source={require('../../assets/3-8_03.png')} style={{marginBottom:10,height:23,width:30,marginLeft:14}}/>
                        <Text style={styles.word}>我的发布</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                {/* <View style={{alignItems:"center",marginTop:35}}><Text style={{color:"#5d5d5d",fontSize:12}}>BINNU DHILLON | 退出</Text></View> */}
                <TouchableOpacity style={{alignItems:'center',marginTop:10}} onPress={()=>{Actions.login();AsyncStorage.removeItem('user')}}><View style={{height:40,width:100,backgroundColor:'red',borderRadius:10,alignItems:'center',justifyContent:'center'}}><Text style={{color:'white',fontSize:16}}>退出登录</Text></View></TouchableOpacity>
             </View>
             </ScrollView>
         )
     }
 }
 const styles = StyleSheet.create({
     word:{
         fontSize:15,
         color:'#4f4e4e'
     },
     center:{
         alignItems:'center',
         justifyContent:'center',
         height:70,
         width:'30%'
     },
     Image:{
        marginBottom:10,
        height:23,
        width:30
     }
 })