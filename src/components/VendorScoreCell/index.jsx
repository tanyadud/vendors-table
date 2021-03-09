import React from "react";
import { Progress } from 'antd';
import styles from "./styles";

const VendorScoreCell = ({ value }) => (
    <div style={styles.scoreCellContainer}>
        <Progress
            type="circle"
            percent={value * 10}
            width={40}
            strokeLinecap={'#c5e1a5'}
            format={() => value}
        />
    </div>
);

export default VendorScoreCell
