import React from 'react';

const getStyles = () => ({
    announcementBox: {
        fontFamily: '微軟正黑體',
        margin: '0px',
        padding: '0 10px',
        lineHeight: '30px',
        height: '30px',
        background: 'red',
        textAlign: 'center',
        color: 'white',
        minWidth: '400px',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
    }
}) ;

const AnnouncementBox = (props) => {
    const styles = getStyles();
    return(
        <div style={styles.announcementBox} title="請使用帳號alvinyen及密碼cestlavi登入系統，以測試管理員才有的增刪改等功能">
            請使用帳號alvinyen及密碼cestlavi登入系統，以測試管理員才有的增刪改等功能
        </div>
    );
};

export default AnnouncementBox;