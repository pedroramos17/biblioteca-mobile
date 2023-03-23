import React from "react";
import {
  Text,
  Image,
  View,
  ScrollView,
  StyleSheet,
  StatusBar,
  SafeAreaView,
} from "react-native";

const books = [
  { id: 1, title: "Livro", src: require("../../../assets/livroSuspense.jpg") },
  {
    id: 2,
    title: "Livro",
    src: require("../../../assets/revolucao-dos-bichos-george-orwell.jpg"),
  },
  { id: 3, title: "Livro", src: require("../../../assets/livroSuspense.jpg") },
  { id: 4, title: "Livro", src: require("../../../assets/livroSuspense.jpg") },
  { id: 5, title: "Livro", src: require("../../../assets/livroSuspense.jpg") },
  { id: 6, title: "Livro", src: require("../../../assets/livroSuspense.jpg") },
];

export default function Home() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <Text style={styles.textTitles}>Títulos recentes</Text>
        <ScrollView horizontal={true}>
          <BookCard />
        </ScrollView>
        <Text style={styles.textTitles}>Para explorar</Text>
        <ScrollView horizontal={true}>
          <BookCard />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

export function BookCard() {
  return (
    <View style={styles.mediaScrollerContainer}>
      {books.map((book) => (
        <View key={book.id} style={styles.bookListContainer}>
          <Image source={book.src} style={styles.image} resizeMode="contain" />
          <Text style={styles.imageTitle}>{book.title}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    fontFamily: "sans-serif",
  },
  mediaScrollerContainer: {
    flex: 1,
    flexDirection: "row",
    maxHeight: 244,
  },
  textTitles: {
    fontSize: 30,
    fontWeight: "600",
    marginBottom: 11,
  },
  bookListContainer: {
    marginHorizontal: 10,
    borderRadius: 10,
  },
  image: {
    height: 220,
    width: 120,
    borderRadius: 2,
    alignItems: "center",
  },
  imageTitle: {
    position: "absolute",
    bottom: 0,
    paddingBottom: 2,
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
  },
});
