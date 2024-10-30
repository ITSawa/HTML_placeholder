declare module "emmet" {
  export default function expand(
    template: string,
    options?: { type: string }
  ): string;
}
