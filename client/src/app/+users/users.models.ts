export class User {
  public id: number;
  public name: string;
  public email: string;
  public shop_name: string;
  public shop_domain: string;
  public is_enabled: boolean;

  constructor(user: any = {}) {
      this.id = user.id;
      this.name = user.name;
      this.email = user.email;
      this.shop_name = user.shop_name;
      this.shop_domain = user.shop_domain;
      this.is_enabled = user.is_enabled;
  }
}
