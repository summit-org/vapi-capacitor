export interface VapiPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
