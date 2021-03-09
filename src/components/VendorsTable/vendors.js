import VendorHeaderCell from "../../components/VendorHeaderCell";
import BoxIcon from "../images/Box.png";
import DropBoxIcon from "../images/Dropbox.png";
import GoogleIcon from "../images/Googledrive.png";
import React from "react";

export const columns = [
    {
        key: 'company1',
        dataIndex: 'company1',
        // width: 200,
        imgUrl: BoxIcon,
        title: 'Box'
    },
    {
        key: 'company2',
        dataIndex: 'company2',
        // width: 200,
        imgUrl: DropBoxIcon,
        title: 'Dropbox'
    },
    {
        key: 'company3',
        dataIndex: 'company3',
        // width: 200,
        imgUrl: GoogleIcon,
        title: 'Google Drive'
    }
]

export const rows = [
    {
        company1: '6.1',
        company2: '6.0',
        company3: '4.5',
    },
    {
        company1: 'Box is a powerful content management platform. It emphasizes the user experience while providing built-in security and compliance ' +
            'all on an integrated, open platform. ',
        company2: 'Dropbox is a file hosting service, often referred to as a "cloud storage" service.',
        company3: 'Google Drive is a file storage and synchronization service developed by Google.'
    },
    {
        company1: 'Some content 1',
        company2: 'Some content 2',
        company3: 'Some content 3'
    },
];
