import { generateUniqueId } from './utils';
import { User } from './user';
import { Tweet } from './tweet';

export class Like {
  id: string;
  user: User;
  tweet: Tweet;

  constructor(user: User, tweet: Tweet) {
    this.id = generateUniqueId();
    this.user = user;
    this.tweet = tweet;
  }
}



