import React, { Component } from "react";

import { Link } from "react-router-dom";
import Table from "react-bootstrap/Table";
import DetailsImage from "../../../../images/document.svg";
import "./style.css";
class All extends Component {
  // handleClick = (data) => {
  //   var allData = this.state.all;
  //   var index = -1;
  //   for (var i = 0; i < allData.length; i++) {
  //     if (allData[i].id === data) {
  //       index = i;
  //       break;
  //     }
  //   }
  //   alert(index);
  //   this.setState({
  //     all: [this.state.all.splice(index, 1)],
  //   });
  // };

  state = {
    all: [],
  };
  componentDidMount() {
    fetch('https://api.npoint.io/2f62dad45c2ddd7e9ec0')
      .then(res => res.json())
      .then(data => this.setState({ all: data.all, }));

  };




  render() {
    const { all } = this.state;

    // const deletetabelrow = (id) => {
    //   let all = this.state.all;
    //   let i = all.findIndex(all => all.id === id)
    //   all.splice(i, 1)
    //   this.setState({ all })
    //   console.log(id)

    // }



    const deletetabelrow = (id) => {
      let all = this.state.all.filter(all => {
        return all.id !== id
      })

      this.setState({ all })
      console.log(id)
      alert('هل انت متاكد من  الحذف ');

    }


    const allcontainer = all.map((allContent) => {
      return (
        <tr key={allContent.id}>
          <td> {allContent.no} </td>
          <td> {allContent.kind} </td>
          <td> {allContent.claimant} </td>
          <td> {allContent.defendant} </td>
          <td> {allContent.status} </td>
          <td> {allContent.dateupdate} </td>
          <td>
            <Link to="/" title="" > <img src={DetailsImage} alt="DetailsImage" className="DetailsImage" />
            </Link>
          </td>
          <td>
            <button className="btn btn-danger" onClick={() => deletetabelrow(allContent.id)}> حذف</button>
          </td>
        </tr>
      );
    }


    );


    return (
      <Table responsive>
        <thead>
          <tr>
            <th> رقم الدعوي </th>
            <th> نوع الدعوي </th>
            <th> المدعي </th>
            <th> المدعي علية </th>
            <th> حالة الطلب </th>
            <th> تاريخ زخر تحديث </th>
            <th> التفاصيل </th>
            <th> حذف </th>
          </tr>
        </thead>
        <tbody> {allcontainer} </tbody>
      </Table>
    );
  }
}

export default All;
