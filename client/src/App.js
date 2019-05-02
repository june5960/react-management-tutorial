import React, { Component } from "react";
import "./App.css";
import Customer from "./components/Customer";
import CustomerAdd from "./components/Customeradd"
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import { withStyles } from "@material-ui/core/styles";
import CircularProgress from '@material-ui/core/CircularProgress';


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
  },
  progress: {
    margin: theme.spacing.unit * 2,
  }
});

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      customers: '',
      completed:0
    }
  }

  stateRefresh = () =>{
    this.setState({
      customers: '',
      completed:0
    });
    this.callApi()
      .then(res => this.setState({customer:res}))
      .catch(err => console.log(err));
  }

  componentDidMount() {
    this.timer = setInterval(this.progress, 20);
    this.callApi()
      .then(res => this.setState({customer:res}))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/customers');
    const body = await response.json();
    return body;
  }

  progress = () => {
    const { completed } = this.state; //값을 가져옴
    this.setState({ completed: completed >= 100 ? 0 : completed + 1 });
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
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
              <CustomTableCell>설정</CustomTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.customer? this.state.customer.map(c => {
              return (
                <Customer stateRefresh={this.stateRefresh}
                  key={c.id}
                  id={c.id}
                  image={c.image}
                  name={c.name}
                  birthday={c.birthday}
                  gender={c.gender}
                  job={c.job}
                />
              );
            }): 
            <TableRow>
              <TableCell colSpan="6" align="center">
                <CircularProgress className={classes.progress} variant="determinate" value={this.state.completed}/>
              </TableCell>
            </TableRow>
            }
          </TableBody>
        </Table>
        </Paper>
        <CustomerAdd stateRefresh={this.stateRefresh}></CustomerAdd>
      </div>
    );
  }
}
export default withStyles(styles)(App);
