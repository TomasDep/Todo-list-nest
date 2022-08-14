import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Model } from 'mongoose';

import { AxiosAdapter } from 'src/common/adapters/axios.adapter';
import { User } from 'src/users/entities/user.entity';
import { IResponseAPIPokemon } from './interfaces/response-api-pokemon.interface';
@Injectable()
export class SeedService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>,
    private readonly http: AxiosAdapter,
  ) {}

  public async executeSeed(): Promise<string> {
    await this.userModel.deleteMany({});

    const seedUsers: { name: string; username: string; password: string }[] =
      [];

    const data = await this.http.get<IResponseAPIPokemon>(
      'https://pokeapi.co/api/v2/pokemon?limit=100',
    );

    data.results.forEach(async ({ name, url }) => {
      const segments: string[] = url.split('/');
      const number = Number(segments[segments.length - 2]);
      const username = `${number}_${name}`;
      const password = '12345';

      seedUsers.push({ name, username, password });
    });

    await this.userModel.insertMany(seedUsers);

    return 'Seed of users executed';
  }
}
