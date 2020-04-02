import React,{Component} from 'react';
import {View,Text,TextInput,ScrollView,Image,StyleSheet} from 'react-native';

export default class Test1 extends Component{
     render(){
         return(
        <ScrollView>
         <View>
            <View style={{flexDirection:'row',justifyContent:'center',margin:10}}>
              <TextInput placeholder="请输入查询商品" placeholderTextColor="#9f9f9f" style={{height:50,width:'80%',backgroundColor:'#eee',fontSize:20}}></TextInput> 
              <Image style={{height:50,width:50}} source={require('../../assets/1.png')}/>
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-evenly',borderTopWidth:0.5,borderTopColor:'#dedede',borderBottomColor:'#acabab',borderBottomWidth:0.5,height:50,paddingTop:8}}>
                <Text style={{color:'red',fontSize:20}}>综合</Text>
                <Text style={styles.box}>销量</Text>
                <Text style={styles.box}>新品</Text>
                <Text style={styles.box}>价格</Text>
                <Text style={styles.box}>信用</Text>
            </View>
            <View style={{backgroundColor:'#eee',flexDirection:'row',justifyContent:"space-evenly",flexWrap:'wrap',height:1100}}>
                <View style={styles.shu}><Image source={require('../../assets/2.png')} style={styles.tu1}/><Text style={{color:'#989898',fontSize:15,margin:14}}>Oishi/上好佳玉米卷20包膨化休闲食品Opshi/上好佳</Text><Text style={{color:'red',marginLeft:14}}>36.00</Text></View>
                <View style={styles.shu}><Image source={require('../../assets/3.png')} style={styles.tu2}/><Text style={{color:'#989898',fontSize:15,margin:14}}>Oishi/上好佳玉米卷20包膨化休闲食品Opshi/上好佳</Text><Text style={{color:'red',marginLeft:14}}>36.00</Text></View>
                <View style={styles.shu}><Image source={require('../../assets/2.png')} style={styles.tu1}/><Text style={{color:'#989898',fontSize:15,margin:14}}>Oishi/上好佳玉米卷20包膨化休闲食品Opshi/上好佳</Text><Text style={{color:'red',marginLeft:14}}>36.00</Text></View>
                <View style={styles.shu}><Image source={require('../../assets/3.png')} style={styles.tu2}/><Text style={{color:'#989898',fontSize:15,margin:14}}>Oishi/上好佳玉米卷20包膨化休闲食品Opshi/上好佳</Text><Text style={{color:'red',marginLeft:14}}>36.00</Text></View>
                <View style={styles.shu}><Image source={require('../../assets/2.png')} style={styles.tu1}/><Text style={{color:'#989898',fontSize:15,margin:14}}>Oishi/上好佳玉米卷20包膨化休闲食品Opshi/上好佳</Text><Text style={{color:'red',marginLeft:14}}>36.00</Text></View>
                <View style={styles.shu}><Image source={require('../../assets/3.png')} style={styles.tu2}/><Text style={{color:'#989898',fontSize:15,margin:14}}>Oishi/上好佳玉米卷20包膨化休闲食品Opshi/上好佳</Text><Text style={{color:'red',marginLeft:14}}>36.00</Text></View>
            </View>
         </View>
       </ScrollView>
         )
     }
 }
 const styles = StyleSheet.create({
     box:{
         fontSize:20,
         fontWeight:'100',
         color:'#504f4f'
     },
     shu:{
         width:'45%',
         height:330,
         backgroundColor:'white',
         marginTop:10
     },
     tu1:{
         height:200,
         width:150,
         marginTop:10,
         marginLeft:'15%'
     },
     tu2:{
         height:180,
         width:140,
         marginTop:25,
         marginLeft:'17%'
     }
 })