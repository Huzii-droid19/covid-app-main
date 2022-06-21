import React, { Component } from 'react';
import { StyleSheet, View, ScrollView, Text, TouchableOpacity, Alert } from 'react-native';
import { Table, TableWrapper, Row, Cell } from 'react-native-table-component';
import Space from '../components/Space';

export default class ExampleFour extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['Serial No.', 'Type', 'Result', 'Sample'],
      tableData: [
        ['1', 'HRCT', 'Positive', '4'],
        ['2', 'X-Ray', 'Negative', 'd'],
        ['3', 'HRCT', 'Positive', '4'],
        ['4', 'X-Ray', 'Negative', '4'],
        ['5', 'HRCT', 'Positive', 'd'],
        ['6', 'X-Ray', 'Negative', '4'],
        ['7', 'HRCT', 'Positive', '4'],
        ['8', 'HRCT', 'Positive', 'd'],
        ['9', 'HRCT', 'Positive', '4'],
        ['10', 'X-Ray', 'Negative', '4'],
        ['11', 'HRCT', 'Positive', 'd'],
        ['12', 'HRCT', 'Positive', '4'],
        ['13', 'X-Ray', 'Negative', '4'],
        ['14', 'HRCT', 'Positive', 'd'],
        ['15', 'HRCT', 'Positive', '4'],
        ['16', 'X-Ray', 'Negative', 'd']
      ]
    }
  }

  _alertIndex(index) {
    Alert.alert(`This is row ${index + 1}`);
  }

  render() {
    const state = this.state;
    const element = (data, index) => (
      <TouchableOpacity onPress={() => this._alertIndex(index)}>
        <View style={styles.btn}>
          <Text style={styles.btnText}>See</Text>
        </View>
      </TouchableOpacity>
    );

    return (
      <ScrollView style={styles.container}>
        <Space height={30} />
        <View>
          <Text style={styles.headFont}>
            History
          </Text>
        </View>
        <Space height={30} />
        <Table borderStyle={{borderColor: 'transparent', borderRadius: 10}}>
          <Row data={state.tableHead} style={styles.head} textStyle={styles.textHead}/>
          {
            state.tableData.map((rowData, index) => (
              <TableWrapper key={index} style={styles.row}>
                {
                  rowData.map((cellData, cellIndex) => (
                    <Cell key={cellIndex} data={cellIndex === 3 ? element(cellData, index) : cellData} textStyle={styles.textCell}/>
                  ))
                }
              </TableWrapper>
            ))
          }
        </Table>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff', },
  head: { height: 40, backgroundColor: '#767E85' },
  textHead: { margin: 8, color: '#fff' },
  textCell: { margin: 8, },
  row: { flexDirection: 'row', backgroundColor: '#F0F1F2' },
  btn: { width: 58, height: 18, backgroundColor: '#2386F6',  borderRadius: 5 },
  btnText: { textAlign: 'center', color: '#fff' },
  headFont: {
    fontSize: 17,
    paddingTop: 10,
    color: "black",
    fontWeight: "bold",
    paddingLeft: 5,
  },
});