import ContentDrawer from "@/src/components/layout/ContentDrawer";
import ContentWrapper from "@/src/components/layout/ContentWrapper";
import { StyledText } from "@/src/components/shared/StyledText";
import Colors from "@/src/constants/Colors";
import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import { BarChart } from "react-native-chart-kit";

export default function MyStore() {
  return (
    <View style={{ flex: 1, backgroundColor: Colors.rootBackground }}>
      <ContentWrapper
        headerContent={
          <View style={styles.header}>
            <StyledText style={styles.headerName}>Minha loja</StyledText>
          </View>
        }
      >
        <View>
          <View style={styles.content}>
            <ContentDrawer>
              <View style={styles.counter}>
                <StyledText style={{ fontSize: 20 }}>
                  Visitantes hoje
                </StyledText>

                <StyledText
                  style={{ fontSize: 28, marginTop: 10, color: Colors.primary }}
                >
                  1.408
                </StyledText>
              </View>
            </ContentDrawer>

            <ContentDrawer>
              <StyledText>Proporção média de compras por segmento</StyledText>

              <BarChart
                data={{
                  labels: [
                    "Fewer-Opportunities",
                    "Career-Focused",
                    "Standard",
                    "Well-Off",
                  ],
                  datasets: [
                    {
                      data: [
                        0.0316,
                        0.1801,
                        35.6367,
                        0.7378,
                        1.2512,
                        1.3886, // A values
                        0.8763,
                        0.9985,
                        29.0029,
                        1.0677,
                        0.6303,
                        0.4183, // B values
                        0.4833,
                        0.6803,
                        55.881,
                        2.1301,
                        1.0929,
                        1.0781, // C values
                        0.4033,
                        0.043,
                        34.6897,
                        0.7422,
                        0.2554,
                        0.0597, // D values
                      ],
                    },
                  ],
                }}
                width={380}
                height={320}
                yAxisLabel=""
                yAxisSuffix=""
                yAxisInterval={1}
                chartConfig={{
                  backgroundColor: "#FFFF",
                  backgroundGradientFrom: "#FFFF",
                  backgroundGradientTo: "#FFFF",
                  decimalPlaces: 4,
                  color: (opacity = 1) => `rgba(104, 33, 156, ${opacity})`,
                  labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                  style: {
                    borderRadius: 16,
                  },
                  propsForDots: {
                    r: "6",
                    strokeWidth: "2",
                    stroke: "#68219c",
                  },
                }}
                style={{
                  marginVertical: 8,
                  borderRadius: 16,
                }}
              />
            </ContentDrawer>
          </View>
        </View>
      </ContentWrapper>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  headerName: {
    fontSize: 24,
    color: "white",
  },

  content: {
    display: "flex",
    gap: 20,
  },

  counter: {
    display: "flex",
    flexDirection: "column",
  },
});
