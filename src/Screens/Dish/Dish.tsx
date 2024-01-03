import { i18n, LocalizationKey } from "@/Localization";
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import { HStack, Spinner, Heading } from "native-base";
import { User } from "@/Services";
import {
  SafeAreaView,
  FlatList,
  Dimensions,
  Image,
} from 'react-native';
import { RootScreens } from "..";
import Cake from "../../../assets/cake.svg";
import Ingridient from "../../../assets/ingridient1.svg";

export interface IDishProps {
  onNavigate: (string: RootScreens) => void,
  data: User | undefined;
  isLoading: boolean;
}
const { width, height } = Dimensions.get('window');
const DATA = [
  {
    id: '1',
    title: 'ingridient 1',
  },
  {
    id: '2',
    title: 'ingridient 2',
  },
  {
    id: '3',
    title: 'ingridient 3',
  },
];
type ItemProps = {title: string};

const Item = ({title}: ItemProps) => (
  <View style={styles.item}>
    <Ingridient height={120} width={120}></Ingridient>
    <Text style={styles.title}>{title}</Text>
  </View>
);

export const Dish = (props: IDishProps) => {
  
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
        <View>
        <Cake width={width}></Cake>
        <Heading>Thermomix pancakes</Heading>
        <Text>This is my kind of breakfast egg sandwich and it takes under 5 minutes to make</Text>
        <Heading>Ingridients</Heading>
        <View style={styles.ingridients}>
            <FlatList
        data={DATA}
        renderItem={({item}) => <Item title={item.title} />}
        keyExtractor={item => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
      </View>
      <Heading>Tutorials</Heading>
      <Text>Step 1:</Text>
      <Text>Do somthings</Text>
      <Text>Step 2:</Text>
      <Text>Do somthings</Text>
      <Text>Step 3:</Text>
      <Text>Do somthings</Text>
        </View>
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
    backgroundColor: '#CCCCCC',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  image: {
    height: 50,
    width: 50,
  },
  ingridients: {
    height: height * 0.25,
    width: width,
    backgroundColor: "#fff", 
  },
});
