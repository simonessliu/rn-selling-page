import React from 'react';
import {
    StyleSheet,
    Text, Image,
    View, TouchableOpacity,
    ScrollView, FlatList
} from 'react-native';

class PendingScreen extends React.Component {
    constructor(){
        super()
        this.state = {
            data:[
                {
                    title:'Nike Waffle Blue Multi',
                    subtitle:'US8.5 / $1050',
                    lowestP:'Current Lowest Price $908'   
                },
                {
                    title:'Nike AJ1 Yellow Black',
                    subtitle:'US8.5 / $1050',
                    lowestP:'Current Lowest Price $908'   
                },
                
            ],
            checked:0
        }
    }
    render(){
        return (
            
                <View style = {styles.background}>
                    <FlatList 
                        data={this.state.data}
                        keyExtractor={blog => blog.title }
                        renderItem={({item})=>{
                            return (                         
                                <View style = {styles.box}>
                                    <View>
                                        <TouchableOpacity style={styles.btn}>
                                            <View style={styles.btn_content}>
                                                <Text style={styles.text}>{item.title}</Text>
                                                <Text style={styles.text_subtext}>{item.subtitle}</Text>
                                            </View>
                                            <View style={styles.btn_content_bottom}>
                                                <Text style={styles.text_bottom}>{item.lowestP}</Text>
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