import { Controller, Param, Post } from '@nestjs/common';
import { UsersService } from '../services/users.service';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Post('')
  public createSecureServer(
    @Param('name') name: string,
    @Param('age') age: number,
  ) {
    return this.userService.addUser(name, age);
  }
}
