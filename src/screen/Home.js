import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  FlatList,
  Image,
  Dimensions,
  TextInput,
  Platform,
  TouchableOpacity,
} from 'react-native';
import {Rating} from 'react-native-ratings';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/MaterialIcons';
import Icon1 from 'react-native-vector-icons/Ionicons';
import React from 'react';
const {width, height} = Dimensions.get('window');
const Home = ({navigation}) => {
  const Flat = [
    {
      src: require('/home/user/GroceryApp/Screenshot_20220601-144207_8.png'),
      name: 'Strawberry ',
      name1: '₹ 160 Per/ kg',
      name2: 'Order Now',
    },
    {
      src: require('/home/user/GroceryApp/Screenshot_20220603-152719_6.png'),
      name: 'Grapes ',
      name1: '₹ 160 Per/ kg',
      name2: 'Order Now',
    },
    {
      src: require('/home/user/GroceryApp/Screenshot_20220603-152719_6.png'),
      name: 'Oranges',
      name1: '₹ 160 Per/ kg',
      name2: 'Order Now',
    },
    {
      src: require('/home/user/GroceryApp/Screenshot_20220601-144207_8.png'),
      name: 'Pineapple',
      name1: '₹ 300 Per/ kg',
      name2: 'Order Now',
    },
  ];
  return (
    <SafeAreaView style={{backgroundColor: '#69a03a'}}>
      <View style={styles.container}>
        <View style={styles.title}>
          <Text style={styles.text}>Fruit Market</Text>
         <Icon name="bell" color='white' size={18} style={{top:12,paddingRight:13,}}/>
        </View>
        <View style={styles.search}>
         <Icon2 name='search' color='grey' size={22} style={{paddingTop:10,}}/>
          <TextInput placeholder="Search...." placeholderTextColor='grey' style={{paddingLeft:28,top:-31,color:'black'}}/>
        </View>
        <View>
          <View style={styles.box}>
            <TouchableOpacity>
              <Text style={styles.text2}>Vegetables</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text
                style={
                  (styles.text2,
                  {
                    backgroundColor: 'orange',
                    height: height * 0.03,
                    width: width * 0.18,
                    textAlign: 'center',
                    borderRadius: 6,
                    fontWeight: 'bold',
                    color: 'white',
                  })
                }>
                Fruits
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.text2}>Dry Fruits</Text>
            </TouchableOpacity>
          </View>
        </View>
        <ScrollView>
          <View
            style={{
              width: width * 0.95,
             // backgroundColor: 'yellow',
              height: height * 0.43,
              alignSelf: 'flex-end',
            }}>
            <View style={{flexDirection: 'row'}}>
              <Text style={{fontSize: 20, fontWeight: 'bold', color: 'black'}}>
                Organic Fruits
              </Text>
              <Text
                style={{
                  color: 'green',
                  fontSize: 12,
                  top: 5,
                  fontWeight: 'bold',
                }}>
                {'   '}(20% Off )
              </Text>
            </View>
            <View>
              <Text style={{color: 'black', top: 5}}>
                Pick Up from Organic Farms
              </Text>
            </View>
            <View style={styles.FlatList}>
              <FlatList
                horizontal={true}
                // numColumns={4}
                showsHorizontalScrollIndicator={false}
                data={Flat}
                renderItem={({item}) => {
                  return (
                    <View style={{margin: 10}}>
                      <View style={styles.container2}>
                        <Image style={styles.img2} source={item.src} />
                       

                        <View style={styles.container3}>
                          <Rating
                            imageSize={15}
                            style={{top:2,marginLeft:-32,}}
                          />
                          <TouchableOpacity>
                            <Text style={styles.text3}>{item.name}</Text>
                            <Text style={styles.text2}>{item.name1}</Text>
                          </TouchableOpacity>
                          {/* <Text style={styles.text3}>{item.name2}</Text> */}
                        </View>
                      </View>

                      <View style={{height: height * 0.02}}></View>
                    </View>
                  );
                }}
              />
            </View>
          </View>
          {/* 2nd flatlis */}
          <View>
            <View
              style={{
                width: width * 0.95,
               // backgroundColor: 'red',
                height: height * 0.43,
                alignSelf: 'flex-end',
              }}>
              <View style={{flexDirection: 'row'}}>
                <Text
                  style={{fontSize: 20, fontWeight: 'bold', color: 'black'}}>
                  Mixed Fruits Pack
                </Text>
                <Text
                  style={{
                    color: 'green',
                    fontSize: 12,
                    top: 5,
                    fontWeight: 'bold',
                  }}>
                  {'   '}(10% Off )
                </Text>
              </View>
              <View>
                <Text style={{color: 'black', top: 5}}>
                  Fruit Mix Fresh Pack
                </Text>
              </View>
              <View style={styles.FlatList}>
                <FlatList
                  horizontal={true}
                  // numColumns={4}
                  showsHorizontalScrollIndicator={false}
                  data={Flat}
                  renderItem={({item}) => {
                    return (
                      <View style={{margin: 10}}>
                        <View style={styles.container2}>
                          <Image style={styles.img2} source={item.src} />
                         

                          <View style={styles.container3}>
                            <Rating
                              imageSize={15}
                              style={{top:3,marginLeft:-32,}}
                            />
                            <TouchableOpacity>
                              <Text style={styles.text3}>{item.name}</Text>
                              <Text style={styles.text2}>{item.name1}</Text>
                            </TouchableOpacity>
                            {/* <Text style={styles.text3}>{item.name2}</Text> */}
                          </View>
                        </View>

                        <View style={{height: height * 0.02}}></View>
                      </View>
                    );
                  }}
                />
              </View>
            </View>
          </View>
          {/* 3rd flatlist */}

          <View>
            <View
              style={{
                width: width * 0.95,
                //backgroundColor: 'red',
                height: height * 0.43,
                alignSelf: 'flex-end',
              }}>
              <View style={{flexDirection: 'row'}}>
                <Text
                  style={{fontSize: 20, fontWeight: 'bold', color: 'black'}}>
                  Stone Fruits
                </Text>
                <Text
                  style={{
                    color: 'green',
                    fontSize: 12,
                    top: 5,
                    fontWeight: 'bold',
                  }}>
                  {'   '}(20% Off )
                </Text>
              </View>
              <View>
                <Text style={{color: 'black', top: 5}}>Fresh Stone Fruits</Text>
              </View>
              <View style={styles.FlatList}>
                <FlatList
                  horizontal={true}
                  // numColumns={4}
                  showsHorizontalScrollIndicator={false}
                  data={Flat}
                  renderItem={({item}) => {
                    return (
                      <View style={{margin: 10}}>
                        <View style={styles.container2}>
                          <Image style={styles.img2} source={item.src} />
                         

                          <View style={styles.container3}>
                            <Rating
                              imageSize={15}
                              style={{top:3,marginLeft:-32,}}
                            />

                            <TouchableOpacity>
                              <Text style={styles.text3}>{item.name}</Text>
                              <Text style={styles.text2}>{item.name1}</Text>
                            </TouchableOpacity>
                            {/* <Text style={styles.text3}>{item.name2}</Text> */}
                          </View>
                        </View>

                        <View style={{height: height * 0.02}}></View>
                      </View>
                    );
                  }}
                />
              </View>
            </View>
          </View>
          {/* 4th Flatlist */}
          <View>
            <View
              style={{
                width: width * 0.95,
               // backgroundColor: 'yellow',
                height: height * 0.43,
                alignSelf: 'flex-end',
              }}>
              <View style={{flexDirection: 'row'}}>
                <Text
                  style={{fontSize: 20, fontWeight: 'bold', color: 'black'}}>
                  Melons
                </Text>
                <Text
                  style={{
                    color: 'green',
                    fontSize: 12,
                    top: 5,
                    fontWeight: 'bold',
                  }}>
                  {'   '}(5% Off )
                </Text>
              </View>
              <View>
                <Text style={{color: 'black', top: 5}}>
                  Fresh Melons Fruits
                </Text>
              </View>
              <View style={styles.FlatList}>
                <FlatList
                  horizontal={true}
                  // numColumns={4}
                  showsHorizontalScrollIndicator={false}
                  data={Flat}
                  renderItem={({item}) => {
                    return (
                      <View style={{margin: 10}}>
                        <View style={styles.container2}>
                          <Image style={styles.img2} source={item.src} />
                          

                          <View style={styles.container3}>
                            <Rating
                              imageSize={15}
                              style={{top:3,marginLeft:-32,}}
                            />

                            <TouchableOpacity>
                              <Text style={styles.text3}>{item.name}</Text>
                              <Text style={styles.text2}>{item.name1}</Text>
                            </TouchableOpacity>
                            {/* <Text style={styles.text3}>{item.name2}</Text> */}
                          </View>
                        </View>

                        <View style={{height: height * 0.02}}></View>
                      </View>
                    );
                  }}
                />
              </View>
            </View>
          </View>
        </ScrollView>

    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginTop:9,margin:13,marginBottom:1,backgroundColor:'rgb(255,255,255)',padding:2,}}>
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
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    height: height * 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    top: 10,
    left: 10,
  },
  title: {
    height: height * 0.1,
    backgroundColor: '#69a03a',
    // alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  img: {
    width: 20,
    height: 20,
    top: 10,
    right: 10,
    resizeMode: 'contain',
  },
  search: {
    width: width * 0.9,
    alignSelf: 'center',
   
    height: height * 0.055,
    borderRadius: 7,
    bottom: 20,
    paddingLeft:12,

    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {width: 0.1, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  box: {
    // backgroundColor:'red',
    flexDirection: 'row',
    height: height * 0.04,
    justifyContent: 'space-around',
  },
  text2: {
    alignSelf: 'center',
    color: 'grey',
    fontSize: 18,
    fontWeight: '500',
  },
  img2: {
    borderRadius: 7,
    width: width * 0.33,
    height: height * 0.2,
  },
  text3: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 18,
    paddingVertical: 2,
  },
  text2: {
    color: 'black',
    fontWeight: '500',
    fontSize: 12.5,
  },
});
//just check