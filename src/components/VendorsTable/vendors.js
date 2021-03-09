import BoxIcon from "../../assets/images/Box.png";
import DropBoxIcon from "../../assets/images/Dropbox.png";
import GoogleIcon from "../../assets/images/Googledrive.png";

export const columnsData = [
    {
        key: 'actions',
        width: '100px',
        imgUrl: null,
        title: 'Add new vendor'
    },
    {
        key: 'company1',
        width: '100px',
        imgUrl: BoxIcon,
        title: 'Box'
    },
    {
        key: 'company2',
        width: '100px',
        imgUrl: DropBoxIcon,
        title: 'Dropbox'
    },
    {
        key: 'company3',
        width: '100px',
        imgUrl: GoogleIcon,
        title: 'Google Drive'
    }
];

export const rowsData = [
    {
        actions: 'Overall Score',
        company1: '6.1',
        company2: '6.0',
        company3: '4.5',
    },
    {
        actions: 'Company Info',
        company1: 'Box is a powerful content management platform. It emphasizes the user experience while providing built-in security and compliance ' +
            'all on an integrated, open platform. ',
        company2: 'Dropbox is a file hosting service, often referred to as a "cloud storage" service.',
        company3: 'Google Drive is a file storage and synchronization service developed by Google.'
    },
    {
        actions: 'Funding History',
        company1: 'Total funding $110m',
        company2: 'Total funding $170m',
        company3: 'Total funding $36.1m',
        children: [
            {
                actions: 'Founded',
                company1: '2005',
                company2: '2007',
                company3: '1998',
            },
            {
                actions: 'Key investors',
                company1: 'DFG, Scale Venture Partners',
                company2: 'Index Venture, Sequoia',
                company3: 'Sequoia, Kleiner, Index Venture',
            },
            {
                actions: 'Founders',
                company1: 'Aeron Leviel, Dilon Smith',
                company2: 'Arash Ferdoswi',
                company3: 'Larry Page, Sergey Brin',
            }
        ]
    },
    {
        actions: 'Pricing',
        company1: 'https://www.dropbox.com/plans',
        company2: 'https://drive.google.com/pricing',
        company3: 'https://www.salesforce.com/pricing',
    },
    {
        actions: 'Features',
        company1: '5 different features present',
        company2: '4 different features present',
        company3: '6 different features present',
    },
    {
        actions: 'Customer Case Studies',
        company1: '4 customer case studies found',
        company2: '6 customer case studies found',
        company3: '1 customer case studies found',
    },
];
