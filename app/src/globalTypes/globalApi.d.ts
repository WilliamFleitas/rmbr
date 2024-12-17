export {};

declare global {
  interface Window {
    api: {
      pingPong: (message: string) => Promise<string>;
    };
  }
}