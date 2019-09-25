import React, {useEffect, useState} from 'react';
import {
    StyleSheet, Button,
    Text, Image,
    View, TouchableOpacity,
    ScrollView, FlatList
} from 'react-native';
import yelp from '../api/yelp';

class PendingScreen extends React.Component {

    constructor() {
        super();
        this.state = {
            fetching_from_server:false,
            isListEnd:false,
            results:[]
        };
        this.offset = 1
    }

    componentDidMount() {
        this.loadMoreData()
    }

    loadMoreData = () => {
        if (!this.state.fetching_from_server && !this.state.isListEnd) {
          //On click of Load More button We will call the web API again
          this.setState({fetching_from_server:true}, async () => {
            const response = await yelp.get(`/search`, {
                params:{
                    limit: 50,
                    location:'New York',
                    offset: this.offset
                }
            });
            if (response.data) {
                this.offset = this.offset + 50;
                console.log(this.offset);
                console.log(response.data.total)    
                this.setState({
                    results: [...this.state.results, ...response.data.businesses],
                    fetching_from_server:false
    
                });       
            }else {
                this.setState({
                    fetching_from_server: false,
                    isListEnd: true,
                  });
            }
            
      
          });
        }
      };

    render(){
        return (
                <View style = {styles.background}>
                    <FlatList 
                        data={this.state.results}
                        keyExtractor={(blog) => blog.id}
                        onEndReached={() => this.loadMoreData()}
                        onEndReachedThreshold={0.5}
                        renderItem={({item})=>{
                            return (                         
                                <View style = {styles.box}>
                                    <View>
                                        <TouchableOpacity style={styles.btn}>
                                            <View style={styles.btn_content}>
                                                <Text style={styles.text}>{item.name}</Text>
                                                <Text style={styles.text_subtext}>{item.location.address1}</Text>
                                            </View>
                                            <View style={styles.btn_content_bottom}>
                                                <Text style={styles.text_bottom}>{item.alias}</Text>
                                                <Text style={{fontSize:12, color:'#191919'}}>Details</Text>
                                            </View>                        
                                        </TouchableOpacity>  
                                    </View>
                                </View>
                            )
                        }}
                    />
                </View>
        )      
    }
}


    
const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor:'#E6E6E6'
    },
    img: {
        height: 30,
        width: 30
    },
    btn: {
        flexDirection:'column',
        justifyContent:"space-between"
    },
    text:{
        fontSize: 18
    },  
    text_subtext:{
        fontSize: 14,
        color:'#A2A2A2',
        marginTop: 5
    },
    text_bottom:{
        fontSize: 12,
        color: '#A2A2A2',
    },
    box: {
        marginTop: 10,
        width: '100%',
        flexDirection:'column',
        backgroundColor: '#FFFFFF',
        justifyContent:'space-between',
        paddingVertical: 10,
        paddingHorizontal:25    
    },
    btn_content:{
       flexDirection:'column',
       borderBottomColor:'#E3E3E3',
       borderBottomWidth:1,
       paddingBottom:20
    },
    btn_content_bottom:{
        marginTop: 10,
        padding: 0,
        flexDirection: 'row',
        justifyContent:'space-between'
    },

    text_subheader:{
        color:'white',
        fontSize: 14
    }
    
})

export default PendingScreen;