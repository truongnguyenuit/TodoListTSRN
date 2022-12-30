import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Page1 from '../pages/DailyTasks/DailyTasksPage';
import Page2 from '../pages/Dashboard/DashboardPage';
import Page3 from '../pages/Page3';
import Page4 from '../pages/Page4';

const Tab = createBottomTabNavigator();

export function MyTabs() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Dashboard" component={Page1} />
      <Tab.Screen name="Daily Tasks" component={Page2} />
      <Tab.Screen name="Details" component={Page3} />
      <Tab.Screen name="Profile" component={Page4} />
    </Tab.Navigator>
  );
}

function AppNavigator() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
export default AppNavigator;
