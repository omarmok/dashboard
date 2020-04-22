import React, { Component } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";

class All extends Component {
  state = {
    all: [],
  };
  componentDidMount() {
    axios.get("https://api.npoint.io/d0d829ef306f7753938f").then((res) => {
      this.setState({ all: res.data.all });
    });
  }

  render() {
    const { all } = this.state;

    const allcontainer = all.map((allContent) => {
      return (
        <tr key={allContent.id}>
          <td>{allContent.no}</td>
          <td>{allContent.kind}</td>
          <td>{allContent.claimant}</td>
          <td>{allContent.defendant}</td>
          <td>{allContent.status}</td>
          <td>{allContent.dateupdate}</td>
          <td>{allContent.details}</td>
        </tr>
      );
    });

    return (
      <Table responsive>
        <thead>
          <tr>
            <th>رقم الدعوي</th>
            <th>نوع الدعوي</th>
            <th>المدعي</th>
            <th>المدعي علية</th>
            <th>حالة الطلب</th>
            <th>تاريخ زخر تحديث</th>
            <th>التفاصيل</th>
          </tr>
        </thead>
        <tbody>{allcontainer}</tbody>
      </Table>
    );
  }
}

export default All;
