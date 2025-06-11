import video1 from "../videos/video-1.mp4"
import video2 from "../videos/video-2.mp4"
import video3 from "../videos/video-3.mp4"
import profilePic1 from '../photos/carlos.jpeg'
import profilePic2 from '../photos/edwin.jpeg'
import profilePic3 from '../photos/jake.jpg'
import userIcon from '../photos/user_default_icon.png'

export const defaultUserIcon = userIcon

export const users = [
    {
        id: '1',
        username: 'Carlos23.43',
        profilePic: profilePic1
    },
    {
        id: '2',
        username: 'Ed34.12',
        profilePic: profilePic2
    },
    {
        id: '3',
        username: 'JAKEPAPU12',
        profilePic: profilePic3
    }
]

export const videos = [
  { 
    id: '1', 
    likes: 3,
    videoUri: video1, 
    userid: '1', 
    comments: [
        {
            id: '1',
            userid: '1',
            comment: 'what a nice video!'
        },
        {
            id: '2',
            userid: '1',
            comment: 'was interesting!'
        },
        {
            id: '3',
            userid: '1',
            comment: 'im gonna tell you that watch your video from the beggining to end made me realize i need to stop using Kaolyn app'
        },
        {
            id: '4',
            userid: '2',
            comment: 'gg.'
        },
        {
            id: '5',
            userid: '2',
            comment: 'so tru!!!!!'
        },
        {
            id: '6',
            userid: '2',
            comment: 'he missed the point since: 0:00'
        },
        {
            id: '7',
            userid: '3',
            comment: 'boriiiiiing!!!'
        },
        {
            id: '8',
            userid: '3',
            comment: 'why my feed is filled with thiss type of content!'
        },
        {
            id: '9',
            userid: '3',
            comment: 'nice!'
        },
        {
            id: '10',
            userid: '1',
            comment: 'bro'
        },
    ] 
    },

  { id: '2', 
    likes: 1,
    videoUri: video2, 
    userid: '2', 
    comments: [
        {
            id: '1',
            userid: '1',
            comment: 'so cool!'
        },
        {
            id: '2',
            userid: '2',
            comment: 'ahhhh! robot dance!!!'
        }
    ] 
    },

  { id: '3', 
    likes: 2,
    videoUri: video3, 
    userid: '3',
    comments: [
        {
            id: '1',
            userid: '2',
            comment: 'bro be more careful you can injured someone!'
        },
        {
            id: '2',
            userid: '3',
            comment: 'bicy bicy so spicy'
        }
    ] 
    },
];

export const asesores=[
    {
        id: 1,
        name: "Matías Quisquisiban",
        profilePic: profilePic1
    },
    {
        id: 2,
        name: "Elías Martínez",
        profilePic: profilePic2
    },
    {
        id: 3,
        name: "Néstor Valles",
        profilePic: profilePic3
    },
    {
        id: 4,
        name: "Abraham Gómez",
        profilePic: profilePic1
    },
    {
        id: 5,
        name: "Matías Quisquisiban",
        profilePic: profilePic1
    },
    {
        id: 6,
        name: "Elías Martínez",
        profilePic: profilePic2
    },
    {
        id: 7,
        name: "Néstor Valles",
        profilePic: profilePic3
    },
    {
        id: 8,
        name: "Abraham Gómez",
        profilePic: profilePic1
    },
    {
        id: 9,
        name: "Néstor Valles",
        profilePic: profilePic3
    },
    {
        id: 10,
        name: "Abraham Gómez",
        profilePic: profilePic1
    }
]