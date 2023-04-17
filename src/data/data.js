
// assets
// carousel
import sangamLarge from '../assets/events/sangamLarge.webp';
import nrityangnaLarge from '../assets/events/NrityangnaLarge.webp';
import sargamLarge from '../assets/events/sargamLarge.webp';
import graziaLarge from '../assets/events/GraziaLarge.webp';
import img1 from '../assets/events/carousel-1.png';
import img2 from '../assets/events/carousel-2.png';
import img3 from '../assets/events/carousel-3.png';
import img4 from '../assets/events/carousel-4.png';
import img5 from '../assets/events/carousel-5.png';

// events
import grazia from '../assets/events/Grazia.webp'
import nrityangna from '../assets/events/Nrityangna.webp'
import nrityaSangam from '../assets/events/nritya_sargam.webp'
import sargam from '../assets/events/sargam.webp';
import event2 from '../assets/events/event-2.webp';
import event3 from '../assets/events/event-3.webp';
import event4 from '../assets/events/event-4.webp';
import eventBanner from '../assets/events/single-event-banner.png';

import aditi from "../assets/Teams/Team/aditi.webp"
import ayush from "../assets/Teams/Team/ayush.webp"
import chetan from "../assets/Teams/Team/chetan.webp"
import danish from "../assets/Teams/Team/danish.webp"
import dev from "../assets/Teams/Team/dev.webp"
import harsh from "../assets/Teams/Team/harsh.webp"
import harshita from "../assets/Teams/Team/harshita.webp"
import naman from "../assets/Teams/Team/naman.webp"
import prabhat from "../assets/Teams/Team/prabhat.webp"
import prateek from "../assets/Teams/Team/prateek.webp"
import rishabh from "../assets/Teams/Team/rishabh.webp"
import riya from "../assets/Teams/Team/riya.webp"
import shruti from "../assets/Teams/Team/shruti.webp"
import siddhant from "../assets/Teams/Team/siddhant.webp"
import siddharth from "../assets/Teams/Team/siddharth.webp"
import sneha from "../assets/Teams/Team/sneha.webp"
import srishti from "../assets/Teams/Team/srishti.webp"
import swastik from "../assets/Teams/Team/11.webp"
import swati from "../assets/Teams/Team/swati.webp"
import tarun from "../assets/Teams/Team/tarun.webp"
import tushar from "../assets/Teams/Team/tushar.webp"
import sukrit from "../assets/Teams/Team/sukrit.webp"
import aneesh from "../assets/Teams/Team/aneesh.webp"
import shresth from "../assets/Teams/Team/shresth.webp"
import sachin from "../assets/Teams/Team/sachin.webp"



export const carouselData1 = [
    {
        event_id: "ac714682-3337-4321-bdea-7e2147eb8844",
        event_name: "GRAZIA",
        slug: `grazia`,
        poster: graziaLarge,
        tagline: "",
        desc: "The 'Grazia' fashion show is dazzling and glamorous event where fashion takes center stage, with a unique twist of themed showcase. Each year, the 'Grazia' event follows a specific theme, which serves as the creative backdrop for the entire fashion show.",
        rules: [
            "Team Size: Teams must consist of 7-10 participants.",
            "Theme/Dress Code: Participants must adhere to the specified theme or dress code they've chosen.",
            "Outfit Guidelines: Outfits should be decent, appropriate, and not offensive.",
            "Participants are required to bring their own soundtrack for their fashion shown performance and submit it to the event organizers at least 30 minutes before the start of the event.",
            "Participants will be judged on walk, posture, confidence, and overall presentation.",
            "Carrying your college i-card is mandatory, failing to it might result in disqualification",
            "The participating teams are required to select only one theme from the pre-defined list of themes provided below:",
            "Cultural Fusion: Participants can showcase a fusion of different cultures by incorporating traditional attire, patterns, or accessories from diverse regions or countries.",
            "Legendary Heroes: Participants can showcase their creativity by creating fashion-forward looks inspired by legendary superheroes from movies, comics, or literature",
            "Vintage Revival: Participants can showcase their interpretation of vintage fashion from different eras, such as the roaring twenties, swinging sixties, or retro 80s.",
            "Villains Vogue: Participants can showcase their creativity by creating fashion-forward looks inspired by iconic villains from movies, comics, or literature, featuring dark and edgy fashion, bold makeup, and villainous accessories",
        ],
        venue: "Main Stage(MS)",
        date: "28-04-2023",
        time: "7:30 PM to 9:00 PM",
        // prize_pool: 10000,
        team_size: '7 to 10',
        poc: { SRISHTI: "6387459413", SIDDHANT: "838944491" },
        banner:
            grazia,
        // approved: true,
        // disable: true,
        // special: true,
        registrationLink: 'https://tinyurl.com/grazia23',
        day: 0,
        // winner: [
        //     { name: 'Shresth', id: 'Wi1223' },
        //     { name: 'Shantu', id: 'Wi1223' },
        //     { name: 'Promi', id: 'Wi1223' },
        // ]
    },
    {
        event_id: "a1358d63-31fb-4ba5-90d3-6947515a4bf6",
        event_name: "SARGAM",
        slug: 'sargam',
        poster: sargamLarge,
        tagline: "Solo Singing",
        desc: '"Sargam" a solo singing event, is all about the power of music, where participants will have the opportunity to unleash their melodious voices and captivate the audience with their soulful performances',
        rules: [
            "Time Limit :- 02 mins",
            "1 instrumentalist is allowed along with the participant, if required College will not provide any type of instrument, carry your own instruments if required.",
            "Participants will not be allowed to refer to the lyrics while singing.",
            "Contestants have to make an audition clip of 2mins and send it latest by 20th,April 2023.",
            "Choice of song is open to the participants but the song should not have any slang or derogatory language.",
            "Using any kind of pre-recorded Background music will not be allowed.",
            "Entries will be entertained on the first come first serve basis",
            "One entry from one college will be allowed.",
            "Carrying your college i-card is mandatory, failing to it might result in disqualification.",
            "Judgement Criteria:",
            "Song Selection",
            "Voice Quality and Clarity",
            "Swar, Taal, Selection of Raga, Composition and General Impression",
            "Appeal to the Audience",
            "Decision of the Jury would be final"
        ],
        venue: "ATAL SABHAGAR(AS)",
        date: "28-04-2023",
        time: "12:30 PM to 1:30 PM",
        // prize_pool: 50000,
        team_size: 1,
        poc: { RIYA: "8377015592", SRISHTI: "6387459413" },
        banner:
            sargam,
        registrationLink: "https://tinyurl.com/sargam23",
        day: 0,
        // winner: [
        //     { name: 'Ajoy', id: 'Wi1223' },
        //     { name: 'Shantu', id: 'Wi1223' },
        //     { name: 'Promi', id: 'Wi1223' },
        // ]
    },
    {
        event_id: "d9fb4507-39fa-4f38-8172-eb8cc07bd8a0",
        event_name: "NRITYANGANA",
        slug: 'nrityangana',
        poster: nrityangnaLarge,
        tagline: "Solo Dance",
        desc: "Nrityangana is a thrilling solo dance event that promises to showcase the best of dance talent. The event has specific rules in place to ensure a fair and enjoyable experience for allparticipants. With a time limit of 2 minutes, dancers are encouraged to bring their A-game and captivate the audience with their skills",
        rules: [
            "Time Limit :- 2min(marks will be deducted for exceeding the time limit)",
            "Any type of liquid, powder and substances which can make the stage greasy will not be allowed to be used as props.",
            "Obscene content will not be allowed.",
            "Entries will be entertained on the first come first serve basis.",
            "Contestants have to make an audition clip of 2min and send it latest by 20th,April 2023",
            "One entry from one college will be allowed.",
            "Track must be given 30 mins prior to the event",
            "Stationery/accessories will not be provided/ compensated by the institute",
            "Carrying your college i-card is mandatory, failing to it might result in disqualification",
            "Judgement Criteria",
            "Stage Coverage",
            "Choreography & Expressions",
            "Confidence",
            "Props",
            "Decision of the Jury would be Final"
        ],
        venue: "ATAL SABHAGAR(AS)",
        date: "28-04-2023",
        time: "11:30 AM to 12:30 AM",
        // prize_pool: 250000,
        team_size: 1,
        poc: { DEV: "8171970884", SRISHTI: "6265094855" },
        banner:
            nrityangna,
        // approved: true,
        // disable: false,
        // special: true,
        registrationLink: "https://tinyurl.com/nrityangana23",
        day: 0,
        // winner: [
        //     { name: 'Ajoy', id: 'Wi1223' },
        //     { name: 'Shantu', id: 'Wi1223' },
        //     { name: 'Promi', id: 'Wi1223' },
        // ]
    },
    {
        event_id: "2d639d86-e593-418f-be1e-27f0576d533c",
        event_name: "NRITYASANGAM",
        poster: sangamLarge,
        slug: `sangam`,
        tagline: "Duet Dance",
        desc: '"Nritya Sangam" is an electrifying duet dance event that adds a dynamic and captivating element to our fest. The event has specific rules in place to ensure a fair and enjoyable competition for all participants. With a time limit of 4 minutes, duet teams are encouraged to bring their best performance and create a mesmerizing experience for the audience',
        rules: [
            "Time Limit :- 4min(marks will be deducted for exceeding the time limit)",
            "Any type of liquid, powder and substances which can make the stage greasy will not be allowed to be used as props.",
            "Any type of Obscenity will not be allowed.",
            "Contestants can choose any genre(Classical, Bollywood, Hip hop, Contemporary).",
            "Entries will be entertained on the first come first serve basis",
            "Contestants have to make an audition clip of 2min and send it latest by 20th,April 2023",
            "Classical or folk dance styles are not allowed",
            "One entry from one college will be allowed",
            "Track must be given 30 mins prior to the event",
            "Stationery/accessories will not be provided/ compensated by the institute",
            "Carrying your college i-card is mandatory, failing to it might result in disqualification",
            "Judgement Criteria",
            "Stage Coverage",
            "Choreography & Expressions",
            "Confidence",
            "Props",
            "Decision of the Jury would be Final"
        ],
        venue: "ATAL SABHAGAR(AS)",
        date: "28-04-2023",
        time: "2:30 PM to 3:30 PM",
        // prize_pool: 3000,
        team_size: 2,
        poc: { DEV: "8171970884", SRISHTI: "6387459413"},
        banner:
            nrityaSangam,
        approved: true,
        disable: true,
        special: true,
        registrationLink: "https://tinyurl.com/nrityasangam23",
        day: 0,
        winner: [
            { name: 'Ajoy', id: 'Wi1223' },
            { name: 'Shantu', id: 'Wi1223' },
            { name: 'Promi', id: 'Wi1223' },
        ]
    },
];
export const TeamMember = [
    {
        'id': '23',
        'name': 'Aneesh Kumar',
        'image': aneesh,
        'color': "#277A70",

        'link': 'https://wa.me/+918002798564'
    },
    {
        'id': '22',
        'name': 'Sukrit Tiwari',
        'image': sukrit,
        'color': "#277A70",

        'link': 'https://wa.me/+916391431992'
    },
    {
        'id': '24',
        'name': 'Shresth Agarwal',
        'image': shresth,
        'color': "#277A70",

        'link': 'https://wa.me/+917678276792'
    },
    {
        'id': '14',
        'name': 'Siddhant Dixit',
        'image': siddhant,
        'color': "#277A70",

        'link': 'https://wa.me/+919838944491'
    },
    {
        'id': '17',
        'name': 'Srishti Rai',
        'image': srishti,
        'color': "#277A70",

        'link': 'https://wa.me/+916387459413'
    },
    {
        'id': '20',
        'name': 'Tarun Bansal',
        'image': tarun,
        'color': "#277A70",

        'link': 'https://wa.me/+917900881101'
    },
    {
        'id': '8',
        'name': 'Naman Mehra',
        'image': naman,
        'color': "#277A70",

        'link': 'https://wa.me/+916005305612'
    },
    {
        'id': '15',
        'name': 'Siddharth Mishra',
        'image': siddharth,
        'color': "#277A70",

        'link': 'https://wa.me/+917379412633'
    },
    {
        'id': '21',
        'name': 'Tushar Saxena',
        'image': tushar,
        'color': "#277A70",

        'link': 'https://wa.me/+919958794205'
    },
    {
        'id': '3',
        'name': 'Chetan Mishra',
        'image': chetan,
        'color': "#277A70",

        'link': 'https://wa.me/+919654360612'
    },
    {
        'id': '5',
        'name': 'Dev Verma',
        'image': dev,
        'color': "#277A70",

        'link': 'https://wa.me/+918171970884'
    },
    {
        'id': '1',
        'name': 'Aditi Shankar',
        'image': aditi,
        'link': 'https://wa.me/+916200909769',
        'color': '#9A2D9C',

    },
    {
        'id': '19',
        'name': 'Swati Singh',
        'image': swati,
        'color': "#277A70",

        'link': 'https://wa.me/+918303751023'
    },
    {
        'id': '9',
        'name': 'Prabhat Kr Tiwari',
        'image': prabhat,
        'color': "#277A70",

        'link': 'https://wa.me/+918081413299'
    },
    {
        'id': '12',
        'name': 'Riya Sharma',
        'image': riya,
        'color': "#277A70",

        'link': 'https://wa.me/+918377015592'
    },
    {
        'id': '16',
        'name': 'Sneha Saurabh',
        'image': sneha,
        'color': "#277A70",

        'link': 'https://wa.me/+917267003800'
    },
    {
        'id': '13',
        'name': 'Shruti Jain',
        'image': shruti,
        'color': "#277A70",

        'link': 'https://wa.me/+919811552127'
    },
    {
        'id': '11',
        'name': 'Rishabh Jain',
        'image': rishabh,
        'color': "#277A70",

        'link': 'https://wa.me/+919999601526'
    },
    {
        'id': '18',
        'name': 'Swastik Sharma',
        'image': swastik,
        'color': "#277A70",

        'link': 'https://wa.me/+918826018098'
    },
    {
        'id': '2',
        'name': 'Ayush Kr Singh',
        'image': ayush,
        'color': "#277A70",

        'link': 'https://wa.me/+919455963915'
    },
    {
        'id': '4',
        'name': 'Danish Ahmad',
        'image': danish,
        'color': "#277A70",

        'link': 'https://wa.me/+917895555848'
    },
    {
        'id': '6',
        'name': 'Harsh Tewari',
        'image': harsh,
        'color': "#277A70",

        'link': 'https://wa.me/+917905258157'
    },
    {
        'id': '10',
        'name': 'Prateek Rai',
        'image': prateek,
        'color': "#277A70",

        'link': 'https://wa.me/+918707283119'
    },
    {
        'id': '7',
        'name': 'Harshita Rajoriya',
        'image': harshita,
        'color': "#277A70",

        'link': 'https://wa.me/+919582735756'
    },
]
