import React from "react";
import { View, SafeAreaView, ScrollView } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Table, Row, Rows } from "react-native-table-component";

import { data } from "../data";

const Tab = createBottomTabNavigator();

const ListPage = ({ route }) => {
  const { type } = route.params;
  const filteredData = data.filter((item) => item.type === type);

  return (
    <SafeAreaView>
      <ScrollView>
        <View className="flex-1 justify-center bg-white">
          <Table className="border-2 border-cyan-500">
            <Row
              className="h-12 text-center bg-slate-300"
              data={["name", "surename", "company"]}
            />
            {filteredData.map((item) => (
              <Rows
                className="p-1"
                key={item._id}
                data={[[item.name.first, item.name.last, item.company]]}
              />
            ))}
          </Table>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Income"
          component={ListPage}
          initialParams={{ type: "income" }}
        />
        <Tab.Screen
          name="Outcome"
          component={ListPage}
          initialParams={{ type: "outcome" }}
        />
        <Tab.Screen
          name="Investment"
          component={ListPage}
          initialParams={{ type: "investment" }}
        />
        <Tab.Screen
          name="Loan"
          component={ListPage}
          initialParams={{ type: "loan" }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
