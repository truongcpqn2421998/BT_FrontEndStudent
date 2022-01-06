
export class Student {
  id: number;
  name: string;
  birthDay: string;
  avatar: string;
  gender: string;


  constructor(name: string, birthDay: string, avatar: string, gender: string) {
    this.name = name;
    this.birthDay = birthDay;
    this.avatar = avatar;
    this.gender = gender;
  }
}
