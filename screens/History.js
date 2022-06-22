import React, { useState } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  RefreshControl,
  LogBox,
} from "react-native";
import { Table, TableWrapper, Row, Cell } from "react-native-table-component";
import Space from "../components/Space";
import { useGetTestingHistoryQuery } from "../store/api/covidApi";
import { useSelector } from "react-redux";
import { selectAuthSlice } from "../store/slice";
import Loader from "../components/Loader";
import StyledModal from "../components/StyledModal";
LogBox.ignoreLogs(["Invalid prop"]);

const element = (data, setState) => (
  <TouchableOpacity
    onPress={() => {
      setState({
        uri: data,
        visible: true,
      });
    }}
  >
    <View style={styles.btn}>
      <Text style={styles.btnText}>See</Text>
    </View>
  </TouchableOpacity>
);

const labels = ["ID", "Type", "Result", "Sample"];
const transformData = (data, index, setState) => {
  if (index === 2) {
    return data ? "Covid" : "Normal";
  }
  if (index == 3) {
    return element(data, setState);
  } else {
    return data;
  }
};

const History = () => {
  const { userMeta } = useSelector(selectAuthSlice);
  const { data, isLoading, refetch } = useGetTestingHistoryQuery(userMeta?.id);
  const [modalState, setModalState] = useState({
    visible: false,
    uri: "",
  });
  return (
    <ScrollView
      style={styles.container}
      refreshControl={
        <RefreshControl refreshing={isLoading} onRefresh={refetch} />
      }
    >
      <StyledModal
        uri={modalState.uri}
        visible={modalState.visible}
        toggleState={setModalState}
      />
      <Space height={30} />
      <View>
        <Text style={styles.headFont}>History</Text>
      </View>
      <Space height={30} />
      {!isLoading ? (
        <Table borderStyle={{ borderColor: "transparent", borderRadius: 10 }}>
          <Row data={labels} style={styles.head} textStyle={styles.textHead} />
          {data?.data.map((rowData, index) => (
            <TableWrapper key={index} style={styles.row}>
              {Object.values(rowData).map((cellData, cellIndex) => (
                <Cell
                  key={cellIndex}
                  data={transformData(cellData, cellIndex, setModalState)}
                  textStyle={styles.textCell}
                />
              ))}
            </TableWrapper>
          ))}
        </Table>
      ) : (
        <Loader visible={isLoading} />
      )}
    </ScrollView>
  );
};

export default History;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: "#fff" },
  head: { height: 40, backgroundColor: "#767E85" },
  textHead: { margin: 8, color: "#fff" },
  textCell: { margin: 8 },
  row: { flexDirection: "row", backgroundColor: "#F0F1F2" },
  btn: { width: 58, height: 18, backgroundColor: "#2386F6", borderRadius: 5 },
  btnText: { textAlign: "center", color: "#fff" },
  headFont: {
    fontSize: 20,
    paddingTop: 10,
    color: "black",
    fontWeight: "bold",
    paddingLeft: 5,
  },
});
