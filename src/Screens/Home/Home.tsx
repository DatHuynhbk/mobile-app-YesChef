import { i18n, LocalizationKey } from "@/Localization";
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import { HStack, Spinner, Heading, Button } from "native-base";
import { User } from "@/Services";
import {
  SafeAreaView,
  FlatList,
  Image,
  Dimensions,
  TouchableOpacity
} from 'react-native';
import { RootScreens } from "..";
import Logo from "../../../assets/logo.svg"

export interface IHomeProps {
  onNavigate: (string: RootScreens) => void,
  data: User | undefined;
  isLoading: boolean;
}
const { width, height } = Dimensions.get('window');
const DATA = [
  {
    id: '1',
    title: 'First Dish',
  },
  {
    id: '2',
    title: 'Second Dish',
  },
  {
    id: '3',
    title: 'Third Dish',
  },
  {
    id: '4',
    title: 'Four Dish',
  },
  {
    id: '5',
    title: 'Five Dish',
  },
];

export const Home = (props: IHomeProps) => {

  type ItemProps = {title: string};

const Item = ({title}: ItemProps) => (
  <View>
    <TouchableOpacity
    
                style={styles.item}
                onPress={() => props.onNavigate(RootScreens.DISH)}>
                  <Image
        style={styles.image}
        source={require('../../../assets/dish.png')}
      />
                <Text style={{fontWeight: 'bold', fontSize: 15}}>
                {title}
                </Text>
              </TouchableOpacity>
  </View>
);
const Header: React.FC = () => {
  return (
    <View style={styles.header}>
     <Logo height={60} width={120}></Logo>
    </View>
  );
};
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {props.isLoading ? (
        <HStack space={2} justifyContent="center">
          <Spinner accessibilityLabel="Loading posts" />
          <Heading color="primary.500" fontSize="md">
            {i18n.t(LocalizationKey.LOADING)}
          </Heading>
        </HStack>
      ) : (
        <>
  
          <Header></Header>
     
      <FlatList
        data={DATA}
        renderItem={({item}) => <Item title={item.title} />}
        keyExtractor={item => item.id}
      />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  item: {
    flexDirection: 'row',
    backgroundColor: '#CCCCCC',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    width: width * 0.9,
  },
  title: {
    fontSize: 32,
  },
  image: {
    height: 50,
    width: 50,
  },
  header: {
    alignItems: "center",
  },
});
