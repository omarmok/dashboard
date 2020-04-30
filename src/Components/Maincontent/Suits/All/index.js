import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Table from "react-bootstrap/Table";
import DetailsImage from "../../../../images/document.svg";
import "./style.css";
class All extends Component {
  handleClick = (data) => {
    var allData = this.state.all;
    var index = -1;
    for (var i = 0; i < allData.length; i++) {
      if (allData[i].id === data) {
        index = i;
        break;
      }
    }
    alert(index);
    this.setState({
      all: [this.state.all.splice(index, 1)],
    });
  };

  state = {
    all: [],
  };
  componentDidMount() {
    axios.get("https://api.npoint.io/7c336023e3194e99e27c").then((res) => {
      this.setState({
        all: res.data.all,
      });
    });
  }

  render() {
    const { all } = this.state;

    const allcontainer = all.map((allContent) => {
      return (
        <tr key={allContent.id}>
          <td> {allContent.no} </td> <td> {allContent.kind} </td>{" "}
          <td> {allContent.claimant} </td> <td> {allContent.defendant} </td>{" "}
          <td> {allContent.status} </td> <td> {allContent.dateupdate} </td>{" "}
          <td>
            <Link to="/" title="">
              <img
                src={DetailsImage}
                alt="DetailsImage"
                className="DetailsImage"
              />
            </Link>{" "}
          </td>{" "}
          <td>
            <button
              className="btn btn-danger"
              onClick={() => this.handleClick(allContent.id)}
            >
              {" "}
              حذف{" "}
            </button>
          </td>{" "}
        </tr>
      );
    });

    return (
      <Table responsive>
        <thead>
          <tr>
            <th> رقم الدعوي </th> <th> نوع الدعوي </th> <th> المدعي </th>{" "}
            <th> المدعي علية </th> <th> حالة الطلب </th>{" "}
            <th> تاريخ زخر تحديث </th> <th> التفاصيل </th> <th> حذف </th>{" "}
          </tr>{" "}
        </thead>{" "}
        <tbody> {allcontainer} </tbody>{" "}
      </Table>
    );
  }
}

export default All;
