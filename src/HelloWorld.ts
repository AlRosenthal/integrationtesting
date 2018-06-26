export class HelloWorld {
  public helloWorld() : string {
    return this.speak("Hello World");
  }
  private speak(words: string) : string {
    return words;
  }
}
export default HelloWorld;