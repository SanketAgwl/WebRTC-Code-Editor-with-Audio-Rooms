class UserDto {
  id;
  phone;
  activated;
  createdAt;
  name;
  avatar;

  constructor(user) {
    this.id = user._id;
    this.name = user.name;
    this.avatar = user.avatar;
    this.phone = user.phone;
    this.createdAt = user.createdAt;
    this.activated = user.activated;
  }
}

module.exports = UserDto;
