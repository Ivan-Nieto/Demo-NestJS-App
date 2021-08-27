import { Injectable } from '@nestjs/common';
import { User } from '../models/user.entity';
import { UserRepository } from '../repositories/userRepository';

@Injectable()
export class UsersService {
  constructor(private userRepository: UserRepository) {
    //
  }

  /**
   * Adds a new user
   *
   * @param {string} [name] User name
   * @param {string} [age] User age
   * @returns
   */
  public async addUser(name?: string, age?: number) {
    const user = new User(name || 'default_name', age || 0);

    this.userRepository.save(user);

    return 'Done';
  }
}
