import { getRepository, Repository } from "typeorm";

import { IFindUserWithGamesDTO, IFindUserByFullNameDTO } from "../../dtos";
import { User } from "../../entities/User";
import { IUsersRepository } from "../IUsersRepository";

export class UsersRepository implements IUsersRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }

  async findUserWithGamesById({
    user_id,
  }: IFindUserWithGamesDTO): Promise<User> {
    // Complete usando ORM

    const user = await this.repository.findOneOrFail({
      relations: ["games"],
      where: {
        id: user_id,
      },
    });

    return user;
  }

  async findAllUsersOrderedByFirstName(): Promise<User[]> {
    return this.repository.query("SELECT * FROM users ORDER BY first_name ASC"); // Complete usando raw query
  }

  async findUserByFullName({
    first_name,
    last_name,
  }: IFindUserByFullNameDTO): Promise<User[] | undefined> {
    // Select a user in users table where
    // first_name = lower(first_name) and last_name = lower(last_name);

    return this.repository.query(
      `SELECT * FROM users WHERE LOWER(first_name) ILIKE $1 AND LOWER(last_name) ILIKE $2`,
      [first_name, last_name]
    ); // Complete usando raw query
  }
}
