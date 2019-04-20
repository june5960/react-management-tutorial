import React, { Component } from "react";
import "./App.css";
import Customer from "./components/Customer";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import { withStyles } from "@material-ui/core/styles";


const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);


const styles = theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 1080
  }
});

const customer = [
  {
    id: 1,
    image: "https://placeimg.com/64/64/1",
    name: "june",
    birthday: "941218",
    gender: "man",
    job: "student"
  },
  {
    id: 2,
    image: "https://placeimg.com/64/64/2",
    name: "kim",
    birthday: "911218",
    gender: "man",
    job: "student2"
  },
  {
    id: 3,
    image: "https://placeimg.com/64/64/3",
    name: "cae",
    birthday: "231218",
    gender: "man",
    job: "student3"
  }
];

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <CustomTableCell>번호</CustomTableCell>
              <CustomTableCell>이미지</CustomTableCell>
              <CustomTableCell>이름</CustomTableCell>
              <CustomTableCell>생일</CustomTableCell>
              <CustomTableCell>성별</CustomTableCell>
              <CustomTableCell>직업</CustomTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {customer.map(c => {
              return (
                <Customer
                  key={c.id}
                  id={c.id}
                  image={c.image}
                  name={c.name}
                  birthday={c.birthday}
                  gender={c.gender}
                  job={c.job}
                />
              );
            })}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}
export default withStyles(styles)(App);
