import React,{Component} from 'react';
import {View,Text,StyleSheet, Button,StatusBar,Image, TouchableOpacity, AsyncStorage,ToastAndroid,ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import ImagePicker from 'react-native-image-picker';
import { Actions } from 'react-native-router-flux';

export default class Center extends Component{
    constructor(){
        super();
        this.state = {
            data: [],
            page: 1
        }
    }
    componentDidMount(){
        fetch('https://cnodejs.org/api/v1/topics?limit=15&&page='+this.state.page)
        .then((res)=>res.json())
        .then((res)=>{
            this.setState({data:res.data});
        })
    }
    componentDidUpdate(prevProps,prevState){
        if(prevState.page!==this.state.page){
            fetch('https://cnodejs.org/api/v1/topics?limit=15&&page='+this.state.page)
                .then((res)=>res.json())
                .then((res)=>{
                        this.setState({data:res.data});
                    })
        }
    }
     render(){
         return(
             <ScrollView>
             <View>
                 <StatusBar backgroundColor="red"/>
                 <View style={{backgroundColor:"red",height:50,flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                     <Icon name="left" color="white" size={22} style={{marginLeft:20}} onPress={()=>{Actions.pop()}}/>
                     <Text style={{color:'white',fontSize:18}}>我的发布</Text>
                     <Icon name="ellipsis1" color="white" size={30} style={{marginRight:20}}/>
                 </View>
                 <View>
                     {
                         this.state.data.map((item)=>(
                            <View style={styles.word}>
                                <Text style={{width:'45%'}}>{item.title.length>15?item.title.substring(0,15)+'...':item.title}</Text>
                                <Text style={{marginLeft:40,width:'15%'}}>{item.create_at.substring(0,10)}</Text>
                                {Math.random()*10>5?<Text style={{marginRight:15}}>已回复</Text>:<Text style={{color:'red',marginRight:15}}>待回复</Text>}
                            </View>
                         ))
                     }
                 </View>
                 <View style={{backgroundColor:'white',height:50,flexDirection:'row',justifyContent:'space-around',alignItems:'center'}}>
                     <TouchableOpacity onPress={()=>{this.state.page!=1?this.setState({page:this.state.page-1}):ToastAndroid.show('已经到头啦',ToastAndroid.SHORT)}}><View style={styles.btn}><Text style={{color:'white'}}>上一页</Text></View></TouchableOpacity>
                     <Text>第{this.state.page}页</Text>
                     <TouchableOpacity onPress={()=>{this.setState({page:this.state.page+1})}}><View style={styles.btn}><Text style={{color:'white'}}>下一页</Text></View></TouchableOpacity>
                 </View>
             </View>
             </ScrollView>
         )
                
     }
 }
 const styles = StyleSheet.create({
     word:{
         fontSize:17,
         height:40,
         backgroundColor:'white',
         borderBottomColor:'lightgray',
         borderBottomWidth:0.5,
         flexDirection:'row',
         alignItems:'center',
         justifyContent:'space-between',
         lineHeight:40,
         paddingLeft:15
     },
     btn:{
         height:26,
         width:80,
         backgroundColor:'red',
         borderRadius:13,
         justifyContent:'center',
         alignItems:'center'
     }
 })