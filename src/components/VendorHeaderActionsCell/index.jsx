import React from "react";
import {
    PlusCircleFilled
} from '@ant-design/icons';
import styles from './styles'

const VendorHeaderActionsCell = ({ title, onAdd }) => (
    <div style={styles.headerCellContainer}>
        <button style={styles.headerCellButton} onClick={onAdd}>
            <PlusCircleFilled />
        </button>
        <p style={styles.headerCellLTitle}>{title}</p>
    </div>
);

export default VendorHeaderActionsCell
