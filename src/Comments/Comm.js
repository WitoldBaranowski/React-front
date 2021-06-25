import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList
} from 'react-native';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';



const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  button3: {
    margin: theme.spacing.unit,
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
  iconSmall: {
    fontSize: 20,
  },
});



export default class Comments extends Component {

  async comms(e){
    e.preventDefault();
    const requestOptions = {
      method: 'POST',
      headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username:this.props.usernam.usernam.usernam,
        comment: this.state.comment
      })
    };
    const response = await fetch('https://doggysapp.herokuapp.com/comment', requestOptions);
    const data = await response.json();
    this.setState(data);
  }
  async comms1(){
    const requestOptions = {
      method: 'POST',
      headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        comment: this.state.comment
      })
    };
    const response = await fetch('https://doggysapp.herokuapp.com/comment', requestOptions);
    const data = await response.json();
    this.setState(data);
  }
  async commdel(){
    const requestOptions = {
      method: 'POST',
      headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: this.props.usernam.usernam.usernam
      })
    };
    const response = await fetch('https://doggysapp.herokuapp.com/comment/del', requestOptions);
    const data = await response.json();
    this.setState(data);
  }

  async updatecom(e){
    e.preventDefault();
    const requestOptions = {
      method: 'POST',
      headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username:this.props.usernam.usernam.usernam,
        comment: this.state.comment
      })
    };
    const response = await fetch('https://doggysapp.herokuapp.com/comment/change', requestOptions);
    const data = await response.json();
    this.setState(data);
  }



   constructor(props) {
    super(props);
    this.state={data:[]}
    this.comms1();
    this.state = {
      comment : ''
    }
    
    this.updateInput = this.updateInput.bind(this);
  }  

  updateInput(event){
    this.setState({comment : event.target.value})
    }

  render() {

    return (
      <React.Fragment>
        <Grid>
        <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="comment"
            label="Dodaj coś od siebie"
            name="comment"
            autoComplete="comment"
            autoFocus
            onChange={this.updateInput}
          />
          <span><Button variant="contained" color="primary" className={styles.button} onClick={(e) => {
      this.comms(e);
   }} >
              Opublikuj
            </Button></span> <span><Button variant="contained" color="secondary" className={styles.button} onClick={(e) => {
      this.commdel(e);
   }} >
              Cofnij
            </Button></span> 
            <span>&ensp;<Button variant="contained" color="green" className={styles.button3} onClick={(e) => {
      this.updatecom(e);
   }} >
              Zmień
            </Button></span>
          
          </Grid>
          <FlatList
        style={stylesold.root}
        data={this.state.data}
        extraData={this.state}
        ItemSeparatorComponent={() => {
          return (
            <View style={stylesold.separator}/>
          )
        }}
        keyExtractor={(item)=>{
          return item.id;
        }}
        renderItem={(item) => {
          const Notification = item.item;
          return(
            <View style={stylesold.container}>
              <TouchableOpacity onPress={() => {}}>
                <Image style={stylesold.image} source={{uri: Notification.doggolink}}/>
              </TouchableOpacity>
              <View style={stylesold.content}>
                <View style={stylesold.contentHeader}>
                  <Text  style={stylesold.name}>{Notification.username}</Text>
                    <ChatBubbleIcon/>
                </View>
                <Text rkType='primary3 mediumLine'>{Notification.comment}</Text>
              </View>
            </View>
          );
        }}/> 
    </React.Fragment>
      

      
    );
  }
}

const stylesold = StyleSheet.create({
  root: {
    backgroundColor: "#ffffff",
    marginTop:10,
  },
  
  container: {
    paddingLeft: 19,
    paddingRight: 16,
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'flex-start'
  },
  content: {
    marginLeft: 16,
    flex: 1,
  },
  contentHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6
  },
  separator: {
    height: 1,
    backgroundColor: "#CCCCCC"
  },
  image:{
    width:45,
    height:45,
    borderRadius:20,
    marginLeft:20
  },
  time:{
    fontSize:11,
    color:"#808080",
  },
  name:{
    fontSize:16,
    fontWeight:"bold",
  },
}); 