import { EntityRepository, Repository } from 'typeorm';
import { User } from '../models/user.entity';

@EntityRepository(User)
export class UserRepository extends Repository<User> {}
