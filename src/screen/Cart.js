import { StyleSheet, Text, View,Image,TouchableOpacity} from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon1 from 'react-native-vector-icons/MaterialIcons';
import Icon3 from 'react-native-vector-icons/AntDesign';
const Cart = ({navigation}) => {
  return (
    <View>
    
    <View style={{backgroundColor:'rgba(105,160,58,255)',flexDirection:'row',paddingTop:43,paddingBottom:12,}}>
    <TouchableOpacity onPress={()=>navigation.navigate('Home')}> 
    <Icon1 name='keyboard-arrow-left' color='white' size={32} style={{paddingLeft:9}} />
    </TouchableOpacity>
      <Text style={{fontSize:18,fontWeight:'bold',paddingTop:5,color:'white'}}>Shopping Cart</Text>         
    </View>
    <View style={{flexDirection:'row',backgroundColor:'white',paddingVertical:17}}>
      <Icon1 name='location-on' size={15} color='grey' style={{paddingRight:10,paddingLeft:18,}} />
      <Text style={{color:'black',fontWeight:'bold',fontSize:12,}}>
        273008 Gorakhpur, Uttar Pradesh 
      </Text>  
    <Icon1 name='keyboard-arrow-down' size={18} color='black' style={{paddingLeft:6,}} />
    <TouchableOpacity>
    <Text style={{color:'blue',fontSize:12,paddingLeft:11,top:2}}>
      Change Address
    </Text>
    </TouchableOpacity>
    </View>
    <View>
    <Text style={{color:'black',fontWeight:'bold',marginLeft:33,marginVertical:12,fontSize:17,}}>
      Vegetables
    </Text>
    </View>
    <View style={{backgroundColor:'white',padding:16,flexDirection:'row'}}>
   <TouchableOpacity>
   <Image source={require('/home/user/GroceryApp/Screenshot_20220601-205624_2.png')} style={{height:93,width:93,}} />
   </TouchableOpacity>
   <View style={{flexDirection:'column'}}>
    <Text style={{color:'black',paddingLeft:10,fontWeight:'bold',}}>
      Broccoli
    </Text>
    
    <Text style={{color:'grey',textDecorationLine: 'line-through', textDecorationStyle: 'solid',paddingLeft:11,top:2,}}>
      Rs 190 
    </Text>
    <Text style={{color:'black',top:4,paddingLeft:11,}}>
      150 Per/kg
    </Text>
    </View>
    <View style={{flexDirection:'row',}}>
    <Text style={{color:'rgba(105,160,58,255)',paddingLeft:7,paddingBottom:10,}}>
      Rs 40 saved
    </Text>
   
    </View>
    <View style={{flexDirection:'column'}}>
    <Icon3 name="delete" size={15} color="black" style={{paddingLeft:43,}}  />
    <View style={{flexDirection:'row',top:43,}}>
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
    
    </View>
    <View style={{backgroundColor:'white',padding:16,flexDirection:'row'}}>
   <TouchableOpacity>
   <Image source={require('/home/user/GroceryApp/Screenshot_20220601-205624_3.png')} style={{height:93,width:93,}} />
   </TouchableOpacity>
   <View style={{flexDirection:'column'}}>
    <Text style={{color:'black',paddingLeft:10,fontWeight:'bold',}}>
      Onion
    </Text>
    
    <Text style={{color:'grey',textDecorationLine: 'line-through', textDecorationStyle: 'solid',paddingLeft:11,top:2,}}>
      Rs 250 
    </Text>
    <Text style={{color:'black',top:4,paddingLeft:11,}}>
      200 Per/kg
    </Text>
    </View>
    <View style={{flexDirection:'row',}}>
    <Text style={{color:'rgba(105,160,58,255)',paddingLeft:7,paddingBottom:10,}}>
      Rs 60 saved
    </Text>
   
    </View>
    <View style={{flexDirection:'column'}}>
    <Icon3 name="delete" size={15} color="black" style={{paddingLeft:43,}}  />
    <View style={{flexDirection:'row',top:43,}}>
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
    
    </View>
    
    <View>
    <Text style={{color:'black',fontWeight:'bold',marginLeft:33,marginVertical:12,fontSize:17,}}>
      Dry Fruits
    </Text>
    </View>
    <View style={{backgroundColor:'white',padding:18,flexDirection:'row'}}>
   <TouchableOpacity>
   <Image source={require('/home/user/GroceryApp/Screenshot_20220601-205624_4.png')} style={{height:93,width:93,}} />
   </TouchableOpacity>
   <View style={{flexDirection:'column'}}>
    <Text style={{color:'black',paddingLeft:10,fontWeight:'bold',}}>
      Anjeer
    </Text>
    
    <Text style={{color:'grey',textDecorationLine: 'line-through', textDecorationStyle: 'solid',paddingLeft:11,top:2,}}>
      Rs 250 
    </Text>
    <Text style={{color:'black',top:4,paddingLeft:11,}}>
      220 Per/kg
    </Text>
    </View>
    <View style={{flexDirection:'row',}}>
    <Text style={{color:'rgba(105,160,58,255)',paddingLeft:7,paddingBottom:10,}}>
      Rs 40 saved
    </Text>
    </View>
    <View style={{flexDirection:'column'}}>
    <Icon3 name="delete" size={15} color="black" style={{paddingLeft:43,}}  />
    <View style={{flexDirection:'row',top:43,}}>
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
    
    </View>
  

     
    <View style={{flexDirection:'row',backgroundColor:'white',padding:25,paddingBottom:62,paddingTop:52}}>
      <Text style={{color:'black',fontWeight:'bold',fontSize:17,top:10,paddingLeft:4}}>
        Total- Rs 570
      </Text>
      <TouchableOpacity>
      <Text style={{backgroundColor:'rgba(105,160,58,255)',padding:12,marginLeft:79,borderRadius:7,paddingHorizontal:29,}}>
        Place Order
      </Text>
      </TouchableOpacity>
     
    </View>
   
    </View>
  )
}

export default Cart

const styles = StyleSheet.create({})