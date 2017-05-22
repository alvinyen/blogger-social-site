import React from 'react' ;

const getStyles = () => ({
    announcementBox: {
        fontFamily: '微軟正黑體',
        margin: '0px',
        lineHeight: '30px',
        height: '30px',
        background: 'red',
        textAlign: 'center',
        color: 'white',
        minWidth: '780px'
    }
}) ;

const AnnouncementBox = (props) => {
    const styles = getStyles() ;
    return(
        <div style={styles.announcementBox}>
            請使用帳號alvinyen及密碼cestlavi登入系統，以測試管理員才有的增刪改查功能
        </div>
    );
} ;

export default AnnouncementBox ;