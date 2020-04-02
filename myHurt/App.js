import React ,{useState,useEffect} from 'react';
import {StyleSheet,View,Text, Image, BackHandler,ToastAndroid,AsyncStorage} from 'react-native';
import {Router, Overlay, Scene, Tabs, Drawer, Lightbox, Modal, Actions} from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/AntDesign';
import SplashScreen from 'react-native-splash-screen';
import Server from './src/components/Server';
import Test1 from './src/components/Test1';
import People from './src/components/People';
import Center from './src/components/Center';
import Login from './src/components/Login';
import SwiperPage from './src/components/SwiperPage';
import Register from './src/components/Register';

const App = () => {
    let [isLogin,setLogin] = useState(false);
    let [isInstall,setInstall] = useState(true);
    let now = 0;
    let init = ()=>{
		AsyncStorage.getItem('isInstall')
		.then(res=>{
			if(res){
				setInstall(false);
			}
		})
		AsyncStorage.getItem('user')
		.then(res=>{
			let user = JSON.parse(res)
			if(!user){
				SplashScreen.hide();
			}
			if(user&&user.token){
				setLogin(true);
				SplashScreen.hide();
			}
		})
	}
    useEffect(()=>{
		init();
    },[])
    
    let afterInstall = ()=>{
		setInstall(false)
	}
	if(isInstall){
		return <View style={{flex:1}}>
			<SwiperPage afterInstall={afterInstall}/>
		</View>
	}
  return (
    <Router
			backAndroidHandler={()=>{
				if(Actions.currentScene != 'server'&&Actions.currentScene!='login'){
					Actions.pop();
					return true;
				}else{
					if(new Date().getTime()-now<2000){
						BackHandler.exitApp();
					}else{
						ToastAndroid.show('确定要退出吗',100);
						now = new Date().getTime();
						return true;
					}
				}
				
			}}
		>
        <Modal key="modal" hideNavBar>
            <Scene key="root" style={{backgrountColor:'white'}}>
                 <Tabs key="tabber" hideNavBar activeTintColor="red" inactiveTintColor="#989898">
                {/* 首页 */}
                <Scene key='servers' title="首页" hideNavBar icon={({focused})=><Icon color={focused?'red':'#989898'} name="home" size={25}/>}>
                    <Scene key="server" component={Server}/>
                </Scene>
                {/* 商品分类 */}
                <Scene key='tests' title="商品分类" hideNavBar icon={({focused})=><Icon color={focused?'red':'#989898'} name="appstore-o" size={25}/>}>
                    <Scene key="test1" component={Test1}/>
                </Scene>
                {/* 个人中心 */}
                <Scene key='peoples' title="个人中心" hideNavBar icon={({focused})=><Icon color={focused?'red':'#989898'} name="user" size={25}/>}>
                    <Scene key="people" component={People}/>
                </Scene>
            </Tabs>
                 <Scene hideNavBar key="center" component={Center} title="center"></Scene>
            </Scene> 
            <Scene key="login" initial={!isLogin} component={Login}/>
			<Scene key="register" component={Register}/>
        </Modal>
    </Router>
  );
};

export default App;
