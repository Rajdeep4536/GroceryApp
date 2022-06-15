import { StyleSheet, Text, View,Image,TouchableOpacity} from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon1 from 'react-native-vector-icons/Ionicons';
import {Rating} from 'react-native-ratings';
const Favourite = ({navigation}) => {
  return (
    <View>
    
    <View style={{backgroundColor:'rgba(105,160,58,255)',flexDirection:'row',paddingTop:53,paddingBottom:12,}}>
   
      <Text style={{fontSize:18,fontWeight:'bold',paddingTop:5,color:'white',marginLeft:12}}>Favourites</Text>         
    </View>
   
    <View style={{backgroundColor:'white',padding:18,paddingLeft:12,flexDirection:'row'}}>
   <TouchableOpacity>
   <Image source={require('/home/user/GroceryApp/Screenshot_20220602-111845_2.png')} style={{height:73,width:73,}} />
   </TouchableOpacity>
   <View style={{flexDirection:'column'}}>
    <Text style={{color:'black',paddingLeft:10,fontWeight:'bold',}}>
      Grapes
    </Text>
    
    <Text style={{color:'grey',fontSize:12, textDecorationStyle: 'solid',paddingLeft:11,top:3.5,}}>
     Pick up from organic farms
    </Text>
    <Rating
      imageSize={9}
      style={{paddingVertical:4,marginLeft:-79,top:6,}}
      />
    <View style={{flexDirection:'row',top:1,marginLeft:10,}}>
    <TouchableOpacity>
    <View style={{}}>
    <Text style={{color:"black",borderWidth:1,borderRadius:3,textAlign:'center',top:10,paddingHorizontal:5,}}>-</Text>
    </View>
    </TouchableOpacity>
    <View>
      <Text style={{color:'black',top:10,paddingLeft:7,paddingRight:7}}>1</Text>
    </View>
    <TouchableOpacity>
    <View style={{paddingLeft:2,}}>
    <Text style={{color:"black",borderWidth:1,borderRadius:3,textAlign:'center',top:10,paddingHorizontal:5,}}>+</Text>
    </View>
    </TouchableOpacity>
    </View>
    </View>
    <View style={{flexDirection:'column',}}>
    <Text style={{color:'black',paddingLeft:29,paddingBottom:10,fontSize:12,fontWeight:'bold',}}>
    160 Per/kg
    </Text>
    <TouchableOpacity>
    <Text style={{color:'white',fontWeight:'bold',backgroundColor:'rgb(235, 119, 52)',padding:4.2,textAlign:'center',top:33,borderRadius:6}}>
      Add
    </Text>
    </TouchableOpacity>
    </View>
    </View>
    <View style={{backgroundColor:'white',padding:18,paddingLeft:12,flexDirection:'row',top:1.5}}>
   <TouchableOpacity>
   <Image source={require('/home/user/GroceryApp/Screenshot_20220602-111845_3.png')} style={{height:73,width:73,}} />
   </TouchableOpacity>
   <View style={{flexDirection:'column'}}>
    <Text style={{color:'black',paddingLeft:10,fontWeight:'bold',}}>
      Apricots
    </Text>
    
    <Text style={{color:'grey',fontSize:12, textDecorationStyle: 'solid',paddingLeft:11,top:2,}}>
     Pick up from organic farms
    </Text>
    <Rating
      imageSize={9}
      style={{paddingVertical:4,marginLeft:-79,top:6,}}
      />
  
    <View style={{flexDirection:'row',top:1,marginLeft:10,}}>
    <TouchableOpacity>
    <View style={{}}>
    <Text style={{color:"black",borderWidth:1,borderRadius:3,textAlign:'center',top:10,paddingHorizontal:5,}}>-</Text>
    </View>
    </TouchableOpacity>
    <View>
      <Text style={{color:'black',top:10,paddingLeft:7,paddingRight:7}}>1</Text>
    </View>
    <TouchableOpacity>
    <View style={{paddingLeft:2,}}>
    <Text style={{color:"black",borderWidth:1,borderRadius:3,textAlign:'center',top:10,paddingHorizontal:5,}}>+</Text>
    </View>
    </TouchableOpacity>
    </View>
    </View>
    <View style={{flexDirection:'column',}}>
    <Text style={{color:'black',paddingLeft:29,paddingBottom:10,fontSize:12,fontWeight:'bold',}}>
    190 Per/kg
    </Text>
    <TouchableOpacity>
    <Text style={{color:'white',fontWeight:'bold',backgroundColor:'rgb(235, 119, 52)',padding:4.2,textAlign:'center',top:33,borderRadius:6}}>
      Add
    </Text>
    </TouchableOpacity>
    </View>
    </View>
    <View style={{backgroundColor:'white',padding:18,paddingLeft:12,flexDirection:'row',top:3.5,marginBottom:3.5}}>
   <TouchableOpacity>
   <Image source={require('/home/user/GroceryApp/Screenshot_20220601-205624_2.png')} style={{height:73,width:73,}} />
   </TouchableOpacity>
   <View style={{flexDirection:'column'}}>
    <Text style={{color:'black',paddingLeft:10,fontWeight:'bold',}}>
      Broccoli
    </Text>
    
    <Text style={{color:'grey',fontSize:12, textDecorationStyle: 'solid',paddingLeft:11,top:2,}}>
     Pick up from organic farms
    </Text>
    <Rating
      imageSize={9}
      style={{paddingVertical:4,marginLeft:-79,top:6,}}
      />
  
    <View style={{flexDirection:'row',top:1,marginLeft:10,}}>
    <TouchableOpacity>
    <View style={{}}>
    <Text style={{color:"black",borderWidth:1,borderRadius:3,textAlign:'center',top:10,paddingHorizontal:5,}}>-</Text>
    </View>
    </TouchableOpacity>
    <View>
      <Text style={{color:'black',top:10,paddingLeft:7,paddingRight:7}}>1</Text>
    </View>
    <TouchableOpacity>
    <View style={{paddingLeft:2,}}>
    <Text style={{color:"black",borderWidth:1,borderRadius:3,textAlign:'center',top:10,paddingHorizontal:5,}}>+</Text>
    </View>
    </TouchableOpacity>
    </View>
    </View>
    <View style={{flexDirection:'column',}}>
    <Text style={{color:'black',paddingLeft:29,paddingBottom:10,fontSize:12,fontWeight:'bold',}}>
    110 Per/kg
    </Text>
    <TouchableOpacity>
    <Text style={{color:'white',fontWeight:'bold',backgroundColor:'rgb(235, 119, 52)',padding:4.2,textAlign:'center',top:33,borderRadius:6}}>
      Add
    </Text>
    </TouchableOpacity>
    </View>
    </View>
    <View style={{backgroundColor:'white',padding:18,paddingLeft:12,flexDirection:'row',top:2.5,marginBottom:2.5,}}>
   <TouchableOpacity>
   <Image source={require('/home/user/GroceryApp/Screenshot_20220601-205624_3.png')} style={{height:73,width:73,}} />
   </TouchableOpacity>
   <View style={{flexDirection:'column'}}>
    <Text style={{color:'black',paddingLeft:10,fontWeight:'bold',}}>
      Onion
    </Text>
    
    <Text style={{color:'grey',fontSize:12, textDecorationStyle: 'solid',paddingLeft:11,top:2,}}>
     Pick up from organic farms
    </Text>
    <Rating
      imageSize={9}
      style={{paddingVertical:4,marginLeft:-79,top:6,}}
      />
  
    <View style={{flexDirection:'row',top:1,marginLeft:10,}}>
    <TouchableOpacity>
    <View style={{}}>
    <Text style={{color:"black",borderWidth:1,borderRadius:3,textAlign:'center',top:10,paddingHorizontal:5,}}>-</Text>
    </View>
    </TouchableOpacity>
    <View>
      <Text style={{color:'black',top:10,paddingLeft:7,paddingRight:7}}>1</Text>
    </View>
    <TouchableOpacity>
    <View style={{paddingLeft:2,}}>
    <Text style={{color:"black",borderWidth:1,borderRadius:3,textAlign:'center',top:10,paddingHorizontal:5,}}>+</Text>
    </View>
    </TouchableOpacity>
    </View>
    </View>
    <View style={{flexDirection:'column',}}>
    <Text style={{color:'black',paddingLeft:29,paddingBottom:10,fontSize:12,fontWeight:'bold',}}>
    130 Per/kg
    </Text>
    <TouchableOpacity>
    <Text style={{color:'white',fontWeight:'bold',backgroundColor:'rgb(235, 119, 52)',padding:4.2,textAlign:'center',top:33,borderRadius:6}}>
      Add
    </Text>
    </TouchableOpacity>
    </View>
    </View>
    <View style={{backgroundColor:'white',padding:18,paddingLeft:12,flexDirection:'row',top:2.5}}>
   <TouchableOpacity>
   <Image source={require('/home/user/GroceryApp/Screenshot_20220601-205624_4.png')} style={{height:73,width:73,}} />
   </TouchableOpacity>
   <View style={{flexDirection:'column'}}>
    <Text style={{color:'black',paddingLeft:10,fontWeight:'bold',}}>
      Anjeer
    </Text>
    
    <Text style={{color:'grey',fontSize:12, textDecorationStyle: 'solid',paddingLeft:11,top:2,}}>
     Pick up from organic farms
    </Text>
    <Rating
      imageSize={9}
      style={{paddingVertical:4,marginLeft:-79,top:6,}}
      />
  
    <View style={{flexDirection:'row',top:1,marginLeft:10,}}>
    <TouchableOpacity>
    <View style={{}}>
    <Text style={{color:"black",borderWidth:1,borderRadius:3,textAlign:'center',top:10,paddingHorizontal:5,}}>-</Text>
    </View>
    </TouchableOpacity>
    <View>
      <Text style={{color:'black',top:10,paddingLeft:7,paddingRight:7}}>1</Text>
    </View>
    <TouchableOpacity>
    <View style={{paddingLeft:2,}}>
    <Text style={{color:"black",borderWidth:1,borderRadius:3,textAlign:'center',top:10,paddingHorizontal:5,}}>+</Text>
    </View>
    </TouchableOpacity>
    </View>
    </View>
    <View style={{flexDirection:'column',}}>
    <Text style={{color:'black',paddingLeft:29,paddingBottom:10,fontSize:12,fontWeight:'bold',}}>
    260 Per/kg
    </Text>
    <TouchableOpacity>
    <Text style={{color:'white',fontWeight:'bold',backgroundColor:'rgb(235, 119, 52)',padding:4.2,textAlign:'center',top:33,borderRadius:6}}>
      Add
    </Text>
    </TouchableOpacity>
    </View>
    </View>
    
   
    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginTop:12,marginBottom:1,backgroundColor:'rgb(255,255,255)',padding:7,}}>
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

export default Favourite

const styles = StyleSheet.create({})