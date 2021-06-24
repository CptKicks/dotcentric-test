declare module "*.scss" {
    const mapping: Record<string, string>;
    export default mapping;
}

declare module "*.svg" {
    const content: any;
    export default content;
}
