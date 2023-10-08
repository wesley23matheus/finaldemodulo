import { User } from './dados/user';
import { Tweet } from './dados/tweet';
import { Like } from './dados/like';
import { Reply } from './dados/reply';

const user1 = new User('Wesley', 'wesleymoreira', 'wesley@wesley', '124');
const user2 = new User('Luciana', 'lucianapereira', 'luciana@gmail', '12345');
const user3 = new User('Leticia', 'Leticiamoreira', 'leticia@leticia', '123467');

const tweet1 = new Tweet(user1, 'ola mundo', 'normal');
const tweet3 = new Tweet(user3, 'adoro a Growdev', 'normal');
const tweet4 = new Tweet(user1, 'hehehe', 'normal');
const tweet5 = new Tweet(user2, 'curso massa', 'normal');

console.log('@' + user1.username + ': ' + tweet1.content);
console.log('@' + user3.username + ': ' + tweet3.content);
console.log('@' + user1.username + ': ' + tweet4.content);
console.log('@' + user2.username + ': ' + tweet5.content);

const like1 = new Like(user2, tweet1);
const like2 = new Like(user3, tweet1);
const like3 = new Like(user1, tweet3);

console.log('@' + user2.username + ' curtiu');
console.log('@' + user3.username + ' curtiu');

const reply1 = new Reply(user2, 'Mundo diz ok', tweet1);
const reply2 = new Reply(user1, 'estamos juntos', tweet1);
const reply3 = new Reply(user3, 'verdade', tweet4);

console.log('@' + user2.username + ': ' + reply1.content);
console.log('@' + user1.username + ': ' + reply2.content);
console.log('@' + user3.username + ': ' + reply3.content);
