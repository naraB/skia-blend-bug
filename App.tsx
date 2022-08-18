import React from "react";
import { StyleSheet, View } from "react-native";
import {
  Blend,
  Canvas,
  RadialGradient,
  Rect,
  vec,
} from "@shopify/react-native-skia";

export default function App() {
  return (
    <View style={styles.container}>
      <Canvas style={{ height: "100%", width: "100%" }}>
        <Rect x={0} y={0} width={256} height={256}>
          <Blend mode="colorDodge">
            <RadialGradient
              r={128}
              c={vec(128, 128)}
              colors={["blue", "yellow"]}
            />
            <RadialGradient
              r={128}
              c={vec(128, 128)}
              colors={["red", "green"]}
            />
            <RadialGradient
              r={128}
              c={vec(128, 128)}
              colors={["black", "black"]}
            />
          </Blend>
        </Rect>
      </Canvas>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
