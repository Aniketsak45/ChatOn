import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screens/Home';
import MenuScreen from '../Screens/Menu';
import Entype from "react-native-vector-icons/Entypo";
import AntDesign from "react-native-vector-icons/AntDesign";
import ProfileScreen from '../Screens/Profile';
import ShoppingCart from '../Screens/ShoppingCart';
import HomeStack from '../Screens/HomeStack';
const Tab = createBottomTabNavigator();

const BottomTabNav = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown:false}} >
      <Tab.Screen 
         component={HomeStack}
          name="home"
          options={{
            tabBarIcon:({color:string}) => (
                <AntDesign name="home" color={'black'} size={18} />
            ),
          }}
            
          />
      <Tab.Screen name="Profile" component={ProfileScreen} 
      
      options={{

        tabBarIcon:({color: String}) => (
          < AntDesign name="profile" color={'black'} size={18} />
        ),

      }}
      
      />
      <Tab.Screen name="Shopping Cart" component={ShoppingCart} 
      
      options={{

        tabBarIcon:({color: String}) => (
          < AntDesign name="shoppingcart" color={'black'} size={18} />
        ),

      }}
      />
      <Tab.Screen name="Menu" component={MenuScreen} 
      
      options={{

        tabBarIcon:({color: String}) => (
          < Entype name="menu" color={'black'} size={18} />
        ),

      }}

      />
    </Tab.Navigator>
  );
}


export default BottomTabNav;