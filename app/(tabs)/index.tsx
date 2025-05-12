import { FlatList, StyleSheet, useWindowDimensions, View } from "react-native";

import MaterialSymbols from "@react-native-vector-icons/material-symbols";
import MaterialSymbolsGlyphmap from "@react-native-vector-icons/material-symbols/glyphmaps/MaterialSymbols.json";

const colors = ["red", "blue", "green", "yello", "#F6F666"];
export default function HomeScreen() {
  const { width } = useWindowDimensions();
  const numOfCols = 6;
  const iconsSize = width / numOfCols;
  return (
    <FlatList
      data={Object.keys(MaterialSymbolsGlyphmap)}
      numColumns={numOfCols}
      removeClippedSubviews
      renderItem={({ item, index }) => {
        return (
          <View style={{ margin: 10 }}>
            <MaterialSymbols
              color={index < 3 ? "red" : "black"}
              name={item as keyof typeof MaterialSymbolsGlyphmap}
              size={iconsSize - 6}
            />
          </View>
        );
      }}
    />
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
