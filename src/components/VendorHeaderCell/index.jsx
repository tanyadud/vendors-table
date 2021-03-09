import styles from "./styles";
import React from "react";

const VendorHeaderCell = ({ id, title, imgUrl, onDelete }) => (
    <div style={styles.headerCellContainer}>
        <span onClick={() => onDelete(id)} style={styles.headerCellIcon}>+</span>
        <div style={styles.headerCellLogoContainer}>
            <img style={styles.headerCellLogo} src={imgUrl}/>
        </div>
        <p style={styles.headerCellLTitle}>{title}</p>
    </div>
);

export default VendorHeaderCell
