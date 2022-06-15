import { StyleSheet, Text, View, Image,TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/MaterialIcons';
import Icon1 from 'react-native-vector-icons/Ionicons';
const Account = ({navigation}) => {
  return (
     
      
     <View style={{backgroundColor:'rgb(227, 218, 218)'}}> 
    <View style={{alignSelf:'center'}}>
     <Image source={require('/home/user/GroceryApp/src/images/Screenshot_20220601-144623_3.png')} style={{height:178,width:363,}}/>
    </View>
    <TouchableOpacity>
    <View style={{marginTop:1,backgroundColor:'rgb(255,255,255)',flexDirection:'row',padding:15}}>
        <Icon name='shopping' size={23} color='rgb(25, 189, 68)' />
        <Text style={{color:'black',fontWeight:'bold',marginLeft:12,margin:3,}}>My Orders</Text>
    </View>
    </TouchableOpacity>
    <TouchableOpacity>
    <View style={{margin:0.8,flexDirection:'row',padding:15,backgroundColor:'rgb(255,255,255)',}}>
        <Icon name='heart' size={23} color='rgb(25, 189, 68)' />
        <Text style={{color:'black',fontWeight:'bold',marginLeft:12,margin:3,}}>Favourites</Text>
    </View>
    </TouchableOpacity>
    <TouchableOpacity>
    <View style={{margin:0.8,flexDirection:'row',padding:15,backgroundColor:'rgb(255,255,255)',}}>
        <Icon1 name='settings' size={23} color='rgb(25, 189, 68)' />
        <Text style={{color:'black',fontWeight:'bold',margin:3,marginLeft:12,}}>Settings</Text>
    </View>
    </TouchableOpacity>
    <TouchableOpacity>
    <View style={{margin:0.8,flexDirection:'row',padding:15,backgroundColor:'rgb(255,255,255)',}}>
        <Icon name='cart' size={23} color='rgb(25, 189, 68)' />
        <Text style={{color:'black',fontWeight:'bold',margin:3,marginLeft:12,}}>My Cart</Text>
    </View>
    </TouchableOpacity>
    <TouchableOpacity>
    <View style={{margin:0.8,flexDirection:'row',padding:15,backgroundColor:'rgb(255,255,255)',}}>
        <Icon name='account-group' size={23} color='rgb(25, 189, 68)' />
        <Text style={{color:'black',fontWeight:'bold',margin:3,marginLeft:12,}}>Rate us</Text>
    </View>
    </TouchableOpacity>
    <TouchableOpacity>
    <View style={{margin:0.8,flexDirection:'row',padding:15,backgroundColor:'rgb(255,255,255)',}}>
        <Icon1 name='share-social-sharp' size={23} color='rgb(25, 189, 68)' />
        <Text style={{color:'black',fontWeight:'bold',margin:3,marginLeft:12,}}>Refer a friend</Text>
    </View>
    </TouchableOpacity>
    <TouchableOpacity>
    <View style={{margin:0.5,flexDirection:'row',padding:15,backgroundColor:'rgb(255,255,255)',}}>
        <Icon2 name='help' size={23} color='rgb(25, 189, 68)' />
        <Text style={{color:'black',fontWeight:'bold',margin:3,marginLeft:12,}}>Help</Text>
    </View>
    </TouchableOpacity>
    <TouchableOpacity>
    <View style={{margin:0.8,flexDirection:'row',padding:15,backgroundColor:'rgb(255,255,255)',marginBottom:17,}}>
        <Icon2 name='logout' size={23} color='rgb(25, 189, 68)' />
        <Text style={{color:'black',fontWeight:'bold',margin:3,marginLeft:12,}}>Log Out</Text>
    </View>
    </TouchableOpacity>
    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginTop:13,marginBottom:15,backgroundColor:'rgb(255,255,255)',padding:11,}}>
    <TouchableOpacity onPress={()=>navigation.navigate('Home')}>
    <View>
        <Icon1 name='home-outline' color='black' size={21} style={{paddingLeft:9,}}/>
        <Text style={{paddingLeft:6,padding:2,color:'black',fontSize:12,fontWeight:'bold',}}>HOME</Text>
    </View>
    </TouchableOpacity>
    <TouchableOpacity onPress={()=>navigation.navigate('Cart')}>
    <View>
        <Icon1 name='cart-outline' color='black'  size={24} style={{paddingLeft:21,}}/>
        <Text style={{paddingLeft:1,padding:2,color:'black',fontSize:12,fontWeight:'bold',}}>Shopping cart</Text>
    </View>
    </TouchableOpacity>
    <TouchableOpacity onPress={()=>navigation.navigate('Favourite')}>
    <View>
        <Icon name='heart-outline' color='black' size={23} style={{paddingLeft:15,}}/>
        <Text style={{paddingLeft:1,padding:2,color:'black',fontSize:12,fontWeight:'bold',}}>Favourites</Text>
    </View>
    </TouchableOpacity>
    <TouchableOpacity onPress={()=>navigation.navigate('Account')}>
    <View>
        <Icon1 name='person-outline' color='black' size={21} style={{paddingLeft:18,}}/>
        <Text style={{paddingLeft:1,padding:2,color:'black',fontSize:12,fontWeight:'bold',}}>My Account</Text>
    </View>
    </TouchableOpacity>
    </View>
    </View>
    
    
  )
}

export default Account

const styles = StyleSheet.create({})