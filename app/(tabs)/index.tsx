import { FlatList, StyleSheet, useWindowDimensions, View } from 'react-native';

import Lucide from "@react-native-vector-icons/lucide";
import LucideGlyphmap from "@react-native-vector-icons/lucide/glyphmaps/Lucide.json";

const colors =["red", "blue","green","yello" ,"#F6F666"]
export default function HomeScreen() {
  const { width } = useWindowDimensions();
  const numOfCols = 6
  const iconsSize = width / numOfCols
  return (
    <FlatList
      data={Object.keys(LucideGlyphmap)}
      windowSize={9}
      numColumns={numOfCols}
      maxToRenderPerBatch={5}
      updateCellsBatchingPeriod={250}
      renderItem={({ item }) => {
        return <View style={{margin:10}}>
          <Lucide name={item} size={iconsSize - 6} />
        </View>
      }}
    />


  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
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
    position: 'absolute',
  },
});

