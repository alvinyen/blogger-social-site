import React, { Component } from 'react';
import TextField from 'material-ui/TextField';

class CommentItem extends Component {
    // constructor (props) {
    //     super(props);
    //     this.state = {
    //         current: (new Date()),
    //     };
    // }

    getStyles = () => {
        return {
            container: {
                padding: '8px',
                paddingBottom: '0px',
                // border: 'yellow solid 5px',
                borderBottom: 'solid 1px #CCE0FE',
                // borderRadius: '0 0 3px 3px',
                textAlign: 'left',

                fontSize: '18px',
                lineHeight: '18px',
                color: 'rgb(102, 102, 102)',
            },
            top: {
                fontSize: '14px',
                display: 'flex',
                justifyContent: 'space-between',
                color: '#16AFCA',
            }
        };
    }

    timeAgo = (current, before) => {
        if (!current instanceof Date || !current instanceof Date) {
            return 'pls pass the right Date Object into timeAgo function';
        }

        const diff = current - before;
    
        

        const msPerSecond = 1000;
        const msPerMin = msPerSecond * 60;
        const msPerHour = msPerMin * 60;
        const msPerDay = msPerHour * 24;   
        const msPerMonth = msPerDay * 30;
        const msPerYear = msPerDay * 365;
        
        

        if (diff < msPerSecond) {
            return 'just now';
        } else if (diff < msPerMin) {
            return ` ${Math.round(diff / msPerSecond)} seconds ago.`;
        } else if (diff < msPerHour) {
            return ` ${Math.round(diff / msPerMin)} minutes ago.`;
        } else if (diff < msPerDay) {
            return ` ${Math.round(diff / msPerHour)} hours ago.`;
        } else if (diff < msPerMonth) {
            return ` ${Math.round(diff / msPerDay)} days ago.`;
        } else if (diff < msPerYear) {
            return ` ${Math.round(diff / msPerMonth)} months ago.`;
        } else {
            return ` ${Math.round(diff / msPerYear)} years ago.`;
        }
    }

    render() {
        const styles = this.getStyles();
        // name time msg
        // const testMsg = `sdfsdfsdfsdfsdfdfsdf\n
        //     sdfsdfsdf\n
        //     sdfsdf`;

        const { name, when, comment, id, } = this.props;
        // const { current } = this.state;
        // console.log(this.props.params.post_id);
        // console.log(typeof (new Date(when)));
        // console.log((new Date(when)));

        const date = new Date(when);  
        const options = {  
            // weekday: "long", 
            year: 'numeric', 
            month: 'short',  
            day: 'numeric', 
            hour: '2-digit', 
            minute: '2-digit',  
        };  

        return (
            <div style={styles.container}>
                <div style={styles.top}>
                    <span>{name}</span>
                    <span>{ date.toLocaleTimeString("en-us", options) }</span>
                </div>
                <TextField 
                    id={id.toString()}
                    value={comment}
                    multiLine={true}
                    underlineShow={false}
                    readOnly
                />
            </div>
        );
    }
}

export default CommentItem;
