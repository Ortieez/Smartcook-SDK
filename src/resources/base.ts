const crypto = require('crypto');

export type Config = {
  baseUrl?: string;
  userId: number;
  secret: string;
  authorName: string;
};

export abstract class Base {
  private baseUrl: string;
  private userId: number;
  private secret: string;

  constructor(config: Config) {
    this.baseUrl = config.baseUrl || 'https://www.smartcook-project.eu/api';
    this.userId = config.userId;
    this.secret = config.secret;
  }

  public createSignature(data: Object) {
    return crypto
      .createHmac('sha256', this.secret)
      .update(JSON.stringify(data))
      .digest('hex');
  }

  public prepareBody(data: Object) {
    return JSON.stringify(data);
  }

  protected async request<T>(
    endpoint: string,
    options?: RequestInit
  ): Promise<T> {
    const url = `${this.baseUrl}${endpoint}`;

    const headers = {
      'Content-Type': 'application/json'
    };

    const config: Record<any, any> = {
      headers
    };

    if (options) {
      config.method = options.method;
      if (options.body && typeof options.body === 'string') {
        let data = JSON.parse(options.body);
        let jsonToUse = {
          ...data,
          user: this.userId,
          time: Math.floor(Date.now() / 1000)
        };

        jsonToUse.sign = this.createSignature(jsonToUse);
        config.body = this.prepareBody(jsonToUse);
      }
    }

    const response = await fetch(url, config);
    if (response.ok) {
      return response.json();
    }
    throw new Error(response.statusText);
  }
}
