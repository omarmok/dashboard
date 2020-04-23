import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Table from "react-bootstrap/Table";
import DetailsImage from "../../../../images/document.svg";
import "./style.css";
class Checking extends Component {
  handleClick() {
    console.log("this is:", this);
  }
  state = {
    all: [],
  };
  componentDidMount() {
    axios.get("https://api.npoint.io/7c336023e3194e99e27c").then((res) => {
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
          <td>
            <Link to="/" title="">
              <img
                src={DetailsImage}
                alt="DetailsImage"
                className="DetailsImage"
              />
            </Link>
          </td>
          <td>
            <button
              className="btn btn-danger"
              onClick={() => this.handleClick()}
            >
              حذف
            </button>
          </td>
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
            <th>حذف</th>
          </tr>
        </thead>
        <tbody>{allcontainer}</tbody>
      </Table>
    );
  }
}

export default Checking;
