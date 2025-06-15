import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private users = [
    {
      id: 1,
      name: 'John Doe',
      phone: '123-456-7890',
    },
    {
      id: 2,
      name: 'Jane Smith',
      phone: '098-765-4321',
    },
  ];

  getUsers() {
    return this.users;
  }
}
