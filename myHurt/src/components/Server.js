import React,{Component} from 'react';
import {View,Text,StyleSheet, Button,StatusBar,TextInput,Image,TouchableOpacity,ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import BetterBanner from 'react-native-better-banner';

export default class Server extends Component{
     render(){
         return(
             <ScrollView>
             <View>
                 <StatusBar backgroundColor="red"/>
                 <View style={{backgroundColor:"red",height:50,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                     <Icon name="search1" color="white" size={22} style={{height:36,width:25,backgroundColor:"#fbb8b8",borderTopLeftRadius:18,borderBottomLeftRadius:18,paddingTop:7,paddingLeft:7}}/>
                     <TextInput placeholder="请输入您想要搜索的关键字" placeholderTextColor="white" style={{backgroundColor:"#fbb8b8",height:36,width:'70%',borderTopRightRadius:18,borderBottomRightRadius:18}}/>
                     <Icon name="shoppingcart" color="white" size={30} style={{marginLeft:"10%"}}/>
                 </View>
                <View style={{backgroundColor:'yellow'}}><BetterBanner
                bannerImages={[
                    {uri: "https://i04piccdn.sogoucdn.com/c0cdffdb5c0a4cf2"},
                    {uri: "http://attachments.gfan.net.cn/forum/attachments2/201402/05/211342pkd8axiibj5axizi.jpg.thumb.jpg"},
                    {uri: "http://attachments.gfan.net.cn/forum/attachments2/201402/05/2113441e4dw5zvv49jkdow.jpg.thumb.jpg"}
                ]}
                bannerHeight={180}
                isSeamlessScroll={true}
                indicatorGroupPosition={'center'}
            /></View>
                 {/* 四横条 */}
                 <View>
                     <View>
                         <View style={styles.gray}></View>
                         <View style={styles.box}>
                             <Image source={require('../../assets/2-1_03.png')} style={styles.image}/>
                             <Text style={styles.word}>居家维修保养</Text>
                             <Icon name="right" color="#989898" size={17} style={{marginLeft:220}}/>
                         </View>
                     </View>
                     <View>
                         <View style={styles.gray}></View>
                         <View style={styles.box}>
                             <Image source={require('../../assets/2-2_03.png')} style={styles.image}/>
                             <Text style={styles.word}>住宿优惠</Text>
                             <Icon name="right" color="#989898" size={17} style={{marginLeft:250}}/>
                         </View>
                     </View>
                     <View>
                         <View style={styles.gray}></View>
                         <View style={styles.box}>
                             <Image source={require('../../assets/2-3_03.png')} style={styles.image}/>
                             <Text style={styles.word}>出行接送</Text>
                             <Icon name="right" color="#989898" size={17} style={{marginLeft:250}}/>
                         </View>
                     </View>
                     <View>
                         <View style={styles.gray}></View>
                         <View style={styles.box}>
                             <Image source={require('../../assets/2-4_03.png')} style={styles.image}/>
                             <Text style={styles.word}>E族活动</Text>
                             <Icon name="right" color="#989898" size={17} style={{marginLeft:260}}/>
                         </View>
                     </View>
                 </View>
                 {/* 按钮 */}
                 <View style={{height:90,flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                     <TouchableOpacity style={{backgroundColor:'red',height:45,width:"75%",alignItems:'center',justifyContent:'center',borderRadius:10}}>
                     <View><Text style={{color:"white",fontSize:16}}>发布需求</Text></View>
                     </TouchableOpacity>
                 </View>
                 {/* 汉字 */}
                 <View style={{alignItems:"center",marginTop:13}}><Text style={{color:"#5d5d5d",fontSize:12}}>@E族之家 版权所有</Text></View>
             </View>
             </ScrollView>
         )
     }
 }
 const styles = StyleSheet.create({
     gray:{
        height:10,
        backgroundColor:'#f5f5f5'
     },
     box:{
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:'white'
     },
     word:{
        fontSize:16,
        marginLeft:18,
        color:'#5d5d5d'
     },
     image:{
        marginTop:9,
        marginLeft:15,
        height:85,
        width:85
     }
 })