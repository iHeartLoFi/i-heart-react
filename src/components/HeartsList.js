//import Heart from './Heart';
import CandyColoredHeart from "./CandyColoredHeart";

const messages = [
    'Hey Boo',
    'me my ❤️',
    'you are bear',
    'team bear',
    'hug me',
    'kis mee',
    'puppy love',
    'me have love',
    'all over you',
    'sweat pea',
    'u rock',
    'XoxO',
    '❤️ me',
    'winky bear',
    'Honey bear',
    'be my bear',
    'It\'s ❤️❤️❤️ Rated',
    'mega love',
    'I ❤️ LoFi',
    'I\'m a Fan'
];

const HeartsList = () => {
    return (
        <div className='hearts-container'>
            {messages.map((message, index) => (
                <CandyColoredHeart key={index} msg={message} />
            ))}
        </div>
    );
};

export default HeartsList;